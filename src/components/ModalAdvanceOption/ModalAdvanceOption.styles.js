import styled from "styled-components";

export const ModalContent = styled.div`
  width: 100%;
  padding: 24px;
  margin-bottom: 20px;
  border-radius: 16px;
  background: var(--white);
  position: relative;
  .bookingSuccess {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--success-25);
    margin: 25px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bookingTitle {
    display: block;
    margin: 10px 0;
    color: var(--body-text);
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .para-booking {
    display: block;
    margin-bottom: 25px;
    color: var(--gray-400);
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    max-width: 224px;
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
    background: var(--white);
  }
  .title {
    display: block;
    font-size: 20px;
    line-height: 23px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 5px;
  }

  .form-holder {
    width: 100%;
    padding: 15px 0 5px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;

    input {
      border: 1px solid var(--gray-50);
      background: var(--white);
    }
  }

  .btn-option {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    padding: 0;
    border: 0;
    outline: none;
    color: var(--primary-500);
  }
`;
