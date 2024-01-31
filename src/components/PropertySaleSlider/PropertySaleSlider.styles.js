import styled from "styled-components";

export const SliderWrap = styled.div`
  position: relative;
  margin: 0 0 15px;

  @media (min-width: 768px) {
    margin: 0 0 40px;
  }

  .title {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 15px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .sale-slider {
    width: 100%;
    position: relative;

    .slick-next,
    .slick-prev {
      display: block;
      width: 32px;
      height: 32px;
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: -36px;
      right: 15px;
      z-index: 5;
      background: none;

      &:before {
        content: "";
        display: inline-block;
        margin: 0 0 0 2px;
        border-width: 0 0 2px 2px;
        border-style: solid;
        border-color: #000;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
      }
    }

    .slick-next{
      right: 0;

      &:before {
        margin: 0 0 0 -4px;
        border-width: 2px 2px 0 0;
      }
    }

    .slick-slide {
      width: 100%;
      padding: 0 5px;

      @media (min-width: 768px) {
        padding: 0 10px;
      }
    }
  }
`;
