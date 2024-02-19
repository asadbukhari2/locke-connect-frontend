import React, { useEffect, useRef, useState } from 'react';
import '@szhsin/react-menu/dist/index.css';
import { ChatMessageMain, ChatWidgetStyles } from './NotificationWidget.styles';
import user1 from '../../../public/payment.png';
import user2 from '../../../public/user.png';
import user3 from '../../../public/setting.png';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Badge from '../Badge';
import { useRouter } from 'next/router';
import NotificationCard from './NotificationCard';
import { useDispatch, useSelector } from 'react-redux';
import Loaders from '../Loaders';
import { NoRecordFound } from '../NoRecordFound/NoRecord.styles';
import { getNotifications, setNotifications } from '@/features/commonSlice';
import Toast from '../Toast';
import peoplesService from '@/services/peoples';
import { useTranslation } from '@/helpers/useTranslation';

export const chatArray = [
  {
    img: user1,
    name: 'Payment setting updated',
    message: 'Just now',
    time: '2min ago',
    notification: '2',
    bg: '--gradient-orange',
    notification: true,
  },
  {
    img: user2,
    name: 'New user registered',
    message: 'Just now',
    time: '2min ago',
    bg: '--gradient-green',
    notification: false,
  },
  {
    img: user3,
    name: 'You updated your password',
    message: 'Just now',
    time: '2min ago',
    bg: '--gradient-pink',
    notification: false,
  },
  {
    img: user1,
    name: 'Payment setting updated',
    message: 'Just now',
    time: '2min ago',
    notification: '2',
    bg: '--gradient-orange',
    notification: true,
  },
  {
    img: user2,
    name: 'New user registered',
    message: 'Just now',
    time: '2min ago',
    bg: '--gradient-green',
    notification: false,
  },
  {
    img: user3,
    name: 'You updated your password',
    message: 'Just now',
    time: '2min ago',
    bg: '--gradient-pink',
    notification: false,
  },
  {
    img: user1,
    name: 'Payment setting updated',
    message: 'Just now',
    time: '2min ago',
    notification: '2',
    bg: '--gradient-orange',
    notification: true,
  },
  {
    img: user2,
    name: 'New user registered',
    message: 'Just now',
    time: '2min ago',
    bg: '--gradient-green',
    notification: false,
  },
  {
    img: user3,
    name: 'You updated your password',
    message: 'Just now',
    time: '2min ago',
    bg: '--gradient-pink',
    notification: false,
  },
];

const NotificationWidget = ({ $marginB }) => {
  const [toggleDropDown, setToggleDropDown] = useState(null);

  const NotificationRef = useRef(null);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();

  const { notifications, notificationsLoading } = useSelector(state => state.common);

  function handelDropDown(e, ind) {
    e.stopPropagation();

    const targetElement = e?.currentTarget;
    const dropdown = dropdownRef?.current;

    const rect = targetElement?.getBoundingClientRect();
    const windowHeight = window?.innerHeight;

    const spaceBelow = windowHeight - rect?.bottom;
    const spaceAbove = rect?.top;

    if (spaceBelow >= dropdown?.clientHeight || spaceBelow >= spaceAbove) {
      dropdown.style.top = null;
    } else {
      dropdown.style.top = `${-dropdown?.clientHeight}px`;
    }

    setToggleDropDown(prev => (prev === ind ? null : ind));
  }
  const handleClickOutsideNotification = event => {
    if (NotificationRef.current && !NotificationRef.current.contains(event.target)) {
      setToggleDropDown(null);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideNotification);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNotification);
    };
  }, []);

  const onDeleteNotification = async itm => {
    setToggleDropDown(null);
    try {
      let res = await peoplesService.deleteNotification(itm.id);
      // dispatch(getNotifications({ page: 1, pageSize: 5, all: true }));
      if (res.success) {
        const remaning = notifications.filter(_ => _.id !== itm.id);
        dispatch(setNotifications(remaning));
      }
      Toast({ type: 'success', message: 'Deleted' });
    } catch (error) {
      console.error('Error deleting notification:', error);
      Toast({ type: 'error', message: error.message });
    }
  };

  return (
    <ChatWidgetStyles $marginB={$marginB}>
      <span className="title">
        <p>{t('Notification')} </p>
        <div className="badge">
          <Badge $variant="dark" child={notifications?.length ?? 0} />
        </div>
      </span>
      <ChatMessageMain ref={NotificationRef}>
        {notificationsLoading ? (
          <Loaders loading={notificationsLoading} height={100} />
        ) : notifications && notifications.length > 0 ? (
          notifications.map((elem, ind) => (
            <NotificationCard
              key={ind}
              ind={ind}
              elem={elem}
              clickHandler={() => {}}
              onDropDown={handelDropDown}
              onDeleteNotification={onDeleteNotification}
              dropdownRef={dropdownRef}
              toggleDropDown={toggleDropDown}
              page={false}
            />
          ))
        ) : (
          <NoRecordFound>{t('No Record Found')}</NoRecordFound>
        )}
      </ChatMessageMain>

      <div
        className="viewAll"
        onClick={() => {
          router.push('notification');
        }}>
        <p>{t('View All')}</p>
        <IoIosArrowRoundForward size="25" className="ico" />
      </div>
    </ChatWidgetStyles>
  );
};

export default NotificationWidget;
