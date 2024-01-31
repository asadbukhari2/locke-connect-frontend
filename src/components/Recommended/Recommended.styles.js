import styled from "styled-components";

export const RecommendedStyles = styled.div`
  padding: 24px;
  background: var(--body-text);
  border-radius: 16px;
  width: 100%;
  min-height: 400px;

  @media (min-width: 992px) {
    max-width: 450px;
  }
`;

export const RecomendedText = styled.div`
  width: 100%;

  color: var(--white);
  margin: 0 0 18px;

  @media (min-width: 1420px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;

    /* .badge {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      padding: 6px 8px;
      border-radius: 8px;
      background: var(--primary-300);
      background: red;
    } */
  }

  .tabsWrapper {
    max-width: 198px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid #f5f6f7;
    background: var(--white);
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    color: #6b7a99;
    overflow: hidden;

    @media screen and (max-width: 1420px) {
      margin: 10px auto;
    }
  }
`;
export const SliderTab = styled.div`
  transition: 0.3s all ease-in-out;
  background: ${({ $bg }) => $bg && "var(--primary-500)"};
  color: ${({ $bg }) => $bg && "var(--white)"};
  padding: 10px;
  flex-grow: 1;
  text-align: center;

  /* &:nth-child(2) {
    border-left: 1px solid #f5f6f7;
    border-right: 1px solid #f5f6f7;
  } */

  &:hover {
    background: var(--primary-500);
    color: var(--white);
  }
`;
