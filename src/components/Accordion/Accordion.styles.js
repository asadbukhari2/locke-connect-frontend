import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  border-bottom: 1px solid var(--gray-50);
`;

export const AccordionHeader = styled.div`
  padding: 12px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding: 18px 0;
  }
`;

export const Icon = styled.span`
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  padding: 0;
  font-size: 14px;
  line-height: 18px;

  .inner {
    padding: 10px;
  }
`;
