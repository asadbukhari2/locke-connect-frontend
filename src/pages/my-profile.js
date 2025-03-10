/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import TopHead from '@/components/TopHead';
import TabsSet from '@/components/TabsSet';
import MyDocuments from '@/components/MyDocuments';
import LikedHomes from '@/components/LikedHomes';
import MyToursTab from '@/components/MyToursTab';
import MySavedPeople from '@/components/MySavedPeople';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import MyOfferTab from '@/components/MyOffers';
import MyListings from '@/components/MyListings';

function MyProfile() {
  const tabs = [
    { label: 'My Documents', content: <MyDocuments /> },
    { label: 'Liked Homes', content: <LikedHomes /> },
    { label: 'My Saved People', content: <MySavedPeople /> },
    { label: 'My Tours', content: <MyToursTab /> },
    { label: 'My Offers', content: <MyOfferTab /> },
    { label: 'My Listings', content: <MyListings /> },
  ];
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
      <ProfileHeader user={user} />
      <TabsSet tabs={tabs} responsive />
    </>
  );
}

export default MyProfile;
