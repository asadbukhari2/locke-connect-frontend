import React, { useState } from "react";
import {
  CardsWrapper,
  MapWrapper,
  PropertyCardWrapper,
  StyledMap,
} from "./Map.styles";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import PropertyCard from "../propertyCard/PropertyCard";
import property1 from "../../../public/propertyCard/property1.jpg";
import property2 from "../../../public/propertyCard/property2.jpg";
import property3 from "../../../public/propertyCard/property3.jpg";
import property4 from "../../../public/propertyCard/property4.jpg";
import property5 from "../../../public/propertyCard/property5.jpg";
import property6 from "../../../public/propertyCard/property6.jpg";
import UserSearchFilter from "../UserSearchFilter";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Pagination from "../Pagination";
export const PropertyDetail = [
  {
    id: 1,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    link: "Riche-Luxury-Mansion",
    img: property1,
    isFav: false,
  },
  {
    id: 2,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    link: "Riche-Luxury-Mansion",
    img: property2,
    isFav: false,
  },
  {
    id: 3,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    link: "Riche-Luxury-Mansion",
    img: property3,
    isFav: false,
  },
  {
    id: 4,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    link: "Riche-Luxury-Mansion",
    img: property4,
    isFav: false,
  },
  {
    id: 5,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property5,
    isFav: false,
    link: "Luxury-Mansion",
  },
  {
    id: 6,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
    img: property6,
    isFav: false,
    link: "Riche-Mansion",
  },
];
const Map = () => {
  const [filterDropDown, setFilterDropDown] = useState(false);
  const [sideBar, SetsideBar] = useState(false);
  const center = { lat: 38.889805, lng: -77.009056 };
  const router = useRouter();

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y",
  });

  return (
    <StyledMap $showSideBar={sideBar}>
      <div className="hamburger" onClick={() => SetsideBar(!sideBar)}>
        {!sideBar ? <RxCross1 size={21} /> : <CgMenuRightAlt size={25} />}
      </div>
      <MapWrapper>
        {isLoaded ? (
          <>
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
                zoomControl: true,
                mapTypeControlOptions: {
                  mapTypeIds: ["roadmap", "satellite", "terrain", "hybrid"],
                },
                mapTypeId: "terrain",
              }}
            >
              <Marker position={center} />
            </GoogleMap>
            <div className="back">
              <button
                onClick={() => {
                  router.push("/");
                }}
              >
                <BiArrowBack size={20} /> Go Back
              </button>
            </div>
          </>
        ) : (
          <div className="loading">Loading...</div>
        )}
      </MapWrapper>
      <PropertyCardWrapper $open={filterDropDown} $showSideBar={sideBar}>
        <div className="headerProperty">
          <strong className="title">Properties</strong>
          <div
            className="btn-search"
            onClick={() => setFilterDropDown(!filterDropDown)}
          >
            <GiSettingsKnobs size="20px" />
          </div>
          <div className="handelDropDown">
            <UserSearchFilter setPopUp={setFilterDropDown} width="330px" />
          </div>
        </div>
        <CardsWrapper>
          {PropertyDetail.map((elem) => (
            <PropertyCard
              className="propertyCardMap"
              link={`property-details/${elem.link}`}
              key={elem.id}
              price={elem.price}
              name={elem.name}
              location={elem.location}
              dimension={elem.dimension}
              beds={elem.beds}
              bath={elem.bath}
              img={elem.img}
              isFav={elem.isFav}
            />
          ))}
        </CardsWrapper>
        <Pagination
          page={1}
          pageSize={10}
          totalCount={20}
          totalPages={3}
          onPageChange={() => {}}
        />
      </PropertyCardWrapper>
    </StyledMap>
  );
};

export default Map;
