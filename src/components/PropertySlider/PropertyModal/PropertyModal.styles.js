import styled from "styled-components";

export const StyledPropertyModal = styled.div`
  position: relative;
  border-radius: 16px;
  background: var(--white);
  max-width: 350px;
  width: 100%;
  overflow: hidden;
  @media screen and (min-width: 663px) {
    max-width: 620px;
  }
  @media screen and (min-width: 960px) {
    max-width: 920px;
  }
  .closer {
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    transition: all ease-in-out 0.3s;
    background: var(--white);

    &:hover {
      border-color: var(--body-text);
    }
  }
  .title {
    color: var(--gray-400);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    padding: 15px;
    span {
      display: block;
    }
  }
`;

export const Imagesgallery = styled.div`
  max-width: 920px;
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(293px, 1fr));
  gap: 10px;
  justify-items: center;

  .imgWrapper {
    max-width: 293px;
    @media screen and (max-width: 576px) {
      max-width: 100%;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
export const StreetViewStyle = styled.div`
  width: 920px;
  height: 600px;
  overflow: hidden;
  @media screen and (max-width: 1440px) {
    width: calc(350px + (920 - 350) * (100vw - 390px) / (1440 - 390));
  }
`;
export const ThreeDViewStyle = styled.div`
  width: 920px;
  height: 600px;
  overflow: hidden;
  @media screen and (max-width: 1440px) {
    width: calc(350px + (920 - 350) * (100vw - 390px) / (1440 - 390));
    height: calc(350px + (600 - 350) * (100vw - 390px) / (1440 - 390));
  }
  iframe {
    width: 100%;
    height: 100%;
  }
`;
