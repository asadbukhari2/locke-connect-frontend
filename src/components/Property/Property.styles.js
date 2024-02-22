import styled, { css } from 'styled-components';

export const StyledProperty = styled.div`
  width: 100%;
  position: relative;
  scroll-margin-top: 100px;
  min-height: 800px;

  .pagination {
    padding: 0;
    margin: 30px 0;

    .show {
      display: none;

      @media (min-width: 768px) {
        display: block;
      }
    }

    .pages-holder {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 8px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid var(--gray-50);
        background: var(--white);

        @media (min-width: 768px) {
          width: 45px;
          height: 45px;
        }

        &:hover {
          color: var(--white);
          border-color: (--primary-500);
          background: var(--primary-500);
        }
      }
    }

    .pages {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;

      @media (min-width: 1200px) {
        gap: 10px;
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid var(--gray-50);
        background: var(--white);

        @media (min-width: 768px) {
          width: 45px;
          height: 45px;
        }

        &:hover,
        &.active {
          color: var(--white);
          border-color: (--primary-500);
          background: var(--primary-500);
        }
      }
    }
  }
`;

export const FilterHeader = styled.div`
  margin: 0 0 20px;

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h2 {
    margin: 0 0 5px;
  }

  .text {
    display: block;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: var(--gray-400);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .btn-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;

    li {
      margin: 0;
      .active {
        color: var(--white);
        border-color: var(--body-text);
        background: var(--body-text);
      }
    }

    button,
    a {
      width: 45px;
      height: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 8px;
      border: 1px solid var(--gray-50);
      background: var(--white);
      transition: all ease-in-out 0.3s;

      &:hover,
      .active {
        color: var(--white);
        border-color: var(--body-text);
        background: var(--body-text);
      }
    }
  }
`;

export const FilterWrap = styled.div`
  position: relative;
  .handelDropDown {
    position: absolute;
    z-index: 5;
    top: 60px;
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
    ${({ open }) =>
      open == true
        ? css`
            animation: myAnim 0.2s ease;
            @keyframes myAnim {
              0% {
                opacity: 0;
                transform: translateY(10px);
              }

              100% {
                opacity: 1;
                transform: translateY(0px);
              }
            }
          `
        : css`
            animation: closeAnim 0.2s ease;

            @keyframes closeAnim {
              0% {
                opacity: 1;
                transform: translateY(0px);
              }

              100% {
                opacity: 0;
                transform: translateY(10px);
              }
            }
          `}
  }
  @media (min-width: 992px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: row-reverse;
  }

  .filter-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-flow: wrap;
    gap: 8px;
    text-transform: capitalize;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 9px;
      border-radius: 8px;
      border: 1px solid var(--gray-50);
      background: var(--white);

      @media (min-width: 768px) {
        padding: 12px;
      }
      @media (min-width: 1420px) {
        padding: 16px;
        border-radius: 12px;
      }

      .text {
        display: block;
        font-size: 12px;
        line-height: 15px;
        margin: 0;
        padding: 0;

        @media (min-width: 768px) {
          font-size: 14px;
          line-height: 16px;
        }
      }

      button {
        display: inline-block;
        line-height: 0;
      }
    }
  }
`;

export const StyledPropertyCards = styled.div`
  width: 100%;
  a {
    width: 100%;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 15px;
  }
  @media (min-width: 992px) {
    gap: 24px;
  }
`;
