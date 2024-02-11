import React from 'react';
import Button from '../Button';
import { ModalContent } from './ModalAdvanceOption.styles';
import { MdOutlineClose } from 'react-icons/md';
import { useTranslation } from '@/helpers/useTranslation';

function ModalAdvanceOption() {
  const { t } = useTranslation();
  return (
    <ModalContent>
      <strong className="title">{t('Advanced Option')}</strong>
      <form className="form-holder">
        <div className="advance-input">
          <label htmlFor="home">{t('Annual Property Tax Rate')}</label>
          <input id="home" type="text" placeholder="0.995" />
          <span className="percentage-text">%</span>
        </div>
        <span className="para-text">{t('Property taxes are calculated as a percentage of the home value')}.</span>
        <span className="para-text">{t('Tax rates vary by area and is subject to change')}.</span>
        <div className="advance-input">
          <label htmlFor="home">{t('Annual Homeowner’s Insurance')}</label>
          <input id="home" type="text" placeholder="$1,309" />
          <span className="percentage-text">0.22%</span>
        </div>
        <span className="para-text">
          {t('The average rate for homes is')} 0.22%. {t('Insurance rates vary by provider and area')}.
        </span>
      </form>
      <Button>{t('Done')}</Button>
    </ModalContent>
  );
}

export default ModalAdvanceOption;
