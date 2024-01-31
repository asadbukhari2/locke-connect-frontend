import React, { useMemo, useState } from "react";
import {
  ChatModalContent,
  StyledChatModal,
  UploadDocumentWrapper,
} from "./ChatModal.styles";
import Image from "next/image";
import Button from "@/components/Button";
import { MdAdd } from "react-icons/md";
import peoplesService from "@/services/peoples";
import Loaders from "@/components/Loaders";
import { NoRecordFound } from "@/components/NoRecordFound/NoRecord.styles";

const ShareContact = ({ handleSelectContact, onClose }) => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 100,
    startDate: "",
    endDate: "",
    filterText: "",
  });
  const { peoples_data, peoples_loading } =
    peoplesService.GetPeoples(searchQuery);

  const { peoples } = useMemo(() => {
    return {
      peoples: peoples_data?.peoples?.map((itm) => ({
        id: itm?.id,
        name: itm.displayName,
        License: itm?.licenseNumber,
        contactimg: itm?.photoURL,
        ...itm,
      })),
      totalCount: peoples_data?.totalItems,
    };
  }, [peoples_data]);

  return (
    <StyledChatModal>
      <strong className="title">Share Contact</strong>
      <ChatModalContent>
        <UploadDocumentWrapper>
          <ul>
            {peoples_loading ? (
              <Loaders loading={peoples_loading} height={100} />
            ) : peoples?.length ? (
              peoples.map((elem) => (
                <li key={elem.id}>
                  <div className="addpeopleWrapper">
                    <div className="profileInfo">
                      <figure className="imageWrapper">
                        <Image
                          src={elem.contactimg}
                          alt="user"
                          width={64}
                          height={64}
                        />
                      </figure>
                      <div className="text">
                        <strong className="strong-title">{elem.name}</strong>
                        <p>License : #{elem.License}</p>
                      </div>
                    </div>
                    <Button
                      variant="success"
                      width="102px"
                      onClick={() => {
                        handleSelectContact(elem);
                        onClose();
                      }}
                    >
                      <MdAdd size="22" />
                      Add
                    </Button>
                  </div>
                </li>
              ))
            ) : (
              <NoRecordFound>No Agents Found</NoRecordFound>
            )}
          </ul>
        </UploadDocumentWrapper>
      </ChatModalContent>
    </StyledChatModal>
  );
};

export default ShareContact;
