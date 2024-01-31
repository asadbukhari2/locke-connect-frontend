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
import Toast from "@/components/Toast";
// import { Fetch } from "@/helpers/fetchWrapper";
// import { useSelector } from "react-redux";

const AddPeople = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 100,
    startDate: "",
    endDate: "",
    filterText: "",
  });

  // const { currentConversation } = useSelector((state) => state.chat);

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

  const handleClick = async (elem) => {
    setLoading(true);
    try {
      // await peoplesService.addPeopleToConversation(currentConversation._id, {
      //   userId: elem.id,
      // });
      setLoading(false);
      Toast({ type: "success", message: "Done" });
      onClose();
    } catch (error) {
      setLoading(false);
      onClose();
      Toast({ type: "error", message: "Error while adding people in chat" });
    }
  };

  return (
    <StyledChatModal>
      <strong className="title">Add people</strong>
      <ChatModalContent>
        <UploadDocumentWrapper>
          <ul>
            {peoples_loading ? (
              <span>loading...</span>
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
                      onClick={() => handleClick(elem)}
                    >
                      <MdAdd size="22" />
                      Add
                    </Button>
                  </div>
                </li>
              ))
            ) : (
              <span>No Record Found</span>
            )}
          </ul>
        </UploadDocumentWrapper>
      </ChatModalContent>
    </StyledChatModal>
  );
};

export default AddPeople;
