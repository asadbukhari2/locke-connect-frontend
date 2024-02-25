import React, { useEffect, useRef, useState } from 'react';

import Toast from '../../components/Toast';
import { SearchLocation } from '../Header/Header.styles';
import { PiMapPinBold } from 'react-icons/pi';
import { IoSearch } from 'react-icons/io5';
import Suggestion from '../Suggestion';
import { Autocomplete, LoadScript, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
const placesLibrary = ["places"];

let autoComplete;
const PlacesAutoComplete = ({ search = '', onChange = () => {}, ...rest }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState("Result: none");

  const autoCompleteRef = useRef(null);
  useEffect(() => {
    setQuery(search);
  }, [search]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y",
    libraries: placesLibrary
  });
  const handlePlaceSelect = async () => {
    const { address_components, geometry, place_id, formatted_address } = autoComplete.getPlace();
    const address = {};
    address_components?.forEach(({ short_name, types }) => {
      if (types.includes('administrative_area_level_1')) {
        address.state = short_name;
      } else if (types.includes('administrative_area_level_2')) {
        address.county = short_name;
      } else if (types.includes('locality')) {
        address.city = short_name;
      } else address[types[0]] = short_name;
    });
    setQuery(formatted_address);
    onChange({
      target: {
        value: {
          ...address,
          place_id,
          latlng: {
            lat: geometry?.location?.lat(),
            lng: geometry?.location?.lng(),
          },
          formatted_address,
        },
        name: rest.name,
      },
    });
  };

  const handleScriptLoad = () => {
    try {
      autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current, {
        componentRestrictions: { country: ['CA'] },
      });
      autoComplete.addListener('place_changed', () => handlePlaceSelect());
      autoCompleteRef.current.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      });
    } catch (err) {
        console.log({err})
      Toast({
        message: 'Error loading Google Maps',
        type: 'error',
      });
    }
  };

  useEffect(() => {
    // handleScriptLoad();
  }, []);

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }
  function onPlaceChanged() {
    if (searchResult != null) {
      //variable to store the result
      const place = searchResult.getPlace();
      //variable to store the name from place details result 
      const name = place.name;
      //variable to store the status from place details result
      const status = place.business_status;
      //variable to store the formatted address from place details result
      const formattedAddress = place.formatted_address;
      // console.log(place);
      //console log all results
      console.log(`Name: ${name}`);
      console.log(`Business Status: ${status}`);
      console.log(`Formatted Address: ${formattedAddress}`);
    } else {
      alert("Please enter text");
    }
  }

  if(!isLoaded){
    return null;
  }
  
  return (
    <>
      <SearchLocation>
        <form 
        // ref={InputRef} onClick={() => sethandelInputDrop(!handelinputDrop)}
        >
          <div className="input-search">
            <PiMapPinBold className="ico" size="20" />
            {/* <LoadScript
      googleMapsApiKey='AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y'
    > */}
     <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <input
            type="text"
            placeholder="Search for Tide Information"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`
            }}
          />
        </Autocomplete>
    {/* </LoadScript> */}
            {/* <input
              {...rest}
        ref={autoCompleteRef}
        onChange={event => {
          setQuery(event.target.value);
        }}
        placeholder="Search Here"
        value={query}
            /> */}
            <button type="button" className="btn-search">
              <IoSearch size="20" />
            </button>
          </div>
          {/* {handelinputDrop && <Suggestion onChange={e => handelClickLocation(e)} setOpen={sethandelInputDrop} />} */}
        </form>
      </SearchLocation>
      
    </>
  );
};
export default PlacesAutoComplete;
