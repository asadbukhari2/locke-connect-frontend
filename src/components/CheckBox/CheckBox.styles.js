import styled, { css } from 'styled-components';

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    img {
      max-width: 25px;
    }
    @media screen and (min-width: 768px) {
      gap: 10px;
      img {
        max-width: 32px;
      }
    }
  }

  ${({ $type }) =>
    $type === 'checkbox' &&
    css`
      input[type='checkbox'] {
        position: relative;
        border: 2px solid #afb7c6;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 14px;
        width: 14px;
        -webkit-appearance: none;
      }

      input[type='checkbox']:hover {
        opacity: 1;
      }

      input[type='checkbox']:checked {
        background-color: var(--primary-500);
        border: 2px solid var(--primary-500);
        opacity: 1;
      }
      input[type='checkbox']:before {
        content: '';
        position: absolute;
        right: 58%;
        top: 50%;
        width: 4px;
        height: 9px;
        border: solid #fff;
        border-width: 0;
        margin: -1px -1px 0 -1px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
      input[type='checkbox']:checked:before {
        border-width: 0 1.5px 1.5px 0;
      }
    `}
  ${({ $type }) =>
    $type === 'circle' &&
    css`
      input[type='checkbox'] {
        position: relative;
        border: 2px solid #afb7c6;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        -webkit-appearance: none;
      }

      input[type='checkbox']:hover {
        opacity: 1;
      }

      input[type='checkbox']:checked {
        background-color: var(--primary-500);
        border: 2px solid var(--primary-500);
        opacity: 1;
      }
      input[type='checkbox']:before {
        content: '';
        position: absolute;
        right: 50%;
        top: 50%;
        width: 5px;
        height: 10px;
        border: solid #fff;
        border-width: 0;
        margin: -1px -1px 0 -1px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
      input[type='checkbox']:checked:before {
        border-width: 0 2px 2px 0;
      }
    `}
  ${({ $type }) =>
    $type === 'rounded' &&
    css`
      input[type='checkbox'] {
        position: relative;
        border: 2px solid #afb7c6;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        line-height: 0;
        margin: 0 0.6em 0 0;
        outline: 0;
        vertical-align: text-top;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        -webkit-appearance: none;
      }

      input[type='checkbox']:hover {
        opacity: 1;
      }

      input[type='checkbox']:checked {
        border: 2px solid var(--body-text);
        opacity: 1;
      }
      input[type='checkbox']:checked:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--body-text);
        transform: translate(-50%, -50%);
        z-index: 2;
      }
    `}
`;
