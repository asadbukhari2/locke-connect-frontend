import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  PiPhoneCall,
  PiPhoneCallDuotone,
  PiVideoCameraBold,
} from "react-icons/pi";
import userImg from "../../../../public/avatar-women.png";
import { StyledChatHeader } from "./ChatHeader.styles";
import Modal from "@/components/Modal";
import AudioCall from "../AudioCall";
import VideoCall from "../VideoCall";
import Toast from "@/components/Toast";

import { socketServer } from "@/utils/socketServerConnection";
import { AuthContext } from "@/context/authContext";
import { useContextHook } from "use-context-hook";

const userDetail = {
  photoURL: userImg,
  channelName: "Emily Anderson",
  isOnline: false,
};

function ChatHeader({ user = userDetail }) {
  const soundUrl =
    "https://firebasestorage.googleapis.com/v0/b/locke-connect.appspot.com/o/sounds%2Fincoming-call.mp3?alt=media&token=c481eaa1-2a4e-4d09-a529-21a1801de572";
  const [audioCall, setAudioCall] = useState(false);
  const [videoCall, setVideoCall] = useState(false);

  const [receive, setReceive] = useState(false);
  const [ringing, setRinging] = useState(false);
  const [isCaller, setIsCaller] = useState(false);

  const { user: currentUser } = useContextHook(AuthContext, ["user"]);
  const sound = new Audio(soundUrl);

  const socket = socketServer();

  socket.on("notify-online-user-video", () => {
    setRinging(true);
    // setVideoCall(true);
    setReceive(true);
    setIsCaller(false);
    // sound.play();
  });
  socket.on("notify-online-user-audio", () => {
    setRinging(true);
    // setAudioCall(true);
  });

  const handleAudioCall = () => {
    if (user.isOnline) {
      setAudioCall(true);
    } else {
      Toast({
        type: "warning",
        message: "Call only when user is online; drop a message",
      });
      sound.pause();
    }
  };
  const handleVideoCall = async () => {
    if (user.isOnline) {
      setVideoCall(true);
      setIsCaller(true);
    } else {
      Toast({
        type: "warning",
        message: "Call only when user is online; drop a message",
      });
    }
  };

  const handleAcceptCall = () => {
    setReceive(true);
    setRinging(false);
    sound.pause();

    setTimeout(() => {
      setVideoCall(true);
      socket.emit("receive-modal-open", {
        from: currentUser.id,
        to: user.slectedUserId,
      });
    }, 0);
  };
  const handleRejectCall = () => {
    setRinging(false);
    sound.pause();
    socket.emit("reject-call", { to: user.slectedUserId });
  };

  return (
    <>
      <Modal
        open={audioCall}
        setOpen={setAudioCall}
        width="542px"
        closer={false}
      >
        <AudioCall user={user} />
      </Modal>
      <Modal
        open={videoCall}
        setOpen={setVideoCall}
        width="1156px"
        closer={false}
        isCloseAble={false}
      >
        <VideoCall
          user={user}
          isCaller={isCaller}
          setIsVideo={setVideoCall}
          receive={receive}
          setReceive={setReceive}
          sound={sound}
        />
      </Modal>
      <StyledChatHeader>
        <div className="userBox">
          <div className="img-box">
            <Image
              src={user?.photoURL}
              alt="img description"
              width={500}
              height={500}
            />
          </div>
          <div className="text-box">
            <strong className="userTitle">{user?.channelName}</strong>
            <span
              className={
                user?.isOnline ? "userStatus-online" : "userStatus-offline"
              }
            >
              {user?.isOnline ? "Online" : "Offline"}
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
          {ringing && (
            <>
              <button
                className="btn"
                style={{ background: "green", color: "#fff" }}
                onClick={handleAcceptCall}
              >
                <PiPhoneCallDuotone />
              </button>
              <button
                className="btn"
                style={{ background: "red", color: "#fff" }}
                onClick={handleRejectCall}
              >
                <PiPhoneCallDuotone />
              </button>
            </>
          )}
        </div>
      </StyledChatHeader>
    </>
  );
}

export default ChatHeader;
