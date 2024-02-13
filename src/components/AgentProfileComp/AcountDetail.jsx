import React, { useEffect, useState } from 'react';
import { AccountDetailStyled, DeleteModalWrapper } from './AgentProfileComp.styles';
// import Input from '../TextField';
// import Select from '../DropDown/PropertyDropDown';
// import { LicenseTypes, UsStates } from '../Constants';
// import Button from '../Button';
import { useTranslation } from '@/helpers/useTranslation';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { formatPhoneNumber } from '@/helpers/common';
import userService from '@/services/auth';
import Toast from '../Toast';
import Modal from '../Modal';
import Button from '../Button';

const AcountDetail = ({ activeTab }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { user, onLogout } = useContextHook(AuthContext, ['user', 'onLogout']);

  const [deleteAccount, setDeleteAccount] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    address: '',
    licence: '',
    brokerage: '',
    licenseType: '',
    licensingState: '',
    phoneNumber: '',
  });

  useEffect(() => {
    setFormData({
      displayName: user.displayName || '',
      address: user.address || '',
      licence: user.licenseNumber || '',
      brokerage: user.brokerageName || '',
      licenseType: user.licenseType || '',
      licensingState: user.licensingState || '',
      phoneNumber: user?.phoneNumber?.slice(0, 2) + ' ' + formatPhoneNumber(user?.phoneNumber?.slice(2)),
    });
  }, [activeTab]);

  const deleteAccountHandler = async () => {
    setLoading(true);
    try {
      const res = await userService.deleteMyAccount();
      if (res) {
        setLoading(false);
        onLogout();
        Toast({ type: 'success', message: 'Success' });
      }
      setDeleteAccount(false);
    } catch (error) {
      console.log(error);
      onLogout();
      setDeleteAccount(false);
      Toast({ type: 'success', message: 'Error' });
    }
  };

  return (
    <>
      <Modal open={deleteAccount} setOpen={setDeleteAccount} width="500px">
        <DeleteModalWrapper>
          <strong className="title">are you sure you want to delete?</strong>
          <span className="info">The account will be deleted immediately. You can't undo this action.</span>
          <div className="buttonWrapper">
            <Button variant="success" onClick={() => setDeleteAccount(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={deleteAccountHandler}>
              Delete
            </Button>
          </div>
        </DeleteModalWrapper>
      </Modal>

      <AccountDetailStyled>
        {/* <div className="inputWrap">
        <label htmlFor="profile-image" className="field_title">
          {t('Upload Profile Picture')}
        </label>
        <div className="upload-Image-wrapper">
          <label htmlFor="profile-image" className="upload_label">
            {t('Upload Image')}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.5 2.5H2.5C2.23478 2.5 1.98043 2.60536 1.79289 2.79289C1.60536 2.98043 1.5 3.23478 1.5 3.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V3.5C14.5 3.23478 14.3946 2.98043 14.2071 2.79289C14.0196 2.60536 13.7652 2.5 13.5 2.5ZM13.5 3.5V9.92188L11.8706 8.29313C11.7778 8.20024 11.6675 8.12656 11.5462 8.07629C11.4248 8.02602 11.2948 8.00015 11.1634 8.00015C11.0321 8.00015 10.902 8.02602 10.7807 8.07629C10.6594 8.12656 10.5491 8.20024 10.4563 8.29313L9.20625 9.54313L6.45625 6.79313C6.26873 6.60573 6.01448 6.50046 5.74937 6.50046C5.48427 6.50046 5.23002 6.60573 5.0425 6.79313L2.5 9.33562V3.5H13.5ZM2.5 10.75L5.75 7.5L10.75 12.5H2.5V10.75ZM13.5 12.5H12.1644L9.91438 10.25L11.1644 9L13.5 11.3363V12.5ZM9 6.25C9 6.10166 9.04399 5.95666 9.1264 5.83332C9.20881 5.70999 9.32594 5.61386 9.46299 5.55709C9.60003 5.50032 9.75083 5.48547 9.89632 5.51441C10.0418 5.54335 10.1754 5.61478 10.2803 5.71967C10.3852 5.82456 10.4566 5.9582 10.4856 6.10368C10.5145 6.24917 10.4997 6.39997 10.4429 6.53701C10.3861 6.67406 10.29 6.79119 10.1667 6.8736C10.0433 6.95601 9.89834 7 9.75 7C9.55109 7 9.36032 6.92098 9.21967 6.78033C9.07902 6.63968 9 6.44891 9 6.25Z"
                fill="#606F8D"
              />
            </svg>
          </label>
          <input id="profile-image" type="file" className="upload-input" />
          <label htmlFor="profile-image" className="field_title">
            <Button width="90px" variant="primary" type="button">
              {t('Upload')}
            </Button>
          </label>
        </div>
      </div> */}
        <div className="inputWrap">
          <label htmlFor="name" className="field_title">
            {t('Name')}
          </label>
          {/* <Input Field_Name="name" type="text" value={formData.displayName} /> */}
          <span>{formData.displayName}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Type of Licence')}
          </label>
          {/* <Select option={LicenseTypes} onChange={e => console.log(e)} title={formData.licenseType} /> */}
          <span>{formData.licenseType}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="Name" className="field_title">
            {t('Licence State')}
          </label>
          {/* <Select option={UsStates} onChange={e => console.log(e)} title={formData.licensingState} /> */}
          <span>{formData.licensingState}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="licence_num" className="field_title">
            {t('Licence Number')}
          </label>
          {/* <Input Field_Name="licence_num" type="text" value={formData.licence} /> */}
          <span>{formData.licence}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="brokerage_name" className="field_title">
            {t('Brokerage Name')}
          </label>
          {/* <Input Field_Name="brokerage_name" type="text" value={formData.brokerage} /> */}
          <span>{formData.brokerage}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="address" className="field_title">
            {t('Address')}
          </label>
          {/* <Input Field_Name="address" type="text" value={formData.address} /> */}
          <span>{formData.address}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="phn_no" className="field_title">
            {t('Phone Number')}
          </label>
          {/* <Input Field_Name="phn_no" type="text" value={formData.phoneNumber} /> */}
          <span>{formData.phoneNumber}</span>
        </div>
        <div className="inputWrap">
          <label htmlFor="phn_no" className="field_title">
            {t('Account Deletion')}
          </label>
          <span className="deleteAccount" onClick={() => setDeleteAccount(true)}>
            {t('Delete Account')}
          </span>
        </div>
        {/* <div className="buttonWrapper">
        <Button variant="outline" type="button">
          {t('Cancel')}
        </Button>
        <Button variant="primary">{t('Save Changes')}</Button>
      </div> */}
      </AccountDetailStyled>
    </>
  );
};

export default AcountDetail;
