import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import ChatHeader from '@/components/chat/ChatHeader';
import ChatMessage from '@/components/chat/ChatMessage';
import ChatFooter from '@/components/chat/ChatFooter';
import { useDispatch, useSelector } from 'react-redux';
import { socketServer } from '@/utils/socketServerConnection';
import { getMessages, setMessages } from '@/features/messageSlice';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import { v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import TypingNotify from '@/components/chat/TypingNotify';
import SelectedDocumentsList from '@/components/chat/SelectedDocumetsList';
import Modal from '@/components/Modal';
import UserDetail from '@/components/UserDetailComp';
import Loaders from '@/components/Loaders';
import { useTranslation } from '@/helpers/useTranslation';

const chat = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [userDetail, setUserDetail] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [localMessages, setLocalMessages] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState({});
  const [selectedContact, setSelectedContact] = useState({});
  const inputRef = useRef();
  const { t } = useTranslation();
  const scrollContainerRef = useRef();

  const online = useSelector(state => state.onlineUsers);
  const { user } = useContextHook(AuthContext, ['user']);

  const socket = socketServer();
  const dispatch = useDispatch();

  const { messages, currentConversation, loadingChat } = useSelector(state => state.chat);

  const otherId = currentConversation?.participants?.find(id => id !== user.id);

  useEffect(() => {
    setLocalMessages(messages);
    return () => {
      setLocalMessages([]);
    };
  }, [messages]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
    // if (scrollContainer) {
    //   scrollContainer.addEventListener('scroll', handleScroll);
    // }
    // return () => {
    //   if (scrollContainer) {
    //     scrollContainer.removeEventListener('scroll', handleScroll);
    //   }
    // };
  }, [localMessages]);

  const handleSendMessage = async () => {
    if (
      inputMessage.trim() !== '' ||
      selectedDocuments.length > 0 ||
      Object.keys(selectedProperty).length > 0 ||
      Object.keys(selectedContact).length > 0
    ) {
      if (selectedDocuments.length > 0) {
        const documentMessages = selectedDocuments.map(document => ({
          author: user.id,
          receiver: otherId,
          text: inputMessage,
          time: 'now',
          uuid: uuid(),
          msgType: 'document',
          photoURL: user.photoURL,
          file: document,
          property: selectedProperty,
          contact: selectedContact,
        }));

        dispatch(setMessages([...localMessages, ...documentMessages]));

        documentMessages.forEach(message => {
          socket.emit('direct-message', message);
        });
        //if there is msg with documents, send that
        if (inputMessage.trim() !== '') {
          const message = {
            author: user.id,
            receiver: otherId,
            text: inputMessage,
            time: 'now',
            uuid: uuid(),
            msgType:
              Object.keys(selectedProperty).length > 0
                ? 'property'
                : Object.keys(selectedContact).length > 0
                  ? 'contact'
                  : 'text',
            photoURL: user.photoURL,
            file: {},
            property: selectedProperty,
            contact: selectedContact,
          };
          socket.emit('direct-message', message);
          dispatch(setMessages([...localMessages, message]));
        }
      } else {
        const message = {
          author: user.id,
          receiver: otherId,
          text: inputMessage,
          time: 'now',
          uuid: uuid(),
          msgType:
            Object.keys(selectedProperty).length > 0
              ? 'property'
              : Object.keys(selectedContact).length > 0
                ? 'contact'
                : 'text',
          photoURL: user.photoURL,
          file: {},
          property: selectedProperty,
          contact: selectedContact,
        };

        socket.emit('direct-message', message);
        dispatch(setMessages([...localMessages, message]));
      }
      setInputMessage('');
      setSelectedProperty({});
      setSelectedContact({});
      setSelectedDocuments([]);
    }
  };
  const handleMessageChange = async event => {
    setInputMessage(event.target.value);
  };

  const typingStart = () => {
    socket.emit('typing', { to: otherId, from: user.id });
  };
  const typingEnd = () => {
    socket.emit('typing-end', { to: otherId, from: user.id });
  };

  const handleSelectProperty = data => {
    setSelectedProperty(data);
    inputRef.current.focus();
    setInputMessage(' ');
  };
  const handleSelectContact = data => {
    setSelectedContact(data);
    inputRef.current.focus();
    setInputMessage(' ');
  };
  const handleSelectFiles = data => {
    setSelectedDocuments(data);
    inputRef.current.focus();
    setInputMessage(' ');
  };

  const handleRemoveFile = file => {
    setSelectedDocuments(prev => [...prev.filter(_ => _.id !== file.id)]);
  };
  // const handleScroll = () => {
  //   const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
  //   if (scrollHeight - scrollTop >= clientHeight + 10) {
  //     const author = currentConversation?.initBy;
  //     const receiver = currentConversation?.receiver;
  //     const conversationId = currentConversation?._id ?? '';
  //     console.log({ currentConversation });
  //     // dispatch(getMessages({ author, receiver, conversationId }));

  //     console.log('heyhe');
  //   }
  // };

  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <UserDetail setModal={setModal} detail={userDetail} />
      </Modal>
      <div className="chat-container">
        <div className="history">
          <button className="btnBack" onClick={() => router.push('/')}>
            <IoIosArrowRoundBack size="24" /> {t('Go back')}
          </button>
        </div>
        {!currentConversation ? (
          t('Select any chat to continue')
        ) : (
          <>
            <ChatHeader
              user={{
                channelName: currentConversation.channelName,
                photoURL: currentConversation.photoURL,
                slectedUserId: otherId,
                isOnline: online.findIndex(user => user.userId == otherId) !== -1,
              }}
            />
            <div className="messagesArea" ref={scrollContainerRef}>
              {loadingChat ? (
                <Loaders loading={loadingChat} height={100} />
              ) : (
                localMessages?.map(msg => {
                  const onClick = () => {
                    if (msg.msgType === 'contact') {
                      setUserDetail(msg.contact);
                      setModal(true);
                    }
                    if (msg.msgType === 'property') {
                      window.open('/property-details/Riche-Luxury-Mansion', '_blank');
                    }
                  };

                  return (
                    <ChatMessage
                      type={msg.msgType ?? 'text'}
                      key={msg.uuid}
                      message={msg.text}
                      document={msg.file}
                      property={msg.property}
                      contact={msg.contact}
                      time={msg.time}
                      user={msg.photoURL}
                      onClick={() => {
                        onClick();
                      }}
                    />
                  );
                })
              )}
            </div>

            <TypingNotify />
            {selectedDocuments.length > 0 && (
              <SelectedDocumentsList
                type="document"
                selectedDocuments={selectedDocuments}
                removeFile={handleRemoveFile}
              />
            )}
            {Object.keys(selectedContact).length > 0 && (
              <SelectedDocumentsList
                type="contact"
                selectedDocuments={selectedContact}
                removeFile={() => setSelectedContact({})}
              />
            )}
            {Object.keys(selectedProperty).length > 0 && (
              <SelectedDocumentsList
                type="property"
                selectedDocuments={selectedProperty}
                removeFile={() => setSelectedProperty({})}
              />
            )}
            <ChatFooter
              inputMessage={inputMessage}
              inputRef={inputRef}
              handleBlur={typingEnd}
              handleFocus={typingStart}
              handleSendMessage={handleSendMessage}
              handleMessageChange={handleMessageChange}
              handleSelectFiles={handleSelectFiles}
              handleSelectProperty={handleSelectProperty}
              handleSelectContact={handleSelectContact}
            />
          </>
        )}
      </div>
    </>
  );
};

export default chat;
