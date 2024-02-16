import styled, { css } from 'styled-components';
// import Landingbg from '../../../public/Landingbg.png';
import Landingbg from '../../../public/lp.jpg';
export const StyledMainPageStyles = styled.div`
  position: relative;
  background-image: url(${Landingbg.src});
  min-height: 100vh;
  /* background-size: contain; */
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 0 20px;
  overflow: hidden;
  @media screen and (max-width: 1199px) {
    background-image: none;
    background: var(--secondary-25);
  }
  .text {
    z-index: 3;
    max-width: 542px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    p {
      margin-bottom: 0;
    }
    .home-page {
      display: block;
      margin: 20px 0;
      text-decoration: underline;
      color: var(--primary-500);
    }
    .buttonWrapper {
      max-width: 280px;
      width: 100%;
      margin: 0 auto;
      button {
        margin-bottom: 15px;
        &:nth-last-child() {
          margin-bottom: 0;
        }
      }
    }
  }
  .title {
    z-index: 10;
    margin-bottom: 25px;
    @media screen and (max-width: 630px) {
      padding-top: 20px;
    }

    .connect,
    .logo {
      font-size: 35px;
      line-height: 24px;
      font-weight: 300;
      letter-spacing: 0em;
      text-align: center;
      padding-left: 15px;
      color: var(--primary-500);
      @media screen and (min-width: 768px) {
        font-size: 50px;
      }
      @media screen and (min-width: 992px) {
        font-size: 60px;
      }
    }
    .logo {
      font-weight: 500;
      padding: 0;
    }
  }
  .imagesWrapperfloat {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const HomeFooter = styled.div`
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  /* position: absolute; */
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  span {
    padding-right: 20px;
  }

  .socialLinks {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 250px;
    width: 100%;
    span {
      padding-right: 20px;
    }
    .imageWrapper {
      flex-shrink: 0;
      max-width: 26px;
      cursor: pointer;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

export const FloatingImages = styled.div`
  flex-shrink: 0;
  position: absolute;
  top: ${({ $top }) => ($top ? $top : '')};
  left: ${({ $left }) => ($left ? $left : '')};
  right: ${({ $right }) => ($right ? $right : '')};
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1439px) {
    top: ${({ $toplg }) => ($toplg ? $toplg : '')};
    left: ${({ $leftlg }) => ($leftlg ? $leftlg : '')};
    right: ${({ $rightlg }) => ($rightlg ? $rightlg : '')};
  }
  @media screen and (max-width: 1199px) {
    max-width: 100px;
    top: ${({ $topmd }) => ($topmd ? $topmd : '')};
    left: ${({ $leftmd }) => ($leftmd ? $leftmd : '')};
    right: ${({ $rightmd }) => ($rightmd ? $rightmd : '')};
  }
  @media screen and (max-width: 768px) {
    ${({ $hidden }) =>
      $hidden &&
      css`
        display: none;
      `}
  }
  @media screen and (max-width: 630px) {
    position: static;
    ${({ $hidden }) =>
      $hidden &&
      css`
        display: none;
      `};
  }
`;
