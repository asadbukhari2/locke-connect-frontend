import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { PaymentWrapper } from './AgentProfileComp.styles';
import dlt from '../../../public/dlt.svg';
import call from '../../../public/call.svg';
import Image from 'next/image';
import Input from '../TextField';
import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
import stripeService from '@/services/stripe';

const Payment = () => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();

  const [cardHolderName, setCardHolderName] = useState('');

  const handlePaymentSubmit = async event => {
    event.preventDefault();
    try {
      if (!stripe || !elements) return;

      const cardElement = elements.getElement(CardNumberElement);
      const result = await stripe.createToken(cardElement);
      console.log(result);
      const e = await stripeService.createCustomerAndCard({
        email: 'asad@psp.ca',
        cardHolderName,
        cardToken: result.token.id,
      });

      // const result = await stripe.createPaymentMethod({
      //   type: 'card',
      //   card: elements.getElement(CardNumberElement),
      //   billing_details: {
      //     name: cardHolderName,
      //   },
      // });
      // console.log(result);

      // if (result.error) {
      //   console.log(result.error);
      // } else {
      //   console.log(result.error);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PaymentWrapper>
      <strong className="title">{t('Payment Options')}</strong>

      {/* <div className="saved-card">
        <span>{t('Saved Card')}</span> <span className="title">938 xxx xxx xxx 212</span>
        <div className="dlt-icon">
          <Image src={dlt} alt="icon" />
        </div>
      </div>

      <div className="addcard">
        <span>{t('Add Card')}</span> <span className="title">ADD icon for cards</span>
      </div> */}

      <form className="paymentForm">
        <CardNumberElement
          options={{
            hidePostalCode: true,
            style: {
              base: {},
            },
          }}
        />
        {/* <Input placeholder={t('Card Number')} value={cardNumber} onChange={e => setCardNumber(e.target.value)} /> */}
        <div className="combine-field">
          {/* <Input placeholder={t('Expiry Date')} value={expDate} onChange={e => setExpDate(e.target.value)} /> */}
          {/* <Input placeholder="CVC" value={cvc} onChange={e => setCvc(e.target.value)} /> */}
          <CardExpiryElement
            options={{
              hidePostalCode: true,
              style: {
                base: {},
              },
            }}
          />
          <CardCvcElement
            options={{
              hidePostalCode: true,
              style: {
                base: { color: 'red' },
              },
            }}
          />
        </div>
        <Input
          placeholder={t('Card Holder Name')}
          value={cardHolderName}
          onChange={e => setCardHolderName(e.target.value)}
        />
        <div className="button-wrapper">
          <Button outline type="button">
            {t('Cancel')}
          </Button>
          <Button variant="primary" onClick={handlePaymentSubmit}>
            {t('Make Payment')}
          </Button>
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
