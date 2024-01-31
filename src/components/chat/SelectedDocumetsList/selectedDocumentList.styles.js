import styled from "styled-components";

export const DocumentContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  padding: 0px 10px;
  overflow-x:auto;
`;

export const DocumentItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 2px;
  max-width: 400px;
`;

export const DocumentInfo = styled.div`
  margin-bottom: 0px;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Value = styled.div`
  margin-top: 5px;
  margin-right: 10px;
`;
export const StyledButton = styled.button`
  margin-right: 10px;
  font-size: 24px;
`;

export const UrlLink = styled.a`
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
