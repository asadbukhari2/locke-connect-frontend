import styled from "styled-components";

export const ProperCardWrraper = styled.div`
  width: 100%;
  margin: 0 0 15px;
  position: relative;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin: 0;
  }

  &:hover {
    .imgWrapper {
      img {
        transform: scale(1.1);
      }
    }
  }

  .imgWrapper {
    width: 100%;
    overflow: hidden;
    border-radius: 8px;

    @media (min-width: 768px) {
      border-radius: 12px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      transition: all ease-in-out 0.3s;
    }
  }
`;

export const CardText = styled.div`
  color: var(--gray-400);
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  gap: 8px;

  @media (min-width: 992px) {
    padding-top: 24px;
  }

  .price {
    margin: 0;
    color: var(--primary-500);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
  .name {
    margin: 0;
    color: var(--body-text);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .location {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    p {
      margin: 0;
    }
  }
  .info {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    li {
      position: relative;

      &:first-child {
        &::before {
          display: none;
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: -8px;
        width: 4px;
        height: 4px;
        border-radius: 50px;
        background: var(--body-text);
      }
    }

    .text {
      display: block;
    }
  }
`;

export const FloatingSocialIcon = styled.div`
  position: absolute;
  top: 12px;
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: var(--white);
  border-radius: 50%;
  right: ${({ right }) => (right ? right : "12px")};
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  color: var(--danger-600);
  &:hover {
    background: var(--primary-100);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    color: var(--white);
    .share {
      fill: var(--primary-500);
    }
  }
`;
