import styled from 'styled-components';

export const SearchForm = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin: 0 0 10px;

  @media (min-width: 992px) {
    width: 276px;
    margin: 0;
  }
  .input-search {
    position: relative;
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 20px;
    font-family: var(--base-font-family);
    padding: 10px 50px 10px 35px;
    border-radius: 50px;
    border: 1px solid transparent;
    outline: none;
    background: var(--white);

    &:focus {
      border-color: var(--body-text);
      box-shadow: 0px 9px 9px 3px rgba(29, 41, 57, 0.04);
    }
  }

  .ico {
    position: absolute;
    top: 15px;
    left: 10px;
  }

  .btn-search {
    position: absolute;
    top: 4px;
    right: 5px;
    width: 42px;
    height: 42px;
    border-radius: 50px;
    color: var(--white);
    transform: rotate(90deg);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a3855;
    border: 1px solid #f0ebff;
    background: ${({ $open }) => ($open ? 'var(--secondary-500)' : '#F7F4FF')};

    svg {
      fill: ${({ $open }) => ($open ? 'white' : '#6833FF')};
    }
    &:hover {
      background: var(--secondary-500);
      svg {
        fill: white;
      }
    }
  }
`;
