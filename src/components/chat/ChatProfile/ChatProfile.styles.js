import styled from 'styled-components';

export const StyledChatProfile = styled.div``;

export const ChatMessageMain = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &:hover {
    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  &::-webkit-scrollbar {
    width: 3px;
    height: 20px;
  }

  .mainWapper {
    position: relative;
    width: 100%;
    padding: 12px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 5px;
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
      position: relative;
      .profileBadgeWrapper {
        display: flex;
        position: relative;
        .profile {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 13px;
          background: var(--black);
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
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
      .badge {
        position: absolute;
        right: -13px;
        top: -10px;
      }
    }
    .time {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-shrink: 0;
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
export const NotificationDropDown = styled.div`
  z-index: 3;
  box-sizing: border-box;
  position: absolute;
  top: 60px;
  right: 5px;
  box-shadow: 0px 48px 64px -16px rgba(29, 41, 57, 0.1);
  width: 113px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid var(--gray-50);
  background: var(--white);
  max-height: ${({ $show }) => ($show ? '128px' : '0')};
  overflow: hidden;
  visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
  transition: 0.3s all ease-in;

  .wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    padding: 8px 12px;
    color: var(--gray-400);
    transition: 0.5s all ease-in-out;
    cursor: pointer;
    p {
      margin: 0;
    }
    &:hover {
      background: var(--primary-25);
      border-radius: 8px;
    }
  }
  .icon {
    max-width: 18px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
