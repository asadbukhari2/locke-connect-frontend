import styled from "styled-components";

export const DetialHolder = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;
  line-height: 17px;
  margin: 0 0 25px;

  @media (min-width: 768px) {
    margin: 0 0 40px;
  }

  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin: 0 0 15px;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  .holder {
    padding: 15px;
    border-radius: 16px;
    border: 1px solid var(--gray-50);
    background: var(--white);

    @media (min-width: 768px) {
      padding: 24px;
    }

    .subtitle {
      display: block;
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      margin: 0 0 5px;
    }

    .list {
      display: flex;
      align-items: center;
      flex-flow: wrap;
      list-style: none;
      margin: 0 0 20px;
      padding: 0;
      font-size: 15px;
      line-height: 17px; 
      font-weight: 500;
      text-transform: capitalize;

      @media (min-width: 768px) {
        font-size: 14px;
        font-weight: 400;
      }

      li {
        position: relative;
        padding: 0 15px;
        margin: 0 0 8px;

        @media (min-width: 768px) {
          margin: 0 0 5px;
        }

        &:first-child {
          padding-left: 0;

          &:before {
            display: none;
          }
        }

        &:before {
          content: '';
          position: absolute;
          top: 5px;
          left: -2px;
          width: 6px;
          height: 6px;
          border-width: 1px 1px 0 0;
          border-style: solid;
          border-color: var(--body-text);
          transform: rotate(45deg);
        }

        &.active {
          color: var(--primary-500);
        }
      }

      .text {
        display: block;
      }
    }
  }

  .detail-holder {
    display: flex;
    flex-flow: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 15px;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ECEDF1;

    .title {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      margin: 0 0 5px;
    }

    .text {
      display: block;
      color: var(--gray-400);
    }
  }

  .progressBar-holder {
    width: 100%;
    overflow: hidden;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;

    .wrap {
      margin-bottom: 30px;
    }

    .title-holder {
      display: flex;
      flex-flow: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      margin: 0 0 10px;
    }

    .title {
      display: block;
      font-weight: 500;
      text-transform: capitalize;
      margin: 0 0 5px;
    }
    .percentage {
      display: block;
      font-weight: 500;
      color: var(--primary-500);
      margin: 0 0 5px;
    }

    .progress-bar {
      width: 100%;
      height: 8px;
      overflow: hidden;
      position: relative;
      border-radius: 50px;
      background: var(--primary-25);

      .track {
        position: absolute;
        top: 0;
        bottom:0;
        left: 0;
        background: var(--primary-500);
      }
    }
  }
`;
