import { ChatMessageMain } from '@/components/NotificationWidget/NotificationWidget.styles';
import React, { useEffect, useRef, useState } from 'react';
import NotificationCard from '@/components/NotificationWidget/NotificationCard';
import peoplesService from '@/services/peoples';
import Toast from '@/components/Toast';
import Loaders from '@/components/Loaders';
import { getNotifications, setNotifications } from '@/features/commonSlice';
import { useDispatch, useSelector } from 'react-redux';

const Notification = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [toggleDropDown, setToggleDropDown] = useState(null);
  const dropdownRef = useRef(null);
  const NotificationRef = useRef(null);

  const { notifications, hasNextPage, nextPage } = useSelector(state => state.common);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const atBottom = scrollTop + clientHeight + 10 >= scrollHeight;

      if (atBottom && !isLoading && hasNextPage) {
        setIsLoading(true);
        dispatch(getNotifications({ page: nextPage, pageSize: 5, all: true })).then(() => {
          setIsLoading(false);
          window.scrollTo({ top: scrollHeight - clientHeight - 100, behavior: 'smooth' });
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, isLoading, hasNextPage, nextPage]);

  function handelDropDown(e, ind) {
    e.stopPropagation();
    setToggleDropDown(prev => (prev === ind ? null : ind));
  }

  useEffect(() => {
    const handleClickOutsideNotification = event => {
      if (NotificationRef.current && !NotificationRef.current.contains(event.target)) {
        setToggleDropDown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideNotification);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideNotification);
    };
  }, []);

  const clickHandler = async itm => {
    setToggleDropDown(null);
    if (!itm.is_read) {
      try {
        await peoplesService.markNotificationRead(itm.id);
        const updatedNotifications = notifications.map(notification =>
          notification.id === itm.id ? { ...notification, is_read: true } : notification,
        );

        dispatch(setNotifications(updatedNotifications));
      } catch (error) {
        console.error('Error marking notification as read:', error);
      }
    }
  };

  const onDeleteNotification = async itm => {
    setToggleDropDown(null);
    try {
      let res = await peoplesService.deleteNotification(itm.id);

      if (res.success) {
        setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== itm.id));
      }
    } catch (error) {
      console.error('Error deleting notification:', error);
      Toast({ type: 'error', message: error.message });
    }
  };
  return (
    <div>
      <ChatMessageMain ref={NotificationRef} $height>
        {notifications && (
          <>
            <h2>Recent Notification</h2>
            {notifications.map((elem, ind) => (
              <>
                <NotificationCard
                  ind={ind}
                  elem={elem}
                  clickHandler={clickHandler}
                  onDropDown={handelDropDown}
                  onDeleteNotification={onDeleteNotification}
                  dropdownRef={dropdownRef}
                  toggleDropDown={toggleDropDown}
                  page={true}
                />
              </>
            ))}
          </>
        )}
      </ChatMessageMain>

      {isLoading && <Loaders notificationLoader={true} />}
    </div>
  );
};

export default Notification;
