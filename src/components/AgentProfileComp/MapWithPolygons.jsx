import { getPolygonCenter } from '@/helpers/common';
import { GoogleMap, OverlayView, Polygon } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';

const MapWithPolygons = ({ center, polygons, handlePolygonClicked, mapChooseList }) => {
  const [map, setMap] = useState(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleMapLoad = map => {
    console.log(map);
    setMap(map);
    setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
  };

  const renderPolygons = () => {
    return polygons.map(polygon => (
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
              display: 'flex',
              zIndex: 9999,
              background: 'beige',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
            <div style={{ marginRight: 10, fontSize: 12, background: '#fff' }}>
              {mapChooseList.find(_ => _.id == polygon.id) ? '-' : '+'}
            </div>
            <p>{polygon.price}</p>
          </button>
        </OverlayView>
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (!isMapLoaded) return;

    const polygonsRendered = renderPolygons();
    map && map.data.add(polygonsRendered);

    return () => {
      map &&
        map.data.forEach(feature => {
          map.data.remove(feature);
        });
    };
  }, [isMapLoaded, polygons, map]);
  return (
    <GoogleMap
      onLoad={handleMapLoad}
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      zoom={15}
      center={center}
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
      {isMapLoaded && renderPolygons()}
    </GoogleMap>
  );
};

export default MapWithPolygons;
