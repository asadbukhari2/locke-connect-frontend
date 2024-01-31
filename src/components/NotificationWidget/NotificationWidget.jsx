import React, { useEffect, useRef, useState } from "react";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import {
  ChatMessageMain,
  ChatWidgetStyles,
  NotificationDropDown,
  SettingImage,
} from "./NotificationWidget.styles";
import dots from "../../../public/dots.png";
import user1 from "../../../public/payment.png";
import user2 from "../../../public/user.png";
import user3 from "../../../public/setting.png";
import trash from "../../../public/trash.png";
import archive from "../../../public/archive.png";
import mute from "../../../public/mute.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Badge from "../Badge";

const chatArray = [
  {
    img: user1,
    name: "Payment setting updated",
    message: "Just now",
    time: "2min ago",
    notification: "2",
    bg: "--gradient-orange",
    notification: true,
  },
  {
    img: user2,
    name: "New user registered",
    message: "Just now",
    time: "2min ago",
    bg: "--gradient-green",
    notification: false,
  },
  {
    img: user3,
    name: "You updated your password",
    message: "Just now",
    time: "2min ago",
    bg: "--gradient-pink",
    notification: false,
  },
  {
    img: user1,
    name: "Payment setting updated",
    message: "Just now",
    time: "2min ago",
    notification: "2",
    bg: "--gradient-orange",
    notification: true,
  },
  {
    img: user2,
    name: "New user registered",
    message: "Just now",
    time: "2min ago",
    bg: "--gradient-green",
    notification: false,
  },
  {
    img: user3,
    name: "You updated your password",
    message: "Just now",
    time: "2min ago",
    bg: "--gradient-pink",
    notification: false,
  },
  {
    img: user1,
    name: "Payment setting updated",
    message: "Just now",
    time: "2min ago",
    notification: "2",
    bg: "--gradient-orange",
    notification: true,
  },
  {
    img: user2,
    name: "New user registered",
    message: "Just now",
    time: "2min ago",
    bg: "--gradient-green",
    notification: false,
  },
  {
    img: user3,
    name: "You updated your password",
    message: "Just now",
    time: "2min ago",
    bg: "--gradient-pink",
    notification: false,
  },
];

const NotificationWidget = ({ $marginB }) => {
  const NotificationRef = useRef(null);

  const [toggleDropDown, setToggleDropDown] = useState(null);
  const dropdownRef = useRef(null);

  function handelDropDown(e, ind) {
    e.stopPropagation();

    const targetElement = e.currentTarget;
    const dropdown = dropdownRef.current;

    const rect = targetElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate available space below and above the target element
    const spaceBelow = windowHeight - rect.bottom;
    const spaceAbove = rect.top;

    // Set the position based on available space
    if (spaceBelow >= dropdown.clientHeight || spaceBelow >= spaceAbove) {
      // Open dropdown downwards if there is enough space below or space above is smaller
      dropdown.style.top = null;
    } else {
      // Open dropdown upwards
      dropdown.style.top = `${-dropdown.clientHeight}px`;
    }

    setToggleDropDown((prev) => (prev === ind ? null : ind));
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
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutsideNotification);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNotification);
    };
  }, []);
  return (
    <ChatWidgetStyles $marginB={$marginB}>
      <span className="title">
        <p>Notification </p>
        <div className="badge">
          <Badge $variant="dark" child="2" />
        </div>
      </span>
      <ChatMessageMain ref={NotificationRef}>
        {chatArray.map((elem, ind) => (
          <li key={ind} onClick={() => setToggleDropDown(null)}>
            <div className="chatImageText">
              <SettingImage className="settingImg" bg={elem.bg}>
                <Image src={elem.img} alt="user" />
              </SettingImage>
              <div className="text">
                <strong>{elem.name}</strong>
                <p>{elem.message}</p>
              </div>
            </div>
            <div className="time">
              {elem.notification && <Badge $variant="secondary" child="2" />}
              <Image
                src={dots}
                alt="dots"
                className="dots"
                onClick={(e) => handelDropDown(e, ind)}
              />
              <NotificationDropDown
                $show={toggleDropDown == ind ? true : false}
                ref={dropdownRef}
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

export default NotificationWidget;
