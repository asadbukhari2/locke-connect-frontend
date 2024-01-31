import styled from "styled-components";

export const RecentSearch = styled.div`
  padding: 20px 15px;
  position: absolute;
  top: 70px;
  right: 0;
  width: 276px;
  border-radius: 12px;
  z-index: 10;
  box-shadow:
    0px 5px 8px -2px rgba(29, 41, 57, 0.02),
    0px 16px 16px -4px rgba(29, 41, 57, 0.08);
  background: var(--white);
  ::-webkit-scrollbar {
    width: 1px;
    height: 20px;
  }
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--black);
    p {
      margin: 0;
    }
  }
  ul {
    height: 280px;
    overflow: hidden;
    padding-right: 5px;
    overflow-y: scroll;

    li {
      color: var(--body-text);
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 8px;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background: var(--primary-25);
      }
    }
  }
`;
