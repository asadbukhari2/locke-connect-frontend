import styled, { css } from 'styled-components';
// import backgroundImg from '../../../../public/chat-arrow.png';

export const StyledChatMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  margin: 0 0 25px;
  padding: 10px 20px;
  .img-box {
    flex-shrink: 0;
    display: block;
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
    background: var(--white);
    ${({ $variant }) =>
      $variant == 'ai' &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    ${({ $variant }) =>
      $variant == 'user'
        ? css`
            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `
        : css`
            img {
              display: block;
              max-width: 100%;
              height: auto;
            }
          `}
  }
  .text-area {
    width: 100%;
  }
  .chat-box {
    position: relative;
    max-width: 480px;
    display: inline-block;
    vertical-align: top;
    font-size: 16px;
    line-height: 24px;
    padding: ${({ $variant }) => ($variant == 'user' ? '0 10px' : '16px')};
    border-radius: 0 24px 24px 24px;
    margin-bottom: 5px;

    background: ${({ $variant }) => ($variant == 'user' ? 'transparent' : '#ded9fc')};
    color: ${({ $variant }) => ($variant == 'user' ? '#5E3C2D' : '#2A3855')};
    p {
      margin: 0 0 10px;

      &:last-child {
        margin: 0;
      }
    }
  }
  .chat-time {
    display: block;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray-400);
  }
  .document {
    .iconWrapper {
      text-align: center;
      display: block;
      width: 100%;
      line-height: 1;
    }
    .docTitle {
      cursor: pointer;
      max-width: 200px;
      text-overflow: ellipsis;
      overflow: hidden;
      color: var(--primary-400);
    }
  }
  .userImageWrapper {
    width: 50px;
    height: 50px;
    margin: 0 auto 7px auto;
    border: 2px solid var(--secondary-500);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    background: var(--black);
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .userName {
    text-align: center;
    display: block;
    margin-bottom: 10px;
    color: var(--body-text);
  }
  .propertyWrapper {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
    .text {
      max-width: 250px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      .propertyName {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
        font-weight: 600;
      }
      .location {
        display: flex;
        gap: 5px;
        font-size: 14px;
        font-weight: 20px;
        color: var(--gray-300);
        p {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`;
