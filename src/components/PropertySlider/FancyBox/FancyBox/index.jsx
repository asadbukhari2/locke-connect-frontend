import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Image from 'next/image';
import { SliderHolder } from './PropertySlider.styles';

const FancyBox = ({ start, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: start,
  };
  return (
    <>
      <SliderHolder>
        <Slider {...settings} className="slider">
          {data?.map((elem, ind) => (
            <div className="slide" key={ind}>
              <Image className="slide-img" src={elem.img} alt="img description" />
            </div>
          ))}
        </Slider>
      </SliderHolder>
    </>
  );
};

export default FancyBox;
