import React, { useState } from 'react';
import { StyledFormUserRegister } from './Form.styles';
import Input from '../TextField';
import Button from '../Button';
import { useRouter } from 'next/router';
import userService from '@/services/auth';
import Select from '../DropDown/PropertyDropDown';
import { LicenseTypes, UsStates } from '../Constants';
import Toast from '../Toast';
import { formatPhoneNumber } from '@/helpers/common';
import { useTranslation } from '@/helpers/useTranslation';

const ProfessionalRegister = () => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    licenseNumber: '',
    licenseType: '',
    licensingState: '',
    brokerageName: '',
    address: '',
    role: 'agent',
  });
  const { t } = useTranslation();

  const router = useRouter();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

  const isDisabled =
    user.phoneNumber?.length === 0 ||
    !phoneRegex.test(user.phoneNumber) ||
    user.password.length === 0 ||
    !emailRegex.test(user.email) ||
    user.email?.length === 0;

  const handlePhoneNumberChange = event => {
    const rawPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(rawPhoneNumber);
    handleChange({
      target: { name: 'phoneNumber', value: formattedPhoneNumber },
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const registerHandler = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await userService.signup(user);

      if (response.success) {
        Toast({ type: 'success', message: response?.message });
        router.replace('sign-in');
      }
      setLoading(false);
    } catch (error) {
      Toast({ type: 'error', message: error });
      setLoading(false);
    }
  };

  return (
    <StyledFormUserRegister>
      <form className="formWrapper">
        <div className="title">{t('Register')}</div>
        <div className="combineFields">
          <Input
            placeholder="jhon@example.com"
            label={t('Email')}
            Field_Name="user-mail"
            type="email"
            name="email"
            className="input-group"
            value={user.email}
            onChange={handleChange}
            error={user.email.length > 0 && !emailRegex.test(user.email) ? t('Email not correct') : null}
          />
          <Input
            placeholder={t('Password')}
            label={t('Password')}
            Field_Name="user-password"
            type="password"
            name="password"
            className="input-group"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="combineFields">
          <Input
            placeholder={t('Phone Number')}
            label={t('Phone Number')}
            Field_Name="user-PhoneNumber"
            type="text"
            name="phoneNumber"
            className="input-group"
            value={user.phoneNumber}
            onChange={handlePhoneNumberChange}
            error={
              user.phoneNumber?.length > 0 && !phoneRegex.test(user.phoneNumber)
                ? t('Please enter correct phone')
                : null
            }
          />
          <div className="selectDropDown">
            <span className="text">{t('License types')}</span>
            <Select
              title="licenseType"
              placeholder={t('License Type')}
              onChange={({ value }, name) => {
                const target = {
                  name,
                  value,
                };
                handleChange({ target });
              }}
              option={LicenseTypes}
            />
          </div>
        </div>
        <div className="combineFields">
          <Input
            placeholder={t('License Number')}
            label={t('License Number')}
            Field_Name="license-number"
            type="text"
            name="licenseNumber"
            className="input-group"
            value={user.licenseNumber}
            onChange={handleChange}
          />

          <div className="selectDropDown">
            <span className="text">{t('Licensing State')}</span>
            <Select
              title="licensingState"
              placeholder={t('Licensing State')}
              onChange={({ value }, name) => {
                const target = {
                  name,
                  value,
                };
                handleChange({ target });
              }}
              option={UsStates}
            />
          </div>
        </div>
        <div className="combineFields">
          <Input
            placeholder={t('Brokerage Name')}
            label={t('Brokerage Name')}
            Field_Name="brokerage-name"
            type="text"
            name="brokerageName"
            className="input-group"
            value={user.brokerageName}
            onChange={handleChange}
          />
          <Input
            placeholder={t('Address')}
            label={t('Address')}
            Field_Name="address"
            type="text"
            name="address"
            className="input-group"
            value={user.address}
            onChange={handleChange}
          />
        </div>

        <div className="buttonWrapper">
          <Button variant="primary" onClick={registerHandler} disabled={isDisabled} loader={loading}>
            {t('Register')}
          </Button>
        </div>
      </form>
    </StyledFormUserRegister>
  );
};

export default ProfessionalRegister;
