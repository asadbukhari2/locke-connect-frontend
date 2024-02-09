import React from 'react';
import { WelcomeBlock } from './WelcomeUser.styles';
import Image from 'next/image';
import bgImg from '../../../public/illustration-img01.svg';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import Link from 'next/link';
import { useTranslation } from '@/helpers/useTranslation';

function WelcomeUser() {
  const { user } = useContextHook(AuthContext, ['user', 'loading_user']);
  const { t } = useTranslation();

  return (
    <WelcomeBlock>
      <div className="text-box">
        <strong className="title">
          {t('Welcome Back')}&nbsp;
          <Link href="/my-profile">
            <span className="name">{user.displayName ?? 'John Doe'}</span>
          </Link>
        </strong>
        <h1 className="h2">{t('Here is your Dashboard')}</h1>
      </div>
      <div className="img-box">
        <Image src={bgImg} alt="img description" />
      </div>
    </WelcomeBlock>
  );
}

export default WelcomeUser;
