import styled from "styled-components";

export const StyledChatAside = styled.div`
  flex-grow: 1;
  width: 100%;
  .title {
    padding-left: 10px;
    color: #2a3855;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .viewAll {
    padding-left: 20px;
    color: var(--primary-500);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    cursor: pointer;
    p {
      margin-bottom: 0;
    }
  }
  ul {
    &::-webkit-scrollbar {
      width: 8px;
    }
  }
`;

export const ChatProfileWrapper = styled.ul`
  width: 100%;
  margin: 15px 0;
  max-height: ${({ $height }) => ($height ? "218px" : "800px")};
  overflow-y: auto;
  overflow-x: hidden;
`;
