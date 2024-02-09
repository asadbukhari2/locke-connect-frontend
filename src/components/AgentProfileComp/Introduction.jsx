import React, { useState } from 'react';
import { ServiceWrapper, StyledAgentIntroduction } from './AgentProfileComp.styles';
import BoughtSold from '../BoughtSold';
import CheckBox from '../../../public/checkbox.svg';
import Image from 'next/image';
import { MdAdd } from 'react-icons/md';
import Select from '../DropDown/PropertyDropDown';
import { LicenseTypes } from '../Constants';
import Input from '../TextField';
import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
const Introduction = () => {
  const { t } = useTranslation();
  const services = ['Buy', 'Sell', 'Marketing', 'Staging', 'Photography'];
  const [data, setData] = useState(services);
  const [inputData, setInputData] = useState('');
  function handelvalue(e) {
    setInputData(e.target.value);
  }
  function handelService() {
    if (!inputData) return;
    setData(prev => [inputData, ...prev]);
    setInputData('');
  }
  return (
    <StyledAgentIntroduction>
      <div className="totalsold">
        <BoughtSold />
      </div>
      <label htmlFor="about" className="label">
        {t('About')} John (150 {t('words')})
      </label>
      <textarea name="" id="about" cols="30" rows="10"></textarea>
      <span className="title">{t('Service providing')}:</span>
      <ServiceWrapper>
        <ul className="service">
          {data.map((elem, ind) => (
            <li key={ind}>
              <Image src={CheckBox} alt="CheckBox" />
              {elem}
            </li>
          ))}
        </ul>
        <div className="add-more-service">
          <input type="text" placeholder="Add more" value={inputData} onChange={handelvalue} />
          <div className="icon" onClick={handelService}>
            <MdAdd size="22px" color="var(--gray-400)" />
          </div>
        </div>
      </ServiceWrapper>
      <div className="formWrapper">
        <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Commission')}
          </label>
          <Select option={LicenseTypes} title="Select..." onChange={e => console.log(e)} />
        </div>
        <div className="inputWrap">
          <label htmlFor="commission" className="field_title">
            {t('Commission')} %
          </label>
          <Input type="text" Field_Name="commission" placeholder="2.5%" />
        </div>
        <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Commission')}
          </label>
          <Select option={LicenseTypes} title="Select..." onChange={e => console.log(e)} />
        </div>
        <div className="buttonWrapper">
          <Button variant="outline" type="button">
            {t('Cancel')}
          </Button>
          <Button variant="primary">{t('Save Changes')}</Button>
        </div>
      </div>
    </StyledAgentIntroduction>
  );
};

export default Introduction;
