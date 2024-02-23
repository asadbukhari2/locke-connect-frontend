import styled, { css } from 'styled-components';

export const DeleteModalWrapper = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 20px;
  padding: 20px;
  text-align: left;
  color: var(--danger-500);

  .title {
    display: block;
    margin-bottom: 15px;
    padding-right: 25px;
    color: var(--body-text);
    text-transform: capitalize;
    font-size: 20px;
    line-height: 24px;
  }
  .info {
    display: block;
    margin-bottom: 10px;
  }
  .buttonWrapper {
    max-width: 300px;
    margin-top: 25px;
    margin-left: auto;
    display: flex;
    gap: 10px;
  }
`;

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
    /* overflow: hidden; */
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
    .toolTip {
      position: absolute;
      width: 150px;
      background: var(--primary-200);
      border-radius: 5px;
      bottom: 100%;
      color: #fff;
      display: block;
      right: 0px;
      margin-bottom: 15px;
      opacity: 0;
      padding: 5px 10px;
      pointer-events: none;
      position: absolute;
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      -ms-transform: translateY(10px);
      -o-transform: translateY(10px);
      transform: translateY(10px);
      -webkit-transition: all 0.25s ease-out;
      -moz-transition: all 0.25s ease-out;
      -ms-transition: all 0.25s ease-out;
      -o-transition: all 0.25s ease-out;
      transition: all 0.25s ease-out;
      -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
      -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
      -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
      -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
      &:before {
        bottom: -20px;
        content: ' ';
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        width: 100%;
      }
      &:after {
        border-left: solid transparent 5px;
        border-right: solid transparent 5px;
        border-top: solid var(--primary-200) 5px;
        bottom: -5px;
        content: ' ';
        height: 0;
        right: 5px;
        position: absolute;
        width: 0;
      }
    }
    &:hover {
      .toolTip {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const SubcriptionStyled = styled.div`
  max-width: 1100px;
  width: 100%;

  .Subscription-main-wrapper {
    margin-bottom: 25px;
    @media screen and (min-width: 991px) {
      display: flex;
      gap: 20px;
    }
  }
  .addArea {
    @media screen and (min-width: 991px) {
      display: flex;
      gap: 20px;
    }
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 25px;
    .title {
      display: block;
      margin-bottom: 15px;
    }
    .map {
      width: 100%;
      margin-bottom: 15px;
    }
    .map-container {
      width: 100%;
      background: red;
      border-radius: 8px;
      overflow: hidden;
      height: 500px;
      @media screen and (min-width: 991px) {
        max-width: 660px;
      }
    }
    .list-wrapper {
      max-width: 100%;
      width: 100%;
      @media screen and (min-width: 991px) {
        max-width: 400px;
      }
      .button-wrap {
        display: flex;
        gap: 10px;
      }
    }
    .list {
      width: 100%;
      background: var(--primary-25);
      border-radius: 8px;
      padding: 15px 20px;
      margin-bottom: 15px;
      ul {
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          .area {
            display: flex;
          }
        }
      }
    }
  }
`;

export const SubscriptionTypeWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border: 1px solid ${({ $active }) => ($active ? 'var(--primary-500)' : 'var(--gray-300)')};
  color: var(--primary-500);
  padding: 15px 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
  .price {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    @media screen and (min-width: 576px) {
      font-size: 30px;
      line-height: 34px;
    }
  }
  .duration {
    color: var(--body-text);
  }
  .priceWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 575px) {
      margin-bottom: 10px;
    }
  }
  .checkBox {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PaymentWrapper = styled.div`
  color: var(--gray-400);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  @media screen and (min-width: 991px) {
    max-width: 350px;
  }
  strong {
    display: block;
    margin-bottom: 20px;
  }
  .paymentCard {
    display: flex;
    gap: 7px;
    .flag {
      max-width: 45px;
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
  .title {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }
  .saved-card,
  .addcard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .dlt-icon {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      border: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--gray-50);
      cursor: pointer;
      transition: 0.3s all ease-in-out;
      &:hover {
        background: var(--danger-600);
        img {
          filter: invert(96%) sepia(40%) saturate(30%) hue-rotate(162deg) brightness(117%) contrast(100%);
        }
      }
    }
    .addcard {
      max-width: 300px;
    }
  }
  .paymentForm {
    @media screen and (min-width: 991px) {
      max-width: 400px;
    }
    .combine-field {
      display: flex;
      gap: 13px;
    }
    .button-wrapper {
      display: flex;
      gap: 10px;
      margin-bottom: 25px;
    }
  }
`;
