import styled, { css } from "styled-components";

export const HeaderStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--gray-50);
  background: var(--white);
  z-index: 99;

  @media (min-width: 768px) {
    padding: 10px 16px;
  }
  @media (min-width: 1420px) {
    padding: 16px;
  }

  .holder {
    align-items: center;
    justify-content: center;
    width: 0;
    height: 0;
    padding: 0;
    flex-shrink: 0;
    position: relative;
    border-radius: 64px;
    border-top: 1px solid #e6ebfc;
    background: #f2f5fd;

    @media (min-width: 768px) {
      display: flex;
    }
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 600px;
      height: auto;
      padding: 4px;
    }
    @media (min-width: 1200px) {
      width: 678px;
    }

    .search-opener {
      width: 28px;
      height: 28px;
      border-radius: 50px;
      color: var(--white);
      display: flex;
      display: none;
      align-items: center;
      justify-content: center;
      background: #2a3855;

      @media (min-width: 992px) {
        display: none;
        top: 4px;
        right: 5px;
      }
    }
  }
`;

export const Logo = styled.div`
  position: relative;

  @media (max-width: 991px) {
    flex-grow: 1;
  }

  a {
    display: block;
    width: 110px;

    @media (min-width: 1200px) {
      width: 184px;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const MianNav = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  padding: 10px;
  width: 250px;
  transition: all ease-in-out 0.3s;
  transform: translateX(100%);
  border-left: 1px solid var(--gray-50);
  background: var(--white);

  .nav-active & {
    transform: translateX(0);
  }

  @media (min-width: 992px) {
    position: static;
    width: auto;
    border: 0;
    padding: 0;
    transform: none;
    background: none;
  }

  .main-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 19px;
    position: relative;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      gap: 0;
      font-size: 14px;
      line-height: 17px;
    }
    @media (min-width: 1200px) {
      font-size: 16px;
      line-height: 20px;
    }

    li {
      margin: 0;
      position: relative;

      &.focus,
      &.active {
        a {
          @media (max-width: 991px) {
            color: var(--white);
            background: var(--primary-500);
          }
        }
      }

      &.active {
        a {
          color: var(--white);
          background: var(--primary-500);
        }
      }

      &:active {
        @media (min-width: 992px) {
          color: #fff;
        }
      }

      /* &:nth-child(1) {
        @media (min-width: 992px) {
          width: 90px;
        }
        @media (min-width: 1200px) {
          width: 97px;
        }

        .start-home,
        &:hover ~ .animation {
          @media (min-width: 992px) {
            width: 90px;
            left: 0;
            color: var(--white);
            background: var(--primary-500);
          }
          @media (min-width: 1200px) {
            width: 97px;
          }
        }
      }
      &:nth-child(2) {
        @media (min-width: 992px) {
          width: 81px;
        }

        .start-buy,
        &:active ~ .animation {
          @media (min-width: 992px) {
            width: 81px;
            left: 90px;
            color: var(--white);
            background: var(--primary-500);
          }

          @media (min-width: 1200px) {
            left: 98px;
          }
        }
      }
      &:nth-child(3) {
        @media (min-width: 992px) {
          width: 81px;
        }

        .start-sell,
        &:active ~ .animation {
          @media (min-width: 992px) {
            width: 81px;
            left: 170px;
            color: var(--white);
            background: var(--primary-500);
          }

          @media (min-width: 1200px) {
            left: 179px;
          }
        }
      }
      &:nth-child(4) {
        @media (min-width: 992px) {
          width: 98px;
        }
        @media (min-width: 1200px) {
          width: 103px;
        }

        .start-people,
        &:active ~ .animation {
          @media (min-width: 992px) {
            width: 98px;
            left: 252px;
            color: var(--white);
            background: var(--primary-500);
          }

          @media (min-width: 1200px) {
            width: 103px;
            left: 259px;
          }
        }
      }*/

      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        @media (min-width: 992px) {
          display: none;
        }
      }
    }

    a,
    .logout-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 12px 16px;
      border-radius: 50px;
      position: relative;
      z-index: 1;
      transition: all 0.5s ease 0s;

      @media (min-width: 992px) {
        padding: 15px 12px;
      }
      @media (min-width: 1200px) {
        padding: 15px 15px;
      }

      &::before {
        display: none;
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        border-radius: 50px;
        background: var(--primary-500);
        z-index: -1;
      }
    }

    .animation {
      position: absolute;
      height: 100%;
      top: 0;
      z-index: 0;
      transition: all 0.5s ease 0s;
      border-radius: 50px;
    }
  }
`;

export const SearchLocation = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  right: 0;
  width: 280px;
  height: 50px;
  transition: all ease-in-out 0.3s;
  visibility: hidden;
  opacity: 0;

  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 992px) {
    position: static;
    width: 250px;
    visibility: visible;
    opacity: 1;
  }
  @media (min-width: 1200px) {
    width: 276px;
  }

  form {
    width: 100%;
  }

  .input-search {
    width: 100%;
    position: relative;
    padding: 5px;
    border-radius: 50px;
    background: var(--gray-100);

    @media (min-width: 992px) {
      padding: 0;
      border-radius: 0;
      background: none;
    }
  }

  input {
    width: 100%;
    height: 50px;
    padding: 10px 50px 10px 35px;
    border-radius: 50px;
    border: 1px solid transparent;
    font-family: var(--base-font-family);
    outline: none;
    background: var(--white);

    &:focus {
      border-color: var(--body-text);
      box-shadow: 0px 9px 9px 3px rgba(29, 41, 57, 0.04);
    }
  }

  .ico {
    position: absolute;
    top: 19px;
    left: 12px;

    @media (min-width: 992px) {
      top: 15px;
      right: 10px;
    }
  }

  .btn-search {
    position: absolute;
    top: 9px;
    right: 9px;
    width: 42px;
    height: 42px;
    border-radius: 50px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2a3855;

    @media (min-width: 992px) {
      top: 4px;
      right: 5px;
    }
  }
`;

export const InfoCol = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9px;
  ::-webkit-scrollbar {
    width: 4px;
    height: 20px;
  }
  .notificationDropDown {
    padding: 10px;
    width: 316px;
    background: var(--white);
    position: absolute;
    border-radius: 20px;
    top: 70px;
    right: 120px;
    overflow: hidden;
    box-shadow:
      0px 5px 8px -2px rgba(29, 41, 57, 0.02),
      0px 16px 16px -4px rgba(29, 41, 57, 0.08);

    @media (max-width: 500px) {
      right: 30px;
    }
  }
  .chatDropDown {
    padding: 10px;
    width: 330px;
    background: var(--white);
    position: absolute;
    border-radius: 20px;
    top: 70px;
    right: 70px;
    overflow: hidden;
    box-shadow:
      0px 5px 8px -2px rgba(29, 41, 57, 0.02),
      0px 16px 16px -4px rgba(29, 41, 57, 0.08);
    @media screen and (max-width: 500px) {
      right: 10px;
    }
  }

  @media (min-width: 768px) {
    gap: 13px;
  }
  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  .profile-image {
    width: 38px;
    height: 38px;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--white);
    border-radius: 12px;

    @media (min-width: 992px) {
      width: 48px;
      height: 48px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .logout {
    display: block;
    margin: 6px 0 0;
    padding: 0;

    .icon {
      transform: rotate(-90deg);
    }

    &:hover {
      color: var(--danger-800);
    }
  }

  &:hover {
    .loginDrop {
      visibility: visible;
      opacity: 1;
    }
  }

  .loginDrop {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 5px;
    width: 150px;
    padding: 10px;
    border-radius: 5px;
    background: var(--white);
    box-shadow:
      0px 5px 8px -2px rgba(29, 41, 57, 0.3),
      0px 16px 16px -4px rgba(29, 41, 57, 0.08);

    @media (max-width: 991px) {
      display: none;
    }

    button {
      display: flex;
      align-items: center;
      gap: 6px;
      text-transform: capitalize;

      .icon {
        transform: rotate(-90deg);
      }

      &:hover {
        color: var(--danger-800);
      }
    }
  }
`;

export const Notification = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
`;

export const Chat = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
  ${({ $message }) =>
    $message &&
    css`
      button {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          height: 10px;
          width: 10px;
          right: -2px;
          top: -2px;
          border-radius: 50%;
          background: red;
        }
      }
    `}
`;

export const Language = styled.div`
  position: relative;
  .DropDownLanguage {
    position: absolute;
    top: 37px;
    right: 0px;
    opacity: ${({ open }) => (open ? "1" : "0")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    ${({ open }) =>
      open == true &&
      css`
        animation: myAnim 0.2s ease normal forwards;
        @keyframes myAnim {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}
  }
`;
export const AsideOpener = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30px;
  height: 34px;
  border: 0;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--white);
  border: 1px solid var(--gray-500);
  z-index: 9;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const NavOpener = styled.button`
  position: relative;
  width: 36px;
  height: 36px;
  border: 0;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--white);
  border: 1px solid var(--gray-500);
  z-index: 9;

  @media (min-width: 992px) {
    display: none;
  }

  &:before,
  &:after,
  span {
    background: var(--primary-500);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 18%;
    right: 18%;
    height: 3px;
    margin-top: -2px;
    transition: all 0.2s linear;
  }

  &:before,
  &:after {
    content: "";
    top: 30%;
  }

  &:after {
    top: 70%;
  }

  .nav-active & {
    &:before,
    &:after,
    span {
      background: var(--primary-500);
    }
    span {
      opacity: 0;
    }

    &:after,
    &:before {
      transform: rotate(45deg);
      top: 50%;
      left: 15%;
      right: 15%;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;
export const RecentSearch = styled.div`
  padding: 20px 15px;
  position: absolute;
  top: 70px;
  right: 0;
  width: 276px;
  border-radius: 12px;
  box-shadow:
    0px 5px 8px -2px rgba(29, 41, 57, 0.02),
    0px 16px 16px -4px rgba(29, 41, 57, 0.08);
  background: var(--white);
  ::-webkit-scrollbar {
    width: 1px;
    height: 20px;
  }
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--black);
    p {
      margin: 0;
    }
  }
  ul {
    height: 280px;
    overflow: hidden;
    padding-right: 5px;
    overflow-y: scroll;

    li {
      color: var(--body-text);
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 8px;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background: var(--primary-25);
      }
    }
  }
`;
