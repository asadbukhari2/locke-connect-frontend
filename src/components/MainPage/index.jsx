import React from 'react';
import { HomeFooter, StyledMainPageStyles } from './MainPage.styles';
import Link from 'next/link';
import Button from '../Button';
import tiktok from '../../../public/tiktok.svg';
import insta from '../../../public/insta.svg';
import tweet from '../../../public/tweet.svg';
import fb from '../../../public/fb.svg';
import Image from 'next/image';
const MainPage = () => {
  return (
    <>
      <StyledMainPageStyles>
        <div className="text">
          <div className="title">
            <strong className="logo">LOCKE</strong>
            <strong className="connect">CONNECT</strong>
          </div>
          <p>
            Connect instantly with local real estate experts, ensuring efficiency and transparency for confident buying
            and selling experiences.{' '}
          </p>
          <p>More than a transaction, it is a connection!</p>
          <Link href="/" className="home-page">
            Homepage
          </Link>
          <div className="buttonWrapper">
            <Link href="sign-in">
              <Button variant="primary">Sign in</Button>
            </Link>
            <Link href="sign-up">
              <Button outline="primary">Register</Button>
            </Link>
          </div>
        </div>
        <HomeFooter>
          <span>Terms of use</span>
          <span>Copyright © LockeConnect</span>
          <div className="socialLinks">
            <span>Connect us</span>
            <div className="imageWrapper">
              <Image src={fb} alt="fb" />
            </div>
            <div className="imageWrapper">
              <Image src={tweet} alt="tweet" />
            </div>
            <div className="imageWrapper">
              <Image src={insta} alt="insta" />
            </div>
            <div className="imageWrapper">
              <Image src={tiktok} alt="tiktok" />
            </div>
          </div>
        </HomeFooter>
      </StyledMainPageStyles>
    </>
  );
};

export default MainPage;
