import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { PiMapPinBold } from 'react-icons/pi';
import { BiHomeAlt } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { MdCrisisAlert } from 'react-icons/md';
import { GoPeople } from 'react-icons/go';
import { PiBellBold } from 'react-icons/pi';
import { BiMessageAlt } from 'react-icons/bi';
import { MdMenuOpen } from 'react-icons/md';
import Image from 'next/image';
import LogoImg from '../../../public/logo.svg';
import flagImg from '../../../public/flag-language.svg';
import NotificationWidget from '../NotificationWidget/NotificationWidget';
import ChatWidget from '../ChatWidget/ChatWidget';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import LanguageDropDown from '../languageDropDown';
import useAuth from '@/helpers/auth';
import { AiOutlineLogout } from 'react-icons/ai';

import {
  HeaderStyles,
  Logo,
  MianNav,
  SearchLocation,
  InfoCol,
  Notification,
  Chat,
  Language,
  NavOpener,
  AsideOpener,
  RecentSearch,
} from './Header.styles';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import ProfileView from './ProfileView';
import { getCookie } from '@/helpers/common';
import { LanguageData } from '../Constants';
import Suggestion from '../Suggestion';
import ChatAside from '../chat/ChatAside';
import { MyContext } from '@/context/card';
import { useTranslation } from '@/helpers/useTranslation';
import { useSelector } from 'react-redux';

const location = [
  'New York ,US',
  ' New York State, US',
  ' New York Harbor, US',
  ' New York Square, US',
  ' New Yorvikk Square, Uk',
  ' New York Temple, Japan',
  ' New York State, US',
  ' New York Harbor, US',
  ' New York Square, US',
];
function Header() {
  const { cardVal, setCardVal } = useContextHook(MyContext, ['cardVal', 'setCardVal']);
  const { onLogout, setLang, lang } = useContextHook(AuthContext, ['onLogout', 'setLang', 'lang']);
  const flag = LanguageData.find(itm => itm.value === lang?.value);

  const { t } = useTranslation();

  const { unreadMessages } = useSelector(state => state.chat);
  const { unreadNotification } = useSelector(state => state.common);
  const handleClick = () => {
    document?.body.classList.toggle('nav-active');
    document?.body.classList.remove('aside-active');
  };
  const btnClick = () => {
    document?.body.classList.toggle('aside-active');
    document?.body.classList.remove('nav-active');
  };

  const pagesWithOutHamburger = ['/sign-in', '/sign-up', '/map', '/forgot-password', '/reset-password', '/home-page'];

  const pathName = usePathname();
  const router = useRouter();
  const WithoutHambuger = pagesWithOutHamburger.includes(pathName);
  const [activeLink, setActiveLink] = useState(1);

  const NotificationRef = useRef(null);
  const ChatRef = useRef(null);
  const InputRef = useRef(null);
  const LanguageRef = useRef(null);
  const [handelNotification, sethandelNotification] = useState(false);
  const [handelChat, sethandelChat] = useState(false);
  const [handelSearch, sethandelSearch] = useState('');
  const [handelinputDrop, sethandelInputDrop] = useState(false);
  const [languageDrop, setLanguageDrop] = useState(false);
  const [languageDropVal, setLanguageDropVal] = useState([]);

  const handleClickOutsideNotification = event => {
    if (NotificationRef.current && !NotificationRef.current.contains(event.target)) {
      sethandelNotification(false);
    }
  };
  const handleClickOutsideChat = event => {
    if (ChatRef.current && !ChatRef.current.contains(event.target)) {
      sethandelChat(false);
    }
  };
  const handleClickOutsideInput = event => {
    if (InputRef.current && !InputRef.current.contains(event.target)) {
      sethandelInputDrop(false);
    }
  };
  const handleClickLanguageOutSide = event => {
    if (LanguageRef.current && !LanguageRef.current.contains(event.target)) {
      setLanguageDrop(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutsideNotification);
    document.addEventListener('mousedown', handleClickOutsideChat);
    document.addEventListener('mousedown', handleClickOutsideInput);
    document.addEventListener('mousedown', handleClickLanguageOutSide);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNotification);
      document.removeEventListener('mousedown', handleClickOutsideChat);
      document.removeEventListener('mousedown', handleClickOutsideInput);
      document.removeEventListener('mousedown', handleClickLanguageOutSide);
    };
  }, []);

  // TODO
  // set languageDropVal from the cookies (key in cookies is "googtrans") when 1st time mount. If there is no value then dont set its value
  useEffect(() => {
    const langCookie = getCookie('googtrans');
    const arr = ['/en/zh-CN', '/en/es'];
    if (langCookie && arr.includes(langCookie)) {
      const filteredLang = LanguageData?.find(itm => itm?.key == langCookie);
      if (filteredLang) {
        setLanguageDropVal([filteredLang]);
      }
    }
  }, []);
  function handelClickLocation(elem) {
    sethandelSearch(elem);
  }

  const handleLanguage = e => {
    const val = {
      label: e.language,
      value: e.value,
      img: e.img,
    };
    setLang(val);
  };
  const isAuthenticated = useAuth();
  return (
    <HeaderStyles>
      {!WithoutHambuger && (
        <AsideOpener type="button" onClick={btnClick}>
          <MdMenuOpen size="24" />
        </AsideOpener>
      )}
      <Logo>
        <Link href={isAuthenticated ? '/dashboard' : '/'}>
          <Image src={LogoImg} alt="lockey" />
        </Link>
      </Logo>
      {isAuthenticated && (
        <div className="holder">
          <MianNav>
            <ul className="main-menu">
              <li
                className={activeLink == 1 && pathName == '/dashboard' ? 'active' : ''}
                onClick={() => {
                  document.body.classList.remove('nav-active');
                  setActiveLink(1);
                }}>
                <Link href="/dashboard">
                  <BiHomeAlt size="20" />
                  <span className="text">{t('Home')}</span>
                </Link>
              </li>
              <li
                className={activeLink === 2 && pathName == '/dashboard' ? 'active' : ''}
                onClick={() => {
                  document.body.classList.remove('nav-active');
                  setActiveLink(2);
                  router.push('/dashboard');
                  setCardVal(1);
                }}>
                <a href="#buyFilter">
                  <IoCartOutline size="20" />
                  <span className="text">{t('Buy')}</span>
                </a>
              </li>
              <li
                className={pathName === '/selling' ? 'active' : ''}
                onClick={() => {
                  document.body.classList.remove('nav-active');
                  setActiveLink(3);
                }}>
                <Link href="/selling">
                  <MdCrisisAlert size="20" />
                  <span className="text">{t('Sell')}</span>
                </Link>
              </li>
              <li
                className={activeLink === 4 && pathName == '/dashboard' ? 'active' : ''}
                onClick={() => {
                  document.body.classList.remove('nav-active');
                  setActiveLink(4);
                  setCardVal(3);
                  router.push('/dashboard');
                }}>
                <a href="#peopleFilter">
                  <GoPeople size="20" />
                  <span className="text">{t('People')}</span>
                </a>
              </li>
              <li
                className={activeLink === 5 ? 'active' : ''}
                onClick={() => {
                  document.body.classList.remove('nav-active');
                  setActiveLink(5);
                }}>
                <Link href="/">
                  <BiMessageAlt size="20" />
                  <span className="text">{t('Chat')}</span>
                </Link>
              </li>
              <li
                className={activeLink === 'Notification' ? 'active' : ''}
                onClick={() => {
                  document.body.classList.remove('nav-active');
                  setActiveLink(1);
                }}>
                <Link href="/">
                  <PiBellBold size="20" />
                  <span className="text">{t('Notification')}</span>
                </Link>
              </li>
              <li
                onClick={() => {
                  document.body.classList.remove('nav-active');
                }}>
                <button
                  className="logout-btn"
                  type="button"
                  onClick={async () => {
                    onLogout();
                    document.body.classList.remove('nav-active');
                  }}>
                  <AiOutlineLogout className="icon" size="25" />
                  {t('logout')}
                </button>
              </li>
              <div className="animation start-home"></div>
            </ul>
          </MianNav>
          <button type="button" className="search-opener">
            <IoSearch size="16" />
          </button>
          <SearchLocation>
            <form ref={InputRef} onClick={() => sethandelInputDrop(!handelinputDrop)}>
              <div className="input-search">
                <PiMapPinBold className="ico" size="20" />
                <input
                  type="search"
                  placeholder={t('Search Location')}
                  value={handelSearch}
                  onChange={e => sethandelSearch(e.target.value)}
                />
                <button type="button" className="btn-search">
                  <IoSearch size="20" />
                </button>
              </div>
              {handelinputDrop && <Suggestion onChange={e => handelClickLocation(e)} setOpen={sethandelInputDrop} />}
            </form>
          </SearchLocation>
        </div>
      )}
      <InfoCol>
        {/* language drop down */}
        <Language open={languageDrop} onClick={() => setLanguageDrop(!languageDrop)} ref={LanguageRef}>
          <button type="button">
            {flag ? (
              <Image src={flag?.img} alt="img description" />
            ) : (
              <Image src={LanguageData[0].img} alt="img description" width={24} height={24} />
            )}
          </button>
          <div className="DropDownLanguage">
            <LanguageDropDown
              onClick={item => {
                setLanguageDropVal([item]);
                handleLanguage(item);
              }}
              data={LanguageData}
              value={lang}
            />
          </div>
        </Language>
        {isAuthenticated && (
          <>
            {/* Notification drop down */}

            <Notification
              onClick={() => sethandelNotification(!handelNotification)}
              ref={NotificationRef}
              $notification={unreadNotification}>
              <button type="button">
                <PiBellBold size="26" color={!handelNotification ? 'var(--body-text)' : 'var(--primary-500)'} />
              </button>
              {handelNotification && (
                <div className="notificationDropDown" onClick={e => e.stopPropagation()}>
                  <NotificationWidget />
                </div>
              )}
            </Notification>
            {/* Chat drop down */}

            <Chat onClick={() => sethandelChat(!handelChat)} ref={ChatRef} $message={unreadMessages}>
              <button type="button">
                <BiMessageAlt size="26" color={!handelChat ? 'var(--body-text)' : 'var(--primary-500)'} />
              </button>
              {handelChat && (
                <div className="chatDropDown" onClick={e => e.stopPropagation()}>
                  <ChatAside sidebar={true} />
                </div>
              )}
            </Chat>
          </>
        )}
        {isAuthenticated && <ProfileView />}
        {!WithoutHambuger && (
          <NavOpener type="button" onClick={handleClick}>
            <span></span>
          </NavOpener>
        )}
        {pathName == '/map' && (
          <NavOpener type="button" onClick={handleClick}>
            <span></span>
          </NavOpener>
        )}
      </InfoCol>
    </HeaderStyles>
  );
}

export default Header;
