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

import polygons from '../../utils/mapData';

const center = { lat: 40.6782, lng: -73.9442 };

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
                  <strong className="price">
                    {convertToCurrencyFormat(prod?.price?.amount)}/
                    <span className="duration">{prod?.price?.interval}</span>
                  </strong>
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
                ? +selectedProduct.price.amount?.toFixed(2) +
                  +mapChooseList.reduce((total, item) => {
                    return total + (item.price ? item.price.amount : 0);
                  }, 0)?.toFixed(2)
                : mapChooseList.reduce((total, item) => {
                    return total + (item.price ? item.price.amount : 0);
                  }, 0)?.toFixed(2)}
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
