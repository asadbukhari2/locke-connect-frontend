import React from 'react';
import { FactsDetail } from './HomeFacts.styles';
import { useTranslation } from '@/helpers/useTranslation';

const HomeFacts = ({}) => {
  const { t } = useTranslation();
  return (
    <FactsDetail>
      <strong className="heading">Home Facts</strong>
      <div className="holder">
        <div className="wrap">
          <strong className="subtitle">{t('Listing')}</strong>
          <ul className="list">
            <li>
              <span className="text">{t('status')}</span>
              <span className="text">active</span>
            </li>
            <li>
              <span className="text">{t('listed')}</span>
              <span className="text">2 days ago</span>
            </li>
            <li>
              <span className="text">{t('property')} type</span>
              <span className="text">Home</span>
            </li>
          </ul>
        </div>
        <div className="wrap">
          <strong className="subtitle">{t('Property')}</strong>
          <ul className="list">
            <li>
              <span className="text">{t('Year built')}</span>
              <span className="text">1948</span>
            </li>
            <li>
              <span className="text">{t('Style')}</span>
              <span className="text">-</span>
            </li>
            <li>
              <span className="text">{t('Community')}</span>
              <span className="text">Meadowbrook</span>
            </li>
            <li>
              <span className="text">{t('Lot size')}</span>
              <span className="text">7,740 sq ft</span>
            </li>
            <li>
              <span className="text">{t('MLS')}#</span>
              <span className="text">2179825</span>
            </li>
          </ul>
        </div>
        <div className="wrap">
          <strong className="subtitle">{t('Property')}</strong>
          <ul className="list">
            <li>
              <span className="text">{t('Year built')}</span>
              <span className="text">1948</span>
            </li>
            <li>
              <span className="text">{t('Style')}</span>
              <span className="text">-</span>
            </li>
            <li>
              <span className="text">{t('Community')}</span>
              <span className="text">Meadowbrook</span>
            </li>
            <li>
              <span className="text">{t('Lot size')}</span>
              <span className="text">7,740 sq ft</span>
            </li>
            <li>
              <span className="text">{t('MLS')}#</span>
              <span className="text">2179825</span>
            </li>
          </ul>
        </div>
      </div>
    </FactsDetail>
  );
};

export default HomeFacts;
