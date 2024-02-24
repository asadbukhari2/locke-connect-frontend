import styled from "styled-components";

export const SliderHolder = styled.div`
  position: relative;
  margin: 0 0 20px;

  @media (min-width: 768px) {
  }

  .slider {
    width: 100%;
    position: relative;

    .slick-next,
    .slick-prev {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      font-size: 0;
      line-height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
      z-index: 5;
      border-radius: 50px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
      background: var(--white);

      @media (min-width: 768px) {
        box-shadow: none;
      }

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
    .slick-next {
      left: auto;
      right: 15px;

      &:before {
        margin: 0 0 0 -4px;
        border-width: 2px 2px 0 0;
      }
    }

    .slick-slide {
      width: 100%;
    }

    .slide {
      width: 100%;
      height: 300px;
      overflow: hidden;
      border-radius: 20px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background: #ddd;

      @media (min-width: 768px) {
        width: 350px;
      }
      @media (min-width: 1420px) {
        height: 413px;
      }

      img.slide-img {
        display: block;
        width: 100%;
        height: 425px;
        object-fit: cover;
      }
    }

    .inner {
      position: absolute;
      inset: 0;
      padding: 15px;
      display: flex !important;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      z-index: 1;

      @media (min-width: 768px) {
        padding: 20px;
      }
    }

    .time-info {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      min-width: 250px;
      font-size: 12px;
      line-height: 16px;
      color: var(--white);
      padding: 8px 12px;
      border-radius: 64px;
      background: var(--body-text);
    }

    .btn-holder {
      display: flex;
      align-items: center;
      gap: 8px;

      button {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 116px;
        font-size: 14px;
        line-height: 17px;
        font-family: var(--base-font-family);
        text-transform: capitalize;
        padding: 10px 15px;
        border-radius: 8px;
        border: 1px solid var(--gray-50);
        transition: all ease-in-out 0.2s;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
        background: var(--white);

        @media (min-width: 768px) {
          box-shadow: none;
          padding: 10px 24px;
        }

        &:hover {
          color: var(--white);
          border-color: var(--primary-300);
          background: var(--primary-300);
        }
      }
    }
  }
`;
