import React, { useState, useEffect } from "react";
import {
  Imagesgallery,
  StreetViewStyle,
  StyledPropertyModal,
} from "./PropertyModal.styles";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
const center = { lat: 31.5204, lng: 74.3587 };
const StreetView = ({ setOpen }) => {
  const [address, setAddress] = useState([]);
  const handleAddress = (elem, edit) => {
    if (edit) {
      setAddress((prev) => {
        return prev.map((item, index) =>
          prev[index]?.id === elem.id ? elem : item
        );
      });
    } else {
      setAddress((prev) => [{ id: Date.now(), ...elem }, ...prev]);
    }
  };
  const [markerPosition, setMarkerPosition] = useState(center);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y",
  });
  if (loadError) {
    return <div>Error loading google map api</div>;
  }
  return (
    <StyledPropertyModal>
      <div className="title">
        <span>Street View</span>
      </div>
      <StreetViewStyle>
        {isLoaded ? (
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            options={{
              mapTypeControl: false,
              fullscreenControl: false,
              streetViewControl: true,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div>Loading...</div>
        )}
      </StreetViewStyle>
    </StyledPropertyModal>
  );
};

export default StreetView;
