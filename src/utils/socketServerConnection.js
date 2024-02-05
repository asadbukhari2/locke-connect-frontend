import { setConversations, setMessages } from '@/features/messageSlice';
import { setOnlineUsers } from '@/features/onlineUsersSlice';
import { setCallAccepted, setReceivingCall, setStartTime, setCallRingtone } from '@/features/roomSlice';
import store from '@/features/store';
import { callEndedHandler, receiveCallHandler } from '@/realtimeCommunication/socketHandler';
import { handleSignalingData, prepareNewPeerConnection } from '@/realtimeCommunication/webRTCHandler';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
let socket = null;

export const connectToServer = user => {
  const __URL__ = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
  const callSound = new Audio(
    'https://firebasestorage.googleapis.com/v0/b/locke-connect.appspot.com/o/sounds%2Fskype_ringtone.mp3?alt=media&token=f79dd3a2-b792-4095-bace-7192ef5e9ac9',
  );

  socket = io(__URL__, {
    path: '/websocket',
    auth: {
      token: user.id,
    },
    secure: true,
    reconnection: true,
    reconnectionDelay: 3000,
    multiplex: false,
  });

  socket.on('connect', () => {
    socket.on('online-users', ({ onlineUsers }) => {
      const online = onlineUsers.filter(_ => _?.userId != user?.id);
      store.dispatch(setOnlineUsers(online));
    });

    socket.on('message-received', () => {
      const sound = new Audio(
        'https://firebasestorage.googleapis.com/v0/b/locke-connect.appspot.com/o/sounds%2FmessageSound.wav?alt=media&token=e83fb870-e0ee-4b88-99d8-6d673c379751',
      );
      sound.play();
    });
    socket.on('direct-chat-history', data => {
      const { currentConversation } = store.getState().chat;

      if (currentConversation?._id === data?.message?.conversationId) {
        const oldMessages = [...store.getState().chat.messages];
        const newMessage = data.message;
        const isMessageAlreadyExists = oldMessages.some(message => message.uuid === newMessage.uuid);
        if (!isMessageAlreadyExists) {
          const updatedMessages = [...oldMessages, newMessage];
          store.dispatch(setMessages(updatedMessages));
        }
      }

      const oldConversations = [...store.getState().chat.conversations];
      const newConversation = data.conversation;

      const isConversationAlreadyExists = oldConversations.some(
        conversation => conversation._id === newConversation._id,
      );

      let updatedConversations;

      if (isConversationAlreadyExists) {
        const filteredConversations = oldConversations.filter(conversation => conversation._id !== newConversation._id);
        updatedConversations = [
          newConversation,
          ...filteredConversations.map(conversation =>
            conversation._id === newConversation._id
              ? {
                  ...conversation,
                  lastMessage: newConversation.lastMessage,
                }
              : conversation,
          ),
        ];
      } else {
        updatedConversations = [newConversation, ...oldConversations];
      }

      store.dispatch(setConversations(updatedConversations));
    });

    socket.on('notify-video-call', data => {
      const { currentConversation } = store.getState().chat;

      const arr = [data.from, data.to];
      const isAllowedToCall = arr.includes(currentConversation.initBy) && arr.includes(currentConversation.receiver);

      if (isAllowedToCall) {
        store.dispatch(setCallRingtone(callSound));
        // Set the current time to 0 to start from the beginning
        callSound.currentTime = 0;
        callSound.play();
        receiveCallHandler(data);
      }
    });
    socket.on('notify-audio-call', data => {
      const { currentConversation } = store.getState().chat;

      const arr = [data.from, data.to];
      const isAllowedToCall = arr.includes(currentConversation.initBy) && arr.includes(currentConversation.receiver);

      if (isAllowedToCall) {
        // Set the current time to 0 to start from the beginning
        store.dispatch(setCallRingtone(callSound));
        callSound.currentTime = 0;
        callSound.play();
        receiveCallHandler(data);
      }
    });
    socket.on('conn-prepare', data => {
      const { from, to } = data;
      prepareNewPeerConnection(from, false);
      socket.emit('conn-init', { to: from, from: to });
    });
    socket.on('conn-init', data => {
      store.dispatch(setReceivingCall(true));
      const { from } = data;
      prepareNewPeerConnection(from, true);
    });
    socket.on('conn-signal', data => {
      handleSignalingData(data);
    });
    socket.on('call-attended', () => {
      const senderRingtone = store.getState().room.senderRingtone;

      callSound.pause();
      store.dispatch(setCallAccepted(true));
      store.dispatch(setStartTime(Date.now()));
      if (senderRingtone) {
        senderRingtone?.pause();
      }
    });
    socket.on('call-ended', data => {
      const senderRingtone = store.getState().room.senderRingtone;
      callEndedHandler(data);
      callSound.pause();
      if (senderRingtone) {
        senderRingtone?.pause();
      }
    });
  });
};

export const socketServer = () => socket;

export const notifyUser = (from, to, type) => {
  type == 'video'
    ? socket.emit('notify-video-call', { from, to, type })
    : socket.emit('notify-audio-call', { from, to, type });
};

export const signalPeerData = data => {
  socket.emit('conn-signal', data);
};
export const callAttended = to => {
  socket.emit('call-attended', { to });
};
