import styled, { css } from "styled-components";

const styles = css`
  position: relative;
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 17px;
  }

  ${({ responsive }) =>
    responsive
      ? css`
          @media (min-width: 992px) {
            display: table-cell;
            padding: 12px 8px;

            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              padding-right: 0;
            }
          }
        `
      : css`
          display: table-cell;
          padding: 12px 8px;

          &:first-child {
            padding-left: 0;
          }
          &:last-child {
            padding-right: 0;
          }
        `}
`;

export const Th = styled.th`
  ${styles}
  background: var(--gray-3);
  padding-top: 12px;
  padding-bottom: 12px;
  text-transform: capitalize;
  font-weight: 500;
  color: var(--gray-400);
`;

export const Td = styled.td`
  ${styles}
  ${({ responsive }) =>
    responsive &&
    css`
      display: flex;
      justify-content: space-between;

      @media (max-width: 991px) {
        padding: 7px 0;

        /* &:last-child {
          height: 0;
          padding: 0;
        }
        &:nth-child(odd) {
          background: var(--gray-3);
          border-radius: 8px;
        } */
      }
      &:before {
        content: attr(data-th);
        font-weight: bold;
        display: inline-block;
        color: var(--gray);
        padding-right: 12px;

        @media (min-width: 992px) {
          display: none;
        }
      }
    `}
`;
