import React from 'react';
import { StyleBoughtSold } from './BoughtSold.styles';
import { useTranslation } from '@/helpers/useTranslation';

function BoughtSold({ bought, sold, onValueChange, type = 'static', ...rest }) {
  const { t } = useTranslation();
  return (
    <StyleBoughtSold {...rest}>
      <div className="col active">
        {type === 'static' ? (
          <strong className="number">{sold}</strong>
        ) : (
          <input type="number" name="housesSold" value={sold} onChange={onValueChange} />
        )}
        <span className="text">{t('House Sold')}</span>
      </div>
      <div className="col">
        {type === 'static' ? (
          <strong className="number">{bought}</strong>
        ) : (
          <input type="number" name="housesBought" value={bought} onChange={onValueChange} />
        )}
        <span className="text">{t('Houses Bought')}</span>
      </div>
    </StyleBoughtSold>
  );
}

export default BoughtSold;
