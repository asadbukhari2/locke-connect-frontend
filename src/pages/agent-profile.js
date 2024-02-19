import React, { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import TopHead from '@/components/TopHead';
import TabsSet from '@/components/TabsSet';

import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import ProfileHeaderAgent from '@/components/ProfileHeaderAgent';

const MyDocuments = React.lazy(() => import('@/components/MyDocuments'));
const LikedHomes = React.lazy(() => import('@/components/LikedHomes'));
const MySavedPeople = React.lazy(() => import('@/components/MySavedPeople'));
const MyOfferTab = React.lazy(() => import('@/components/MyOffers'));
const MyListings = React.lazy(() => import('@/components/MyListings'));
const MyToursTab = React.lazy(() => import('@/components/MyToursTab'));

const AcountDetail = lazy(() => import('@/components/AgentProfileComp/AcountDetail'));
const Introduction = lazy(() => import('@/components/AgentProfileComp/Introduction'));
const Subscription = lazy(() => import('@/components/AgentProfileComp/Subscription'));

function AgentProfile() {
  const [activeTab, setActiveTab] = useState(0);
  const [profileView, setProfileView] = useState(false);

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
  const tabs2 = useMemo(
    () => [
      { label: 'My Documents', content: <MyDocuments /> },
      { label: 'Liked Homes', content: <LikedHomes /> },
      { label: 'My Saved People', content: <MySavedPeople /> },
      { label: 'My Tours', content: <MyToursTab /> },
      { label: 'My Offers', content: <MyOfferTab /> },
      { label: 'My Listings', content: <MyListings /> },
    ],
    [activeTab, user],
  );

  const handleProfileViewChange = () => setProfileView(!profileView);

  return (
    <>
      <TopHead />
      <ProfileHeaderAgent user={user} profileView={profileView} handleProfileViewChange={handleProfileViewChange} />
      <Suspense fallback={<div>Loading...</div>}>
        <TabsSet tabs={profileView ? tabs2 : tabs} onTabChange={setActiveTab} responsive />
      </Suspense>
    </>
  );
}

export default AgentProfile;
