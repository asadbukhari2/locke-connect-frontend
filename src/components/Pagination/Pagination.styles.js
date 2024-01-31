import styled from 'styled-components';

export const PaginationHolder = styled.div`
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
`;
