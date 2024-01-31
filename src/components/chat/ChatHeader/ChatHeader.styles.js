import styled from "styled-components";

export const StyledChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid var(----gray-50);
  background: var(--white);

  .userBox {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .img-box {
    flex-shrink: 0;
    display: block;
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 12px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .text-box {
    width: 100%;
  }

  .userTitle {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 3px;
  }
  .userStatus-offline {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    text-transform: capitalize;
    color: var(--warning-600);

    &:before {
      display: block;
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50px;
      background: var(--warning-600);
    }
  }
  .userStatus-online {
    display: flex;
    align-items: center;
    gap: 5px;
    position: relative;
    text-transform: capitalize;
    color: var(--success-500);

    &:before {
      display: block;
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50px;
      background: var(--success-500);
    }
  }

  .btnsBox {
    display: flex;
    gap: 10px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 5px;
    padding: 3px;
    border-radius: 8px;
    border: 1px solid var(--gray-50);
    background: var(--white);
    transition: all ease-in-out 0.3s;

    &:hover {
      color: var(--white);
      background: var(--primary-300);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`;
