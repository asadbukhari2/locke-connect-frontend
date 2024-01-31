import styled from "styled-components";

export const TipColumn = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  background: var(--primary-25);
  @media screen and (min-width: 992px) {
    padding: 20px;
    border-radius: 16px;
  }
  .title {
    display: block;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--primary-500);
    @media screen and (min-width: 992px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 20px;
    }
  }

  .heading {
    display: block;
    font-size: 22px;
    line-height: 18px;
    font-weight: 500;
    margin: 0 0 20px;
    @media screen and (min-width: 992px) {
      font-size: 24px;
      line-height: 28px;
      margin: 0 0 10px;
    }
  }

  .view-all {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    line-height: 20px;
    color: var(--primary-500);
  }
`;
