import React, { useEffect, useState } from "react";
import Image from "next/image";
import userImg from "../../../../public/avatar-women.png";
import { StyledChatMessage } from "./ChatMessage.styles";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import Link from "next/link";
import usericonaudio from "../../../../public/usericonaudio.jpg";
import propertyimg from "../../../../public/img01.jpg";
import location from "../../../../public/locationIcon.svg";
import Button from "@/components/Button";
import { formatFileSize, shortenFileName } from "@/helpers/common";

function getFileExtension(fileName) {
  const parts = fileName.split(".");
  return parts.length > 1 ? parts.pop() : "";
}

function ChatMessage({
  message = "Hey there, how's are you",
  time = "2 sec ago...",
  user = userImg,
  type = "text",
  document,
  onClick,
  contact,
  property,
}) {
  const formatFileSize = (sizeInBytes) => {
    if (!document?.size) return;
    if (sizeInBytes === 0) return "0 KB";

    const units = ["KB", "MB", "GB"];
    let size = sizeInBytes / 1024; // Start with KB

    for (let i = 0; i < units.length; i++) {
      if (size < 1024) {
        return size.toFixed(2) + " " + units[i];
      }
      size /= 1024;
    }

    return size.toFixed(2) + " " + units[units.length - 1];
  };

  return (
    <>
      <StyledChatMessage>
        <div className="img-box">
          <Image src={user} alt="img description" width={200} height={200} />
        </div>
        <div className="text-area">
          <div className="chat-box">
            {type === "text" && <p>{message}</p>}
            {type === "document" && document && (
              <div className="document">
                <span className="iconWrapper">
                  <HiOutlineDocumentArrowDown size="25" />
                </span>
                <div className="docTitle">
                  {/* <a href={'/document.pdf'} download={document?.name}> */}
                  <span
                    onClick={() => {
                      window.open(document?.url, "_blank");
                    }}
                  >
                    <>
                      {shortenFileName(document?.name, 12)}
                      {/* {formatFileSize(document?.size)} */}
                    </>
                  </span>
                  {/* </a> */}
                </div>
              </div>
            )}
            {type === "contact" && (
              <div className="document">
                <span className="userImageWrapper">
                  <Image
                    src={contact?.contactimg}
                    alt="usericonaudio"
                    width={200}
                    height={200}
                  />
                </span>
                <span className="userName">{contact.name}</span>
                <Button outline="primary" onClick={onClick}>
                  See Details
                </Button>
              </div>
            )}
            {type === "property" && (
              <>
                <div className="propertyWrapper">
                  <span className="img-box">
                    <Image
                      src={property.img}
                      alt="propertyimg"
                      width={200}
                      height={200}
                    />
                  </span>
                  <div className="text">
                    <strong className="propertyName">{property.title}</strong>
                    <div className="location">
                      <Image src={location} alt="location" />
                      <p>{property.location}</p>
                    </div>
                  </div>
                </div>
                <Button outline="primary" onClick={onClick}>
                  See Details
                </Button>
              </>
            )}
          </div>
          <span className="chat-time">{time}</span>
        </div>
      </StyledChatMessage>
    </>
  );
}

export default ChatMessage;
