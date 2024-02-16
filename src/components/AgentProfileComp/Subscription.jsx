import React, { useMemo, useState } from 'react';
import { SubcriptionStyled, SubscriptionTypeWrapper } from './AgentProfileComp.styles';
import CheckBox from '../CheckBox';
import { useJsApiLoader } from '@react-google-maps/api';
import Button from '../Button';
import Payment from './Payment';
import { useTranslation } from '@/helpers/useTranslation';
import stripeService from '@/services/stripe';

import Loaders from '../Loaders';
import MapWithPolygons from './MapWithPolygons';

const polygons = [
  {
    id: 1,
    paths: [
      { lat: 37.095, lng: -95.708 },
      { lat: 37.092, lng: -95.698 },
      { lat: 37.088, lng: -95.702 },
      { lat: 37.085, lng: -95.712 },
      { lat: 37.088, lng: -95.718 },
    ],
    cityName: 'Example City 1',
    price: 10.9,
    fillColor: 'red',
    strokeColor: 'blue',
    strokeWeight: 2,
  },
  {
    id: 2,
    paths: [
      { lat: 37.098, lng: -95.718 },
      { lat: 37.095, lng: -95.708 },
      { lat: 37.092, lng: -95.698 },
      { lat: 37.089, lng: -95.702 },
      { lat: 37.086, lng: -95.712 },
      { lat: 37.089, lng: -95.718 },
      { lat: 37.092, lng: -95.724 },
    ],
    cityName: 'Example City 2',
    price: 10.9,
    fillColor: 'green',
    strokeColor: 'blue',
    strokeWeight: 2,
  },
  {
    id: 3,
    paths: [
      { lat: 37.103, lng: -95.712 },
      { lat: 37.1, lng: -95.702 },
      { lat: 37.097, lng: -95.698 },
      { lat: 37.094, lng: -95.704 },
      { lat: 37.091, lng: -95.714 },
      { lat: 37.094, lng: -95.72 },
      { lat: 37.097, lng: -95.726 },
      { lat: 37.1, lng: -95.722 },
      { lat: 37.103, lng: -95.712 },
    ],
    cityName: 'Example City 3',
    price: 10.9,
    fillColor: 'blue',
    strokeColor: 'blue',
    strokeWeight: 2,
  },
  // Add more polygons as needed
];

const center = { lat: 37.0902, lng: -95.7129 };

const Subscription = ({ activeTab }) => {
  const { t } = useTranslation();
  const [mapChooseList, setMapChooseList] = useState([]);
  const [subscriptionType, setSubscriptionType] = useState({ month: false, year: false });

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y',
  });
  const [searchQuery, setSearchQuery] = useState({ page: 1, itemsPerPage: 100, filterText: '' });

  const { products_data, products_loading } = stripeService.GetProducts(searchQuery);

  const { baseProducts } = useMemo(() => {
    const baseProducts = products_data?.items?.filter(itm => itm?.prod_meta?.plan === 'basic');
    return { baseProducts };
  }, [products_data]);

  const handlePolygonClicked = item => {
    const index = mapChooseList.findIndex(selectedItem => selectedItem.id === item.id);
    if (index !== -1) {
      setMapChooseList(prev => prev.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setMapChooseList(prev => [...prev, item]);
    }
  };

  return (
    <SubcriptionStyled>
      <div className="Subscription-main-wrapper">
        <Loaders loading={products_loading}>
          {baseProducts?.length &&
            baseProducts.map((prod, id) => (
              <SubscriptionTypeWrapper $active={subscriptionType.month} key={id}>
                <span className="priceWrapper">
                  <strong className="price">{prod?.price?.amount}</strong>
                  <strong className="duration">per {prod?.price?.interval}</strong>
                </span>
                <span className="checkBox">
                  <label htmlFor="month">{t(prod?.prod_name)}</label>
                  <CheckBox
                    fieldName={prod?.price?.interval}
                    type="circle"
                    onChange={e => setSubscriptionType(prev => ({ ...prev, month: e.isChecked }))}
                  />
                </span>
              </SubscriptionTypeWrapper>
            ))}
        </Loaders>
        {/* <SubscriptionTypeWrapper $active={subscriptionType.month}>
            <span className="priceWrapper">
              <strong className="price">$35.00</strong>
              <strong className="duration">per month</strong>
            </span>
            <span className="checkBox">
              <label htmlFor="month">{t('Locke Basic Agent Service')}</label>
              <CheckBox
                fieldName="month"
                type="circle"
                onChange={e => setSubscriptionType(prev => ({ ...prev, month: e.isChecked }))}
              />
            </span>
          </SubscriptionTypeWrapper>
        <SubscriptionTypeWrapper $active={subscriptionType.year}>
          <span className="priceWrapper">
            <strong className="price">$400.00</strong>
            <strong className="duration">per year</strong>
          </span>
          <span className="checkBox">
            <label htmlFor="year">{t('Locke Basic Agent Service')}</label>
            <CheckBox
              fieldName="year"
              type="circle"
              onChange={e => setSubscriptionType(prev => ({ ...prev, year: e.isChecked }))}
            />
          </span>
        </SubscriptionTypeWrapper> */}
      </div>
      <div className="addArea">
        <div className="map">
          <span className="title">{t('Add More Area’s')}</span>
          <div className="map-container">
            {activeTab == 2 && isLoaded && (
              <MapWithPolygons
                center={center}
                polygons={polygons}
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
              {mapChooseList.map((listItem, id) => (
                <li key={id}>
                  <div className="area">
                    <CheckBox type="circle" fieldName="brooklyn" checked={true} onChange={() => {}} />
                    <label htmlFor="brooklyn">{listItem.cityName}</label>
                  </div>
                  ${listItem.price}
                </li>
              ))}
            </ul>
          </div>
          <div className="button-wrap">
            <Button outline>{t('Cancel')}</Button>
            <Button variant="primary">{t('Add to Subscriptions')}</Button>
          </div>
        </div>
      </div>
      <Payment />
    </SubcriptionStyled>
  );
};

export default Subscription;
