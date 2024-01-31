import styled from "styled-components";

export const AccordionHolder = styled.div`
  width: 100%;
  margin: 0 0 25px;

  @media (min-width: 768px) {
    margin: 0 0 50px;
  }
`;

export const InfoContent = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }

  .column {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--gray-100);

    @media (min-width: 768px) {
      border: 0;
      margin: 0;
      padding: 0;
    }
  }

  .title {
    display: block;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 400;

    li {
      padding: 5px 0;
    }
  }
`;