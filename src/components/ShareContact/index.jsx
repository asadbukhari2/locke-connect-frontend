import React from 'react';
import { StyledShareContact } from './ShareContact.styles';
import { IoCopyOutline } from 'react-icons/io5';

const ShareContactLink = ({
  link = 'dbjhb hkgjhb kjbg mbjhg m,nb jhfv kb vhggf jhjtfd,mBF lujhjGFuyg Jfbfbfbfbbbbbbbbb',
  onClick,
  agent,
}) => {
  const handleCopyText = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        onClick(link);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };
  console.log({ agent });
  const profileLink = `${location?.origin}/profileId=${agent?.id}&photoUrl=${agent?.photoURL}`;
  return (
    <StyledShareContact>
      <strong className="title">Share Contact ({agent?.displayName}) </strong> <p>You can share this profile in chat</p>
      <div className="linkWrapper">
        <span className="text">{profileLink}</span>
        <div className="copyText" onClick={handleCopyText}>
          <IoCopyOutline size="20" />
          Copy Link
        </div>
      </div>
    </StyledShareContact>
  );
};

export default ShareContactLink;
