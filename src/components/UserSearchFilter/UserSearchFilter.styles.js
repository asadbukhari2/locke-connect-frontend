import styled from "styled-components";

export const UserFilterStyle = styled.div`
  border-radius: 12px;
  border: 1px solid var(--gray-50);
  background: var(--white);
  box-shadow: 0px 24px 52px -14px rgba(29, 41, 57, 0.16);
  max-width: ${({ $width }) => ($width ? $width : "360px")};
  width: 100%;
  padding: 24px;
  ::-webkit-scrollbar {
    width: 2px;
    height: 20px;
  }
  p,
  span {
    margin: 0;
  }
  .requirement {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
  .tooltip {
    width: 200px;
    height: 50px;
    background: blue;
  }
`;

export const FilterHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  color: var(--body-text);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  .formReset {
    color: var(--gray-400);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .closer {
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: var(--gray-25);
    transition: 0.3s all ease-in-out;
    &:hover {
      background: var(--gray-100);
      border: 1px solid black;
    }
  }
`;
export const FilterOptionWrapper = styled.div`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  .priceWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-top: 20px;
  }
  .price {
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    /* margin-bottom: 45px; */
    padding-right: 10px;

    .rc-slide-customization {
      margin: 20px 10px 15px 10px;

      .rc-tooltip .rc-tooltip-placement-bottom {
        padding: 0;
      }
      .rc-slider-track {
        background: var(--primary-500);
      }
      .rc-slider-handle-1,
      .rc-slider-handle-2 {
        background: var(--primary-500);
        opacity: 1;
        border: solid 4px var(--white);
        filter: drop-shadow(0px 3px 5px rgba(29, 41, 57, 0.05))
          drop-shadow(0px 4px 8px rgba(29, 41, 57, 0.1));
      }

      .rc-slider-handle {
        &:focus-visible,
        &:active {
          box-shadow: none;
        }
      }
      .rc-slider-mark-text-active {
        background: red;
        height: 200px;
        width: 200px;
      }
    }
  }
  .dropDown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-right: 8px;
    margin-bottom: 12px;
  }
  .priceMainWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
`;
export const FilterOption = styled.div`
  max-height: 465px;
  overflow-y: scroll;
  color: var(--body-text);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 16px;
  .title {
    cursor: pointer;
    color: var(--body-text);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterOptionDetail = styled.ul`
  overflow: hidden;
  overflow-y: scroll;
  height: ${({ $height }) => ($height ? "140px" : "0px")};
  opacity: ${({ $height }) => ($height ? "1" : "0")};
  visibility: ${({ $height }) => ($height ? "visible" : "hidden")};
  transition: 0.5s all ease-in-out;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
    margin-bottom: 12px;

    .customCheckbox {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        display: none;
        margin: 0;
        margin-bottom: 2px;
        flex-shrink: 0;
      }

      input[type="checkbox"]:checked ~ label {
        &::before {
          border-color: transparent;
          opacity: 1;
        }
        &::after {
          background: url(../../../checked-icon.svg) no-repeat;
        }
      }

      label {
        display: block;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease-in-out;
        padding-left: 24px;

        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 1px;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 3px;
          border: 2px solid var(--gray-200);
          transition: all 0.2s ease-in-out;
        }
        &::after {
          border-radius: 0;
          border: 0;
          background-position: center;
          background-size: cover;
        }
      }
    }
    .qty {
      color: var(--body-text);
      border-radius: 8px;
      background: var(--gray-25);
      padding: 4px;
    }
  }
`;
export const FilterOptionPropertyDetail = styled.ul`
  max-height: ${({ $height }) => ($height ? "1000px" : "0px")};
  opacity: ${({ $height }) => ($height ? "1" : "0")};
  visibility: ${({ $height }) => ($height ? "visible" : "hidden")};
  overflow: ${({ $height }) => ($height ? "visible" : "hidden")};
  transition: 0.5s all ease-in-out;
  li {
    margin-bottom: 24px;
    .span {
      display: block;
      margin-bottom: 8px;
    }
    .optional {
      display: block;
      text-align: center;
      margin-bottom: 15px;
    }
    .dropDown {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding-right: 8px;
      margin-bottom: 12px;
    }
  }
`;
export const ToggleSwitchStyle = styled.div`
  input {
    display: none;
  }
  .switch {
    display: inline-block;
    position: relative;
    width: ${({ $sm }) => ($sm ? "38px" : "42px")};
    height: ${({ $sm }) => ($sm ? "20px" : "24px")};
    border-radius: 20px;
    background: #f2f4f7;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
    margin-left: ${({ $sm }) => ($sm ? "10px" : "")};
  }
  .switch::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: ${({ $sm }) => ($sm ? "16px" : "20px")};
    height: ${({ $sm }) => ($sm ? "16px" : "20px")};
    background: var(--white);
    border-radius: 50%;
    box-shadow: 0px 24px 52px -14px rgba(29, 41, 57, 0.16);
    transition:
      left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switch:active::before {
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  input:checked + .switch {
    background: var(--black);
  }
  input:checked + .switch::before {
    left: 20px;
    background: #fff;
  }
  input:checked + .switch:active::before {
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(0, 150, 136, 0.2);
  }
`;
