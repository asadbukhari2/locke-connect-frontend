import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatMessageMain, NotificationDropDown } from "./ChatProfile.styles";
import dots from "../../../../public/dots.png";
import Image from "next/image";
import trash from "../../../../public/trash.png";
import archive from "../../../../public/archive.png";
import mute from "../../../../public/mute.png";
import Badge from "@/components/Badge";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllConversations,
  getMessages,
  setCountToZero,
  setCurrentConversation,
  setMessages,
} from "@/features/messageSlice";
import { useRouter } from "next/router";
import Toast from "@/components/Toast";
import peoplesService from "@/services/peoples";
import { socketServer } from "@/utils/socketServerConnection";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";

const ChatProfile = ({ data, key }) => {
  const NotificationRef = useRef(null);
  const [toggleDropDown, setToggleDropDown] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const socket = socketServer();
  const { user } = useContextHook(AuthContext, ["user"]);

  function handelDropDown(e) {
    e.stopPropagation();
    setToggleDropDown(!toggleDropDown);
  }

  const handleClickOutsideNotification = (event) => {
    if (
      NotificationRef.current &&
      !NotificationRef.current.contains(event.target)
    ) {
      setToggleDropDown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideNotification);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);

  const handleDeleteConversation = async () => {
    try {
      const res = await peoplesService.deleteConversation(data._id);
      dispatch(fetchAllConversations());
      dispatch(setCurrentConversation(null));
      dispatch(setMessages([]));
      if (res.success) {
        Toast({ type: "success", message: res.message });
      }
    } catch (error) {
      Toast({
        type: "error",
        message: error.message || "Something went wrong",
      });
    }
  };

  const handleMessageRead = () => {
    if (data.unreadcount > 0) {
      socket.emit("messages-read", {
        conversationId: data._id,
        receiver: user.id,
      });
      dispatch(
        setCountToZero({
          conversationId: data._id,
        })
      );
    }
  };

  return (
    <ChatMessageMain ref={NotificationRef} key={key}>
      <div
        className="mainWapper"
        onClick={() => {
          dispatch(setCurrentConversation(data));
          const author = data?.initBy;
          const receiver = data?.receiver;
          const conversationId = data?._id ?? "";
          dispatch(getMessages({ author, receiver, conversationId }));
          setToggleDropDown(null);
          handleMessageRead();
          router.push("/chat");
          document?.body.classList.remove("aside-active");
        }}
      >
        <div className="chatImageText">
          <div className="profileBadgeWrapper">
            <span className="profile">
              <Image src={data.photoURL} alt="user" width={40} height={40} />
            </span>
            {data.unreadcount > 0 && (
              <div className="badge">
                <Badge
                  $variant="secondary"
                  alignLeft
                  child={data.unreadcount <= 9 ? data.unreadcount : `9+`}
                />
              </div>
            )}
          </div>
          <div className="text">
            <strong>{data.channelName}</strong>
            <p>{data?.lastMessage ? data?.lastMessage.text : "No Messages"}</p>
          </div>
        </div>
        <div className="time">
          <p>{data.lastMessage?.time}</p>
          <Image
            src={dots}
            alt="dots"
            className="dots"
            onClick={(e) => handelDropDown(e)}
          />
          <NotificationDropDown $show={toggleDropDown}>
            <div className="wrap" onClick={handleDeleteConversation}>
              <span className="icon">
                <Image src={trash} alt="trash" />
              </span>
              <p>Delete</p>
            </div>
            <div className="wrap">
              <span className="icon">
                <Image src={archive} alt="archive" />
              </span>
              <p>Archive</p>
            </div>
            <div className="wrap">
              <span className="icon">
                <Image src={mute} alt="mute" />
              </span>
              <p>Mute</p>
            </div>
          </NotificationDropDown>
        </div>
      </div>
    </ChatMessageMain>
  );
};

export default ChatProfile;
