import styled, { css } from 'styled-components';

export const ChatWidgetStyles = styled.div`
  background: var(--white);
  margin-bottom: ${({ $marginB }) => ($marginB ? '40px' : '0px')};
  width: 100%;
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
  ul {
    ul {
      &::-webkit-scrollbar {
        width: 8px;
      }
    }
  }
`;
export const ChatMessageMain = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 5px;
  /* max-width: 297px; */
  width: 100%;
  max-height: ${({ $height }) => ($height ? '' : '218px')};

  overflow-y: ${({ $height }) => ($height ? '' : 'auto')};

  /* &:hover {
    &::-webkit-scrollbar {
      width: 8px;
    }
  } */

  /* &::-webkit-scrollbar {
    width: 5px;
    height: 20px;
    transition: all ease-in-out 0.3s;
  } */

  li {
    width: 100%;
    padding: 12px 10px 12px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    gap: 5px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    border-radius: 16px;
    ${({ $height }) =>
      $height &&
      css`
        &:nth-child(even) {
          background: var(--primary-25);
        }
      `};

    &:hover {
      background: var(--primary-25);
    }

    .chatImageText {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      .settingImg {
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

      color: var(--white);
      /* .badge {
        box-sizing: border-box;
        border-radius: 8px;
        background: var(--secondary-500);
        padding: 6px;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      } */
      .dots {
        cursor: pointer;
        position: absolute;
        bottom: 10px;
      }
    }
  }
`;
export const SettingImage = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: ${({ bg }) => `var(${bg})`};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationDropDown = styled.div`
  z-index: 2;
  box-sizing: border-box;
  position: absolute;
  top: 70px;
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
  height: ${({ $show }) => ($show ? '128px' : '0')};
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
