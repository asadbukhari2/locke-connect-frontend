import React, { useEffect, useState } from "react";
import { ActionButton, StyledAudioCall } from "./AudioCall.styles";
import usericonaudio from "../../../../public/usericonaudio.jpg";
import videoIcon from "../../../../public/videoIcon.svg";
import message from "../../../../public/callmessage.svg";
import Image from "next/image";
import MicButton from "../VideoCall/MicButton";
import CancelButton from "../VideoCall/CancelButton";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setCallAccepted, setStartTime } from "@/features/roomSlice";
import { callAttended } from "@/utils/socketServerConnection";
import Audio from "./Audio";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";
import { formatTime } from "@/helpers/common";

const AudioCall = ({ user }) => {
  const dispatch = useDispatch();
  const [elapsedTime, setElapsedTime] = useState(0);

  const { localStream, remoteStream, receivingCall, callAccepted, startTime,callRingtone } =
    useSelector((state) => state.room);

  const { user: currentUser } = useContextHook(AuthContext, ["user"]);

  const answerCall = () => {
    try {
      dispatch(setCallAccepted(true));
      callAttended(user.slectedUserId);
      dispatch(setStartTime(Date.now()));
      callRingtone?.pause();
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="profile-wrapper">
          <div className="profile">
            <Image
              src={user.photoURL || usericonaudio}
              alt="usericonaudio"
              width={142}
              height={142}
            />
          </div>
        </div>
        <strong className="userName">{user.channelName}</strong>
        <Audio stream={localStream} isLocalStream={true} />
        {callAccepted && <Audio stream={remoteStream} isLocalStream={false} />}
        {startTime ? (
          <span className="calling">{formatTime(elapsedTime)}</span>
        ) : (
          <span className="calling">calling....</span>
        )}
        <ActionButton>
          <MicButton localStream={localStream} />
          <div className="circle video">
            <Image src={videoIcon} alt="videoIcon" />
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
          <CancelButton to={user.slectedUserId} from={currentUser.id} />
          <div className="circle message">
            <Image src={message} alt="message" />
          </div>
        </ActionButton>
      </div>
    </StyledAudioCall>
  );
};

export default AudioCall;
