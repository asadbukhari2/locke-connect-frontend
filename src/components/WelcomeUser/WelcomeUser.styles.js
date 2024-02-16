import styled from 'styled-components';

export const WelcomeBlock = styled.div`
  width: 100%;
  gap: 15px;
  min-height: 140px;
  overflow: hidden;
  position: relative;
  padding: 16px 16px 114px 16px;
  margin-bottom: 12px;
  border-radius: 16px;
  border: 1px solid var(--gray-50);
  background: var(--white);

  @media (min-width: 768px) {
    padding: 24px 180px 24px 24px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 0 0 24px;
  }

  .text-box {
    width: 100%;
  }

  .title {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin: 0 0 5px;
    color: var(--body-text);

    span {
      color: var(--primary-500);
      text-transform: capitalize;
    }
  }

  h1 {
    margin: 0;
  }

  .img-box {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 140px;
  }
  .lottieWrapper {
    max-width: 200px;
  }
`;
