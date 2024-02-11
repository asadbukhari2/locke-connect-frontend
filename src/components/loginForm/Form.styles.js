import styled from 'styled-components';

export const StyledFormUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 112px 20px 0 20px;
  min-height: calc(100vh - 112px);

  .formWrapper {
    max-width: 426px;
    width: 100%;
    padding: 15px 25px;
    border-radius: 20px;
    background: var(--primary-25);
    transition: 0.5s all ease-in-out;

    @media screen and (min-width: 576px) {
      padding: 15px 50px;
    }

    .title {
      margin-bottom: 30px;
      color: #000;
      text-align: center;
      font-size: 30px;
      font-weight: 400;
      line-height: 34px;

      @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 52px;
      }
    }
    .title-reset {
      margin-bottom: 30px;
      color: #000;
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;

      @media screen and (min-width: 768px) {
        font-size: 30px;
        line-height: 34px;
      }
    }

    .input-group {
      margin-bottom: 25px;
    }
    .buttonWrapper {
      max-width: 115px;
      margin: 0 auto;
    }
    .span {
      text-align: center;
      margin: 10px;
      a {
        color: var(--primary-400);
      }
    }
    &:hover {
      box-shadow:
        0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
    }
  }
  .forget-password {
    display: block;
    text-align: right;
    margin-bottom: 10px;
    color: var(--primary-400);
  }
`;
export const StyledFormRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 15px 15px;

  .formWrapper {
    max-width: 426px;
    width: 100%;
    padding: 15px 20px;
    border-radius: 20px;
    background: var(--primary-25);
    transition: 0.5s all ease-in-out;

    @media screen and (min-width: 576px) {
      padding: 15px 50px;
    }

    .title {
      margin-bottom: 30px;
      color: #000;
      text-align: center;
      font-size: 30px;
      font-weight: 400;
      line-height: 34px;
      @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 52px;
      }
    }
    .input-group {
      margin-bottom: 25px;
    }
    .buttonWrapper {
      max-width: 81px;
      margin: 0 auto;
    }

    .already-account,
    .span {
      display: block;
      text-align: center;
      padding: 15px 0 10px;
      a {
        color: var(--primary-400);
      }
    }
    &:hover {
      box-shadow:
        0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
    }
  }
`;
export const StyledFormUserRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  width: 100%;
  .formWrapper {
    max-width: 702px;
    width: 100%;
    padding: 40px 25px;
    border-radius: 20px;
    background: var(--primary-25);
    transition: 0.5s all ease-in-out;

    .title {
      margin-bottom: 30px;
      color: #000;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 400;
      line-height: 52px;
    }
    .input-group {
      margin-bottom: 25px;
    }
    .buttonWrapper {
      max-width: 81px;
      margin: 0 auto;
    }
    .span {
      text-align: center;
      margin: 10px;
      a {
        color: var(--primary-400);
      }
    }
    &:hover {
      box-shadow:
        0px 5px 8px -2px rgba(29, 41, 57, 0.02),
        0px 16px 16px -4px rgba(29, 41, 57, 0.08);
    }
  }
  .combineFields {
    display: block;
    @media screen and (min-width: 576px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }
    .selectDropDown {
      width: 100%;
      margin-bottom: 25px;
      .text {
        display: block;
        margin-bottom: 10px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        color: var(--body-text);
      }
      .textFilter {
        padding: 13px 16px;
        /* margin-bottom: 4px; */
      }
    }
  }
  @media screen and (min-width: 576px) {
    padding: 40px 30px;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 112px);
  margin-top: 112px;
  width: 100%;
`;
export const FormType = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: var(--White);
  overflow: hidden;
  padding-left: 2px;
  margin-bottom: 30px;
`;
export const Item = styled.div`
  color: #6b7a99;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  font-weight: 900;
  padding: 15px 25px;
  margin: 0 0 0 -1px;
  border: 2px solid #f5f6f7;
  cursor: pointer;

  background: ${({ $active }) => ($active ? 'var(--primary-200)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--white)' : '#6b7a99')};
  border-color: ${({ $active }) => ($active ? 'var(--primary-200)' : '#f5f6f7')};
`;
