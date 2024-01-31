import styled from "styled-components";

export const HistoryCol = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;
  line-height: 17px;
  margin: 0 0 25px;

  @media (min-width: 768px) {
    margin: 0 0 40px;
  }

  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .holder {
    padding: 15px;
    border-radius: 16px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    border: 1px solid var(--gray-50);
    background: var(--white);

    @media (min-width: 768px) {
      padding: 24px;
      border-radius: 16px;
      font-size: 20px;
      line-height: 24px;
    }
  }

  .info-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .date {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 8px;
    font-weight: 500;

    .state {
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
      line-height: 20px;
      text-transform: capitalize;
      font-weight: 400;
      padding: 6px 12px;
      border-radius: 50px;
      color: var(--white);
      background: var(--success-500);
    }
  }

  .number {
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-400);
  }

  .price {
    display: block;
    font-weight: 500;
  }
`;
