import styled from "styled-components";

export const StyledLoanProduct = styled.form`
  position: relative;
  max-height: 500px;
  overflow: auto;
  padding-right: 10px;
  .graph-holder {
    border-radius: 16px;
    background: var(--white);
    border: 1px solid var(--gray-50);
    padding: 20px 0;
    .highcharts-axis-title {
      display: none;
    }
    .title {
      display: block;
      margin-left: 20px;
    }
  }
  .date {
    display: block;
    font-weight: 500;
    margin: 0 0 10px;
  }

  .input-wrap {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-bottom: 32px;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .selectDropDown {
    position: relative;

    .label-text {
      display: block;
      font-size: 14px;
      font-weight: 400;
      margin: 0 0 10px;
    }
  }
  .graph {
    width: 100%;
    margin: 30px 0;
  }
  .info-holder {
    margin-bottom: 20px;
  }
`;
export const ListCompare = styled.ul`
  width: 100%;
  .cross {
    position: absolute;
    right: 0;
    top: 2px;
    cursor: pointer;
    color: var(--gray-200);
    &:hover {
      color: black;
    }
  }
`;
export const ListItems = styled.div`
  padding: 0 25px;
  margin-bottom: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 150px;
    right: 150px;
    border: 1px dashed #ecedf1;
    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  .discreption {
    color: var(--gray-400);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${({ $bgColor }) =>
        $bgColor ? $bgColor : "var(--success-500)"};
      left: -20px;
      top: 3px;
    }
  }
  .percentage {
    color: var(--body-text);
    text-align: right;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
`;
