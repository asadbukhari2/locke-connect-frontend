import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
import bgImg01 from "../../../public/img01.jpg";
import buildingImg from "../../../public/building-icon.svg";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { TbPhoto } from "react-icons/tb";
import { SliderHolder } from "./PropertySlider.styles";
import Modal from "../Modal";
import PhotoModal from "./PropertyModal/PhotoModal";
import StreetView from "./PropertyModal/StreetView";

const PropertySlider = ({}) => {
  const [photos, setPhotos] = useState(false);
  const [street, setStreet] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Modal open={photos} setOpen={setPhotos}>
        <PhotoModal setOpen={setPhotos} />
      </Modal>
      <Modal open={street} setOpen={setStreet}>
        <StreetView setOpen={setStreet} />
      </Modal>
      {/* <Modal open={street} setOpen={setStreet}>
        <ThreeDView setOpen={setStreet} />
      </Modal> */}
      <SliderHolder>
        <Slider {...settings} className="slider">
          <div className="slide">
            <Image className="slide-img" src={bgImg01} alt="img description" />
            <div className="inner">
              <div className="time-info">
                <Image src={buildingImg} width="22" alt="img" />
                <span className="text">Open at 11 Sept : 12:00pm - 2:00pm</span>
              </div>
              <div className="btn-holder">
                <button type="button" onClick={() => setPhotos(true)}>
                  <TbPhoto size="18" />
                  Photos
                </button>
                <button type="button" onClick={() => setStreet(true)}>
                  <LiaMapMarkedAltSolid size="19" />
                  street View
                </button>
              </div>
            </div>
          </div>
          <div className="slide">
            <Image className="slide-img" src={bgImg01} alt="img description" />
            <div className="inner">
              <div className="time-info">
                <Image src={buildingImg} width="22" alt="img" />
                <span className="text">Open at 11 Sept : 12:00pm - 2:00pm</span>
              </div>
              <div className="btn-holder">
                <button type="button">
                  <TbPhoto size="18" />
                  Photos
                </button>
                <button type="button">
                  <LiaMapMarkedAltSolid size="19" />
                  street View
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </SliderHolder>
    </>
  );
};

export default PropertySlider;
