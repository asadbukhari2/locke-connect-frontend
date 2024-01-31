import styled from "styled-components";

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 325px;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  overflow: auto;
  padding: 20px 16px;
  border-right: 1px solid var(--gray-50);
  background: var(--white);
  transition: all ease-in-out 0.3s;
  transform: translateX(-100%);
  z-index: 99;

  &::-webkit-scrollbar {
    width: 0;
    height: 20px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 100px;
    background: var(--primary-50);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--primary-500);
    border-radius: 100px;
  }

  .aside-active & {
    transform: translateX(0);
  }

  @media (min-width: 992px) {
    top: 80px;
  }
  @media (min-width: 1200px) {
    transform: none;
  }
  @media (min-width: 1420px) {
    top: 94px;
    width: 345px;
  }
`;
