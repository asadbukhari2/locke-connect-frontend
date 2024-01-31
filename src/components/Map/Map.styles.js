import styled, { css } from "styled-components";

export const StyledMap = styled.div`
  padding: 92px 360px 0 0;
  /* padding-top: 92px; */
  display: flex;
  position: relative;
  @media screen and (max-width: 992px) {
    padding: 92px 0px 0 0;
  }
  .hamburger {
    display: none;

    @media screen and (max-width: 992px) {
      background: var(--primary-100);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      flex-shrink: 0;
      position: absolute;
      top: 96px;
      right: 30px;
      cursor: pointer;
      z-index: 1;
    }
  }
`;
export const MapWrapper = styled.div`
  height: calc(100vh - 92px);
  width: 100%;
  position: relative;
  .loading {
    font-size: 20px;
    font-weight: 500;
    font-weight: 24px;
    padding-left: 20px;
  }
  .back {
    position: absolute;
    top: 10px;
    left: 10px;
    max-width: 150px;
    color: var(--primary-500);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    button {
      padding: 15px 10px;
      text-align: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      display: inline-flex;
      align-items: center;
      gap: 15px;
      border-radius: 12px;
      transition: 0.3s all ease-in-out;
      border: 1px solid var(--primary-500);
      background: var(--primary-500);
      color: var(--white);
      &:hover {
        opacity: 0.85;
      }
    }
  }
`;
export const PropertyCardWrapper = styled.div`
  color: var(--black);
  padding: 14px 20px;
  position: fixed;
  top: 92px;
  bottom: 0;
  right: 0;
  overflow: auto;
  max-width: 350px;
  width: 100%;
  transition: 0.3s all ease-in-out;
  background: var(--white);
  @media screen and (max-width: 992px) {
    padding: 50px 20px 14px 20px;
    right: ${({ $showSideBar }) => ($showSideBar ? "-100%" : "0")};
  }
  .propertyCardMap {
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .headerProperty {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .btn-search {
    width: 42px;
    height: 42px;
    border-radius: 50px;
    color: var(--white);
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a3855;
    border: 1px solid #f0ebff;
    background: ${({ $open }) => ($open ? "var(--secondary-500)" : "#F7F4FF")};
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    svg {
      fill: ${({ $open }) => ($open ? "white" : "#6833FF")};
    }
    &:hover {
      background: var(--secondary-500);

      svg {
        fill: white;
      }
    }
  }
  .handelDropDown {
    max-width: 350px;
    position: absolute;
    z-index: 5;
    top: 60px;
    right: -15px;
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    ${({ $open }) =>
      $open == true &&
      css`
        animation: myAnim 0.2s ease normal forwards;
        @keyframes myAnim {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}
  }
`;
export const CardsWrapper = styled.div``;
