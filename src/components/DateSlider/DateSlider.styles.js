import styled from "styled-components";

export const StyledDateSliderWrapper = styled.div`
  padding: 20px 25px;
  gap: 24px;
  border-radius: 16px;
  border: 1px solid, #ecedf1;
  background: var(--white);
  max-width: 448px;
  width: 100%;
  margin: 24px auto 0 auto;
  position: relative;
  .closer {
    cursor: pointer;
    position: absolute;
    top: 33px;
    right: 19px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    background: var(--white);
    &:hover {
      background: var(--gray-25);
    }
  }
  .text {
    color: var(--gray-400);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 24px;
    strong {
      display: block;
      color: var(--body-text);
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }
  .span {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
    label {
      color: var(--gray-400);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    input {
      margin: 0;
      margin-bottom: 2px;
      flex-shrink: 0;
    }
    input[type="checkbox"] {
      position: relative;
      border: 2px solid var(--gray-200);
      border-radius: 3px;
      background: none;
      cursor: pointer;
      line-height: 0;
      outline: 0;
      padding: 0 !important;
      vertical-align: text-top;
      height: 16px;
      width: 16px;
      -webkit-appearance: none;
      transition: all 0.3s ease-in-out;
    }

    input[type="checkbox"]:checked {
      background-color: var(--body-text);
      border: 2px solid var(--body-text);
      opacity: 1;
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      right: 40%;
      top: 50%;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      margin: -1px -1px 0 -1px;
      transform: rotate(39deg) translate(-50%, -50%);
      z-index: 2;
    }
  }
`;
export const StyledDateSlider = styled.div`
  position: relative;
  margin-bottom: 24px;
  padding: 0 25px;
  .slick-slide {
    padding: 0 5px;
  }

  .slick-prev {
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 45px;
    left: -34px;
    z-index: 5;
    border-radius: var(--Radius-radius-2x-large, 48px);
    border: 1px solid var(--Colors-Stroke-Shades-stroke-shade-surface, #ecedf1);
    background: var(--white);
    transition: 0.3s all ease-in-out;

    &:hover {
      box-shadow: 0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
      background: var(--gray-25);
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
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 45px;
    right: -34px;
    z-index: 5;
    border-radius: var(--Radius-radius-2x-large, 48px);
    border: 1px solid var(--Colors-Stroke-Shades-stroke-shade-surface, #ecedf1);
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease-in-out;
    &:hover {
      box-shadow: 0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
      background: var(--gray-25);
    }

    &:before {
      content: "";
      display: inline-block;
      margin: 0 0 0 -2px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-color: #000;
      width: 8px;
      height: 8px;
      transform: rotate(226deg);
    }
  }
`;
export const StyledTimeSlider = styled.div`
  position: relative;
  padding: 0 25px;

  margin-bottom: 25px;
  .slick-slide {
    padding: 0 5px;
  }

  .slick-prev {
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 11px;
    left: -34px;
    z-index: 5;
    border-radius: var(--Radius-radius-2x-large, 48px);
    border: 1px solid var(--Colors-Stroke-Shades-stroke-shade-surface, #ecedf1);
    background: var(--white);
    transition: 0.3s all ease-in-out;
    &:hover {
      box-shadow: 0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
      background: var(--gray-25);
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
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 11px;
    right: -34px;
    z-index: 5;
    border-radius: var(--Radius-radius-2x-large, 48px);
    border: 1px solid var(--Colors-Stroke-Shades-stroke-shade-surface, #ecedf1);
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease-in-out;
    &:hover {
      box-shadow: 0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
      background: var(--gray-25);
    }
    &:before {
      content: "";
      display: inline-block;
      margin: 0 0 0 -2px;
      border-width: 0 0 2px 2px;
      border-style: solid;
      border-color: #000;
      width: 8px;
      height: 8px;
      transform: rotate(226deg);
    }
  }
`;
export const SliderContent = styled.div`
  border-radius: 8px;
  border: 1px solid #ecedf1;
  background: #fff;
  margin: 0 auto;
  display: flex;
  padding: 16px 14px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    border-color: var(--gray-50);
    background: var(--gray-25);
  }
  &:focus {
    border-color: var(--body-text);
  }

  .dayName {
    color: var(--gray-400);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  .day {
    color: var(--body-text);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 10px;
  }
  .month {
    color: var(--body-text);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;
