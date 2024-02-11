import React, { useState } from 'react';
import CardSlider from '../CardSlider/CardSlider';

import { RecomendedText, RecommendedStyles, SliderTab } from './Recommended.styles';
import Badge from '../Badge';
import PropertyCardSlider from '../CardSlider/PropertyCardSlider';
import peoplesService from '@/services/peoples';
import Loaders from '../Loaders';
import { NoRecordFound } from '../NoRecordFound/NoRecord.styles';
import { useTranslation } from '@/helpers/useTranslation';

const Recommended = () => {
  const [sliderType, setSlidertype] = useState(1);

  const { agents_data, agents_loading } = peoplesService.GetRecomenderAgents();
  const { t } = useTranslation();
  return (
    <RecommendedStyles>
      <>
        <RecomendedText>
          <span className="text">
            {t('Recommender')}
            <Badge $variant="primary" child={agents_loading ? '...' : agents_data?.totalItems} />
          </span>
          <div className="tabsWrapper">
            <SliderTab
              onClick={() => {
                setSlidertype(1);
              }}
              $bg={sliderType == 1 ? true : false}>
              {t(' Agent')}
            </SliderTab>
            <SliderTab
              onClick={() => {
                setSlidertype(2);
              }}
              $bg={sliderType == 2 ? true : false}>
              {t('Home')}
            </SliderTab>
          </div>
        </RecomendedText>
        <div>
          {sliderType === 1 && agents_loading ? (
            <Loaders loading={agents_loading} height={100} />
          ) : sliderType === 1 ? (
            agents_data?.agents?.length ? (
              <CardSlider agents={agents_data?.agents} />
            ) : (
              <NoRecordFound>{t('No Agents Found')}</NoRecordFound>
            )
          ) : (
            sliderType === 2 && <PropertyCardSlider />
          )}
        </div>
      </>
    </RecommendedStyles>
  );
};

export default Recommended;
