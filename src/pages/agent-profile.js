/* eslint-disable react/jsx-key */
import React, { useEffect, useMemo, useState } from 'react';
import TopHead from '@/components/TopHead';
import TabsSet from '@/components/TabsSet';

import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import ProfileHeaderAgent from '@/components/ProfileHeaderAgent';
import AcountDetail from '@/components/AgentProfileComp/AcountDetail';
import Introduction from '@/components/AgentProfileComp/Introduction';
import Subscription from '@/components/AgentProfileComp/Subscription';

function AgentProfile() {
  const [activeTab, setActiveTab] = useState(0);

  const { user } = useContextHook(AuthContext, ['user']);
  useEffect(() => {
    document.body.style.background = '#fff';

    return () => {
      document.body.style.background = '#F7F8FA';
    };
  }, []);

  const tabs = useMemo(
    () => [
      { label: 'Account information', content: <AcountDetail activeTab={activeTab} /> },
      { label: 'Introduction', content: <Introduction activeTab={activeTab} /> },
      { label: 'Subscription', content: <Subscription activeTab={activeTab} /> },
    ],
    [activeTab],
  );

  return (
    <>
      <TopHead />
      <ProfileHeaderAgent user={user} />
      <TabsSet tabs={tabs} onTabChange={setActiveTab} responsive />
    </>
  );
}

export default AgentProfile;
