import React, { useEffect, useRef, useState } from "react";
import { ChatMessageMain, ChatWidgetStyles } from "./ChatWidget.styles";
import dots from "../../../public/dots.png";
import user1 from "../../../public/user1.png";
import user2 from "../../../public/user2.png";
import user3 from "../../../public/user3.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Badge from "../Badge";
import { NotificationDropDown } from "../NotificationWidget/NotificationWidget.styles";
import trash from "../../../public/trash.png";
import archive from "../../../public/archive.png";
import mute from "../../../public/mute.png";
import { useRouter } from "next/router";
const chatArray = [
  {
    img: user1,
    name: "Emily Anderson",
    message: "Hey there, how's your whatsap",
    time: "2min ago",
    notification: "2",
  },
  {
    img: user2,
    name: "Liam Parker",
    message: "Just got back from a i...",
    time: "2min ago",
  },
  {
    img: user3,
    name: "Oliver Johnson",
    message: "Hey there, how's your...",
    time: "2min ago",
  },
  {
    img: user1,
    name: "Emily Anderson",
    message: "Hey there, how's your whatsap",
    time: "2min ago",
    notification: "2",
  },
  {
    img: user2,
    name: "Liam Parker",
    message: "Just got back from a i...",
    time: "2min ago",
  },
  {
    img: user3,
    name: "Oliver Johnson",
    message: "Hey there, how's your...",
    time: "2min ago",
  },
  {
    img: user1,
    name: "Emily Anderson",
    message: "Hey there, how's your whatsap",
    time: "2min ago",
    notification: "2",
  },
  {
    img: user2,
    name: "Liam Parker",
    message: "Just got back from a i...",
    time: "2min ago",
  },
  {
    img: user3,
    name: "Oliver Johnson",
    message: "Hey there, how's your...",
    time: "2min ago",
  },
];

const ChatWidget = ({ $marginB }) => {
  const NotificationRef = useRef(null);
  const router = useRouter();
  const [toggleDropDown, setToggleDropDown] = useState(null);
  function handelDropDown(e, ind) {
    e.stopPropagation();
    if (toggleDropDown == ind) {
      setToggleDropDown(null);
    } else {
      setToggleDropDown(ind);
    }
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
  return (
    <ChatWidgetStyles $marginB={$marginB}>
      <span className="title">
        <p>Chat</p>
        <div className="badge">
          <Badge $variant="dark" child="2" />
        </div>
      </span>
      <ChatMessageMain ref={NotificationRef}>
        {chatArray.map((elem, ind) => (
          <li
            key={ind}
            onClick={() => {
              setToggleDropDown(null);
              router.push("/chat");
            }}
          >
            <div className="chatImageText">
              <span className="profile">
                <Image src={elem.img} alt="user" width={40} height={40} />
              </span>
              <div className="text">
                <strong>{elem.name}</strong>
                <p>{elem.message}</p>
              </div>
            </div>
            <div className="time">
              <p>{elem.time}</p>
              <Image
                src={dots}
                alt="dots"
                className="dots"
                onClick={(e) => handelDropDown(e, ind)}
              />
              <NotificationDropDown
                $show={toggleDropDown == ind ? true : false}
              >
                <div className="wrap">
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
          </li>
        ))}
      </ChatMessageMain>
      <div className="viewAll">
        <p>View All</p>
        <IoIosArrowRoundForward size="25" className="ico" />
      </div>
    </ChatWidgetStyles>
  );
};

export default ChatWidget;
