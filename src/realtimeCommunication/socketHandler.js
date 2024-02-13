import { store } from '@/features/store';
import * as webRTCHandler from './webRTCHandler';
import {
  setAudioCallModal,
  setCallAccepted,
  setLocalStream,
  setReceivingCall,
  setRemoteStream,
  setStartTime,
  setVideoCallModal,
} from '@/features/roomSlice';
import { socketServer } from '@/utils/socketServerConnection';

export const receiveCallHandler = async ({ from, to, type }) => {
  const socket = socketServer();
  const successCalbackFunc = () => {
    socket.emit('conn-prepare', { to: from, from: to });
  };

  const audioOnly = type == 'audio' ? true : false;
  await webRTCHandler.getLocalStreamPreview(audioOnly, successCalbackFunc);
};

export const callEndedHandler = () => {
  const localStream = store.getState().room.localStream;
  store.dispatch(setStartTime(null));
  store.dispatch(setCallAccepted(false));
  store.dispatch(setReceivingCall(false));
  webRTCHandler.closeAllConnections();
  if (localStream) {
    localStream.getTracks().forEach(track => track.stop());
    store.dispatch(setLocalStream(null));
    store.dispatch(setRemoteStream(null));
    setTimeout(() => {
      store.dispatch(setVideoCallModal(false));
      store.dispatch(setAudioCallModal(false));
    }, 50);
  }
  // window.location.reload();
};
