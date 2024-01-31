import styled from "styled-components";

export const StyledPropertySelectWrapper = styled.div`
  width: 100%;
  color: var(--gray-400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  position: relative;
  &.selectProfile {
    max-width: 200px;
  }

  .textFilter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    background: var(--white);
    font {
      &:hover {
        background: none !important;
        box-shadow: none !important;
      }
    }
  }
  .iconWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease-in-out;
    transform: ${({ $icon }) => ($icon ? "scale(-1)" : "scale(1)")};
  }
`;
export const ItemWrapper = styled.ul`
  width: 100%;
  z-index: 2;
  background: var(--white);
  border-radius: 5px;
  left: 0;
  width: 100%;
  position: absolute;
  top: 50px;
  padding: 10px 0;
  box-shadow: 0px 24px 52px -14px rgba(29, 41, 57, 0.16);
  max-height: ${({ $height }) => ($height ? "200px" : "0%")};
  opacity: ${({ $height }) => ($height ? "1" : "0")};
  visibility: ${({ $height }) => ($height ? "visible" : "hidden")};
  overflow-y: auto;
  /* transition: all 0.3s ease-in-out; */

  li {
    opacity: ${({ $height }) => ($height ? "1" : "0")};
    visibility: ${({ $height }) => ($height ? "visible" : "hidden")};
    padding: 8px 15px;
    z-index: 2;
    margin: 0 !important;
    cursor: pointer;
    transition: all ease-in-out 0.3s;

    &:hover {
      color: var(--white);
      background: var(--body-text);
    }
  }
`;
