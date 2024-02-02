import { createSlice } from '@reduxjs/toolkit';

const initState = {
  localStream: null,
  remoteStream: null,
  videoCallModal: false,
  audioCallModal: false,
  receivingCall: false,
  callAccepted: false,
  startTime: null,
};

const roomSlice = createSlice({
  name: 'room',
  initialState: initState,
  reducers: {
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setVideoCallModal: (state, action) => {
      state.videoCallModal = action.payload;
    },
    setAudioCallModal: (state, action) => {
      state.audioCallModal = action.payload;
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload;
    },
    setReceivingCall: (state, action) => {
      state.receivingCall = action.payload;
    },
    setCallAccepted: (state, action) => {
      state.callAccepted = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
  },
});

export const {
  setRemoteStream,
  setLocalStream,
  setVideoCallModal,
  setAudioCallModal,
  setReceivingCall,
  setCallAccepted,
  setStartTime,
} = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
