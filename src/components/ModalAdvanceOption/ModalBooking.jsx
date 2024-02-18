import React from 'react';
import Button from '../Button';
import { ModalContent } from './ModalAdvanceOption.styles';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmark } from 'react-icons/io5';
import { useTranslation } from '@/helpers/useTranslation';
function ModalBooking({
  setOpen,
  data = {
    title: 'Thanks For Your Booking',
    discreption: 'One of our representative will contact with you very soon again',
  },
}) {
  const { t } = useTranslation();
  return (
    <ModalContent>
      <div className="bookingSuccess">
        <IoCheckmark size="30" color="var(--success-500)" />
      </div>
      <strong className="bookingTitle">{t(data.title)}</strong>
      <span className="para-booking">{t(data.discreption)}</span>
      <Button onClick={() => setOpen(false)}>{t('Go Back')}</Button>
    </ModalContent>
  );
}

export default ModalBooking;
