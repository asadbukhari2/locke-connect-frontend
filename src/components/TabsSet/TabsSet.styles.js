import styled, { css } from "styled-components";

export const TabsList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: wrap;
  justify-content: center;
  gap: 6px;
  padding-right: ${({ $todayRate }) => ($todayRate ? "42px" : "")};

  @media (min-width: 768px) {
    gap: 30px;
    justify-content: flex-start;
  }
`;

export const TabButton = styled.button`
  display: block;
  font-size: 12px;
  line-height: 16px;
  /* font-size: ${({ $todayRate }) => ($todayRate ? "12px" : "14px")}; */
  font-weight: 500;
  text-transform: uppercase;
  font-family: var(--base-font-family);
  color: var(--gray-400);
  padding: 8px;
  margin: 0;
  border: 1px solid var(--gray-400);
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "var(--white)" : "var(--gray-400)")};
  width: ${({ $todayRate }) => ($todayRate ? "100%" : "30%")};
  background: ${(props) =>
    props.isActive ? "var(--body-text)" : "var(--white)"};

  ${({ $responsive }) =>
    $responsive &&
    css`
      width: 48%;
    `};

  @media (min-width: 768px) {
    width: auto;
    font-size: 16px;
    line-height: 20px;
    padding: 0 0 8px;
    text-transform: capitalize;
    border-radius: 0;
    border-width: 0 0 2px;
    border-style: solid;
    border-color: ${(props) =>
      props.isActive ? "var(--body-text)" : "var(--white)"};
    color: ${(props) =>
      props.isActive ? "var(--body-text)" : "var(--gray-400)"};
    background: none;
  }
`;

export const TabContent = styled.div`
  padding: 25px 0 0;
  margin-top: -1px;
  display: ${(props) => (props.isActive ? "block" : "none")};
`;
