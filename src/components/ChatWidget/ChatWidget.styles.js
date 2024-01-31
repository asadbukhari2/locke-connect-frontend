import styled from "styled-components";

export const ChatWidgetStyles = styled.div`
  background: var(--white);
  margin-bottom: ${({ $marginB }) => ($marginB ? "40px" : "0px")};

  .title {
    padding-left: 20px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    display: flex;
    align-items: center;
    gap: 12px;
    p {
      margin: 0;
    }
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
    margin-top: 8px;
    p {
      margin-bottom: 0;
    }
  }
`;
export const ChatMessageMain = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  /* max-width: 297px; */
  width: 100%;
  max-height: 218px;
  overflow-y: auto;

  /* &:hover {
    &::-webkit-scrollbar {
      width: 8px;
    }
  } */

  &::-webkit-scrollbar {
    width: 5px;
    height: 20px;
  }

  li {
    position: relative;
    width: 100%;
    padding: 12px 10px 12px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    border-radius: 16px;

    &:hover {
      background: var(--primary-25);
    }

    .chatImageText {
      display: flex;
      align-items: flex-start;
      gap: 14px;

      .profile {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 13px;
      }

      .text {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;

        strong {
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          margin-bottom: 4px;
        }
        p {
          max-width: 163px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .time {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      p {
        margin: 0;
      }
      .dots {
        cursor: pointer;
      }
    }
  }
`;
