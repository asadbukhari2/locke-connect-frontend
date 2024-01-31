import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 16px;
  background: var(--primary-25);

  .title {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: var(--primary-500);
    margin-bottom: 15px;
  }
  .price {
    display: block;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    color: var(--primary-500);
    margin-bottom: 15px;
  }

  .progressbar {
    display: flex;
    width: 100%;
    height: 16px;
    overflow: hidden;
    border-radius: 5px;
    margin: 0 0 20px;

    .track {
      display: block;
      height: 16px;
    }

    .interest {
      background: #a9a6bb;
    }
    .tax {
      background: #e4a0ad;
    }
    .interest2 {
      background: #93b1c5;
    }
  }

  .price-lsit {
    list-style: none;
    margin: 0 0 20px;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 4px 0;
      position: relative;
    }

    .box {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      border-radius: 4px;

      &.interest {
        background: #a9a6bb;
      }
      &.tax {
        background: #e4a0ad;
      }
      &.interest2 {
        background: #93b1c5;
      }
    }

    .text {
      display: block;
      flex-grow: 1;
    }

    .price {
      display: block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: var(--body-text);
      margin: 0;
    }
  }

  button {
    font-size: 14px;
    line-height: 18px;
    padding: 12px 10px;
  }

  .form-holder {
    width: 100%;
    padding: 20px 0 1px;
    margin: 0 0 10px;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
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
