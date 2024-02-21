import styled from 'styled-components';

export const StyleBoughtSold = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  overflow: hidden;

  .col {
    padding: 0 0px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 145px;
    height: 145px;
    border-radius: 12px;
    border: 2px solid var(--gray-50);
    @media screen and (max-width: 768px) {
      width: 123px;
      height: 123px;
    }

    &.active {
      color: var(--primary-500);
      input {
        color: var(--primary-500);
      }
    }

    .number {
      display: block;
      font-size: 30px;
      line-height: 34px;
      font-weight: 700;
      margin-bottom: 5px;
      @media screen and (max-width: 768px) {
        font-size: 26px;
        line-height: 30px;
      }
    }

    .text {
      display: block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
  }
  input {
    width: 100%;
    font-size: 30px;
    line-height: 34px;
    font-weight: 700;
    margin-bottom: 5px;
    outline: none;
    border: none;
    &:hover {
      color: var(--primary-500);
    }
    @media screen and (max-width: 768px) {
      font-size: 26px;
      line-height: 30px;
    }
  }
`;
