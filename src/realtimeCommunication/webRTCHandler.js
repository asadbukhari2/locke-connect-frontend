import store from "../features/store";
import Peer from "simple-peer";
import {
  setAudioCallModal,
  setLocalStream,
  setRemoteStream,
  setVideoCallModal,
} from "@/features/roomSlice";
import { signalPeerData } from "@/utils/socketServerConnection";
import Toast from "@/components/Toast";

const getConfiguration = () => {
  const turnIceServers = null;

  if (turnIceServers) {
    // TODO use TURN server credentials
  } else {
    console.warn("Using only STUN server");
    return {
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    };
  }
};

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  video: true,
  audio: true,
};

// export const getLocalStreamPreview = async (
//   onlyAudio = false,
//   callbackFunc
// ) => {
//   let constraints = null;

//   const isFirefox = typeof InstallTrigger !== "undefined";

//   if (onlyAudio) {
//     console.log("inside only audio block");
//     constraints = onlyAudioConstraints;
//   } else {
//     if (isFirefox) {
//       console.log("inside firefox block");
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       console.log("devices list for firefox", devices);
//       const hasCamera = devices.some((device) => device.kind === "videoinput");
//       const hasMicrophone = devices.some(
//         (device) => device.kind === "audioinput"
//       );

//       if (hasCamera && hasMicrophone) {
//         constraints = defaultConstraints;
//       } else if (!hasCamera && hasMicrophone) {
//         constraints = onlyAudioConstraints;
//       } else if (!hasCamera && !hasMicrophone) {
//         Toast({ type: "warning", message: "Issue with your hardware" });
//       }

//       navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then((stream) => {
//           store.dispatch(setLocalStream(stream));
//           onlyAudio
//             ? store.dispatch(setAudioCallModal(true))
//             : store.dispatch(setVideoCallModal(true));
//           callbackFunc();
//         })
//         .catch((err) => {
//           console.log(err);
//           console.log("Cannot get an access to local stream");
//         });
//     } else {
//       const videoPermission = await navigator.permissions.query({
//         name: "camera",
//       });
//       const audioPermission = await navigator.permissions.query({
//         name: "microphone",
//       });
//       if (
//         videoPermission.state === "granted" &&
//         audioPermission.state === "granted"
//       ) {
//         constraints = defaultConstraints;
//       } else if (
//         videoPermission.state === "denied" &&
//         audioPermission.state === "granted"
//       ) {
//         constraints = onlyAudioConstraints;
//       }

//       navigator.mediaDevices
//         .getUserMedia(constraints)
//         .then((stream) => {
//           store.dispatch(setLocalStream(stream));
//           onlyAudio
//             ? store.dispatch(setAudioCallModal(true))
//             : store.dispatch(setVideoCallModal(true));
//           callbackFunc();
//         })
//         .catch((err) => {
//           console.log(err);
//           console.log("Cannot get an access to local stream");
//         });
//     }
//   }
//   console.log("constraints", constraints);
// };

export const getLocalStreamPreview = async (
  onlyAudio = false,
  callbackFunc
) => {
  let constraints = null;

  if (onlyAudio) {
    console.log("inside only audio block");
    constraints = onlyAudioConstraints;
  } else {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      if (/Firefox/i.test(navigator.userAgent)) {
        console.log("inside firefox block");
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          console.log("devices list for Firefox", devices);
          const hasCamera = devices.some(
            (device) => device.kind === "videoinput"
          );
          const hasMicrophone = devices.some(
            (device) => device.kind === "audioinput"
          );

          if (hasCamera && hasMicrophone) {
            constraints = defaultConstraints;
          } else if (!hasCamera && hasMicrophone) {
            constraints = onlyAudioConstraints;
          } else {
            Toast({ type: "warning", message: "Issue with your hardware" });
            return;
          }
        } catch (error) {
          console.error(error);
          console.log("Cannot get access to local stream in Firefox");
        }
      } else if (
        navigator.userAgent.indexOf("OPR/") !== -1 ||
        navigator.userAgent.indexOf("Opera") !== -1
      ) {
        try {
          console.log("for opera browser");
          const videoPermission = await navigator.permissions.query({
            name: "camera",
          });
          const audioPermission = await navigator.permissions.query({
            name: "microphone",
          });

          console.log({ videoPermission }, { audioPermission });

          constraints = onlyAudioConstraints;
        } catch (error) {
          console.log(error);
          console.log("error in opera ");
        }
      } else {
        console.log("get access to local stream in non-Firefox browser");
        try {
          const videoPermission = await navigator.permissions.query({
            name: "camera",
          });
          const audioPermission = await navigator.permissions.query({
            name: "microphone",
          });

          console.log({ videoPermission }, { audioPermission });

          if (
            videoPermission.state === "granted" &&
            audioPermission.state === "granted"
          ) {
            constraints = defaultConstraints;
          } else if (
            (videoPermission.state === "denied" ||
              videoPermission.state === "prompt") &&
            audioPermission.state === "granted"
          ) {
            constraints = onlyAudioConstraints;
          } else {
            constraints = onlyAudioConstraints;
          }
        } catch (error) {
          console.error(error);
          console.log(
            "Cannot get access to local stream in non-Firefox browser"
          );
        }
      }
    } else {
      console.log("getUserMedia is not supported in this browser");
    }
  }
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  store.dispatch(setLocalStream(stream));
  onlyAudio
    ? store.dispatch(setAudioCallModal(true))
    : store.dispatch(setVideoCallModal(true));
  callbackFunc();
  console.log("constraints", constraints);
};

let peer = null;

export const prepareNewPeerConnection = (from, isInitiator) => {
  const localStream = store.getState().room.localStream;

  // if (isInitiator) {
  //   console.log("preparing new peer connection as initiator");
  // } else {
  //   console.log("preparing new peer connection as not initiator");
  // }

  peer = new Peer({
    initiator: isInitiator,
    // config: getConfiguration(),
    trickle: false,
    stream: localStream,
  });

  peer.on("signal", (data) => {
    const signalData = {
      signal: data,
      from: from,
    };

    signalPeerData(signalData);
  });

  peer.on("stream", (remoteStream) => {
    // console.log("remote stream came from other user");
    // console.log("direct connection has been established");
    addNewRemoteStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { signal } = data;

  if (peer) {
    peer.signal(signal);
  }
};

const addNewRemoteStream = (remoteStream) => {
  store.dispatch(setRemoteStream(remoteStream));
};

export const closeAllConnections = () => {
  if (peer) {
    peer.destroy();
  }
  peer = null;
};
