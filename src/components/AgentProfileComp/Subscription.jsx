import React, { useEffect, useMemo, useState } from 'react';
import { SubcriptionStyled, SubscriptionTypeWrapper } from './AgentProfileComp.styles';
import CheckBox from '../CheckBox';
import { useJsApiLoader } from '@react-google-maps/api';
import Button from '../Button';
import Payment from './Payment';
import { useTranslation } from '@/helpers/useTranslation';
import stripeService from '@/services/stripe';
import { Elements } from '@stripe/react-stripe-js';

import Loaders from '../Loaders';
import MapWithPolygons from './MapWithPolygons';
import { loadStripe } from '@stripe/stripe-js';
import { convertToCurrencyFormat } from '@/helpers/common';

const polygons = [
  {
    paths: [
      { lat: 40.698341, lng: -73.932704 }, // Northwest corner
      { lat: 40.700745, lng: -73.921756 }, // Northeast corner
      { lat: 40.693219, lng: -73.913814 }, // Southeast corner
      { lat: 40.684611, lng: -73.922823 }, // Southwest corner
      { lat: 40.685865, lng: -73.929306 },
    ],
    cityName: 'Bushwick',
    fillColor: 'red',
    strokeColor: 'yellow',
    strokeWeight: 2,
  },
  {
    paths: [
      { lat: 40.882214, lng: -73.934221 }, // Northwest corner (Inwood)
      { lat: 40.78871, lng: -73.911021 }, // Southwest corner (Battery Park City)
      { lat: 40.699171, lng: -73.98794 }, // Southeast corner (Lower East Side)
      { lat: 40.795387, lng: -73.935231 }, // Northeast corner (Harlem)
      { lat: 40.882214, lng: -73.934221 }, // Close polygon (back to Inwood)
    ],
    cityName: 'New York',
    fillColor: 'green',
    strokeColor: 'blue',
    strokeWeight: 2,
  },
  {
    paths: [
      { lat: 40.739446, lng: -74.050296 }, // Northwest corner (near Greenpoint)
      { lat: 40.635648, lng: -73.93267 }, // Southwest corner (near Coney Island)
      { lat: 40.702677, lng: -73.896623 }, // Southeast corner (near Canarsie)
      { lat: 40.694446, lng: -73.884344 }, // East boundary (near East New York)
      { lat: 40.698583, lng: -73.860246 }, // Southeast boundary (near East Flatbush)
      { lat: 40.647922, lng: -73.915883 }, // Southwest boundary (near Gravesend)
      { lat: 40.675499, lng: -74.032274 }, // South boundary (near Bay Ridge)
      { lat: 40.69167, lng: -74.041442 }, // West boundary (near Sunset Park)
      { lat: 40.731597, lng: -74.054884 },
    ],
    cityName: 'Brooklyn',
    fillColor: 'blue',
    strokeColor: 'red',
    strokeWeight: 2,
  },
  // Add more polygons as needed
];

const center = { lat: 40.739446, lng: -74.050296 };

const Subscription = ({ activeTab }) => {
  const { t } = useTranslation();
  const [stripePromise, setStripePromise] = useState('');
  const [mapChooseList, setMapChooseList] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y',
  });
  const [searchQuery, setSearchQuery] = useState({ page: 1, itemsPerPage: 100, filterText: '' });

  const { products_data, products_loading } = stripeService.GetProducts(searchQuery);

  const { baseProducts, mergedData } = useMemo(() => {
    const baseProducts = products_data?.items?.filter(itm => itm?.prod_meta?.plan === 'basic');
    const citiesProducts = products_data?.items?.filter(itm => itm?.prod_meta?.plan !== 'basic');
    const mergedData = citiesProducts
      .map(cityProduct => {
        const matchingPolygon = polygons.find(polygon => polygon.cityName === cityProduct.prod_name);

        if (matchingPolygon) {
          return {
            ...cityProduct,
            ...matchingPolygon,
          };
        } else {
          return null;
        }
      })
      .filter(Boolean);

    return { baseProducts, mergedData };
  }, [products_data]);

  const handlePolygonClicked = item => {
    const index = mapChooseList.findIndex(selectedItem => selectedItem.prod_id === item.prod_id);
    if (index !== -1) {
      setMapChooseList(prev => prev.filter(selectedItem => selectedItem.prod_id !== item.prod_id));
    } else {
      setMapChooseList(prev => [...prev, item]);
    }
  };

  useEffect(() => {
    stripeService
      .getStripeKey()
      .then(async result => {
        const { publishableKey } = result;
        setStripePromise(publishableKey);
      })
      .catch(e => console.log(e));
  }, []);

  const handleSubsribtionClick = prod => setSelectedProduct(prod);

  return (
    <SubcriptionStyled $loading={products_loading}>
      <div className="Subscription-main-wrapper">
        <Loaders loading={products_loading}>
          {baseProducts?.length &&
            baseProducts.map((prod, id) => (
              <SubscriptionTypeWrapper
                key={id}
                $active={selectedProduct && selectedProduct.price.id === prod.price.id}
                onClick={() => handleSubsribtionClick(prod)}>
                <span className="priceWrapper">
                  <strong className="price">{convertToCurrencyFormat(prod?.price?.amount)}</strong>
                  <strong className="duration">per {prod?.price?.interval}</strong>
                </span>
                <span className="checkBox">
                  <label htmlFor={`checkbox-${id}`}>{t(prod?.prod_name)}</label>
                  <CheckBox
                    type="circle"
                    checked={selectedProduct && selectedProduct.price.id === prod.price.id}
                    id={`checkbox-${id}`}
                  />
                </span>
              </SubscriptionTypeWrapper>
            ))}
        </Loaders>
      </div>
      <div className="addArea">
        <div className="map">
          <span className="title">{t('Add More Area’s')}</span>
          <div className="map-container">
            {activeTab == 2 && isLoaded && (
              <MapWithPolygons
                center={center}
                polygons={mergedData}
                mapChooseList={mapChooseList}
                handlePolygonClicked={handlePolygonClicked}
              />
            )}
          </div>
        </div>
        <div className="list-wrapper">
          <span className="title">{t('My list')}</span>
          <div className="list">
            <ul>
              {mapChooseList
                .filter(_ => _.cityName)
                .map((listItem, id) => (
                  <li key={id}>
                    <div className="area">
                      <CheckBox type="circle" fieldName="brooklyn" checked={true} onChange={() => {}} />
                      <label htmlFor="brooklyn">{listItem.cityName}</label>
                    </div>
                    ${listItem.price.amount}
                  </li>
                ))}
            </ul>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="area">Total:</div>$
              {selectedProduct
                ? selectedProduct.price.amount +
                  mapChooseList.reduce((total, item) => {
                    return total + (item.price ? item.price.amount : 0);
                  }, 0)
                : mapChooseList.reduce((total, item) => {
                    return total + (item.price ? item.price.amount : 0);
                  }, 0)}
            </div>
          </div>
          <div className="button-wrap">
            <Button outline>{t('Cancel')}</Button>
            <Button variant="primary">{t('Add to Subscriptions')}</Button>
          </div>
        </div>
      </div>
      {stripePromise ? (
        <Elements stripe={loadStripe(stripePromise)}>
          <Payment
            items={mapChooseList}
            selectedProduct={selectedProduct}
            amount={
              selectedProduct
                ? selectedProduct.price.amount +
                  mapChooseList.reduce((total, item) => {
                    return total + (item.price ? item.price.amount : 0);
                  }, 0)
                : mapChooseList.reduce((total, item) => {
                    return total + (item.price ? item.price.amount : 0);
                  }, 0)
            }
          />
        </Elements>
      ) : (
        'loading'
      )}
    </SubcriptionStyled>
  );
};

export default Subscription;
