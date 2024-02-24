import React, { useEffect, useState } from 'react';
import { ServiceWrapper, StyledAgentIntroduction } from './AgentProfileComp.styles';
import BoughtSold from '../BoughtSold';
import CheckBox from '../../../public/checkbox.svg';
import Image from 'next/image';
import { MdAdd } from 'react-icons/md';
import Select from '../DropDown/PropertyDropDown';
import { ComissionTypes, LicenseTypes } from '../Constants';
import Input from '../TextField';
import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '../Toast';
import userService from '@/services/auth';

const Introduction = ({ user }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState('');
  const { fetchUser } = useContextHook(AuthContext, ['fetchUser']);

  const [formData, setFormData] = useState({
    about: user?.about?.trim() || '',
    displayName: user?.displayName || '',
    services: user?.services || [],
    housesSold: user?.housesSold || 0,
    housesBought: user?.housesBought || 0,
    commissionType: user?.commissionType || [],
    commissionPercentage: user?.commissionPercentage || '',
  });

  console.log({ formData })

  useEffect(() => {
    if (user) {
      setFormData({
        about: user?.about?.trim() || '',
        displayName: user?.displayName || '',
        services: user?.services || [],
        housesSold: user?.housesSold || 0,
        housesBought: user?.housesBought || 0,
        commissionType: user?.commissionType || [],
        commissionPercentage: user?.commissionPercentage || '',
      })
    }
  }, [user])

  function handelvalue(e) {
    setInputData(e.target.value.trim());
  }
  const handleService = async() => {
    if (!inputData) return;
    const newServices=[inputData, ...formData.services]
    setFormData(prevFormData => ({
      ...prevFormData,
      services: newServices,
    }));
    delete formData.displayName;
    const data={...formData,services:newServices}
    const res = await userService.updateIntroduction(data);
    setInputData('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const editHandler = async () => {
    setLoading(true);
    try {
      delete formData.displayName;
      
      const res = await userService.updateIntroduction(formData);
      if (res) {
        setLoading(false);
        fetchUser();

        Toast({ type: 'success', message: 'Information Updated Successfully' });
      }
    } catch (error) {
      setLoading(false);

      Toast({
        type: 'error',
        message: error.message || 'Something went wrong!',
      });
    }
  };

  return (
    <StyledAgentIntroduction>
      <div className="totalsold">
        <BoughtSold
          bought={formData.housesBought}
          sold={formData.housesSold}
          type="input"
          onValueChange={handleChange}
        />
      </div>
      <label htmlFor="about" className="label">
        {t('About')} {formData?.displayName ?? ''} (150 {t('words')})
      </label>
      <textarea name="about" id="about" cols="30" rows="10" value={formData?.about} onChange={handleChange} />
      <span className="title">{t('Service providing')}:</span>
      <ServiceWrapper>
        <ul className="service">
          {formData.services.map((elem, ind) => (
            <li key={ind}>
              <Image src={CheckBox} alt="CheckBox" />
              {elem}
            </li>
          ))}
        </ul>
        <div className="add-more-service">
          <input type="text" placeholder="Add more" value={inputData} onChange={handelvalue} onKeyDown={(e)=>{
 if (e.key === 'Enter') {
  handleService();
}          }}/>
          <div className="icon" onClick={handleService}>
            <MdAdd size="22px" color="var(--gray-400)" />
          </div>
          <div className="toolTip">Add Your Service</div>
        </div>
      </ServiceWrapper>
      <div className="formWrapper">
        {/* <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Commission')}
          </label>
          <Select option={LicenseTypes} title="Select..." onChange={e => console.log(e)} />
        </div> */}
        <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Commission Type')}
          </label>
          <Select
            option={ComissionTypes}
            title="Select..."
            onChange={e => {
              handleChange({ target: { name: 'commissionType', value: e.value } });
            }}
          />
        </div>
        <div className="inputWrap">
          <label htmlFor="commission" className="field_title">
            {t('Commission')} %
          </label>
          <Input
            placeholder="2.5%"
            type="text"
            name="commissionPercentage"
            Field_Name="commission"
            className="input-group"
            value={formData.commissionPercentage}
            onChange={handleChange}
          />
        </div>

        <div className="buttonWrapper">
          <Button variant="outline" type="button">
            {t('Cancel')}
          </Button>
          <Button variant="primary" onClick={editHandler} loader={loading} disabled={loading}>
            {t('Save Changes')}
          </Button>
        </div>
      </div>
    </StyledAgentIntroduction>
  );
};

export default Introduction;
