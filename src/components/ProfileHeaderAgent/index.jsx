import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Img01 from '../../../public/avatar-women.png';
import { PiPhoneCallBold } from 'react-icons/pi';
import { FaRegEnvelope } from 'react-icons/fa6';
import { TbMapPin } from 'react-icons/tb';
import { BiEditAlt } from 'react-icons/bi';
import { ProfileHead } from './ProfileHeaderAgent.styles';
import Button from '../Button';
import { IoSettingsOutline } from 'react-icons/io5';
import Modal from '../Modal';
import userService from '@/services/auth';
import Toast from '../Toast';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import ToggleSwitch from '../UserSearchFilter/ToggleSwitch';
import { useTranslation } from '@/helpers/useTranslation';
import { formatPhoneNumber } from '@/helpers/common';
import EditAgentProfileModal from '../EditProfileModal/agentProfileModal';

const ProfileHeaderAgent = ({ user, handleProfileViewChange, profileView }) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const { t } = useTranslation();
  const { fetchUser } = useContextHook(AuthContext, ['fetchUser']);
  const [imageUrl, setImageUrl] = useState();

  const fileInputRef = useRef(null);
  const handleEditIconClick = () => fileInputRef.current.click();

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      await uploadProfilePicture(file);
    }
  };

  const uploadProfilePicture = async file => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await userService.upload(formData);
      if (res) {
        const url = URL.createObjectURL(file);
        setImageUrl(url);
        setLoading(false);
        fetchUser();
        Toast({ type: 'success', message: 'Profile Pic updated' });
      }
    } catch (error) {
      setLoading(false);
      Toast({ type: 'error', message: error || 'Something Went Wrong' });
    }
  };

  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <EditAgentProfileModal
          user={user}
          onClose={() => {
            setModal(false);
          }}
        />
      </Modal>
      <ProfileHead>
        <div className="holder">
          <div>
            {loading ? (
              <div
                className="img-box"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <span className="loader"></span>
              </div>
            ) : (
              <>
                <div className="img-box" onClick={handleEditIconClick}>
                  {imageUrl ? (
                    <Image src={imageUrl} alt="User profile" width={500} height={500} />
                  ) : user.photoURL ? (
                    <Image src={user.photoURL} alt="img-description" width={500} height={500} />
                  ) : (
                    <Image src={Img01} alt="Default image" />
                  )}
                  <BiEditAlt className="ico" size={30} />
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  accept=".png, .jpeg, .jpg"
                />
              </>
            )}
          </div>
          <div className="text-box">
            <strong className="title">{user?.displayName}</strong>
            <ul className="list">
              <li>
                <TbMapPin />
                <span className="text">{user?.address}</span>
              </li>
              <li>
                <PiPhoneCallBold />
                {user?.phoneNumber &&
                  user?.phoneNumber?.slice(0, 2) + ' ' + formatPhoneNumber(user?.phoneNumber?.slice(2))}
              </li>
              <li>
                <FaRegEnvelope />
                <span className="text">{user?.email}</span>
              </li>
            </ul>
            <ul className="list">
              <li>
                <span className="text">{t('Enable Locke instant Chat with cellphone')}</span>
                <ToggleSwitch fieldName="instantChat" sm />
              </li>
              <li>
                <span className="text">{t('Night Mode')} (message between 8am to 8pm)</span>
                <ToggleSwitch fieldName="nightMode" sm />
              </li>
              <li>
                <span className="text"> {t('Switch Profile')}</span>
                <ToggleSwitch fieldName="switchProfile" sm value={profileView} onChange={handleProfileViewChange} />
              </li>
            </ul>
          </div>
        </div>
        <div className="btn-holder" onClick={() => setModal(true)}>
          <Button>
            <IoSettingsOutline />
            {t('Edit Profile')}
          </Button>
        </div>
      </ProfileHead>
    </>
  );
};

export default ProfileHeaderAgent;
