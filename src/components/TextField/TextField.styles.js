import styled, { css } from 'styled-components';

export const StyledTextField = styled.div`
  width: 100%;
  color: var(--gray-400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  position: relative;
  label {
    display: block;
  }
  .label {
    color: var(--body-text);
    margin-bottom: 10px;
  }
  .error {
    position: absolute;
    bottom: -17px;
    color: var(--danger-500);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    p {
      margin: 0;
    }
  }
  figure {
    max-width: 16px;
    margin: 0;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .question {
      margin-left: auto;
      cursor: pointer;
      position: relative;
      font-size: 12px;
      line-height: 15px;
      font-weight: 400;
      .toolTip {
        position: absolute;
        width: 150px;

        background: var(--primary-200);
        border-radius: 5px;
        bottom: 100%;
        color: #fff;
        display: block;
        right: 0px;
        margin-bottom: 15px;
        opacity: 0;
        padding: 5px 10px;
        pointer-events: none;
        position: absolute;
        -webkit-transform: translateY(10px);
        -moz-transform: translateY(10px);
        -ms-transform: translateY(10px);
        -o-transform: translateY(10px);
        transform: translateY(10px);
        -webkit-transition: all 0.25s ease-out;
        -moz-transition: all 0.25s ease-out;
        -ms-transition: all 0.25s ease-out;
        -o-transition: all 0.25s ease-out;
        transition: all 0.25s ease-out;
        -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
        -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
        -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
        -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
        &:before {
          bottom: -20px;
          content: ' ';
          display: block;
          height: 20px;
          left: 0;
          position: absolute;
          width: 100%;
        }
        &:after {
          border-left: solid transparent 5px;
          border-right: solid transparent 5px;
          border-top: solid var(--primary-200) 5px;
          bottom: -5px;
          content: ' ';
          height: 0;
          right: 5px;
          position: absolute;
          width: 0;
        }
      }
      &:hover {
        .toolTip {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;
export const InputStyled = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? 'var(--danger-500)' : 'var(--gray-50) ')};
  background: var(--white);
  box-sizing: border-box;
  margin-bottom: 8px;
  overflow: hidden;
  ${({ $disable }) =>
    $disable &&
    css`
      background: var(--danger-500);
    `}
  .iconWrapper {
    position: absolute;
    left: 10px;
  }
  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
    `}
  input {
    padding: 0 16px;
    background: var(--white) !important;
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    font-family: 'Jost';
    ${({ $disable }) =>
      $disable &&
      css`
        background: var(--primary-50) !important;
      `}

    ${({ $hasIcon }) =>
      $hasIcon &&
      css`
        padding: 0 16px 0 32px;
      `}
  }

  /* Autofill styles */
  input:-webkit-autofill {
    background: var(--white) !important;
  }

  /* For Edge and Firefox */
  input:-moz-autofill {
    background: var(--white) !important;
  }

  /* For newer versions of Firefox */
  input:-internal-autofill-selected {
    background: var(--white) !important;
  }
  input:-webkit-autofill::before,
  input:-webkit-autofill::after {
    content: none !important;
  }
`;
