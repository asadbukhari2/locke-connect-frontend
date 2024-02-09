import React, { useState } from 'react';
import { StyledFormUser } from './Form.styles';
import Input from '../TextField';
import Button from '../Button';
import Link from 'next/link';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { useRouter } from 'next/router';
import Toast from '../Toast';
import { useTranslation } from '@/helpers/useTranslation';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { t } = useTranslation();

  const { onLogin, loading_user } = useContextHook(AuthContext, ['onLogin', 'loading_user']);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isDisabled = password.length === 0 || email.length === 0 || !emailRegex.test(email);

  const signInHandler = async event => {
    event.preventDefault();
    await onLogin({ email, password, redirect: () => router.push('/') });
  };

  return (
    <StyledFormUser>
      <form className="formWrapper">
        <div className="title">{t('Login')}</div>
        <Input
          placeholder={t('Enter Email')}
          label={t('Email')}
          Field_Name="user-mail"
          type="email"
          className="input-group"
          value={email}
          onChange={e => setEmail(e.target.value)}
          error={email.length > 0 && !emailRegex.test(email) ? t('Email not correct') : null}
        />
        <Input
          placeholder={t('Password')}
          label={t('Password')}
          Field_Name="user-password"
          type="password"
          // className="input-group"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Link href="/forgot-password" className="forget-password">
          {t('Forgot password')}?
        </Link>
        <div className="buttonWrapper">
          <Button variant="primary" onClick={signInHandler} disabled={isDisabled} loader={loading_user}>
            {t('Login')}
          </Button>
        </div>
        <div className="span">
          {t("Don't have an account")}? <Link href="/sign-up"> {t('Sign up')}</Link>
        </div>
      </form>
    </StyledFormUser>
  );
};

export default UserLogin;
