import styled from "styled-components";

export const StyledSelling = styled.div`
  display: block;
  @media screen and (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 0px 396px 0 0px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0px 396px 0 20px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 450px 0 20px;
  }
`;
export const LeftAsideStyles = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto 20px auto;
  padding-top: 20px;
  border-radius: 16px;

  @media screen and (min-width: 992px) {
    margin: 0;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 60px;
  }
  .imageWrapp {
    z-index: 1;
    /* max-width: 700px; */
    img {
      width: 100%;
      height: auto;
    }
  }
  .form {
    position: relative;
    max-width: 330px;
    margin: 0 auto -50px;
    text-align: center;
    z-index: 2;

    @media screen and (min-width: 768px) {
      margin: 0 auto -167px auto;
    }

    @media screen and (min-width: 1200px) {
      margin: 0 auto -136px auto;
    }

    @media screen and (min-width: 1440px) {
      margin: 0 auto -171px auto;
    }
    @media screen and (min-width: 1450px) {
      margin: 0 auto -218px auto;
    }

    .title {
      display: block;
      margin-bottom: 14px;
      color: #000;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
    .input_main {
      margin-bottom: 15px;
      .inputstyle_custom {
        background: #f2f5fd;
        input {
          background: #f2f5fd !important;
        }
      }
    }
  }
`;
export const RightAsideStyles = styled.div`
  padding: 0 10px;
  width: 100%;
  position: static;

  @media screen and (min-width: 992px) {
    position: fixed;
    top: 112px;
    bottom: 0;
    right: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 400px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 450px;
  }

  .terms_condition {
    margin-top: 15px;
    color: rgba(0, 0, 0, 0.3);
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.4px;
    .text {
      display: flex;
      gap: 8px;
      p {
        margin-bottom: 8px;
      }
    }
  }
`;
