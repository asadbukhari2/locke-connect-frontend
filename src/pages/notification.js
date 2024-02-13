import { ChatMessageMain } from '@/components/NotificationWidget/NotificationWidget.styles';
import React, { useEffect, useRef, useState } from 'react';
import NotificationCard from '@/components/NotificationWidget/NotificationCard';
import peoplesService from '@/services/peoples';
import Toast from '@/components/Toast';
import Loaders from '@/components/Loaders';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [initialDataFetched, setInitialDataFetched] = useState(false);

  const [toggleDropDown, setToggleDropDown] = useState(null);
  const dropdownRef = useRef(null);
  const NotificationRef = useRef(null);

  const fetchNotifications = async r => {
    try {
      setIsLoading(true);
      const res = await peoplesService.getNotifications({ page: nextPage, pageSize: 5, all: true });
      setNotifications(prevNotifications => {
        const uniqueItems = res.items.filter(
          newItem => !prevNotifications.some(prevItem => prevItem.id === newItem.id),
        );

        return [...prevNotifications, ...uniqueItems];
      });
      setNextPage(res.nextPage);
      setHasNextPage(res.hasNextPage);
      setInitialDataFetched(true);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialDataFetched) {
      fetchNotifications();
    }
  }, [initialDataFetched]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight && !isLoading && hasNextPage) {
        fetchNotifications();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasNextPage]);

  function handelDropDown(e, ind) {
    e.stopPropagation();
    // const targetElement = e.currentTarget;
    // const dropdown = dropdownRef.current;
    // const rect = targetElement.getBoundingClientRect();
    // const windowHeight = window?.innerHeight;
    // const spaceBelow = windowHeight - rect.bottom;
    // const spaceAbove = rect.top;
    // if (spaceBelow >= dropdown?.clientHeight || spaceBelow >= spaceAbove) {
    //   dropdown.style.top = null;
    // } else {
    //   dropdown.style.top = `${-dropdown?.clientHeight}px`;
    // }
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

        setNotifications(prevNotifications =>
          prevNotifications.map(notification =>
            notification.id === itm.id ? { ...notification, is_read: true } : notification,
          ),
        );

        console.log('Notification marked as read:', itm);
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
