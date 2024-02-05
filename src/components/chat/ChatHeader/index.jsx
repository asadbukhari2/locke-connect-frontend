import React, { useState } from 'react';
import Image from 'next/image';
import { PiPhoneCall, PiVideoCameraBold } from 'react-icons/pi';
import userImg from '../../../../public/avatar-women.png';
import { StyledChatHeader } from './ChatHeader.styles';
import Modal from '@/components/Modal';
import AudioCall from '../AudioCall';
import VideoCall from '../VideoCall';
import Toast from '@/components/Toast';

import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';

import * as callHandler from '../../../realtimeCommunication/callHandler.js';
import { useDispatch, useSelector } from 'react-redux';
import { setAudioCallModal, setSenderRingtone, setVideoCallModal } from '@/features/roomSlice';

const userDetail = {
  photoURL: userImg,
  channelName: 'Emily Anderson',
  isOnline: false,
};

function ChatHeader({ user = userDetail }) {
  // const soundUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/locke-connect.appspot.com/o/sounds%2Fincoming-call.mp3?alt=media&token=c481eaa1-2a4e-4d09-a529-21a1801de572";
  // const [audioCall, setAudioCall] = useState(false);

  const { user: currentUser } = useContextHook(AuthContext, ['user']);
  const dispatch = useDispatch();

  const { videoCallModal, audioCallModal } = useSelector(state => state.room);

  // const sound = new Audio(soundUrl);

  const handleAudioCall = () => {
    if (user.isOnline) {
      const callSound = new Audio(
        'https://firebasestorage.googleapis.com/v0/b/locke-connect.appspot.com/o/sounds%2Fskype_ringtone.mp3?alt=media&token=f79dd3a2-b792-4095-bace-7192ef5e9ac9',
      );
      callHandler.notifyUser(currentUser.id, user.slectedUserId, 'audio');
      callSound.currentTime = 0;
      dispatch(setSenderRingtone(callSound));
      callSound?.play();
    } else {
      Toast({
        type: 'warning',
        message: 'Call only when user is online; drop a message',
      });
    }
  };
  const handleVideoCall = async () => {
    // if (user.isOnline) {
    callHandler.notifyUser(currentUser.id, user.slectedUserId, 'video');
    const callSound = new Audio(
      'https://firebasestorage.googleapis.com/v0/b/locke-connect.appspot.com/o/sounds%2Fskype_ringtone.mp3?alt=media&token=f79dd3a2-b792-4095-bace-7192ef5e9ac9',
    );
    callSound.currentTime = 0;
    dispatch(setSenderRingtone(callSound));
    callSound?.play();
    // } else {
    //   Toast({
    //     type: "warning",
    //     message: "Call only when user is online; drop a message",
    //   });
    // }
  };

  return (
    <>
      <Modal
        open={audioCallModal}
        setOpen={e => {
          dispatch(setAudioCallModal(e));
        }}
        width="542px"
        closer={true}
        isCloseAble={false}>
        <AudioCall user={user} />
      </Modal>
      <Modal
        open={videoCallModal}
        setOpen={e => {
          dispatch(setVideoCallModal(e));
        }}
        width="1156px"
        closer={false}
        isCloseAble={false}>
        <VideoCall user={user} />
      </Modal>
      <StyledChatHeader>
        <div className="userBox">
          <div className="img-box">
            <Image src={user?.photoURL} alt="img description" width={500} height={500} />
          </div>
          <div className="text-box">
            <strong className="userTitle">{user?.channelName}</strong>
            <span className={user?.isOnline ? 'userStatus-online' : 'userStatus-offline'}>
              {user?.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
        <div className="btnsBox">
          <button className="btn btnCall" onClick={handleAudioCall}>
            <PiPhoneCall size="20" />
          </button>
          <button className="btn btnvideo" onClick={handleVideoCall}>
            <PiVideoCameraBold size="18" />
          </button>
        </div>
      </StyledChatHeader>
    </>
  );
}

export default ChatHeader;
