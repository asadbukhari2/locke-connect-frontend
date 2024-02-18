import styled from 'styled-components';

export const StyledChatModal = styled.div`
  max-width: 1020px;
  width: 100%;
  padding: 24px;
  background: var(--white);
  border-radius: 16px;

  .title {
    display: block;
    margin-bottom: 15px;
    color: #2a3855;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }
  .buttonWrapper {
    margin-top: 25px;
    max-width: 170px;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
`;

export const ChatModalContent = styled.div`
  max-height: 464px;
  overflow-y: auto;
`;

export const UploadDocumentWrapper = styled.div`
  color: var(--body-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }
  .selectAll {
    color: var(--gray-400);
    margin-bottom: 15px;
  }
  ul {
    padding-right: 16px;
  }
  li {
    padding: 16px 0;
    border-bottom: 1px solid var(--gray-50);
    display: flex;
    align-items: center;
  }
  .addpeopleWrapper {
    width: 100%;

    @media screen and (min-width: 576px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .profileInfo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-shrink: 0;
      gap: 10px;
      @media screen and (max-width: 575px) {
        margin-bottom: 20px;
      }
      figure {
        margin: 0;
      }
      .imageWrapper {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: var(--white);
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
        }
      }
      .imageWrapper-property {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: var(--white);
        border-radius: 10px;
        overflow: hidden;
        @media screen and (max-width: 575px) {
          width: 45px;
          height: 45px;
        }
        img {
          width: 64px;
          height: 100%;
          object-fit: cover;
        }
      }
      .text {
        color: var(--gray-400);
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        .address-location {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .strong-title {
          display: block;
          margin-bottom: 8px;
          color: var(--body-text);
          font-size: 20px;
          font-weight: 500;
          line-height: 24px;
          @media screen and (max-width: 575px) {
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
      .address {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
`;
export const ViewOffersWrapper = styled.div`
  color: var(--body-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
  }
  .selectAll {
    color: var(--gray-400);
    margin-bottom: 15px;
  }
  ul {
    padding-right: 16px;
  }
  li {
    padding: 16px 0;
    border-bottom: 1px solid var(--gray-50);
    display: flex;
    align-items: center;
  }
  .addpeopleWrapper {
    width: 100%;

    @media screen and (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }
    .combineField {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 992px) {
        margin-bottom: 15px;
      }
      @media screen and (max-width: 556px) {
        display: block;
      }
    }
    .profileInfo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-shrink: 0;
      gap: 10px;
      @media screen and (max-width: 575px) {
        margin-bottom: 20px;
      }
      figure {
        margin: 0;
      }
      .imageWrapper {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: var(--white);
        border-radius: 10px;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
        }
      }
      .imageWrapper-property {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: var(--white);
        border-radius: 10px;
        overflow: hidden;
        @media screen and (max-width: 575px) {
          width: 45px;
          height: 45px;
        }
        img {
          width: 64px;
          height: 100%;
          object-fit: cover;
        }
      }
      .text {
        color: var(--gray-400);
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        .address-location {
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .strong-title {
          display: block;
          margin-bottom: 8px;
          color: var(--body-text);
          font-size: 20px;
          font-weight: 500;
          line-height: 24px;
          @media screen and (max-width: 575px) {
            font-size: 18px;
            line-height: 22px;
          }
        }
      }
      .address {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }
`;
