import styled from "styled-components";

export const StyledLanguageDropDown = styled.ul`
  border-radius: 12px;
  border: 1px solid var(--gray-50);
  background: var(--white);
  box-shadow: 0px 48px 64px -16px rgba(29, 41, 57, 0.1);
  max-width: 123px;
  width: 100%;
  padding: 8px;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    color: var(--gray-400);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 8px 12px;
    cursor: pointer;
    white-space: nowrap;
    transition: 0.5s all ease-in-out;
    span {
      margin: 0;
    }
    .flag {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      border-radius: 50%;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    &:hover {
      background: var(--primary-25);
      border-radius: 8px;
    }
  }
`;
