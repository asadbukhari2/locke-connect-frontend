import styled from 'styled-components';
// import Landingbg from '../../../public/Landingbg.png';
import Landingbg from '../../../public/lp.jpg';
export const StyledMainPageStyles = styled.div`
  position: relative;
  background-image: url(${Landingbg.src});
  min-height: 100vh;
  /* background-size: contain; */
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 20px 0 20px;
  .text {
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
    margin-bottom: 25px;
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
`;

export const HomeFooter = styled.div`
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  position: absolute;
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
  /* max-width: 175px; */
  position: absolute;
  top: 205px;
  left: 15%;
  img {
    max-width: 100%;
    height: auto;
  }
`;
