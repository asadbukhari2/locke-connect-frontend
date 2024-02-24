import styled, { css } from 'styled-components';
export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(50, 59, 75, 0.1);
  backdrop-filter: blur(4px);
  z-index: 99999;
  padding: 20px;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  ${({ $alignMiddle }) =>
    $alignMiddle &&
    css`
      align-items: center;
      background: rgba(50, 59, 75, 0.9);
    `}
`;

export const ContentHolder = styled.div`
  position: relative;
  padding: 50px 0 20px 0;
  max-width: ${({ width }) => (width ? width : '100%')};
  width: ${({ width }) => (width ? '100%' : '')};
  padding: ${({ padding }) => (padding ? padding : '')}; //must prop
  background: ${({ bg }) => (bg ? bg : '')}; //must props
  animation: myAnim 0.3s ease;
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .closer {
    z-index: 5;
    cursor: pointer;
    position: absolute;
    top: ${({ $top }) => ($top ? $top : '70px')};
    right: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    background: var(--white);
    transition: all 0.3s ease-in-out;
    color: var(--black);
    &:hover {
      background: var(--primary-100);
      border: 1px solid var(--gray-500);
    }
  }
`;
