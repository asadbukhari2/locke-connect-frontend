import React from 'react';
import { PaymentWrapper } from './AgentProfileComp.styles';
import dlt from '../../../public/dlt.svg';
import call from '../../../public/call.svg';
import Image from 'next/image';
import Input from '../TextField';
import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
const Payment = () => {
  const { t } = useTranslation();
  return (
    <PaymentWrapper>
      <strong className="title">{t('Payment Options')}</strong>
      <div className="saved-card">
        <span>{t('Saved Card')}</span> <span className="title">938 xxx xxx xxx 212</span>
        <div className="dlt-icon">
          <Image src={dlt} alt="icon" />
        </div>
      </div>
      <div className="addcard">
        <span>{t('Add Card')}</span> <span className="title">ADD icon for cards</span>
      </div>
      <form className="paymentForm">
        <Input placeholder={t('Card Number')} />
        <div className="combine-field">
          <Input placeholder={t('Expiry Date')} />
          <Input placeholder="CVC" />
        </div>
        <Input placeholder={t('Card Holder Name')} />
        <div className="button-wrapper">
          <Button outline type="button">
            {t('Cancel')}
          </Button>
          <Button variant="primary">{t('Make Payment')}</Button>
        </div>
      </form>
      <strong className="title">{t('Customer Service')}</strong>
      <Button outline type="button">
        {t('Contact Customer service')} <Image src={call} alt="call" />
      </Button>
    </PaymentWrapper>
  );
};

export default Payment;
