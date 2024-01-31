import styled from "styled-components";

export const TopHeadStyeld = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  margin: 0 0 20px;
  font-family: var(--base-font-family);

  @media (min-width: 768px) {
  }

  button {
    padding: 0;
    font-family: var(--base-font-family);
  }

  .btn-back {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-500);
  }

  .social-list {
    display: flex;
    align-items: center;
    gap: 4px;

    @media (min-width: 768px) {
      gap: 10px;
    }

    li {
      margin: 0;
      &:nth-child(2) {
        margin-left: 10px;
        button {
          gap: 10px;
          color: red;
          font-weight: 500;

          img {
            filter: invert(14%) sepia(89%) saturate(7498%) hue-rotate(360deg)
              brightness(122%) contrast(108%);
          }
        }
      }
      button {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--body-text);
        transition: 0.3s all ease-in-out;

        svg {
          color: #606f8d;
        }

        .logout {
          color: var(--danger);
          svg {
            color: var(--danger);
          }
        }
      }
      &:hover {
        &:nth-child(1) {
          button {
            color: var(--primary-500);
            svg {
              color: var(--primary-500);
            }
          }
        }
      }
    }
  }
`;
