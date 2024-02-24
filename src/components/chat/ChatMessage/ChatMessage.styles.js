import styled from "styled-components";
// import backgroundImg from '../../../../public/chat-arrow.png';

export const StyledChatMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  margin: 0 0 25px;

  .img-box {
    flex-shrink: 0;
    display: block;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 12px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
    padding: 16px;
    border-radius: 0 12px 12px 12px;
    margin-bottom: 5px;
    background: var(--white);
    box-shadow:
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: -13px;
      border-right: 14px solid #fff;
      border-top: 0px solid transparent;
      border-bottom: 14px solid transparent;
      /* filter: drop-shadow(0 5px 5px #000000); */
      filter: drop-shadow(rgba(0, 0, 0, 0.05) -3px 1px 2px);
    }

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
    cursor: pointer;
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
