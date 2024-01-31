import React, { useEffect, useRef, useState } from "react";
import { ActionButton, CallingFrom, StyledAudioCall } from "./VideoCall.styles";
import usericonaudio from "../../../../public/usericonaudio.jpg";
import videoIcon from "../../../../public/videoIcon.svg";
import message from "../../../../public/callmessage.svg";
import cancelCall from "../../../../public/cancelCall.svg";
import speakerCall from "../../../../public/speakerCall.svg";
import fullScreen from "../../../../public/fullScreen.svg";
import videoCallImage from "../../../../public/videoCall.png";
import cancelVideo from "../../../../public/cancelVideo.svg";
import Image from "next/image";
import { socketServer } from "@/utils/socketServerConnection";
import Peer from "simple-peer";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";
import { formatTime } from "@/helpers/common";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { useRouter } from "next/router";

const VideoCall = ({
  user,
  isCaller,
  setIsVideo,
  receive,
  setReceive,
  sound,
}) => {
  const [stream, setStream] = useState();
  const [stopVideo, setStopVideo] = useState(true);
  const [stopAudio, setStopAudio] = useState(true);
  const [callEnded, setCallEnded] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [infoMesage, setInfoMessage] = useState("");

  const localVideoRef = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef(null);

  const router = useRouter();

  const socket = socketServer();

  const { user: currentUser } = useContextHook(AuthContext, ["user"]);

  const requestUserMedia = async () => {
    try {
      const videoPermission = await navigator.permissions.query({
        name: "camera",
      });

      const audioPermission = await navigator.permissions.query({
        name: "microphone",
      });

      if (
        videoPermission.state === "granted" &&
        audioPermission.state === "granted"
      ) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } else if (audioPermission.state === "granted") {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: false,
          audio: true,
        });

        setStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } else {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      }
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const callUser = ({ notify = false }) => {
    try {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
      });
      peer.on("signal", (data) => {
        socket.emit("call-user", {
          signalData: data,
          from: currentUser.id,
          to: user.slectedUserId,
          notify,
        });
      });
      peer.on("stream", (stream) => {
        userVideo.current.srcObject = stream;
      });
      socket.on("call-accepted", (signal) => {
        setCallAccepted(true);

        peer.signal(signal);
        setStartTime(Date.now());
      });

      connectionRef.current = peer;
    } catch (error) {
      console.log(error);
    }
  };

  const answerCall = () => {
    try {
      setCallAccepted(true);

      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });

      peer.on("signal", (data) => {
        setStartTime(Date.now());
        socket.emit("answer-call", { signal: data, to: user.slectedUserId });
      });
      peer.on("stream", (stream) => {
        userVideo.current.srcObject = stream;
      });

      peer.signal(callerSignal);
      connectionRef.current = peer;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestUserMedia();

    if (isCaller) {
      callUser({ notify: true });
    }
    // if(receive){
    //   answerCall()
    // }
    const handleCallUser = (data) => {
      try {
        setReceivingCall(true);
        setCallerSignal(data.signal);
      } catch (error) {
        console.log(error);
      }
    };

    socket.on("call-user", handleCallUser);

    return () => {
      socket.off("call-user", handleCallUser);
    };
  }, [isCaller]);

  const stopUserMedia = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      const videoTracks = stream.getVideoTracks();
      videoTracks.forEach((track) => {
        if (track) {
          track.enabled = !track.enabled;
        }
      });
    }
  };

  const toggleMute = () => {
    if (stream) {
      const audioTracks = stream.getAudioTracks();
      audioTracks.forEach((track) => {
        if (track) {
          track.enabled = !track.enabled;
        }
      });
    }
  };

  function handelVideo() {
    setStopVideo(!stopVideo);
    toggleVideo();
  }

  function handelAudio() {
    setStopAudio(!stopAudio);
    toggleMute();
  }

  socket.on("receive-modal-open", () => {
    try {
      callUser({ notify: false });
    } catch (error) {
      console.log(error);
    }
  });

  const clearFunction = async () => {
    if (connectionRef.current) {
      connectionRef.current.destroy();
      connectionRef.current = null;
    }
    stopUserMedia();
    setReceive(false);
    localVideoRef.current = null;
    userVideo.current = null;
    setCallEnded(true);

    setReceivingCall(false);
    setCallAccepted(false);
    setTimeout(() => {
      setIsVideo(false);
      router.reload();
    }, 100);
  };

  const leaveCall = async () => {
    setStartTime(null);
    setElapsedTime(0);
    socket.emit("end-call", {
      to: user.slectedUserId,
      from: currentUser.id,
    });
    clearFunction();
  };

  socket.on("reject-call", async () => {
    setInfoMessage("Call Declined try calling againg after sometime");

    clearFunction();
  });

  socket.on("end-call", async () => {
    setStartTime(null);
    setElapsedTime(0);
    clearFunction();
  });

  useEffect(() => {
    let interval;

    if (startTime !== null) {
      interval = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  return (
    <StyledAudioCall>
      <div className="main">
        <video
          ref={localVideoRef}
          autoPlay
          playsInline
          muted
          style={stream ? { display: "block" } : { display: "none" }}
        />

        <span
          className="Camera"
          style={stream ? { display: "none" } : { display: "block" }}
        >
          Device not found
        </span>

        <div className="CallInfo">
          <div className="profile-wrapper">
            <div className="profile">
              <Image
                src={usericonaudio}
                alt="usericonaudio"
                width={142}
                height={142}
              />
            </div>
          </div>
          <div className="text">
            <strong className="userName">{user?.channelName}</strong>
            <span className="calling">{formatTime(elapsedTime)}</span>
          </div>
        </div>
        <CallingFrom>
          <div className="contentWrapper">
            <div className="fullScreen">
              <Image src={fullScreen} alt="fullScreen" />
            </div>

            <video
              playsInline
              ref={userVideo}
              autoPlay
              style={
                callAccepted && !callEnded
                  ? { width: "300px" }
                  : { width: "300px", display: "none" }
              }
            />

            <div
              style={
                callAccepted && !callEnded
                  ? { width: "300px", display: "none" }
                  : { width: "300px", display: "block" }
              }
            >
              <Image
                src={videoCallImage}
                alt="videoCallImage"
                width={362}
                height={160}
              />
            </div>
          </div>
        </CallingFrom>
      </div>
      <ActionButton $stopVideo={stopVideo}>
        <div className="circle mute" onClick={handelAudio}>
          <Image src={speakerCall} alt="speakerCall" />
        </div>
        <div className="circle message">
          <Image src={message} alt="message" />
        </div>

        {receivingCall && !callAccepted ? (
          <button
            className="circle"
            style={{ background: "green" }}
            onClick={answerCall}
          >
            <PiPhoneCallDuotone fontSize={24} color="#fff" />
          </button>
        ) : null}
        <div className="circle video" onClick={handelVideo}>
          {!stopVideo ? (
            <Image src={cancelVideo} alt="videoIcon" />
          ) : (
            <Image src={videoIcon} alt="videoIcon" />
          )}
        </div>
        {/* {callAccepted && !callEnded ? ( */}
        <div className="circle cancelCall" onClick={leaveCall}>
          <Image src={cancelCall} alt="cancelCall" />
        </div>
        {/* ) : null} */}
      </ActionButton>
      {infoMesage && <p>{infoMesage}</p>}
    </StyledAudioCall>
  );
};

export default VideoCall;
