import React from 'react';
import { ChatModalContent, StyledChatModal, ViewOffersWrapper } from './ChatModal.styles';
import user from '../../../../public/user1.png';

import Image from 'next/image';
import Button from '@/components/Button';
const AddPropertyData = [
  {
    title: 'Mandy Hartmann',
    location: 'St.Constitution Drive, West',
    img: user,
  },
  {
    title: 'Mandy Hartmann',
    location: 'St.Constitution Drive, West',
    img: user,
  },
  {
    title: 'Mandy Hartmann',
    location: 'St.Constitution Drive, West',
    img: user,
  },
  {
    title: 'Mandy Hartmann',
    location: 'St.Constitution Drive, West',
    img: user,
  },
  {
    title: 'Mandy Hartmann',
    location: 'St.Constitution Drive, West',
    img: user,
  },
];
const ViewOffers = ({ handleSelectProperty, onClose }) => {
  return (
    <StyledChatModal>
      <strong className="title">View Offers</strong>
      <ChatModalContent>
        <ViewOffersWrapper>
          <ul>
            {AddPropertyData.map((elem, ind) => (
              <li key={ind}>
                <div className="addpeopleWrapper">
                  <div className="combineField">
                    <div className="profileInfo">
                      <figure className="imageWrapper-property">
                        <Image src={elem.img} alt="user" width={113} height={113} />
                      </figure>
                      <div className="text">
                        <strong className="strong-title">{elem.title}</strong>
                      </div>
                    </div>
                    <div className="profileInfo">
                      <div className="text">
                        <strong className="strong-title">Type: Cash</strong>
                      </div>
                    </div>
                  </div>
                  <div className="combineField">
                    <div className="profileInfo">
                      <div className="text">
                        <strong className="strong-title">Amount: $1,300,300</strong>
                      </div>
                    </div>
                    <Button
                      variant="success"
                      width="200px"
                      onClick={() => {
                        handleSelectProperty(elem);
                        onClose();
                      }}>
                      View Continegency
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ViewOffersWrapper>
      </ChatModalContent>
    </StyledChatModal>
  );
};

export default ViewOffers;
