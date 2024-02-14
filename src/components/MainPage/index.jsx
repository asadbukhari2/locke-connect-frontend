import React from 'react';
import { FloatingImages, HomeFooter, StyledMainPageStyles } from './MainPage.styles';
import Link from 'next/link';
import Button from '../Button';
import tiktok from '../../../public/tiktok.svg';
import insta from '../../../public/insta.svg';
import tweet from '../../../public/tweet.svg';
import fb from '../../../public/fb.svg';
import userimg1 from '../../../public/userimg1.png';
import userimg2 from '../../../public/userimg2.png';
import userimg3 from '../../../public/userimg3.png';
import prop1 from '../../../public/prop1.png';
import prop2 from '../../../public/prop2.png';
import prop3 from '../../../public/prop3.png';
import prop4 from '../../../public/prop4.png';
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
        <FloatingImages>
          <Image src={userimg1} alt="userimg1" />
        </FloatingImages>
      </StyledMainPageStyles>
    </>
  );
};

export default MainPage;
