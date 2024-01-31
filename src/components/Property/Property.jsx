import React, { useContext, useEffect, useState } from "react";
import property1 from "../../../public/propertyCard/property1.jpg";
import property2 from "../../../public/propertyCard/property2.jpg";
import property3 from "../../../public/propertyCard/property3.jpg";
import property4 from "../../../public/propertyCard/property4.jpg";
import property5 from "../../../public/propertyCard/property5.jpg";
import property6 from "../../../public/propertyCard/property6.jpg";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbMapPin } from "react-icons/tb";
import PropertyCard from "../propertyCard/PropertyCard";
import {
  StyledProperty,
  StyledPropertyCards,
  FilterHeader,
  FilterWrap,
} from "./Property.styles";
import SearchLocation from "../SearchLocation";
import UserSearchFilter from "../UserSearchFilter";
import Link from "next/link";
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
export const FilterItem = [
  "New York",
  "For Buy",
  "Duplex",
  "$250-500k",
  "Last 3 Weeks",
  "Apartments",
];
const Property = () => {
  // pagination
  const [filterData, setFilterData] = useState(FilterItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDropDown, setFilterDropDown] = useState(false);

  function handelProperFilter() {
    setFilterDropDown(!filterDropDown);
  }
  function handelFilter(item) {
    setFilterData((prev) => prev.filter((elem) => elem !== item));
  }
  return (
    <StyledProperty id="buyFilter">
      <FilterHeader>
        <div className="wrap">
          <div className="heading-box">
            <h2>Top Properties</h2>
            <span className="text">Total 315 properies</span>
          </div>
          <ul className="btn-list">
            <li>
              <button type="button" className="active">
                <TfiMenuAlt size="18" />
              </button>
            </li>
            <li>
              <Link href="/map" type="button">
                <TbMapPin size="18" />
              </Link>
            </li>
          </ul>
        </div>
        <FilterWrap open={filterDropDown}>
          <SearchLocation
            handelFilter={handelProperFilter}
            open={filterDropDown}
          />
          <div className="handelDropDown">
            <UserSearchFilter setPopUp={setFilterDropDown} />
          </div>
          <ul className="filter-list">
            {filterData.map((elem, ind) => (
              <li key={ind}>
                <span className="text">{elem}</span>
                <button
                  className="btn-close"
                  type="button"
                  onClick={() => handelFilter(elem)}
                >
                  <MdClose size="14" />
                </button>
              </li>
            ))}
          </ul>
        </FilterWrap>
      </FilterHeader>
      <StyledPropertyCards>
        {PropertyDetail?.map((elem) => (
          <PropertyCard
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
      </StyledPropertyCards>
      <Pagination
        page={1}
        pageSize={10}
        totalCount={20}
        totalPages={3}
        onPageChange={() => {}}
      />
    </StyledProperty>
  );
};

export default Property;
