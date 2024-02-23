import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { PaymentWrapper } from './AgentProfileComp.styles';
import dlt from '../../../public/dlt.svg';
import visaCard from '../../../public/visaCard.png';
import masterCard from '../../../public/masterCard.png';
import call from '../../../public/call.svg';
import Image from 'next/image';
import Input from '../TextField';
import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
import stripeService from '@/services/stripe';
import convertTocents from '@/utils/convertTocents';
import { InputStyled } from '../TextField/TextField.styles';

const Payment = ({ amount, items, selectedProduct }) => {
  const { t } = useTranslation();
  const stripe = useStripe();
  const elements = useElements();
  const [cardId, setCardID] = useState('');
  const [loading, setLoading] = useState(false);

  const [cardHolderName, setCardHolderName] = useState('');

  const handlePaymentSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      if (!stripe || !elements) return;

      const cardElement = elements.getElement(CardNumberElement);
      const result = await stripe.createToken(cardElement, { name: cardHolderName });

      const response = await stripeService.createCustomerAndCard({
        cardToken: result.token.id,
        amount: convertTocents(amount),
      });

      let subId = [];
      subId = items.map(_ => _.price.id);
      subId.push(selectedProduct.price.id);

      if (response.success) {
        await stripeService.subscribe(subId, response.data.customerId);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleDeleteClick = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const { cards_data, cards_loading } = stripeService.GetCards({ page: 1, itemsPerPage: 100, searchText: '' });

  return (
    <PaymentWrapper>
      <strong className="title">{t('Payment Options')}</strong>

      <div className="saved-card">
        {cards_data?.data?.map(itm => {
          return (
            <div>
              <div>{t('Saved Card')}</div>
              <span className="title">********{itm.last4}</span>
              {/* <span className="dlt-icon" onClick={handleDeleteClick}>
                <Image src={dlt} alt="icon" />
              </span> */}
            </div>
          );
        })}
      </div>

      <div className="addcard">
        <span>{t('Add Card')}</span>{' '}
        <div className="paymentCard">
          <span className="flag">
            <Image src={visaCard} alt="visaCard" />
          </span>
          <span className="flag">
            <Image src={masterCard} alt="masterCard" />
          </span>
        </div>
      </div>

      <form className="paymentForm">
        <InputStyled $padding>
          <CardNumberElement
            options={{
              hidePostalCode: true,
            }}
          />
        </InputStyled>
        {/* <Input placeholder={t('Card Number')} value={cardNumber} onChange={e => setCardNumber(e.target.value)} /> */}
        <div>
          {/* <Input placeholder={t('Expiry Date')} value={expDate} onChange={e => setExpDate(e.target.value)} /> */}
          {/* <Input placeholder="CVC" value={cvc} onChange={e => setCvc(e.target.value)} /> */}
          <div className="combine-field">
            <InputStyled $padding>
              <CardExpiryElement
                options={{
                  hidePostalCode: true,
                }}
              />
            </InputStyled>
            <InputStyled $padding>
              <CardCvcElement
                options={{
                  hidePostalCode: true,
                }}
              />
            </InputStyled>
          </div>
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
          <Button variant="primary" onClick={handlePaymentSubmit} loader={loading} disabled={loading || !amount}>
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
