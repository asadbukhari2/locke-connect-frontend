import React from 'react';
import { DetialHolder } from './Neighborhood.styles';
import { useTranslation } from '@/helpers/useTranslation';

const Neighborhood = ({}) => {
  const { t } = useTranslation();

  return (
    <DetialHolder>
      <strong className="heading">{t('Neighborhood')}</strong>
      <div className="holder">
        <ul className="list">
          <li>
            <span className="text">Washington</span>
          </li>
          <li>
            <span className="text">King County</span>
          </li>
          <li>
            <span className="text">Seattle</span>
          </li>
          <li className="active">
            <span className="text">Meadowbrook</span>
          </li>
        </ul>
        <div className="detail-holder">
          <div className="box">
            <strong className="title">23</strong>
            <div className="text">{t('Listings')}</div>
          </div>
          <div className="box">
            <strong className="title">6</strong>
            <div className="text">{t('Days listed')}</div>
          </div>
          <div className="box">
            <strong className="title">$465.19</strong>
            <div className="text">{t('Price per sqft')}</div>
          </div>
          <div className="box">
            <strong className="title">104.42%</strong>
            <div className="text">{t('Sold over list')}%</div>
          </div>
        </div>
        <div className="progressBar-holder">
          <div className="wrap">
            <div className="title-holder">
              <strong className="title">{t("Safety Score")}</strong>
              <span className="percentage">20%</span>
            </div>
            <div className="progress-bar">
              <span className="track" style={{ width: '20%' }}></span>
            </div>
          </div>
          <div className="wrap">
            <div className="title-holder">
              <strong className="title">{t("Noise Score")}</strong>
              <span className="percentage">40%</span>
            </div>
            <div className="progress-bar">
              <span className="track" style={{ width: '40%' }}></span>
            </div>
          </div>
          <div className="wrap">
            <div className="title-holder">
              <strong className="title">{t("Future value")} score</strong>
              <span className="percentage">60%</span>
            </div>
            <div className="progress-bar">
              <span className="track" style={{ width: '60%' }}></span>
            </div>
          </div>
        </div>
      </div>
    </DetialHolder>
  );
};

export default Neighborhood;
