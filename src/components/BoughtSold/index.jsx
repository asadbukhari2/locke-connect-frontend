import React from 'react';
import { StyleBoughtSold } from './BoughtSold.styles';
import { useTranslation } from '@/helpers/useTranslation';

function BoughtSold({ ...rest }) {
  const { t } = useTranslation();
  return (
    <StyleBoughtSold {...rest}>
      <div className="col active">
        <strong className="number">336</strong>
        <span className="text">{t('House Sold')}</span>
      </div>
      <div className="col">
        <strong className="number">265</strong>
        <span className="text">{t('Houses Bought')}</span>
      </div>
    </StyleBoughtSold>
  );
}

export default BoughtSold;
