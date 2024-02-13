import React, { useState } from 'react';
import { SubcriptionStyled, SubscriptionTypeWrapper } from './AgentProfileComp.styles';
import CheckBox from '../CheckBox';
import { useJsApiLoader, GoogleMap, Autocomplete, Marker } from '@react-google-maps/api';
import Button from '../Button';
import Payment from './Payment';
import { useTranslation } from '@/helpers/useTranslation';
import stripeService from '@/services/stripe';
const Subscription = () => {
  console.log('in subscription');
  const { t } = useTranslation();
  const [subscriptionType, setSubscriptionType] = useState({ month: false, year: false });
  const center = { lat: 38.889805, lng: -77.009056 };
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y',
  });

  const { products_data, products_loading } = stripeService.GetProducts();
  console.log({ products_data });
  return (
    <SubcriptionStyled>
      <div className="Subscription-main-wrapper">
        <SubscriptionTypeWrapper $active={subscriptionType.month}>
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
        </SubscriptionTypeWrapper>
      </div>
      <div className="addArea">
        <div className="map">
          <span className="title">{t('Add More Area’s')}</span>
          <div className="map-container">
            {isLoaded ? (
              <>
                <GoogleMap
                  center={center}
                  zoom={15}
                  mapContainerStyle={{
                    width: '100%',
                    height: '100%',
                  }}
                  options={{
                    mapTypeControl: false,
                    fullscreenControl: false,
                    streetViewControl: true,
                    zoomControl: true,
                    mapTypeControlOptions: {
                      mapTypeIds: ['roadmap', 'satellite', 'terrain', 'hybrid'],
                    },
                    mapTypeId: 'terrain',
                  }}>
                  <Marker position={center} />
                </GoogleMap>
              </>
            ) : (
              <div className="loading">Loading...</div>
            )}
          </div>
        </div>
        <div className="list-wrapper">
          <span className="title">{t('My list')}</span>
          <div className="list">
            <ul>
              <li>
                <div className="area">
                  <CheckBox type="circle" fieldName="brooklyn" checked={true} onChange={e => console.log(e)} />
                  <label htmlFor="brooklyn">Brooklyn</label>
                </div>
                $9.99
              </li>
              <li>
                <div className="area">
                  <CheckBox type="circle" fieldName="brooklyn" checked={true} onChange={e => console.log(e)} />
                  <label htmlFor="brooklyn">Brooklyn</label>
                </div>
                $9.99
              </li>
              <li>
                <div className="area">
                  <CheckBox type="circle" fieldName="brooklyn" checked={true} onChange={e => console.log(e)} />
                  <label htmlFor="brooklyn">Brooklyn</label>
                </div>
                $9.99
              </li>
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
