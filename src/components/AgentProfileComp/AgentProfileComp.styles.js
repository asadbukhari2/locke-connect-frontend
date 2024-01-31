import styled from "styled-components";

export const AccountDetailStyled = styled.form`
  max-width: 1440px;
  color: var(--body-text);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  .field_title {
    max-width: 200px;
    width: 100%;
    button {
      pointer-events: none;
      height: 48px;
    }
  }
  .inputWrap {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }
    .upload-input {
      display: none;
    }
    .upload_label {
      border-radius: 8px;
      border: 1px solid var(--gray-50);
      background: var(--white);
      max-width: 185px;
      width: 100%;
      height: 48px;
      color: var(--gray-400);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
    }
    .upload-Image-wrapper {
      max-width: 600px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
    }
  }
  .deleteAccount {
    color: var(--danger-500);
    text-decoration: underline;
    cursor: pointer;
  }
  .buttonWrapper {
    max-width: 280px;
    width: 100%;
    margin-left: auto;
    display: flex;
    gap: 12px;
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export const StyledAgentIntroduction = styled.div`
  max-width: 1440px;
  color: var(--body-text);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  .totalsold {
    display: flex;
    margin-bottom: 25px;
  }
  .title {
    display: block;
    margin-bottom: 15px;
  }
  .label {
    display: block;
    margin-bottom: 15px;
  }
  textarea {
    display: block;
    padding: 15px;
    max-width: 628px;
    width: 100%;
    height: 108px;
    border-radius: 8px;
    background: var(--primary-25);
    color: var(--gray-400);
    resize: none;
    outline: none;
    border: none;
    margin-bottom: 25px;
  }
  .inputWrap {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }
    .upload-input {
      display: none;
    }
    .upload_label {
      border-radius: 8px;
      border: 1px solid var(--gray-50);
      background: var(--white);
      max-width: 185px;
      width: 100%;
      height: 48px;
      color: var(--gray-400);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
    }
    .upload-Image-wrapper {
      max-width: 600px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
    }
  }
  .field_title {
    max-width: 200px;
    width: 100%;
    button {
      pointer-events: none;
      height: 48px;
    }
  }
  .formWrapper {
    max-width: 500px;
    width: 100%;
    .buttonWrapper {
      max-width: 300px;
      margin: 0 0 15px auto;
      display: flex;
      gap: 10px;
    }
  }
`;

export const ServiceWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: flex-end;
  }
  .service {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px;
    max-width: 400px;
    @media screen and (max-width: 577px) {
      margin-bottom: 15px;
    }
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
    }
  }
  .add-more-service {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 10px;
    width: 126px;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    background: var(--white);
    overflow: hidden;
    position: relative;
    .icon {
      cursor: pointer;
      right: 3px;
      top: 12px;
      position: absolute;
    }
    input {
      width: 100%;
      height: 48px;
      outline: none;
      border: none;
      background: transparent;
    }
  }
`;
