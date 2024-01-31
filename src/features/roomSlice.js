import { createSlice } from "@reduxjs/toolkit";

const initState = {
  localStream: null,
  remoteStream: null,
  videoCallModal: false,
  audioCallModal: false,
  receivingCall: false,
  callAccepted: false,
  startTime: null,
  // isUserInRoom: false,
  // isUserRoomCreator: false,
  // roomDetails: null,
  // activeRooms: [],
  // audioOnly: false,
  // screenSharingStream: null,
  // isScreenSharingActive: false,
  // isUserJoinedWithOnlyAudio: false,
};

const roomSlice = createSlice({
  name: "room",
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
    // onOpenRoom: (state, action) => {
    //   state.isUserInRoom = action.payload.isUserInRoom;
    //   state.isUserRoomCreator = action.payload.isUserRoomCreator;
    // },
    // setRoomDetails: (state, action) => {
    //   state.roomDetails = action.payload.roomDetails;
    // },
    // setActiveRooms: (state, action) => {
    //   state.activeRooms = action.payload.activeRooms;
    // },

    // setAudioOnly: (state, action) => {
    //   state.audioOnly = action.payload.audioOnly;
    // },
    // setScreenShareStream: (state, action) => {
    //   state.screenSharingStream = action.payload.screenSharingStream;
    //   state.isScreenSharingActive = action.payload.isScreenSharingActive;
    // },
    // setIsUserJoinedWithOnlyAudio: (state, action) => {
    //   state.isUserJoinedWithOnlyAudio =
    //     action.payload.isUserJoinedWithOnlyAudio;
    // },
  },
});

export const {
  // setIsUserJoinedWithOnlyAudio,
  // setScreenShareStream,
  // setAudioOnly,
  // setActiveRooms,
  // setRoomDetails,
  setRemoteStream,
  setLocalStream,
  setVideoCallModal,
  setAudioCallModal,
  setReceivingCall,
  setCallAccepted,
  setStartTime,
} = roomSlice.actions;
export const roomReducer = roomSlice.reducer;
