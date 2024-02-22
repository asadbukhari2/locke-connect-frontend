import styled from 'styled-components';

export const StyledAudioCall = styled.div`
  border-radius: 16px;
  background: var(--white);
  max-width: 1156px;
  width: 100%;
  padding: 24px;

  .main {
    position: relative;
    border-radius: 16px;
    width: 100%;
    height: 645px;
    overflow: hidden;
    margin-bottom: 32px;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 180px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 23.89%, rgba(0, 0, 0, 0.8) 100%);
      z-index: 5;
    }

    video {
      position: absolute;
      inset: 0;
      width: 100%;
    }

    .CallInfo {
      display: flex;
      align-items: flex-start;
      gap: 24px;
      position: absolute;
      bottom: 16px;
      left: 16px;
      color: var(--white);
      z-index: 6;
      @media screen and (max-width: 768px) {
        position: static;
        color: var(--black);
      }
    }
    .Camera {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 28px;
      line-height: 32px;
    }
  }

  .profile-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #4ecb62;
  }

  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    img {
      width: 50px;
      height: 100%;
      object-fit: cover;
    }
  }

  .userName {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    @media screen and (min-width: 767px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .calling {
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    .text {
      text-align: left;
    }
  }
`;
export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  .circle {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
  .mute {
    border: 1px solid var(--gray-50);
    background: var(--white);
  }
  .video {
    background: ${({ $stopVideo }) => ($stopVideo ? 'var(--danger-500)' : 'var(--secondary-500)')};
  }
  .cancelCall {
    background: var(--danger-500);
  }
  .message {
    background: var(--gray-500);
  }
`;
export const CallingFrom = styled.div`
  width: 285px;
  height: 160px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  border-radius: 12px;
  background: #7c8597;
  overflow: hidden;
  z-index: 6;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 120px;
  }
  .fullScreen {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 8px;
    cursor: pointer;
  }
  .contentWrapper {
    position: relative;
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const VideocallMainWrapper = styled.div`
  z-index: 999;
  position: fixed;
  max-width: 400px;
  top: 50px;
  bottom: 10px;
  transition: 0.3s all ease-in-out;
`;
