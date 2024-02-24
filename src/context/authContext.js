import React, { useState, useMemo, useEffect } from 'react';
import { clearCookie, getCookie, setCookie } from '@/helpers/common';

import { createContextHook } from 'use-context-hook';
import userService from '@/services/auth';
import Toast from '@/components/Toast';
import { useRouter } from 'next/router';
import { useCancellablePromise } from '@/helpers/promiseHandler';
import { socketServer } from '@/utils/socketServerConnection';
import { useDispatch } from 'react-redux';
import { onLogout as CLEAR, fetchAllConversations } from '../features/messageSlice';

import { LanguageData } from '@/components/Constants';
import { RESET_STATE, getNotifications } from '@/features/commonSlice';

const context = {};

export const AuthContext = createContextHook(context);

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie(process.env.NEXT_PUBLIC_TOKEN));
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [fetchUser, setFetchUser] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [lang, setLang] = useState();

  const { cancellablePromise } = useCancellablePromise();
  const dispatch = useDispatch();

  const router = useRouter();
  const socket = socketServer();
  const onLogout = async () => {
    try {
      if (isLoggedIn) setLoadingUser(true);
      clearCookie(process.env.NEXT_PUBLIC_TOKEN);
      sessionStorage.removeItem('currentUser');
      router.push('/sign-in');
      setUser({});
      socket?.disconnect();
      dispatch(CLEAR());
      dispatch(RESET_STATE());
      await userService.signout();
    } catch (ex) {
      clearCookie(process.env.NEXT_PUBLIC_TOKEN);
      Toast({ type: 'error', message: ex?.message });
    } finally {
      setLoadingUser(false);
      setIsLoggedIn(false);
    }
  };

  /**
   * @description - This function is used to fetch the user details from the server
   */
  const getCurrentUser = () => {
    setLoadingUser(true);
    cancellablePromise(userService.getCurrentUser())
      .then(res => {
        setLoadingUser(false);
        setUser(res.data);
        sessionStorage.setItem('currentUser', JSON.stringify(res.data));
      })
      .catch(err => {
        setLoadingUser(false);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUser();
    }
    const language = JSON.parse(
      getCookie('_lang') ??
        `${JSON.stringify({
          label: LanguageData[0].language,
          value: LanguageData[0].value,
          img: LanguageData[0].img,
        })}`,
    );
    console.log({ language });
    setLang(language);

    // listen to event
    window.addEventListener('FETCH_CURRENT_USER', () => {
      getCurrentUser();
    });
    return () => {
      window.removeEventListener('FETCH_CURRENT_USER', () => {
        getCurrentUser();
      });
    };
  }, [isLoggedIn, fetchUser]);

  const onLogin = async ({ email, password, redirect }) => {
    setLoadingUser(true);
    try {
      const res = await userService.signin({ email, password });

      if (!res?.accessToken) {
        throw new Error(res?.message || 'Error Logging in');
      }
      Toast({ type: 'success', message: 'Logged in' });
      setCookie(process.env.NEXT_PUBLIC_TOKEN, res.accessToken);
      dispatch(getNotifications({ page: 1, pageSize: 5, all: true }));
      dispatch(fetchAllConversations());
      setIsLoggedIn(true);
      redirect();

      setLoadingUser(false);
    } catch (e) {
      console.log({ eroor: e });
      const message = e?.code?.split('/')[1] || 'Something went wrong, Please try again';
      setIsLoggedIn(false);
      setLoadingUser(false);
      Toast({ type: 'error', message: message });
    }
  };

  const allContext = useMemo(
    () => ({
      setIsLoggedIn,
      onLogout,
      onLogin,
      setLoading,
      setRefetch: () => setRefetch(_ => !_),
      fetchUser: () => setFetchUser(() => !fetchUser),
      loading,
      isLoggedIn,
      refetch: refetch,
      user,
      loading_user,
      setLang: x => {
        setCookie('_lang', JSON.stringify(x));
        setLang(x);
      },
      lang: lang,
      setUser
    }),
    [isLoggedIn, onLogin, user],
  );
  return <AuthContext.Provider value={allContext}>{props.children}</AuthContext.Provider>;
}
