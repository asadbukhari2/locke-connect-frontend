import React from 'react';
import { PaymentWrapper } from './AgentProfileComp.styles';
import dlt from '../../../public/dlt.svg';
import call from '../../../public/call.svg';
import Image from 'next/image';
import Input from '../TextField';
import Button from '../Button';
const Payment = () => {
  return (
    <PaymentWrapper>
      <strong className="title">Payment Options</strong>
      <div className="saved-card">
        <span>Saved Card</span> <span className="title">938 xxx xxx xxx 212</span>
        <div className="dlt-icon">
          <Image src={dlt} alt="icon" />
        </div>
      </div>
      <div className="addcard">
        <span>Add Card</span> <span className="title">ADD icon for cards</span>
      </div>
      <form className="paymentForm">
        <Input placeholder="Card Number" />
        <div className="combine-field">
          <Input placeholder="Expiry Date" />
          <Input placeholder="CVC" />
        </div>
        <Input placeholder="Card Holder Name" />
        <div className="button-wrapper">
          <Button outline type="button">
            Cancel
          </Button>
          <Button variant="primary">Make Payment</Button>
        </div>
      </form>
      <strong className="title">Customer Service</strong>
      <Button outline type="button">
        Contact Customer service <Image src={call} alt="call" />
      </Button>
    </PaymentWrapper>
  );
};

export default Payment;
