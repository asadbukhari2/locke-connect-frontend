import styled from "styled-components";
import arrowBack from "../../../public/SliderImages/arrowBack.png";
import arrowNext from "../../../public/SliderImages/arrowNext.png";

export const SliderWrapper = styled.div`
  position: relative;
  padding: 16px;
  width: 215px;
  height: 280px;
  background: linear-gradient(180deg, rgba(42, 56, 85, 0) 67.18%, #000 100%),
    url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border-radius: 18px;
  overflow: hidden;
  outline: 2px solid transparent;
  @media (min-width: 1420px) {
    width: 255px;
    height: 323px;
  }
`;

export const PeopleCardWrapper = styled.div`
  position: relative;
  width: calc(50% - 20px);
  height: 300px;
  padding: 16px;
  margin: 0 10px 18px;
  border-radius: 18px;
  background-image: linear-gradient(
      180deg,
      rgba(42, 56, 85, 0) 67.18%,
      #000 100%
    ),
    url(${({ $img }) => $img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-backface-visibility: hidden;

  @media (min-width: 768px) {
    width: calc(33% - 20px);
    height: 300px;
  }
  @media (min-width: 1540px) {
    width: calc(25% - 20px);
    height: 350px;
  }

  /* @media (max-width: 1399px) {
    height: 300px;
    max-width: 264px;
  }
  @media (max-width: 1199px) {
    height: 340px;
    max-width: 301px;
  }
  @media (max-width: 991px) {
    height: 330px;
    max-width: 300px;
  }
  @media (max-width: 767px) {
    height: 280px;
    max-width: 250px;
  }
  @media (max-width: 574px) {
    height: 315px;
    max-width: 300px;
  } */
`;

export const SliderMain = styled.div`
  .slideWrap {
    background: var(--white);
    overflow: hidden;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;

    .swiper-slide-next {
      border-radius: 18px;
    }
  }

  .swiper-button-prev {
    background: var(--primary-500);
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &::before {
      content: "";
      /* position: absolute; */
      background: url(${arrowNext.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 24px;
      width: 24px;
      z-index: 3;
    }

    @media (min-width: 768px) {
      right: -80px;
    }
    @media (min-width: 992px) {
      right: 0;
    }
    @media (min-width: 1420px) {
      right: -70px;
    }
  }

  .swiper-button-next {
    background: var(--primary-500);
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &::before {
      content: "";
      /* position: absolute; */
      background: url(${arrowBack.src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 24px;
      width: 24px;
      z-index: 3;
    }

    @media (min-width: 768px) {
      left: -80px;
    }
    @media (min-width: 992px) {
      left: 0;
    }
    @media (min-width: 1420px) {
      left: -70px;
    }
  }
  .arrowWrapper {
    pointer-events: fill;
  }
`;

export const CardText = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 223px;
  width: 100%;
  color: var(--white);

  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
  }

  .info {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .dot {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .socialIocn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 232px; */
    width: 100%;
  }
  .iconWrapp {
    max-width: 98px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--white);
    color: var(--danger-600);
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    img {
      max-width: 100%;
      height: auto;
    }
    &:hover {
      background: var(--black);
      color: var(--white);
      img {
        filter: invert(200%) sepia(0%) saturate(75%) hue-rotate(44deg)
          brightness(100%) contrast(100%);
      }
    }
  }
  .brand {
  }
`;
export const CardTextPeople = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  bottom: 16px;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  color: var(--white);

  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
  }

  .info {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 8px;

    .dot {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .socialIocn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .iconWrapp {
    max-width: 98px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--white);
    color: var(--danger-600);
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    img {
      max-width: 100%;
      height: auto;
    }
    &:hover {
      background: var(--black);
      color: var(--white);
      img {
        filter: invert(200%) sepia(0%) saturate(75%) hue-rotate(44deg)
          brightness(100%) contrast(100%);
      }
    }
  }
  .brand {
  }
`;

export const PropertySliderMainWrapper = styled.div`
  max-width: 322px;
  margin: 0 auto;
  position: relative;

  .sliderProperty {
    background: var(--white);
    border-radius: 14px;
    .cardText {
      padding: 10px 20px;
    }
  }
  .slick-prev {
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    left: -45px;
    z-index: 5;
    border-radius: var(--Radius-radius-2x-large, 48px);
    background: var(--primary-500);
    transition: 0.3s all ease-in-out;
    @media screen and (max-width: 1420px) {
      left: -15px;
    }
    @media screen and (max-width: 992px) {
      left: -45px;
    }
    &:hover {
      box-shadow:
        0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
      border: 1px solid
        var(--Colors-Stroke-Shades-stroke-shade-surface, #ecedf1);
    }

    &:before {
      content: "";
      display: inline-block;
      margin: 0 0 0 2px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-color: var(--white);
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
    }
  }
  .slick-next {
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    right: -45px;
    z-index: 5;
    border-radius: var(--Radius-radius-2x-large, 48px);
    background: var(--primary-500);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease-in-out;
    &:hover {
      box-shadow:
        0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
      border: 1px solid
        var(--Colors-Stroke-Shades-stroke-shade-surface, #ecedf1);
    }

    &:before {
      content: "";
      display: inline-block;
      margin: 0 0 0 -2px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-color: var(--white);
      width: 8px;
      height: 8px;
      transform: rotate(226deg);
    }
    @media screen and (max-width: 1420px) {
      right: -10px;
    }
    @media screen and (max-width: 992px) {
      right: -45px;
    }
  }
  @media screen and (max-width: 1420px) {
    max-width: 250px;
  }
  @media screen and (max-width: 992px) {
    max-width: 322px;
  }
  @media screen and (max-width: 490px) {
    max-width: 250px;
  }
`;
