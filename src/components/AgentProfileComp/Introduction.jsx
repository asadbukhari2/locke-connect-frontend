import React, { useEffect, useState } from 'react';
import { ServiceWrapper, StyledAgentIntroduction } from './AgentProfileComp.styles';
import BoughtSold from '../BoughtSold';
import CheckBox from '../../../public/checkbox.svg';
import Image from 'next/image';
import { MdAdd } from 'react-icons/md';
import Select from '../DropDown/PropertyDropDown';
import { AgentTypes, Comission, ComissionTypes, Languages, LicenseTypes } from '../Constants';
import Input from '../TextField';
import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import Toast from '../Toast';
import userService from '@/services/auth';
import MultiSelect from '../DropDown/PropertyDropDown/MultiSelect';
import { FaCircle, FaCross } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Introduction = ({ user }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState('');
  const [inputHomeData, setInputHomeData] = useState('');
  const { fetchUser } = useContextHook(AuthContext, ['fetchUser']);
  const [state, setState] = useState({ languages: [] });
  const [formData, setFormData] = useState({
    about: user?.about?.trim() || '',
    displayName: user?.displayName || '',
    services: user?.services || [],
    homeClosedIn: user?.homeClosedIn || [],
    housesSold: user?.housesSold || 0,
    housesBought: user?.housesBought || 0,
    commissionType: user?.commissionType || [],
    commissionPercentage: user?.commissionPercentage || '',
    agentType: user?.agentType || 'agent',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        about: user?.about?.trim() || '',
        displayName: user?.displayName || '',
        services: user?.services || [],
        homeClosedIn: user?.homeClosedIn || [],
        housesSold: user?.housesSold || 0,
        housesBought: user?.housesBought || 0,
        commissionType: user?.commissionType || [],
        commissionPercentage: user?.commissionPercentage || '',
        languages: user?.languages ?? [],
        agentType: user?.agentType || 'agent',

      });
      if (user?.languages) {
        const userLanguages = Languages.filter(itm => user?.languages?.includes(itm?.value));
        setState(prev => ({ ...prev, languages: userLanguages }));
      }
      const agentType=AgentTypes.find((itm)=>itm.value==user?.agentType)
      if(agentType){
        setState(prev => ({ ...prev, agentType }));
      }else{
        setState(prev => ({ ...prev, agentType:{label:'Agent',value:'agent'} }));

      }
    }
  }, [user]);

  function handelvalue(e,type='') {
    if(type){
      setInputHomeData(e.target.value);

    }else{

      setInputData(e.target.value.trim());
    }
  }
  const handleLanguages = languages => {
    const langs = languages?.map(itm => itm?.value);
    setFormData(prevFormData => ({
      ...prevFormData,
      languages: langs,
    }));
  };
  const handleService = async () => {
    if (!inputData) return;
    const newServices = [inputData, ...formData.services];
    setFormData(prevFormData => ({
      ...prevFormData,
      services: newServices,
    }));
    delete formData.displayName;
    const data = { ...formData, services: newServices };
    const res = await userService.updateIntroduction(data);
    setInputHomeData('');
  };
  const handleRemoveService = async service => {
    try {
      const newServices = formData?.services?.filter(itm => itm !== service);
      setFormData(prevFormData => ({
        ...prevFormData,
        services: newServices,
      }));
      delete formData.displayName;
      const data = { ...formData, services: newServices };
      await userService.updateIntroduction(data);
    } catch (err) {
      Toast({ type: 'error', message: err?.message });
    }
  };

  const handleHomeClosedIn = async () => {
    if (!inputHomeData?.trim()) return;
    const newServices = [inputHomeData, ...formData.homeClosedIn];
    setFormData(prevFormData => ({
      ...prevFormData,
      homeClosedIn: newServices,
    }));
    delete formData.displayName;
    setInputHomeData('');
    const data = { ...formData, homeClosedIn: newServices };
     await userService.updateIntroduction(data);
  };
 
 const handleRemoveHomeCloseIn = async service => {
    try {
      const newServices = formData?.homeClosedIn?.filter(itm => itm !== service);
      setFormData(prevFormData => ({
        ...prevFormData,
        homeClosedIn: newServices,
      }));
      delete formData.displayName;
      const data = { ...formData, homeClosedIn: newServices };
      await userService.updateIntroduction(data);
    } catch (err) {
      Toast({ type: 'error', message: err?.message });
    }
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

  const handleComission = (val, type) => {
    let c = { type: state?.comission?.type, value: state?.comission?.value };
    if (type == 'type') {
      c.type = val;
    } else {
      c.value = val;
    }
    setState(p => ({ ...p, comission: c }));
    const userComissions = Comission?.map(itm => {
      if (itm?.label == state?.comission?.type) {
        return {
          type: itm?.label,
          value: type != 'type' ? val : user?.comission?.find(i => i?.type == itm?.label)?.value,
        };
      }
      return {
        type: itm?.label,
        value:
          user?.comission?.find(i => i?.type == itm?.label)?.value ??
          formData?.comission?.find(i => i?.type == itm?.label)?.value,
      };
    });

    setFormData(p => ({ ...p, comission: userComissions }));
  };
  const handleAgentType=(val)=>{
    setFormData(p => ({ ...p, agentType: val }));

  }
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
      <div className="language-holder">
        <span className="title">{t('Agent Type')}:</span>
        <div className="language-select">
          <Select
            name="agentType"
            option={AgentTypes}
            title="Select Agent Type"
            selectedVal={state?.agentType}
            onChange={(e) => {
              handleAgentType(e.value);
            }}
          />
        </div>
      </div>
      <div className="language-holder">
        <span className="title">{t('Languages')}:</span>
        <div className="language-select">
          <MultiSelect
            isMulti
            name="languages"
            options={Languages}
            title="Select Languages"
            value={state?.languages}
            onChange={({ target: { value } }) => {
              handleLanguages(value);
            }}
          />
        </div>
      </div>
      <span className="title">{t('Service providing')}:</span>
      <ServiceWrapper>
        <ul className="service">
          {formData.services.map((elem, ind) => (
            <li key={ind}>
              <Image src={CheckBox} alt="CheckBox" />
              {elem}
              <span
                className="cross-icon"
                onClick={() => {
                  handleRemoveService(elem);
                }}>
                <FaTimes />
              </span>
            </li>
          ))}
        </ul>
        <div className="add-more-service">
          <input
            type="text"
            placeholder="Add more"
            value={inputData}
            onChange={handelvalue}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleService();
              }
            }}
          />
          <div className="icon" onClick={handleService}>
            <MdAdd size="22px" color="var(--gray-400)" />
          </div>
          <div className="toolTip">Add your service</div>
        </div>
      </ServiceWrapper>


      <span className="title">{t('Home Closed In')}:</span>
      <ServiceWrapper>
        <ul className="service">
          {formData.homeClosedIn.map((elem, ind) => (
            <li key={ind}>
              <Image src={CheckBox} alt="CheckBox" />
              {elem}
              <span
                className="cross-icon"
                onClick={() => {
                  handleRemoveHomeCloseIn(elem);
                }}>
                <FaTimes />
              </span>
            </li>
          ))}
        </ul>
        <div className="add-more-service">
          <input
            type="text"
            placeholder="Add more"
            value={inputHomeData}
            onChange={(e)=>{handelvalue(e,'home')}}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleHomeClosedIn();
              }
            }}
          />
          <div className="icon" onClick={handleHomeClosedIn}>
            <MdAdd size="22px" color="var(--gray-400)" />
          </div>
          <div className="toolTip">Add homes closed</div>
        </div>
      </ServiceWrapper>
      <div className="formWrapper">
        <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Commission Type')}
          </label>
          <Select
            option={ComissionTypes}
            title="Select..."
            onChange={e => {
              handleComission(e.value, 'type');
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
            value={state?.comission?.value}
            onChange={({ target: { value } }) => {
              handleComission(value, 'percentage');
            }}
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
