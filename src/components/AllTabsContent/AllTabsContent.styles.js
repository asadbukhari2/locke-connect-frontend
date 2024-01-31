import styled from "styled-components";

export const TabContent = styled.div`
  position: relative;

  .title {
    display: block;
    text-align: center;
    font-size: 20px;
    line-height: 23px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 10px;
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 0 0 15px;
      margin: 0 0 15px;
      border-bottom: 1px solid var(--gray-50);

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
    .left-box {
      display: flex;
      align-items: center;
      gap: 12px;
      max-width: 100%;
      margin: 0 0 10px;

      @media (min-width: 768px) {
        gap: 16px;
        max-width: 330px;
      }
    }
    .count {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;
      padding: 5px;
      border-radius: 50px;
      border: 1px solid var(--gray-50);
      background: var(--Colors-Fills-fill-container, #FFF);
    }
    .heading {
      display: block;
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      margin: 0;
    }

    .list-box {
      display: flex;
      align-items: center;
      flex-flow: wrap;
      justify-content: center;
      gap: 20px;
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;

      @media (min-width: 768px) {
        justify-content: flex-start;
      }

      .text {
        display: block;
      }
    }
  }
`;
