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

const EditProfileModal = ({ user, onClose }) => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    displayName: user.displayName,
    phoneNumber: formatPhoneNumber(user?.phoneNumber?.slice(2)),
    address: user.address || '',
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
      const res = await userService.updateCurrentUser(formData);
      if (res) {
        setLoading(false);
        fetchUser();
        onClose();
        Toast({ type: 'success', message: 'User Updated Successfully' });
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
      <div className="buttonWrapper">
        <Button type="button" onClick={editHandler} loader={loading} disabled={loading}>
          {t('Save')}
        </Button>
      </div>
    </StyledEditProfileModal>
  );
};

export default EditProfileModal;
