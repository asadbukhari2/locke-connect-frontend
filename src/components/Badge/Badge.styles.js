import styled, { css } from "styled-components";

export const StyledBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  border-radius: 10px;
  color: var(--white);
  padding: 2px 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  background: var(--primary-500);

  ${({ $alignLeft }) =>
    $alignLeft &&
    css`
      font-size: 12px;
      line-height: 14px;
      padding: 2px 6px;
      height: 20px;
    `}

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
  ${({ $variant }) =>
    $variant == "info" &&
    css`
      background: var(--warning-500);
    `}
  ${({ $variant }) =>
    $variant == "dark" &&
    css`
      background: var(--body-text);
    `}
`;
