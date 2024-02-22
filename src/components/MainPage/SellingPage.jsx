import React from 'react';
import { FloatingWidget, RevolutionizeSellingStyles } from './MainPage.styles';
import Lottie from 'lottie-react';
// import mainAnimation from '../../../public/lottie/mainAnimation.json';
import mainAnimation from '../../../public/lottie/mainAnimation3.json';
import Button from '../Button';
const SellingPage = ({ selling }) => {
  return (
    <RevolutionizeSellingStyles $selling={selling}>
      <div className="conatiner">
        <div className="Revolutionize">
          <div className="text">
            <div className="title">
              <strong className="logo">Revolutionize</strong>
              <strong className="connect">
                <br />
                your real estate journey with the power of AI!{' '}
              </strong>
            </div>
            <div className="disc">
              <p>
                Combining human interaction and AI intelligence, Locke Connect is dedicated to reducing the costs
                associated with property transactions.
              </p>
              <Button variant="primary">ENTER LOCKE AI</Button>
            </div>
          </div>
          <div className="lottiemainWrapper">
            <div className="lootieWrapper">
              <Lottie animationData={mainAnimation} loop={true} />
            </div>
          </div>
        </div>
      </div>
      <span className="info">
        Locke Connect charges 1% of the property sale price, capped at $9,999 for representing you, while offering you{' '}
        <br />
        the flexibility to opt out of paying buyer agent commission!
      </span>
      <div className="pivacyButtons">
        <span className="privacyLinks">Our Disclaimer</span>
        <span className="privacyLinks">Our Licence</span>
      </div>
    </RevolutionizeSellingStyles>
  );
};

export default SellingPage;
