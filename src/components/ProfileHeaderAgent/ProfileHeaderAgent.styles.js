import styled from 'styled-components';

export const ProfileHead = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid var(--gray-50);
  border-radius: 8px;
  padding: 20px 15px 15px;
  margin: 0 0 20px;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (min-width: 768px) {
  }

  .holder {
    margin: 0 0 10px;

    @media (min-width: 768px) {
      display: flex;
      align-items: flex-start;
      flex-grow: 1;
    }
    @media (min-width: 992px) {
      margin: 0;
    }
  }

  .btn-holder {
    flex-shrink: 0;
    min-width: 150px;
  }

  .img-box {
    width: 85px;
    height: 85px;
    overflow: hidden;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 0 0 5px;
    position: relative;
    cursor: pointer;
    background: var(--white);
    transition: all 0.3s ease-in-out;

    @media (min-width: 768px) {
      margin: 0;
    }
    @media (min-width: 1430px) {
      width: 96px;
      height: 96px;
    }

    &:hover {
      &::before {
        visibility: visible;
        opacity: 1;
      }

      .ico {
        top: 50%;
        visibility: visible;
        opacity: 1;
      }
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      background: rgba(0, 0, 0, 0.7);
    }

    .ico {
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--white);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .text-box {
    flex-grow: 1;

    @media (min-width: 768px) {
      padding: 0 0 0 10px;
    }
    @media (min-width: 1430px) {
      padding: 0 0 0 20px;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 12px;
      .licence {
        color: var(--gray-400);
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
      }
      @media (min-width: 1430px) {
        font-size: 24px;
        line-height: 28px;
      }
    }
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    color: var(--gray-400);
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    @media (min-width: 1430px) {
      gap: 30px;
      font-size: 16px;
      line-height: 20px;
    }

    li {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .loader {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #000;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
`;
