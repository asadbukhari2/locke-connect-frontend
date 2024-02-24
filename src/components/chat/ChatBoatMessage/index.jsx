import React from 'react';
import Image from 'next/image';
import userImg from '../../../../public/avatar-women.png';
import chatbot from '../../../../public/chatbot.png';
import { StyledChatMessage } from './ChatBoatMessage.styles';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';

import location from '../../../../public/locationIcon.svg';
import Button from '@/components/Button';
import { shortenFileName } from '@/helpers/common';

function ChatBoatMessage({
  message = 'Hello, I’m ChatBot! 👋 I’m your personal assistant. How can I help you?',
  time = '2 sec ago...',
  user = userImg,
  type = 'text',
  document,
  onClick,
  contact,
  property,
  variant = 'user',
}) {
  return (
    <>
      <StyledChatMessage $variant={variant}>
        <div className="img-box">
          {variant == 'user' ? (
            <Image src={user} alt="img description" width={200} height={200} />
          ) : (
            <Image src={chatbot} alt="img description" />
          )}
        </div>
        <div className="text-area">
          <div className="chat-box">
            {type === 'text' && <p>{message}</p>}
            {type === 'document' && document && (
              <div className="document">
                <span className="iconWrapper">
                  <HiOutlineDocumentArrowDown size="25" />
                </span>
                <div className="docTitle">
                  {/* <a href={'/document.pdf'} download={document?.name}> */}
                  <span
                    onClick={() => {
                      window.open(document?.url, '_blank');
                    }}>
                    <>
                      {shortenFileName(document?.name, 12)}
                      {/* {formatFileSize(document?.size)} */}
                    </>
                  </span>
                  {/* </a> */}
                </div>
              </div>
            )}
            {type === 'contact' && (
              <div className="document">
                <span className="userImageWrapper">
                  <Image src={contact?.contactimg} alt="usericonaudio" width={200} height={200} />
                </span>
                <span className="userName">{contact.name}</span>
                <Button outline="primary" onClick={onClick}>
                  See Details
                </Button>
              </div>
            )}
            {type === 'property' && (
              <>
                <div className="propertyWrapper">
                  <span className="img-box">
                    <Image src={property.img} alt="propertyimg" width={200} height={200} />
                  </span>
                  <div className="text">
                    <strong className="propertyName">{property.title}</strong>
                    <div className="location">
                      <Image src={location} alt="location" />
                      <p>{property.location}</p>
                    </div>
                  </div>
                </div>
                <Button outline="primary" onClick={onClick}>
                  See Details
                </Button>
              </>
            )}
          </div>
          {/* <span className="chat-time">{time}</span> */}
        </div>
      </StyledChatMessage>
    </>
  );
}

export default ChatBoatMessage;
