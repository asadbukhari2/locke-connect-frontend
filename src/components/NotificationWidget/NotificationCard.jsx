import React from 'react';
import { NotificationDropDown, SettingImage } from './NotificationWidget.styles';
import Badge from '../Badge';
import Image from 'next/image';
import trash from '../../../public/trash.png';
import archive from '../../../public/archive.png';
import mute from '../../../public/mute.png';
import dots from '../../../public/dots.png';
import user1 from '../../../public/payment.png';
import user2 from '../../../public/user.png';
import user3 from '../../../public/setting.png';
import { useTranslation } from '@/helpers/useTranslation';

const NotificationCard = ({
  clickHandler,
  onDeleteNotification,
  onDropDown,
  toggleDropDown,
  dropdownRef,
  elem,
  ind,
}) => {
  const { t } = useTranslation('');
  return (
    <li onClick={() => clickHandler(elem)}>
      <div className="chatImageText">
        <SettingImage
          className="settingImg"
          bg={
            elem.notification_type === 'message'
              ? '--gradient-orange'
              : elem.notification_type === 'user_register'
                ? '--gradient-green'
                : '--gradient-pink'
          }>
          {elem.notification_type === 'message' ? (
            <Image src={user1} alt="user" />
          ) : elem.notification_type === 'user_register' ? (
            <Image src={user2} alt="user" />
          ) : (
            <Image src={user3} alt="user" />
          )}
        </SettingImage>
        <div className="text">
          <strong>{elem.description}</strong>
          <p>{elem.time}</p>
        </div>
      </div>
      <div className="time">
        {!elem.is_read && <Badge $variant="secondary" child="1" />}
        <Image src={dots} alt="dots" className="dots" onClick={e => onDropDown(e, ind)} />
        <NotificationDropDown $show={toggleDropDown == ind ? true : false} ref={dropdownRef}>
          <div
            className="wrap"
            onClick={() => {
              onDeleteNotification(elem);
            }}>
            <span className="icon">
              <Image src={trash} alt="trash" />
            </span>
            <p>{t('Delete')}</p>
          </div>
          {/* <div className="wrap">
            <span className="icon">
              <Image src={archive} alt="archive" />
            </span>
            <p>Archive</p>
          </div>
          <div className="wrap">
            <span className="icon">
              <Image src={mute} alt="mute" />
            </span>
            <p>Mute</p>
          </div> */}
        </NotificationDropDown>
      </div>
    </li>
  );
};

export default NotificationCard;
