import React from 'react';
import Image from 'next/image';
import bgImg01 from '../../../public/img01.png';
import bgImg02 from '../../../public/img02.png';
import bgImg03 from '../../../public/img03.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import WelcomeUser from '../WelcomeUser';
import Recommended from '../Recommended';
import { VisualBlock, InfoWrap, Column } from './VisualSection.styles';
import { MyContext } from '@/context/card';
import { useContextHook } from 'use-context-hook';
import { useRouter } from 'next/router';

function VisualSection() {
  const { cardVal, setCardVal } = useContextHook(MyContext, [
    'cardVal',
    'setCardVal',
  ]);
  const router = useRouter();

  return (
    <VisualBlock>
      <div className='left-column'>
        <WelcomeUser />
        <InfoWrap>
          <Column
            className='column'
            onClick={() => setCardVal(1)}
            $border={cardVal == 1 ? true : false}
          >
            <div className='text-box'>
              <strong className='heading'>Buying</strong>
              <span className='view-all'>
                View All <IoIosArrowRoundForward size='25' className='ico' />
              </span>
            </div>
            <div className='img-box'>
              <Image src={bgImg01} alt='img description' />
            </div>
          </Column>
          <Column className='column' onClick={() => router.push('/selling')}>
            <div className='text-box'>
              <strong className='heading'>Selling</strong>
              <span className='view-all'>
                View All <IoIosArrowRoundForward size='25' className='ico' />
              </span>
            </div>
            <div className='img-box'>
              <Image src={bgImg02} alt='img description' />
            </div>
          </Column>
          <Column
            className='column'
            onClick={() => setCardVal(3)}
            $border={cardVal == 3 ? true : false}
          >
            <div className='text-box'>
              <strong className='heading'>People</strong>
              <span className='view-all'>
                View All <IoIosArrowRoundForward size='25' className='ico' />
              </span>
            </div>
            <div className='img-box'>
              <Image src={bgImg03} alt='img description' />
            </div>
          </Column>
        </InfoWrap>
      </div>
      <div className='right-column'>
        <Recommended />
      </div>
    </VisualBlock>
  );
}

export default VisualSection;
