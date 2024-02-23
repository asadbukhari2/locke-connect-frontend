import React, { useState } from 'react';
import { FloatingWidget, RevolutionizeStyles } from './MainPage.styles';
import Lottie from 'lottie-react';
import mainAnimation from '../../../public/lottie/mainAnimation3.json';

import arraowDownHexa from '../../../public/arraowDownHexa.png';
import Button from '../Button';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '../Modal';
import Disclaimer from '../Legal/Disclaimer';
const Revolutionize = ({ selling }) => {
  const [disclaimerModal, setDisclaimerModal] = useState(false);
  const [licenceModal, setLicenceModal] = useState(false);

  return (
    <>
      <Modal width="1100px" open={disclaimerModal} setOpen={setDisclaimerModal}>
        <Disclaimer />
      </Modal>
      <Modal width="1100px" open={licenceModal} setOpen={setLicenceModal}>
        <Disclaimer title="Licence" />
      </Modal>
      <RevolutionizeStyles $selling={selling} id="mainSection">
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
          <span className="privacyLinks" onClick={() => setDisclaimerModal(true)}>
            Our Disclaimer
          </span>
          <span className="privacyLinks" onClick={() => setLicenceModal(true)}>
            Our Licence
          </span>
        </div>
        <Link href="#mainSection">
          <FloatingWidget $top="-35px" $left="auto" $right="auto">
            <Image src={arraowDownHexa} alt="arraowDownHexa" />
          </FloatingWidget>
        </Link>
      </RevolutionizeStyles>
    </>
  );
};

export default Revolutionize;
