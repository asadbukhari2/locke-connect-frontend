import styled from "styled-components";

export const StyledAudioCall = styled.div`
  border-radius: 16px;
  background: var(--white);
  max-width: 542px;
  height: 523px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  .main {
    text-align: center;
    max-width: 304px;
    width: 100%;
  }
  .profile-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 165px;
    height: 165px;
    border-radius: 50%;
    border: 2px solid var(--primary-500);
    margin: 0 auto 25px auto;
  }
  .profile {
    width: 142px;
    height: 142px;
    border-radius: 50%;
    background: var(--gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    img {
      width: 142px;
      height: 100%;
      object-fit: cover;
    }
  }
  .userName {
    display: block;
    margin-bottom: 15px;
    color: var(--body-text);
    text-align: center;
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
    margin-bottom: 35px;
    color: var(--gray-400);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
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
    background: var(--secondary-500);
  }
  .cancelCall {
    background: var(--danger-500);
  }
  .message {
    background: var(--gray-500);
  }
`;
