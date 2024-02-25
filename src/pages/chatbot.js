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
import ChatBoatMessage from '@/components/chat/ChatBoatMessage';
import Button from '@/components/Button';
import { RxCross2 } from 'react-icons/rx';
import { MdAdd } from 'react-icons/md';
import Image from 'next/image';
import robot from '../../public/Group.png';
import { Tabs } from '@/components/chat/ChatBoatMessage/ChatBoatMessage.styles';
import { MyContext } from '@/context/card';
const chatBot = () => {
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
  const { tabs, setTabs, activeTab, setActiveTab ,currentTab, setCurrentTab} = useContextHook(MyContext, [
    'tabs',
    'setTabs',
    'activeTab',
    'setActiveTab',
    'currentTab',
    'setCurrentTab'
  ]);
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
  const chatInfo = {
    messages: `My Phone Number ${Date.now()}`,
    type: 'user',
  };
  const chatInfoAI = {
    messages: `I’m Robot this is my ID ${Date.now()}`,
    type: 'ai',
  };
  
  function addNewTab() {
    setTabs(prev => [
      ...prev,
      {
        id: Date.now(),
        content: (
          <>
            <div className="messagesArea"
            //  ref={scrollContainerRef}
            >
              <>
                <ChatBoatMessage message={chatInfo.messages} />
                <ChatBoatMessage variant="ai" />
                <ChatBoatMessage message={chatInfoAI.messages} variant="ai" />
                <ChatBoatMessage variant={chatInfoAI.type} message={chatInfoAI.messages} />
                <ChatBoatMessage message="Hello, I’m User! 👋 " />
                <ChatBoatMessage variant="ai" />
                <ChatBoatMessage message="Hello, I’m User! 👋 " />
                <ChatBoatMessage variant="ai" />
                <ChatBoatMessage message="Hello, I’m User! 👋 " />
              </>
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
              // inputRef={inputRef}
              handleBlur={typingEnd}
              handleFocus={typingStart}
              handleSendMessage={handleSendMessage}
              handleMessageChange={handleMessageChange}
              handleSelectFiles={handleSelectFiles}
              handleSelectProperty={handleSelectProperty}
              handleSelectContact={handleSelectContact}
            />
            <div className="buttonWrapper">
              <Button lg>Report A Problem</Button>
              <Button lg>Live Agent</Button>
              <Button lg>End Chat Now</Button>
            </div>
          </>
        ),
      },
    ]);
  }
  function removeTab(params) {
    setTabs(prev => prev.filter(elem => elem.id !== params));
  }
  return (
    <>
      <Modal open={modal} setOpen={setModal}>
        <UserDetail setModal={setModal} detail={userDetail} />
      </Modal>
      <div className="chat-boat-container">
        <div className="history">
          <button className="btnBack" onClick={() => router.push('/chat')}>
            <IoIosArrowRoundBack size="24" /> {t('Back To Chat')}
          </button>
        </div>
        <div className="tabsWrapper">
          {tabs?.map((v, i) => (
            <Tabs
            key={i}
              className={`tabs ${activeTab[i] && 'activeTab'}`}
              $active={activeTab[i] ? true:false}
              onClick={() => {
                console.log({i})
                let arr=[]
                arr[i]=true;
                setCurrentTab(i);
                setActiveTab(arr)}}>
              <Image src={robot} alt="Group" />
              <span className="title">Lorem Ipsum Lorem IpsumLorem Ipsum</span>
              <span className="cross">
                <RxCross2 onClick={() => {removeTab(tabs[i]?.id)}} />
              </span>
            </Tabs>
          ))}
          <span onClick={() => {addNewTab(chatInfo)}} className="addIcon">
            {tabs?.length ? (
              <MdAdd />
            ) : (
              <>
                Click to Open New Tab
                <MdAdd />
              </>
            )}
          </span>
        </div>
        {tabs[currentTab]?.content}
      </div>
    </>
  );
};

export default chatBot;
