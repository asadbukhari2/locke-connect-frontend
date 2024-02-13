import styled from 'styled-components';

export const StyledMortgageCalc = styled.div`
  max-width: 400px;
  width: 100%;
  background: var(--white);
  border-radius: 20px;
  padding: 30px 20px;
  .title {
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
  }
  .cobineFields {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }
  .select {
    margin: 10px 0;
  }
  button {
    margin-top: 10px;
  }
`;
