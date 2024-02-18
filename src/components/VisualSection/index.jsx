import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import WelcomeUser from '../WelcomeUser';
import Recommended from '../Recommended';
import { VisualBlock, InfoWrap, Column } from './VisualSection.styles';
import { MyContext } from '@/context/card';
import { useContextHook } from 'use-context-hook';
import { useRouter } from 'next/router';
import { useTranslation } from '@/helpers/useTranslation';
import Lottie from 'lottie-react';
import buyingLottie from '../../../public/lottie/Character1.json';
import sellingLottie from '../../../public/lottie/Character2.json';
import peopleLottie from '../../../public/lottie/Character3.json';
function VisualSection() {
  const { cardVal, setCardVal } = useContextHook(MyContext, ['cardVal', 'setCardVal']);
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <VisualBlock>
      <div className="left-column">
        <WelcomeUser />
        <InfoWrap>
          <Column className="column" onClick={() => setCardVal(1)} $border={cardVal == 1 ? true : false}>
            <div className="text-box">
              <strong className="heading">{t('Buying')}</strong>
              <span className="view-all">
                {t('View All')} <IoIosArrowRoundForward size="25" className="ico" />
              </span>
            </div>
            <div className="img-box">
              <div className="lottieWrapper">
                <Lottie animationData={buyingLottie} loop={true} />
              </div>
            </div>
          </Column>
          <Column className="column" onClick={() => router.push('/selling')}>
            <div className="text-box">
              <strong className="heading">{t('Selling')}</strong>
              <span className="view-all">
                {t('View All')} <IoIosArrowRoundForward size="25" className="ico" />
              </span>
            </div>
            <div className="img-box">
              <div className="lottieWrapper">
                <Lottie animationData={sellingLottie} loop={true} />
              </div>
            </div>
          </Column>
          <Column className="column" onClick={() => setCardVal(3)} $border={cardVal == 3 ? true : false}>
            <div className="text-box">
              <strong className="heading">{t('People')}</strong>
              <span className="view-all">
                {t('View All')} <IoIosArrowRoundForward size="25" className="ico" />
              </span>
            </div>
            <div className="img-box">
              <div className="lottieWrapper">
                <Lottie animationData={peopleLottie} loop={true} />
              </div>
            </div>
          </Column>
        </InfoWrap>
      </div>
      <div className="right-column">
        <Recommended />
      </div>
    </VisualBlock>
  );
}

export default VisualSection;
