import styled, { css } from 'styled-components';
// import Landingbg from '../../../public/Landingbg.png';
import Landingbg from '../../../public/lp.jpg';
import Revolutionizebg from '../../../public/Revolutionizebg.jpg';
import lottieBg from '../../../public/lottieBg.png';
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

export const RevolutionizeStyles = styled.div`
  position: relative;
  background-image: url(${Revolutionizebg.src});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1199px) {
    background: var(--primary-100);
    padding: 20px;
  }
  .conatiner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    @media screen and (max-width: 1199px) {
      justify-content: center;
    }
  }
  .info {
    text-align: center;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      br {
        display: none;
      }
    }
  }
  .Revolutionize {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 150px;
    @media screen and (max-width: 1199px) {
      padding-top: 100px;
      display: block;
      margin-bottom: 20px;
    }
    .text {
      margin-left: 100px;
      max-width: 400px;
      @media screen and (max-width: 1199px) {
        margin-left: 0;
        max-width: 100%;
        text-align: center;
        margin-bottom: 40px;
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
          line-height: 39px;
          font-weight: 300;
          text-align: center;
          padding-left: 15px;
          color: var(--primary-500);
          @media screen and (min-width: 768px) {
            font-size: 50px;
            line-height: 54px;
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
      .disc {
        max-width: 300px;
        @media screen and (max-width: 1199px) {
          margin: 0 auto;
        }
      }
    }
  }
  .lottiemainWrapper {
    position: absolute;
    top: -100px;
    right: 0px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    background-image: url(${lottieBg.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    @media screen and (max-width: 1439px) {
      top: -40px;
      max-width: 750px;
    }
    @media screen and (max-width: 1199px) {
      max-width: 750px;
      position: static;
      margin: 0 auto;
    }
  }
  .lootieWrapper {
    padding: 70px;
    max-width: 900px;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
  }
  .pivacyButtons {
    max-width: 250px;
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .privacyLinks {
      text-decoration: underline;
    }
  }
`;
