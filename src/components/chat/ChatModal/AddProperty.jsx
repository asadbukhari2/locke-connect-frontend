import React from "react";
import {
  ChatModalContent,
  StyledChatModal,
  UploadDocumentWrapper,
} from "./ChatModal.styles";
import user from "../../../../public/propertyCard/property1.jpg";
import user1 from "../../../../public/propertyCard/property2.jpg";
import user2 from "../../../../public/propertyCard/property3.jpg";
import user3 from "../../../../public/propertyCard/property4.jpg";
import user4 from "../../../../public/propertyCard/property5.jpg";
import user5 from "../../../../public/propertyCard/property6.jpg";
import location from "../../../../public/locationIcon.svg";
import Image from "next/image";
import Button from "@/components/Button";
import { MdAdd } from "react-icons/md";
const AddPropertyData = [
  {
    title: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    img: user,
  },
  {
    title: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    img: user1,
  },
  {
    title: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    img: user2,
  },
  {
    title: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    img: user3,
  },
  {
    title: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    img: user4,
  },
  {
    title: "Riche Luxury Mansion",
    location: "St.Constitution Drive, West",
    img: user5,
  },
];
const AddProperty = ({ handleSelectProperty, onClose }) => {
  return (
    <StyledChatModal>
      <strong className="title">Add properties</strong>
      <ChatModalContent>
        <UploadDocumentWrapper>
          <ul>
            {AddPropertyData.map((elem, ind) => (
              <li key={ind}>
                <div className="addpeopleWrapper">
                  <div className="profileInfo">
                    <figure className="imageWrapper-property">
                      <Image
                        src={elem.img}
                        alt="user"
                        width={113}
                        height={113}
                      />
                    </figure>
                    <div className="text">
                      <strong className="strong-title">{elem.title}</strong>
                      <div className="address">
                        <Image src={location} alt="location" />
                        <span
                          className="address-location"
                          title={elem.location}
                        >
                          {elem.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="success"
                    width="102px"
                    onClick={() => {
                      handleSelectProperty(elem);
                      onClose();
                    }}
                  >
                    <MdAdd size="22" />
                    Add
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </UploadDocumentWrapper>
      </ChatModalContent>
    </StyledChatModal>
  );
};

export default AddProperty;
