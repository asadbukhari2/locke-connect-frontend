import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Column } from './MortgageCalculator.styles';
import Button from '../Button';
import Modal from '../Modal';
import ModalAdvanceOption from '../ModalAdvanceOption';
import { useTranslation } from '@/helpers/useTranslation';

function MortgageCalculator() {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Modal setOpen={setModal} open={modal}>
        <ModalAdvanceOption
        // setOpen={setModal}
        />
      </Modal>
      <Column>
        <strong className="title">{t('Mortgage Calculator')}</strong>
        <span className="price">$3,882/mo</span>
        <div className="progressbar">
          <span className="track interest" style={{ width: '50%' }}></span>
          <span className="track tax" style={{ width: '30%' }}></span>
          <span className="track interest2" style={{ width: '20%' }}></span>
        </div>
        <ul className="price-lsit">
          <li>
            <span className="box interest"></span>
            <span className="text">{t('Principal and interest')}</span>
            <strong className="price">$3,280</strong>
          </li>
          <li>
            <span className="box tax"></span>
            <span className="text">{t('Property taxes')}</span>
            <strong className="price">$494</strong>
          </li>
          <li>
            <span className="box interest2"></span>
            <span className="text">{t('Principal and interest')}</span>
            <strong className="price">$109</strong>
          </li>
        </ul>
        <Button>
          {t('See how much you qualify for')} <BsArrowRight size="18" />
        </Button>
        <form className="form-holder">
          <div className="advance-input">
            <label htmlFor="home">{t('Home Price')}</label>
            <input id="home" type="text" placeholder="$595,000" />
          </div>
          <div className="advance-input">
            <label htmlFor="home">{t('Downpayment')}</label>
            <input id="home" type="text" placeholder="$119,000" />
            <span className="percentage-text">20.0%</span>
          </div>
          <div className="advance-input">
            <label htmlFor="home">{t('Loan Program')}</label>
            <input id="home" type="text" placeholder="30 Year fixed" />
            <span className="percentage-text">7.3510%</span>
          </div>
        </form>
        <button
          className="btn-option"
          onClick={() => {
            setModal(true);
          }}>
          {t('Advanced Option')}
        </button>
      </Column>
    </>
  );
}

export default MortgageCalculator;
