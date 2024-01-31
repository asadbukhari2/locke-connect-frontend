import React from "react";
import Slider from "react-slick";
import PropertyCard from "../propertyCard/PropertyCard";
import { PropertyDetail } from "../Property/Property";
import { PropertySliderMainWrapper } from "./Card.styles";

const PropertyCardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };
  return (
    <PropertySliderMainWrapper>
      <Slider {...settings}>
        {PropertyDetail.map((elem) => (
          <PropertyCard
            className={"sliderProperty"}
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
    </PropertySliderMainWrapper>
  );
};

export default PropertyCardSlider;
