import React, { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import TopHead from '@/components/TopHead';
import TabsSet from '@/components/TabsSet';

import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import ProfileHeaderAgent from '@/components/ProfileHeaderAgent';

const AcountDetail = lazy(() => import('@/components/AgentProfileComp/AcountDetail'));
const Introduction = lazy(() => import('@/components/AgentProfileComp/Introduction'));
const Subscription = lazy(() => import('@/components/AgentProfileComp/Subscription'));

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
      { label: 'Account information', content: <AcountDetail user={user} /> },
      { label: 'Introduction', content: <Introduction user={user} /> },
      { label: 'Subscription', content: <Subscription activeTab={activeTab} /> },
    ],
    [activeTab, user],
  );

  return (
    <>
      <TopHead />
      <ProfileHeaderAgent user={user} />
      <Suspense fallback={<div>Loading...</div>}>
        <TabsSet tabs={tabs} onTabChange={setActiveTab} responsive />
      </Suspense>
    </>
  );
}

export default AgentProfile;
