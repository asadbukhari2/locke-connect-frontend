import styled from 'styled-components';

export const StyledLegal = styled.div`
  padding: 20px;
  background: var(--white);
  border-radius: 20px;
  width: 100%;
  .wrapper {
    max-height: 600px;
    overflow-y: auto;
    padding: 20px 15px;
    text-align: left;
    color: var(--gray-400);
    background: var(--white);
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;

    ::-webkit-scrollbar {
      width: 8px;
      height: 20px;
    }
    .title {
      display: block;
      margin-bottom: 15px;
      color: var(--body-text);
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      text-align: left;
    }
  }
`;
