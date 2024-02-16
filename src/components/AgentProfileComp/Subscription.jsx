import React, { useMemo, useState } from 'react';
import { SubcriptionStyled, SubscriptionTypeWrapper } from './AgentProfileComp.styles';
import CheckBox from '../CheckBox';
import { useJsApiLoader, GoogleMap, Polygon, OverlayView } from '@react-google-maps/api';
import Button from '../Button';
import Payment from './Payment';
import { useTranslation } from '@/helpers/useTranslation';
import stripeService from '@/services/stripe';
import { getPolygonCenter } from '@/helpers/common';
import Loaders from '../Loaders';

const Subscription = () => {
  const { t } = useTranslation();
  const [mapChooseList, setMapChooseList] = useState([]);
  const [subscriptionType, setSubscriptionType] = useState({ month: false, year: false });

  const center = { lat: 31.077376, lng: 74.434724 };

  const polygons = [
    {
      id: 1,
      paths: [
        { lat: 31.0775, lng: 74.4345 },
        { lat: 31.0775, lng: 74.4555 },
        { lat: 31.0885, lng: 74.4555 },
        { lat: 31.0885, lng: 74.4345 },
      ],
      cityName: 'Lahore',
      price: 10.9,
      fillColor: 'red',
      strokeColor: 'blue',
      strokeWeight: 2,
    },
    {
      id: 2,
      paths: [
        { lat: 31.0975, lng: 74.4345 },
        { lat: 31.0975, lng: 74.4555 },
        { lat: 31.1085, lng: 74.4555 },
        { lat: 31.1085, lng: 74.4345 },
      ],
      cityName: 'Lahore',
      price: 10.9,
      fillColor: 'red',
      strokeColor: 'blue',
      strokeWeight: 2,
    },
    // Add more polygons as needed
  ];
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y',
  });
  const [searchQuery, setSearchQuery] = useState({ page: 1, itemsPerPage: 100, filterText: '' });

  const { products_data, products_loading } = stripeService.GetProducts(searchQuery);
  console.log({ products_data });

  const { baseProducts } = useMemo(() => {
    const baseProducts = products_data?.items?.filter(itm => itm?.prod_meta?.plan === 'basic');
    return { baseProducts };
  }, [products_data]);

  console.log({ baseProducts });
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
            baseProducts.map(prod => (
              <SubscriptionTypeWrapper $active={subscriptionType.month}>
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
                  {polygons.map(polygon => (
                    <React.Fragment key={polygon.id}>
                      <Polygon
                        paths={polygon.paths}
                        options={{
                          fillColor: polygon.fillColor,
                          strokeColor: polygon.strokeColor,
                          strokeWeight: polygon.strokeWeight,
                        }}
                        onClick={() => handlePolygonClicked(polygon)}
                      />

                      <OverlayView position={getPolygonCenter(polygon)} mapPaneName={OverlayView.OVERLAY_LAYER}>
                        <button
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 9999,
                            background: 'white',
                            padding: '10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                          }}>
                          <div>{mapChooseList.find(_ => _.id == polygon.id) ? '-' : '+'}</div>
                          <p>{polygon.price}</p>
                        </button>
                      </OverlayView>
                    </React.Fragment>
                  ))}
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
              {mapChooseList.map(listItem => (
                <li>
                  <div className="area">
                    <CheckBox type="circle" fieldName="brooklyn" checked={true} onChange={e => console.log(e)} />
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
