import React, { useEffect, useRef, useState } from 'react';
import { ChatFooterWidget, ChatShortCut, StyledChatFooter } from './ChatFooter.styles';
import messageSend from '../../../../public/messageSend.svg';
import home from '../../../../public/home.svg';
import imagepreview from '../../../../public/imagepreview.svg';
import userAdd from '../../../../public/userAdd.svg';
import contact from '../../../../public/contact.svg';
import Image from 'next/image';
import { MdOutlineAdd } from 'react-icons/md';
import { IoDocumentTextOutline } from 'react-icons/io5';
import UploadDoc from '../ChatModal/UploadDoc';
import Modal from '@/components/Modal';
import AddPeople from '../ChatModal/AddPeople';
import ShareContact from '../ChatModal/ShareContact';
import AddProperty from '../ChatModal/AddProperty';
import { useTranslation } from '@/helpers/useTranslation';

const ChatFooter = ({
  inputMessage,
  handleSelectFiles,
  handleMessageChange,
  handleSendMessage,
  handleFocus,
  handleBlur,
  handleSelectContact,
  handleSelectProperty,
  inputRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [doc, setDoc] = useState(false);
  const [addPeople, setAddPeople] = useState(false);
  const [shareContact, setShareContact] = useState(false);
  const [addProperty, setAddProperty] = useState(false);

  const ChatWidget = useRef();
  const { t } = useTranslation();
  const handleClickOutsideChatWidget = event => {
    if (ChatWidget.current && !ChatWidget.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideChatWidget);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideChatWidget);
    };
  }, []);

  const handleKeyPress = event => {
    if (event?.key === 'Enter' && event?.target?.value?.length) {
      handleSendMessage(event);
    }
  };

  return (
    <>
      <StyledChatFooter>
        <input
          placeholder={`${t('Write here')}...`}
          value={inputMessage}
          onChange={handleMessageChange}
          onKeyDown={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />

        <ChatFooterWidget>
          <ChatShortCut $opner={menuOpen} ref={ChatWidget}>
            <ul>
              <li onClick={() => setDoc(true)}>
                <IoDocumentTextOutline size={22} />
              </li>
              <li>
                <label htmlFor="file">
                  <Image src={imagepreview} alt="imagepreview" />
                  <input type="file" id="file" />
                </label>
              </li>
              <li onClick={() => setAddPeople(true)}>
                <Image src={userAdd} alt="userAdd" />
              </li>
              <li onClick={() => setShareContact(true)}>
                <Image src={contact} alt="contact" />
              </li>
              <li onClick={() => setAddProperty(true)}>
                <Image src={home} alt="home" />
              </li>
            </ul>
            <div className="openShortCut" onClick={() => setMenuOpen(!menuOpen)}>
              <MdOutlineAdd size={22} />
            </div>
          </ChatShortCut>
          <button className="sentButton" onClick={handleSendMessage}>
            <Image src={messageSend} alt="send" />
          </button>
        </ChatFooterWidget>
      </StyledChatFooter>
      <Modal open={doc} setOpen={setDoc} width="1020px">
        <UploadDoc handleSelectFiles={handleSelectFiles} onClose={() => setDoc(false)} />
      </Modal>
      {/* <Modal open={addPeople} setOpen={setAddPeople} width="1020px">
        <AddPeople onClose={() => setAddPeople(false)} />
      </Modal> */}
      <Modal open={shareContact} setOpen={setShareContact} width="1020px">
        <ShareContact handleSelectContact={handleSelectContact} onClose={() => setShareContact(false)} />
      </Modal>
      <Modal open={addProperty} setOpen={setAddProperty} width="1020px">
        <AddProperty handleSelectProperty={handleSelectProperty} onClose={() => setAddProperty(false)} />
      </Modal>
    </>
  );
};

export default ChatFooter;
