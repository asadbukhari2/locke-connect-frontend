import styled from 'styled-components';

export const StyledTableLayout = styled.div`
  margin: ${({ noNegativeMargin }) => (noNegativeMargin ? '' : '0')};
  border-top: 1px solid var(--table-border);
`;

export const TableFilters = styled.div`
  margin-bottom: 10px;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .heading {
    display: block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 12px;

    @media (min-width: 992px) {
      margin-bottom: 0;
    }
  }

  .btnsHolder {
    flex-grow: 1;
    display: flex;

    flex-direction: column;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
    @media (min-width: 992px) {
      justify-content: flex-end;
    }

    button {
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
`;