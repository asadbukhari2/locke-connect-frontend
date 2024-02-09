import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuBox } from 'react-icons/lu';
import Img01 from '../../../public/img02.jpg';
import { DetailBlock, Description, ExpandView } from './HomeInfo.styles';
import Modal from '../Modal';
import ThreeDView from '../PropertySlider/PropertyModal/ThreeDView';
import { useTranslation } from '@/helpers/useTranslation';

const HomeInfo = ({}) => {
  const [street, setStreet] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Modal open={street} setOpen={setStreet}>
        <ThreeDView setOpen={setStreet} />
      </Modal>
      <DetailBlock>
        <span className="text">
          {t('Listing provided courtesy of')} Mark Besta, Windermere Real Estate Co.. Source NWMLS.
        </span>
        <div className="holder">
          <div className="left-col">
            <strong className="heading">11333 35th Ave NE</strong>
            <strong className="subtitle">Seattle, WA 98125</strong>
            <ul className="list">
              <li>
                <strong className="title">$595,000</strong>
                <span className="text">$3,882/mo</span>
              </li>
              <li>
                <strong className="title">1,600</strong>
                <span className="text">sq ft</span>
              </li>
              <li>
                <strong className="title">2</strong>
                <span className="text">Beds</span>
              </li>
              <li>
                <strong className="title">2</strong>
                <span className="text">Baths</span>
              </li>
            </ul>
          </div>
          <Link href="/map">
            <div className="map-col">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.622785017365!2d-122.29357622299614!3d47.711160571199606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013d917947d61%3A0x8bffc4eff2353c7a!2s11333%2035th%20Ave%20NE%2C%20Seattle%2C%20WA%2098125%2C%20USA!5e0!3m2!1sen!2s!4v1702924333763!5m2!1sen!2s" />
            </div>
          </Link>
        </div>
        <Description>
          <strong className="title">{t('Description')}</strong>
          <p>
            Having a hard time jumping into the current market? Consider this cottage gem, freshly painted with gleaming
            hardwood floors & bundled with all the hallmarks of a warm & comfortable home-just waiting for you to bring
            back her deserving glory. Using vision & a little bit of elbow grease, this 2-bed, 2-bath home with bright
            living room, gas-burning fireplace, dining room &.
          </p>
          <p>
            Having a hard time jumping into the current market? Consider this cottage gem, freshly painted with gleaming
            hardwood floors & bundled with all the hallmarks of a warm & comfortable home-just waiting for you to bring
            back her deserving glory. Using vision & a little bit of elbow grease, this 2-bed, 2-bath home with bright
            living room, gas-burning fireplace, dining room & ...
          </p>
          <Link className="read-more" href="/">
            {t('read more')}
          </Link>
        </Description>
        <ExpandView>
          <Image src={Img01} alt="img description" />
          <button type="button" onClick={() => setStreet(true)}>
            <LuBox size="20" /> {t('Expand 3D View')}
          </button>
        </ExpandView>
      </DetailBlock>
    </>
  );
};

export default HomeInfo;
