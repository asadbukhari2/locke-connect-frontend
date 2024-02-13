import React, { useState } from 'react';
import { StyledEditProfileModal } from './EditProfileModal.styles';
import Input from '../TextField';
import Button from '../Button';
import { formatPhoneNumber } from '@/helpers/common';
import userService from '@/services/auth';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import Toast from '../Toast';
import { useTranslation } from '@/helpers/useTranslation';
import Select from '../DropDown/PropertyDropDown';
import { LicenseTypes, UsStates } from '../Constants';

const EditAgentProfileModal = ({ user, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    displayName: user.displayName || '',
    address: user.address || '',
    licence: user.licenseNumber || '',
    brokerage: user.brokerageName || '',
    licenseType: user.licenseType || '',
    licensingState: user.licensingState || '',
    phoneNumber: formatPhoneNumber(user?.phoneNumber?.slice(2)),
  });

  const { fetchUser } = useContextHook(AuthContext, ['fetchUser']);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePhoneNumberChange = event => {
    const rawPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(rawPhoneNumber);
    handleChange({
      target: { name: 'phoneNumber', value: formattedPhoneNumber },
    });
  };

  const editHandler = async () => {
    setLoading(true);
    try {
      const res = await userService.updateCurrentAgent(formData);
      if (res) {
        setLoading(false);
        fetchUser();
        onClose();
        Toast({ type: 'success', message: 'Agent Updated Successfully' });
      }
    } catch (error) {
      setLoading(false);
      onClose();
      Toast({
        type: 'error',
        message: error.message || 'Something went wrong!',
      });
    }
  };

  return (
    <StyledEditProfileModal>
      <strong className="title">{t('Edit Profile')}</strong>
      <Input
        label={t('Name')}
        placeholder="John"
        type="text"
        name="displayName"
        Field_Name="name"
        className="input-group"
        value={formData.displayName}
        onChange={handleChange}
      />
      <Input
        label={t('Email')}
        placeholder={t('Email')}
        type="email"
        name="email"
        disabled={true}
        Field_Name="email"
        className="input-group"
        value={user.email}
      />
      <Input
        label={t('Phone Number')}
        placeholder={t('Phone Number')}
        type="text"
        name="phoneNumber"
        Field_Name="phoneNumber"
        className="input-group"
        value={formData.phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <Input
        label={t('Address')}
        placeholder={t('Address')}
        type="text"
        name="address"
        Field_Name="Address"
        className="input-group"
        value={formData.address}
        onChange={handleChange}
      />
      <Input
        label={t('Licence Number')}
        placeholder={t('Licence Number')}
        type="text"
        name="licence"
        Field_Name="Licence Number"
        className="input-group"
        value={formData.licence}
        onChange={handleChange}
      />
      <Input
        label={t('Brokerage Name')}
        placeholder={t('Brokerage Name')}
        type="text"
        name="brokerage"
        Field_Name="Brokerage Name"
        className="input-group"
        value={formData.brokerage}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="Name" className="field_title">
          {t('Licence State')}
        </label>
        <Select
          option={UsStates}
          onChange={e => {
            console.log(e);
            handleChange({ target: { name: 'licensingState', value: e.value } });
          }}
          title={formData.licensingState}
        />
      </div>
      <br />
      <div>
        <label htmlFor="Name" className="field_title">
          {t('Type of Licence')}
        </label>
        <Select
          option={LicenseTypes}
          onChange={e => {
            handleChange({ target: { name: 'licenseType', value: e.value } });
          }}
          title={formData.licenseType}
        />
      </div>
      <div className="buttonWrapper">
        <Button type="button" onClick={editHandler} loader={loading} disabled={loading}>
          {t('Save')}
        </Button>
      </div>
    </StyledEditProfileModal>
  );
};

export default EditAgentProfileModal;
