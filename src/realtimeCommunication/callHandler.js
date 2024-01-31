import * as webRTCHandler from "./webRTCHandler";
import * as socketConnection from "../utils/socketServerConnection";
import store from "@/features/store";
import {
  setAudioCallModal,
  setCallAccepted,
  setLocalStream,
  setReceivingCall,
  setRemoteStream,
  setStartTime,
  setVideoCallModal,
} from "@/features/roomSlice";

export const notifyUser = async (from, to, type) => {
  const successCalbackFunc = () => {
    socketConnection.notifyUser(from, to, type);
  };

  const audioOnly = type == "audio" ? true : false;
  await webRTCHandler.getLocalStreamPreview(audioOnly, successCalbackFunc);
};
export const endCall = (from, to, isNotify = true) => {
  store.dispatch(setCallAccepted(false));
  store.dispatch(setReceivingCall(false));
  store.dispatch(setStartTime(null));
  webRTCHandler.closeAllConnections();
  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
    store.dispatch(setRemoteStream(null));
    setTimeout(() => {
      store.dispatch(setVideoCallModal(false));
      store.dispatch(setAudioCallModal(false));
    }, 50);
  }

  if (isNotify) {
    const socket = socketConnection.socketServer();
    socket.emit("call-ended", {
      from,
      to,
    });
  }
};
