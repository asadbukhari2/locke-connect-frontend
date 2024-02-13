import React from 'react';
import { StyleBoughtSold } from './BoughtSold.styles';
import { useTranslation } from '@/helpers/useTranslation';

function BoughtSold({ bought, sold, ...rest }) {
  const { t } = useTranslation();
  return (
    <StyleBoughtSold {...rest}>
      <div className="col active">
        <strong className="number">{sold}</strong>
        <span className="text">{t('House Sold')}</span>
      </div>
      <div className="col">
        <strong className="number">{bought}</strong>
        <span className="text">{t('Houses Bought')}</span>
      </div>
    </StyleBoughtSold>
  );
}

export default BoughtSold;
