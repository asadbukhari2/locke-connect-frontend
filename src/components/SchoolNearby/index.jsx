import React from 'react';
import TabsSet from '../TabsSet';
import { HistoryCol } from './SchoolNearby.styles';
import AllTabsContent from '../AllTabsContent';
import { useTranslation } from '@/helpers/useTranslation';

const tabs = [
  { label: 'All', content: <AllTabsContent /> },
  { label: 'Preschool', content: 'Content 2' },
  { label: 'Elementary', content: <AllTabsContent /> },
  { label: 'Middle', content: 'Content 4' },
  { label: 'High', content: <AllTabsContent /> },
];

const SchoolNearby = () => {
  const { t } = useTranslation();
  return (
    <HistoryCol>
      <strong className="heading">{t('Schools nearby')}</strong>
      <div className="holder">
        <TabsSet tabs={tabs} />
      </div>
    </HistoryCol>
  );
};

export default SchoolNearby;
