/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import TopHead from '@/components/TopHead';
import TabsSet from '@/components/TabsSet';
import MyDocuments from '@/components/MyDocuments';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import ProfileHeaderAgent from '@/components/ProfileHeaderAgent';
import AcountDetail from '@/components/AgentProfileComp/AcountDetail';
import Introduction from '@/components/AgentProfileComp/Introduction';

const tabs = [
  { label: 'Account information', content: <AcountDetail /> },
  { label: 'Introduction', content: <Introduction /> },
  { label: 'Subscription', content: 'Subscription' },
];

function AgentProfile() {
  const { user } = useContextHook(AuthContext, ['user']);
  useEffect(() => {
    document.body.style.background = '#fff';

    return () => {
      document.body.style.background = '#F7F8FA';
    };
  }, []);

  return (
    <>
      <TopHead />
      <ProfileHeaderAgent user={user} />
      <TabsSet tabs={tabs} responsive />
    </>
  );
}

export default AgentProfile;
