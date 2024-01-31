import styled from "styled-components";

export const UserDetailWrapper = styled.div`
  max-width: 1156px;
  border-radius: 16px;
  width: 100%;
  padding: 48px 20px;
  position: relative;
  background: var(--white);
  ::-webkit-scrollbar {
    width: 8px;
  }

  @media screen and (min-width: 991px) {
    display: flex;
    align-items: flex-start;
    gap: 47px;
  }
  @media screen and (min-width: 767px) {
    padding: 48px 45px;
  }
  .detail {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .BoughtSold {
      @media screen and (max-width: 991px) {
        margin-bottom: 20px;
      }
    }
  }
  .imageWrapper {
    max-width: 365px;
    width: 100%;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: auto;
    }
  }
  .closer {
    position: absolute;
    right: 12px;
    top: 12px;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    background: var(--white);
    cursor: pointer;
  }
  .TextWrapper {
    .buttonWrapper {
      padding-top: 20px;

      display: block;

      @media screen and (min-width: 575px) {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      button {
        margin-bottom: 10px;
        &:nth-last-child() {
          margin-bottom: 0;
        }
      }

      .lastButton {
        @media screen and (min-width: 575px) {
          width: 50px;
          height: 40px;
        }
        img {
          max-width: 100%;
        }
      }
      .like {
        &:hover {
          svg {
            fill: var(--white);
          }
          background: var(--danger-500);
          border-color: var(--danger-500);
          img {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(47deg)
              brightness(150%) contrast(110%);
          }
        }
      }
    }
  }
`;
export const UserDetailText = styled.div`
  max-width: 651px;
  max-height: 550px;
  overflow-y: scroll;
  padding-right: 10px;
  padding-bottom: 10px;
  color: var(--gray-400);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
  span {
    display: block;
    color: var(--body-text);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 12px;
  }
  .name {
    h2 {
      margin: 0;
      color: var(--body-text);
      font-size: 40px;
      font-style: normal;
      font-weight: 500;
      line-height: 44px;
    }
    margin-bottom: 32px;
  }
  .userInfo {
    color: var(--body-text);
    margin-bottom: 25px;
  }

  .userService {
    margin-bottom: 30px;
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 8px;
    }
    li {
      padding: 8px 16px;
      border-radius: 24px;
      border: 1px solid var(--gray-50);
      background: var(--gray-50);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      figure {
        margin: 0;
      }
      .img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }
  }
`;
