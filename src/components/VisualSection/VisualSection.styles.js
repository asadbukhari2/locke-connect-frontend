import styled from 'styled-components';

export const VisualBlock = styled.div`
  color: var(--white);
  margin: 0 0 24px;

  @media (min-width: 992px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 24px;
  }

  .left-column {
    flex-grow: 1;
    margin-bottom: 20px;

    @media (min-width: 992px) {
      margin-bottom: 20px;
    }
  }

  .right-column {
    width: 100%;
    margin: 0 auto;
    flex-shrink: 0;
    overflow: hidden;

    @media (min-width: 992px) {
      margin: 0;
      width: 300px;
    }
    @media (min-width: 1420px) {
      width: 450px;
      display: block;
      overflow: visible;
    }
  }
`;

export const InfoWrap = styled.div`
  width: 100%;
  color: var(--body-text);

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  @media (min-width: 1420px) {
    gap: 24px;
  }
`;
export const Column = styled.div`
  cursor: pointer;
  min-width: 164px;
  position: relative;
  padding: 16px 16px 120px;
  margin: 0 0 15px;
  border-radius: 16px;
  border: 1px solid ${({ $border }) => ($border ? 'var(--primary-500)' : 'var(--gray-50)')};
  background: var(--white);

  @media (min-width: 768px) {
    min-height: 280px;
    margin: 0;
    padding: 20px 20px 160px;
  }
  @media (min-width: 1200px) {
    min-height: 280px;
  }
  @media (min-width: 1420px) {
    min-height: 290px;
  }

  &:hover {
    border: 1px solid var(--primary-500);

    .view-all .ico {
      transform: translateX(5px);
    }
  }

  .heading {
    display: block;
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    text-transform: capitalize;
    margin: 0 0 10px;

    @media (min-width: 992px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .view-all {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: var(--primary-500);

    .ico {
      position: relative;
      transition: all 0.3s;
    }
  }

  .img-box {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 164px;
  }
  .lottieWrapper {
    max-width: 200px;
  }
`;
