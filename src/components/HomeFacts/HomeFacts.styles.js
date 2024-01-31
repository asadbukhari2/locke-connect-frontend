import styled from "styled-components";

export const FactsDetail = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;
  line-height: 17px;
  margin: 0 0 20px;

  @media (min-width: 768px) {
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
    border: 1px solid var(--gray-50);
    background: var(--white);

    @media (min-width: 768px) {
      padding: 24px;
    }

    .wrap {
      border-bottom: 1px solid var(--gray-50);
      padding-bottom: 12px;
      margin-bottom: 12px;

      @media (min-width: 768px) {
        padding-bottom: 20px;
        margin-bottom: 22px;
      }

      &:last-child {
        margin-bottom: 0;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 6px 0;

        @media (min-width: 768px) {
          padding: 8px 0;
        }
      }
    }
  }
`;
