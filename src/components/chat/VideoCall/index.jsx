import React, { useEffect, useState } from 'react';
import { ActionButton, CallingFrom, StyledAudioCall, VideocallMainWrapper } from './VideoCall.styles';
import usericonaudio from '../../../../public/usericonaudio.jpg';
import message from '../../../../public/callmessage.svg';
import fullScreen from '../../../../public/fullScreen.svg';
import videoCallImage from '../../../../public/user-skeleton.png';
import Image from 'next/image';
import { callAttended } from '@/utils/socketServerConnection';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { formatTime } from '@/helpers/common';
import { PiPhoneCallDuotone } from 'react-icons/pi';
import Video from './Video';
import { useDispatch, useSelector } from 'react-redux';
import MicButton from './MicButton';
import CameraButton from './CameraButton';
import CancelButton from './CancelButton';
import { setCallAccepted, setStartTime } from '@/features/roomSlice';

const VideoCall = ({ user }) => {
  const [stopVideo, setStopVideo] = useState(true);

  const [elapsedTime, setElapsedTime] = useState(0);
  const dispatch = useDispatch();

  const { localStream, remoteStream, receivingCall, callAccepted, startTime, callRingtone } = useSelector(
    state => state.room,
  );

  const { user: currentUser } = useContextHook(AuthContext, ['user']);

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
        <Video stream={localStream} isLocalStream={true} />
        <div className="CallInfo">
          <div className="profile-wrapper">
            <div className="profile">
              <Image src={user.photoURL || usericonaudio} alt="usericonaudio" width={142} height={142} />
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
            {callAccepted ? (
              <Video stream={remoteStream} isLocalStream={false} />
            ) : (
              <Image src={videoCallImage} alt="videoCallImage" width={362} height={160} />
            )}
          </div>
        </CallingFrom>
      </div>
      <ActionButton $stopVideo={stopVideo}>
        <MicButton localStream={localStream} />

        <div className="circle message">
          <Image src={message} alt="message" />
        </div>

        {receivingCall && !callAccepted ? (
          <button className="circle" style={{ background: '#1cbb34' }} onClick={answerCall}>
            <PiPhoneCallDuotone size={30} color="#fff" />
          </button>
        ) : null}

        <CameraButton localStream={localStream} stopVideo={stopVideo} setStopVideo={setStopVideo} />
        <CancelButton to={user.slectedUserId} from={currentUser.id} />
      </ActionButton>
    </StyledAudioCall>
  );
};

export default VideoCall;
