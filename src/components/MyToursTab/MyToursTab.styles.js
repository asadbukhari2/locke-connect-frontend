import styled from "styled-components";

export const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  text-transform: capitalize;

  &:before {
    content: '';
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    border-radius: 50px;
  }

  &.visted:before {
    background: var(--success-500);
  }
  &.upcoming:before {
    background: var(--warning-500);
  }
`;