import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import property1 from "../../../public/propertyCard/property1.jpg";
import property2 from "../../../public/propertyCard/property2.jpg";
import property3 from "../../../public/propertyCard/property3.jpg";

import { SliderWrap } from "./PropertySaleSlider.styles";
import PropertyCard from "../propertyCard/PropertyCard";

export const PropertyDetail = [
  {
    id: 1,
    price: "$50,500",
    name: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    dimension: "6x8 m²",
    beds: "4 Beds",
    bath: "2 Baths",
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
    img: property3,
    isFav: false,
  },
];

const PropertySaleSlider = ({title}) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <SliderWrap>
      <strong className="title">{title}</strong>
      <Slider {...settings} className="sale-slider">
          {PropertyDetail.map((elem) => (
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
      </Slider>
    </SliderWrap>
  );
};

export default PropertySaleSlider;
