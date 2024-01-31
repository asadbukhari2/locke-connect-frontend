import styled from "styled-components";

export const FactsDetail = styled.div`
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
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    padding: 15px;
    border-radius: 16px;
    border: 1px solid var(--gray-50);
    background: var(--white);

    @media (min-width: 768px) {
      gap: 20px;
      padding: 24px;
    }

    .column {
      /* width: 100%; */
    }

    .box {
      width: 100%;
      margin: 0 0 10px;

      @media (min-width: 768px) {
        margin: 0 0 20px;
      }
    }

    .subtitle {
      display: block;
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      margin: 0 0 5px;
    }

    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;
      text-transform: capitalize;

      li {
        padding: 8px 0;
      }
    }
  }
`;
