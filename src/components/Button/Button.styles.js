import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : "10px")};
  padding: 12px 18px;
  border-radius: 8px;
  font: 400 14px/17px "Jost";
  width: ${({ $width }) => ($width ? $width : "100%")};
  min-width: 50px;
  background: var(--body-text);
  color: var(--white);
  transition: 0.3s all ease-in-out;

  &:hover {
    opacity: 0.85;
    box-shadow: 0px 9px 9px 3px rgba(29, 41, 57, 0.04);
  }

  ${({ $sm }) =>
    $sm &&
    css`
      display: flex;
      align-items: center;
      padding: 12px 15px;
      min-height: 44px;
    `}

  /***** Background-Variants-Start *****/
  ${({ $variant }) =>
    $variant == "primary" &&
    css`
      background: var(--primary-500);
    `}
  ${({ $variant }) =>
    $variant == "secondary" &&
    css`
      background: var(--secondary-500);
    `}
  ${({ $variant }) =>
    $variant == "success" &&
    css`
      background: var(--success-500);
    `}
  ${({ $variant }) =>
    $variant == "danger" &&
    css`
      background: var(--danger-500);
    `}
  /*****************Background Variants End*********************/


  /*****************Border Variants Start*********************/

  ${({ $outline }) =>
    $outline &&
    css`
      border: 1px solid var(--gray-50);
      background: transparent;
      color: var(--body-text);

      &:hover {
        border-color: var(--body-text);
      }
    `}
  ${({ $outline }) =>
    $outline == "primary" &&
    css`
      border: 1px solid var(--primary-500);
      background: transparent;
      color: var(--primary-500);

      &:hover {
        background: var(--primary-500);
        color: var(--white);
      }
    `}
  ${({ $outline }) =>
    $outline == "secondary" &&
    css`
      border: 1px solid var(--secondary-500);
      background: transparent;
      color: var(--secondary-500);

      &:hover {
        background: var(--secondary-500);
        color: var(--white);
      }
    `}
  ${({ $outline }) =>
    $outline == "success" &&
    css`
      border: 1px solid var(--success-500);
      background: transparent;
      color: var(--success-500);

      &:hover {
        background: var(--success-500);
        color: var(--white);
      }
    `}
  ${({ $outline }) =>
    $outline == "danger" &&
    css`
      border: 1px solid var(--danger-500);
      background: transparent;
      color: var(--danger-500);

      &:hover {
        background: var(--danger-500);
        color: var(--white);
      }
    `} /*****************Border Variants End*********************/

    .loader {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
