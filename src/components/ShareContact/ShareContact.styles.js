import styled from 'styled-components';

export const StyledShareContact = styled.div`
  padding: 25px;
  background: #fff;
  border-radius: 20px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: var(--gray-400);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
  .title {
    display: block;
    margin-bottom: 25px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-align: left;
  }
  .linkWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--primary-500);
    border-radius: 8px;
    padding: 10px 10px;
    overflow: hidden;
    .text {
      text-align: left;
      max-width: 420px;
      margin-right: auto;
      overflow: hidden;
      white-space: nowrap;
    }
    .copyText {
      padding-left: 5px;
      white-space: nowrap;
      cursor: pointer;
      display: flex;
      align-items: center;
      background: var(--white);
      color: var(--primary-500);
      gap: 10px;
      @media screen and (max-width: 768px) {
        gap: 5px;
      }
    }
  }
`;
