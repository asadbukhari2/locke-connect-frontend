import styled from "styled-components";

export const DetailBlock = styled.div`
  width: 100%;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 25px;

  @media (min-width: 768px) {
    margin: 0 0 40px;
  }

  .text {
    display: block;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 15px;
    color: var(--gray-400);
  }

  .holder {
    border-bottom: 1px solid var(--primary-100);
    margin-bottom: 20px;
    padding-bottom: 15px;

    @media (min-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 50px;
      margin-bottom: 40px;
      padding-bottom: 0;
    }

    .left-col {
      flex-grow: 1;
      margin: 0 0 20px;

      @media (min-width: 768px) {
        margin: 0;
      }
    }
  }

  .heading {
    display: block;
    font-size: 24px;
    line-height: 27px;
    font-weight: 500;
    margin: 0 0 10px;
  }
  .subtitle {
    display: block;
    font-weight: 400;
    color: var(--gray-400);
    margin: 0 0 24px;
  }
  .list {
    list-style: none;
    margin: 0;
    padding: 20px 0 0;
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
    justify-content: space-between;

    .title {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      margin-bottom: 7px;
    }
    .text {
      display: block;
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
  }

  .map-col {
      flex-shrink: 0;
      width: 100%;

      @media (min-width: 768px) {
        width: 133px;
      }

      iframe {
        width: 100%;
        height: 148px;
        border: 0;
        border-radius: 12px;
      }
    }
`;

export const Description = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  color: var(--gray-400);
  margin-bottom: 25px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  .title {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 10px;
    color: var(--body-text);
  }
`;

export const ExpandView = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 16px;

  img {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  button {
    position: absolute;
    left: 15px;
    bottom: 15px;
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 116px;
    font-size: 14px;
    line-height: 17px;
    font-family: var(--base-font-family);
    text-transform: capitalize;
    padding: 10px 24px;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    transition: all ease-in-out 0.2s;
    background: var(--white);

    &:hover {
      color: var(--white);
      border-color: var(--primary-300);
      background: var(--primary-300);
    }
  }
`;