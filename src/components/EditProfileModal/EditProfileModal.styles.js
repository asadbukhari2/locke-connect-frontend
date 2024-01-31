import styled from "styled-components";

export const StyledEditProfileModal = styled.form`
  border-radius: 16px;
  border: 1px solid var(--gray-50);
  background: var(--white);
  padding: 20px;
  width: 330px;
  .title {
    display: block;
    margin-bottom: 20px;
    color: var(--body-text);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
  .buttonWrapper {
    max-width: 76px;
    margin: 24px auto 0 auto;
  }
  .input-group {
    margin-bottom: 15px;
  }
`;
