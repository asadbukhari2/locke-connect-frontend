import styled, { css } from "styled-components";

export const StyledChatFooter = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 20px;
  border-radius: 64px;
  border: 1px solid var(--gray-50);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-family: "Jost";
    padding: 0px 15px;
    width: 100%;
    height: 60px;
    color: var(--gray-400);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    outline: none;
    border: none;
  }
`;

export const ChatFooterWidget = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;

  .sentButton {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--primary-500);
    transition: 0.3 all ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;
export const ChatShortCut = styled.div`
  width: ${({ $opner }) => ($opner ? "245px" : "44px")};
  padding-right: 40px;
  height: 44px;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 64px;
  border: 0.5px solid var(--gray-50);
  background: var(--gray-25);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
    padding-bottom: 20px;
    width: 44px;
    height: ${({ $opner }) => ($opner ? "245px" : "44px")};
    position: absolute;
    right: 58px;
    bottom: 0;
    z-index: 2;
  }
  .openShortCut {
    position: absolute;
    right: 58px;

    z-index: 3;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      right: 5px;
      bottom: 5px;
    }
    ${({ $opner }) =>
      $opner &&
      css`
        background: var(--success-500);
        transform: rotate(45deg);
        color: var(--white);
      `}
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: ${({ $opner }) => ($opner ? "100%" : "0")};
    opacity: ${({ $opner }) => ($opner ? "1" : "0")};
    visibility: ${({ $opner }) => ($opner ? "visible" : "hidden")};
    overflow: hidden;
    @media screen and (max-width: 768px) {
      position: absolute;
      flex-direction: column;
      gap: 3px;
    }
  }
  li {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: var(--success-500);
      color: var(--white);

      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(260deg)
          brightness(104%) contrast(103%);
      }
    }
  }
`;
