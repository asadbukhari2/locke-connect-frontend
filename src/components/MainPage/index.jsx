import React, { useEffect, useState } from 'react';
import { FloatingImages, FloatingWidget, HomeFooter, StyledMainPageStyles } from './MainPage.styles';
import Link from 'next/link';
import Button from '../Button';
import tiktok from '../../../public/tiktok.svg';
import insta from '../../../public/insta.svg';
import tweet from '../../../public/tweet.svg';
import fb from '../../../public/fb.svg';
import userimg1 from '../../../public/userimg1.png';
import userimg2 from '../../../public/userimg2.png';
import userimg3 from '../../../public/userimg3.png';
import userimg5 from '../../../public/userh5.png';
import userimg4 from '../../../public/userimg4.png';
import prop1 from '../../../public/prop1.png';
import prop2 from '../../../public/prop2.png';
import prop3 from '../../../public/prop3.png';
import prop4 from '../../../public/prop4.png';
import prop5 from '../../../public/prop5.png';
import prop6 from '../../../public/prop6.png';
import { FiArrowUp } from 'react-icons/fi';
import Image from 'next/image';
import Revolutionize from './Revolutionize';
import Modal from '../Modal';
import Disclaimer from '../Legal/Disclaimer';
import styled from 'styled-components';

const BackTo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 20px;
  transform: translateX(-80px);
  width: 40px;
  height: 40px;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  border-radius: 0 5px 5px 0;
  padding: 0;
  transition: all 0.3s;
  background: var(--primary-500);
`;
const MainPage = () => {
  const [termModal, setTermModal] = useState(false);
    useEffect(() => {
    const backToTop = document.getElementById('back-to-top');
    function backToTopFade() {
      if (window.scrollY > 150) {
        backToTop.style.cssText = 'opacity:1; visibility:visible; transform: translateX(0)';
      } else {
        backToTop.style.cssText = 'opacity:0; visibility:hidden; transform: translateX(-80px)';
      }
    }
    window.addEventListener('scroll', backToTopFade);
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 5000);
  }, []);
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Modal width="1100px" open={termModal} setOpen={setTermModal}>
        <Disclaimer title="Terms of Use" />
      </Modal>
      <StyledMainPageStyles>
        <div className="imagesWrapperfloat">
          <FloatingImages $top="271px" $toplg="201px" $topmd="53px" $topsm="55px" $left="271px" $leftlg="149px">
            <Image src={prop1} alt="prop1" />
          </FloatingImages>
          <FloatingImages
            $left="149px"
            $top="201px"
            $toplg="129px"
            $topmd="100px"
            $topsm="145px"
            $leftlg="28px"
            $leftmd="76px"
            $leftsm="145px">
            <Image src={userimg3} alt="userimg3" />
          </FloatingImages>
          <FloatingImages $right="161px" $top="51px">
            <Image src={userimg5} alt="userimg5" />
          </FloatingImages>
          <FloatingImages $top="122px" $toplg="123px" $topmd="93px" $right="283px" $rightlg="44px" $rightmd="85px">
            <Image src={prop4} alt="prop4" />
          </FloatingImages>
        </div>
        <div className="text">
          <div className="title">
            <strong className="logo">LOCKE</strong>
            <strong className="connect">CONNECT</strong>
          </div>
          <p>
            Connect instantly with local real estate experts, ensuring efficiency and transparency for confident buying
            and selling experiences.
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
        <div className="imagesWrapperfloat">
          <FloatingImages $left="27px" $top="563px">
            <Image src={userimg1} alt="userimg1" />
          </FloatingImages>
          <FloatingImages $left="149px" $top="639px" $topmd="614px" $leftmd="99px">
            <Image src={prop2} alt="prop2" />
          </FloatingImages>
          <FloatingImages
            $right="281px"
            $top="561px"
            $toplg="490px"
            $rightlg="161px"
            $topmd="461px"
            $rightmd="119px"
            $hidden>
            <Image src={userimg2} alt="userimg2" />
          </FloatingImages>
          <FloatingImages $top="490px" $toplg="416px" $right="156px" $rightlg="44px" $hidden>
            <Image src={prop5} alt="prop5" />
          </FloatingImages>
        </div>
        <div className="imagesWrapperfloat">
          <FloatingImages $left="392px" $top="638px" $topmd="663px" $leftmd="439px">
            <Image src={userimg4} alt="userimg4" />
          </FloatingImages>
          <FloatingImages $left="513px" $top="709px">
            <Image src={prop6} alt="prop6" />
          </FloatingImages>
        </div>
      </StyledMainPageStyles>
      <Revolutionize />
      <HomeFooter>
        <span onClick={() => setTermModal(true)} className="link">
          Terms of use
        </span>
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
      <BackTo type="button" id="back-to-top" onClick={scrollToTop}>
            <FiArrowUp color="#fff" size={25} />
          </BackTo>
    </>
  );
};

export default MainPage;
