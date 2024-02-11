import React from 'react';
import { StyledShareContact } from './ShareContact.styles';
import { IoCopyOutline } from 'react-icons/io5';

const ShareContactLink = ({
  link = 'dbjhb hkgjhb kjbg mbjhg m,nb jhfv kb vhggf jhjtfd,mBF lujhjGFuyg Jfbfbfbfbbbbbbbbb',
  onClick,
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

  return (
    <StyledShareContact>
      <strong className="title">Share Contact</strong> <p>Your form is live at this URL:</p>
      <div className="linkWrapper">
        <span className="text">{link}</span>
        <div className="copyText" onClick={handleCopyText}>
          <IoCopyOutline size="20" />
          Copy Link
        </div>
      </div>
    </StyledShareContact>
  );
};

export default ShareContactLink;
