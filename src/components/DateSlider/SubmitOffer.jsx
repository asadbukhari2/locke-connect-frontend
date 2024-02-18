import React, { useState } from 'react';
import { StyledDateSliderWrapper } from './DateSlider.styles';
import Button from '../Button';
import { HiArrowLongRight } from 'react-icons/hi2';
import { useTranslation } from '@/helpers/useTranslation';

const SubmitOffer = ({ close, setOpen, open }) => {
  const [dates, setDates] = useState([]);
  const { t } = useTranslation();
  const time = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
  ];

  return (
    <>
      <StyledDateSliderWrapper>
        <div className="text">
          <strong>{t('Submit Offer!')}</strong>
          <p>{t('This house is listed with Locke Connect! Submit an Offer here!')}</p>
        </div>
        <Button onClick={() => setOpen(!open)}>
          {t('Make an offer!')} <HiArrowLongRight size={22} />
        </Button>
      </StyledDateSliderWrapper>
    </>
  );
};

export default SubmitOffer;
