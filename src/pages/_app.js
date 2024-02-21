import { createGlobalStyle, css } from 'styled-components';
import Variables from '../styles/variable.css';
import { MyContextProvider } from '@/context/card';
import 'slick-carousel/slick/slick.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { AuthContextProvider } from '@/context/authContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useAuth from '@/helpers/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import TodayRateModal from '@/components/TodayRateModal';
import { SocketContextProvider } from '@/context/socketContext';
import { Provider } from 'react-redux';
import { store, persistor } from '../features/store';

import { fetchAllConversations } from '@/features/messageSlice';
import { getNotifications } from '@/features/commonSlice';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from '@/components/ErrorBoundry';

const Styling = css`
  /* theme css variables */
  ${Variables}
  * {
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
  }
  *:before,
  *:after,
  * {
    box-sizing: border-box;
  }
  .Toastify__toast {
    position: relative;
    z-index: 9999999;
    font-weight: 600;
    box-shadow:
      0px 5px 8px -2px rgba(29, 41, 57, 0.02),
      0px 16px 16px -4px rgba(29, 41, 57, 0.08);
  }
  .Toastify__toast--error {
    background: var(--danger-100);
    color: #e74c3c;
    border-radius: 12px;
  }
  .Toastify__toast--info {
    background: var(--primary-100);
    color: #3498db;
    border-radius: 12px;
  }
  .Toastify__toast--success {
    background: var(--success-100);
    color: #07bc0c;
    border-radius: 12px;
  }
  .highcharts-credits {
    display: none;
  }
  /* .Toastify__progress-bar {
    display: none;
  } */
  .read-more {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 17px;
    color: var(--primary-500);
    text-transform: capitalize;
  }

  .advance-input {
    margin: 0 0 12px;
    position: relative;

    .percentage-text {
      font-size: 15px;
      line-height: 18px;
      position: absolute;
      top: 35px;
      right: 12px;
      padding: 3px 6px;
      border-radius: 4px;
      background: #f5f6f8;
    }

    label {
      display: block;
      margin: 0 0 5px;
    }

    input {
      width: 100%;
      height: 48px;
      font-size: 14px;
      line-height: 18px;
      padding: 8px 75px 8px 15px;
      font-family: var(--base-font-family);
      color: var(--gray-400);
      border: 0;
      outline: none;
      border-radius: 8px;
      border: var(--gray-50);
      background: var(--white);
    }
  }

  .para-text {
    display: block;
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  .detail-wrap {
    overflow: hidden;
    transition: 1s all ease-in-out;

    @media (min-width: 992px) {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
    }
    .padding {
      padding: 0;

      @media (min-width: 993px) {
        padding-right: 330px;
      }
      @media (min-width: 1420px) {
        padding-right: 470px;
      }
    }

    .detail-col {
      flex-grow: 1;
      overflow: hidden;
    }

    .fixed-scroll {
      width: 100%;
      transition: 1s all ease-in-out;

      @media (min-width: 992px) {
        width: 320px;
        flex-shrink: 0;
      }
      @media (min-width: 1420px) {
        width: 450px;
      }
    }
    .fix {
      position: fixed;
      top: 95px;
      bottom: 0;
      right: 10px;
      overflow: auto;
      padding-right: 10px;
      transition: 1s all ease-in-out;

      @media screen and (max-width: 992px) {
        position: static;
        padding: 0;
      }
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--base-text-color);
    font: var(--font-size-base) / var(--line-height-base) var(--base-font-family);
    font-weight: 500;
    position: relative;
    min-width: var(--base-min-width);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    top: 0px !important;
    background: #f7f8fa;

    &.aside-active,
    &.nav-active {
      overflow: hidden;

      .overlay {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 98;
  }

  #wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;

    @media (min-width: 992px) {
    }
  }

  .chat-container-video {
    width: 100%;
    position: relative;
    background: var(--primary-50);
    padding: 20px;
    border-radius: 10px;
    overflow-x: hidden;
    .history {
      width: 100%;
      margin-bottom: 10px;

      .btnBack {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--primary-500);
      }
    }

    .messagesArea {
      height: calc(100vh - 190px);
      padding-right: 10px;
      overflow: auto;
    }
  }
  .chat-container {
    width: 100%;
    position: relative;
    .history {
      width: 100%;
      margin-bottom: 10px;

      .btnBack {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--primary-500);
      }
    }

    .messagesArea {
      height: calc(100vh - 340px);
      padding-right: 10px;
      overflow: auto;
    }
  }

  .actionBtnList {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    li {
      margin: 0;
    }

    .btn {
      /* display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      font-size: 14px;
      line-height: 17px;
      font-weight: 400;
      padding: 12px;
      border: 1px solid var(--gray-50);
      border-radius: 8px;
      background: var(--white); */
    }
  }

  .agentType {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--success-500);
  }

  .info-box {
    position: relative;
    text-align: right;

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      gap: 16px;
      text-align: left;
    }

    .img-box {
      display: inline-block;
      vertical-align: top;
      width: 45px;
      height: 45px;
      margin-bottom: 5px;
      border-radius: 8px;
      overflow: hidden;
      background: #21745b;

      @media (min-width: 992px) {
        width: 64px;
        height: 64px;
        margin: 0;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .title {
      display: block;
      font-weight: 500;

      @media (min-width: 992px) {
        font-size: 20px;
        line-height: 23px;
      }
    }

    .address,
    .subtitle {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }

  .view-all {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: var(--primary-500);

    &:hover {
      .ico {
        transform: translateX(5px);
      }
    }

    .ico {
      position: relative;
      transition: all 0.3s;
    }
  }

  #content-wrap {
    overflow: hidden;
    padding: 72px 15px 10px;

    @media (min-width: 992px) {
      padding: 92px 15px 10px;
    }
    @media (min-width: 1200px) {
      padding: 96px 15px 10px 340px;
    }
    @media (min-width: 1420px) {
      padding: 112px 16px 10px 360px;
    }
  }

  .container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  textarea {
    resize: vertical;
    vertical-align: top;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='file'],
  input[type='submit'] {
    cursor: pointer;
    font-family: 'Nunito';
  }

  form,
  fieldset {
    margin: 0;
    padding: 0;
    border-style: none;
  }
  a {
    text-decoration: none;
    color: var(--blue);
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  button {
    transition:
      opacity var(--animation-speed) ease-in-out,
      background var(--animation-speed) ease-in-out,
      visibility var(--animation-speed) ease-in-out,
      border var(--animation-speed) ease-in-out,
      color var(--animation-speed) ease-in-out;
  }

  button {
    padding: 0;
    border: none;
    background: none;
    outline: none;
    font-family: var(--font-size-base);
  }

  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin: 0 0 15px;
    color: var(--body-text);
    font-weight: 500;
  }
  h1,
  .h1 {
    font-size: 40px;
    line-height: 46px;
  }
  h2,
  .h2 {
    font-size: 22px;
    line-height: 26px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  h3,
  .h3 {
    font-size: 20px;
    line-height: 24px;
  }
  h4,
  .h4 {
    font-size: 18px;
    line-height: 23px;
  }

  p {
    margin: 0 0 15px;

    &:last-child {
      margin: 0;
    }
  }
  .swiper {
    width: 215px;
    height: 280px;

    @media (min-width: 1420px) {
      width: 255px;
      height: 323px;
    }
  }
  .swiper-slide {
    background: transparent;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background: var(--primary-50);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primary-500);
    border-radius: 10px;
  }

  .scrollbar {
    ::-webkit-scrollbar {
      width: 2px;
      height: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 15px;
      background: var(--primary-50);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--primary-500);
      border-radius: 10px;
    }
  }

  /* Handle on hover */
  /* Remove Arrows/Spinners from input type number */

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    appearance: textfield;
  }
  .rc-tooltip-placement-bottom {
    padding: 4px 0 5px 0;
  }
  .rc-tooltip {
    opacity: 1;

    .rc-tooltip-inner {
      border-radius: 8px;
      background-color: #0034dd !important;
      margin-left: 25px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
    .rc-tooltip-arrow {
      top: 0px !important;
      left: 40.2656px !important;
      border-bottom-color: #0034dd !important;
    }
  }

  //remove banner frame google
  .goog-te-banner-frame {
    display: none !important;
  }
  //remove text tips
  #goog-gt-tt,
  .goog-te-balloon-frame {
    display: none !important;
  }
  .goog-text-highlight {
    background: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
  }

  .goog-tooltip {
    display: none !important;
  }
  .goog-tooltip:hover {
    display: none !important;
  }
  .skiptranslate {
    position: absolute !important;
    body {
      top: 0px !important;
    }
    iframe {
      position: absolute !important;
      left: 0px;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${Styling}
`;

const pagesWithLayout = ['/sign-in', '/sign-up', '/map', '/forgot-password', '/reset-password', '/'];
const pagesForAuth = ['/sign-in', '/sign-up', '/reset-password', '/forgot-password', '/'];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;
  const isAuth = useAuth();

  const showLayout = pagesWithLayout.includes(pathname);

  useEffect(() => {
    if (!isAuth && !pagesForAuth.includes(pathname)) {
      router.replace('/');
    } else if (isAuth && pagesForAuth.includes(pathname)) {
      router.replace('/dashboard');
    }
  }, [isAuth, pathname, router]);

  const [rate, setRate] = useState(false);

  useEffect(() => {
    if (isAuth) {
      // store.dispatch(getNotifications({ page: 1, pageSize: 5, all: true }));
      // store.dispatch(fetchAllConversations());
    }
  }, [pathname]);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <span className="overlay" />
          <div id={!showLayout ? 'content-wrap' : ''}>
            <AuthContextProvider>
              <SocketContextProvider>
                <MyContextProvider>
                  <ErrorBoundary>
                    <Modal open={rate} setOpen={setRate} width="920px">
                      <TodayRateModal setOpen={setRate} />
                    </Modal>
                    <Header />
                    {!showLayout ? (
                      <>
                        <Sidebar setRateModal={setRate} />
                        <Component {...pageProps} />
                      </>
                    ) : (
                      <>
                        <Component {...pageProps} />
                      </>
                    )}
                  </ErrorBoundary>
                </MyContextProvider>
              </SocketContextProvider>
            </AuthContextProvider>
          </div>
          <ToastContainer autoClose={5000} hideProgressBar={true} />
        </PersistGate>
      </Provider>
    </>
  );
}
