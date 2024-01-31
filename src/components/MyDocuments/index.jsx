import React, { useMemo, useRef, useState } from "react";
import TableLayout from "../TableLayout";
import Table from "../Table";
import Image from "next/image";
import downloadIcon from "../../../public/download-icon.svg";
import deleteIcon from "../../../public/delete-icon.svg";
import { FiPlus } from "react-icons/fi";
import PropertySelect from "../DropDown/PropertyDropDown";
import Button from "../Button";
import Modal from "../Modal";
import { DocumentType } from "../Constants";
import ModalDelete from "../ModalDelete";
import { ButtonWrapp } from "./MyDocuments.styles";
import userService from "@/services/auth";
import Toast from "../Toast";
import peoplesService from "@/services/peoples";
import { AuthContext } from "@/context/authContext";
import { useContextHook } from "use-context-hook";
import { getFileType } from "@/helpers/common";

function MyDocuments() {
  const fileInputRef = useRef(null);
  const { refetch, setRefetch } = useContextHook(AuthContext, [
    "refetch",
    "setRefetch",
  ]);
  const [photos, setPhotos] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    startDate: "",
    endDate: "",
    filterText: "",
  });

  const { documents_data, documents_loading } = peoplesService.GetDocuments(
    searchQuery,
    refetch
  );

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const uploadDocument = async (event) => {
    const file = event?.target?.files[0];
    if (!file) {
      Toast({
        type: "error",
        message: "Kindly upload a file",
      });
      return;
    }
    const allowedFileTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!allowedFileTypes.includes(file?.type)) {
      Toast({
        type: "error",
        message: "Only pdf/docx/excel files are allowed",
      });
      return;
    }
    // if (file) {
    setUploadLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await userService.uploadDocument(formData);
      setUploadLoading(false);
      Toast({ type: "success", message: res?.message });
      setRefetch();
    } catch (error) {
      console.log({ error });
      setUploadLoading(false);
      Toast({
        type: "error",
        message: error?.message || "Something Went Wrong",
      });
    }
  };

  const deleteDocument = async (id) => {
    setDeleteLoading(true);
    try {
      const res = await peoplesService.deleteDocument(id);
      setDeleteLoading(false);
      Toast({ type: "success", message: res?.message });
      setRefetch();
    } catch (error) {
      console.log({ error });
      setDeleteLoading(false);
      Toast({
        type: "error",
        message: error?.message || "Something Went Wrong",
      });
    }
  };

  const handleDownload = async (itm) => {
    try {
      // setDownloading(true);

      window.open(itm?.url, "_blank");
      // // const response = await fetch(itm?.url);
      // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      // const response = await axios.get(itm?.url, {
      //   responseType: 'blob',
      // });

      // const blob = new Blob([response.data], { type: response.headers['content-type'] });

      // const link = document.createElement('a');
      // link.href = window.URL.createObjectURL(blob);
      // link.download = `sss${itm?.file_name}`; // Set a custom file name here
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);

      // setDownloading(false);
      Toast({ type: "success", message: "File downloaded successfully" });
    } catch (error) {
      setDownloading(false);
      Toast({
        type: "error",
        message: error?.message || "Error downloading file",
      });
    }
  };

  const actionBtns = (itm) => (
    <div className="actionBtnList">
      <li>
        <Button
          outline
          onClick={() => {
            handleDownload(itm);
          }}
        >
          <Image src={downloadIcon} alt="img" />
        </Button>
      </li>
      <li>
        <Button
          outline
          onClick={() => {
            deleteDocument(itm?.id);
          }}
          loader={deleteLoading}
          disabled={deleteLoading}
        >
          <Image src={deleteIcon} alt="img" />
        </Button>
      </li>
    </div>
  );

  const columnNames = ["Document Type", "Name", "Upload Date / Time", ""];
  const FilterBtns = () => (
    <>
      <PropertySelect
        className="selectProfile"
        title="Document Type"
        option={DocumentType}
        onChange={(val) => console.log(val, "val")}
      />
      <ButtonWrapp>
        <label htmlFor="upload_doc" onClick={handleButtonClick}>
          <Button
            width="200px"
            sm
            disable={uploadLoading}
            loader={uploadLoading}
          >
            <FiPlus />
            Upload A Document
          </Button>
        </label>
        <input
          ref={fileInputRef}
          type="file"
          id="upload_doc"
          onChange={uploadDocument}
        />
      </ButtonWrapp>
      <Button width="200px" variant="success" sm>
        I Need a Loan
      </Button>
    </>
  );
  const { documents, totalCount } = useMemo(() => {
    return {
      documents: documents_data?.items?.map((itm) => [
        getFileType(itm?.doc_type),
        itm?.file_name,
        itm?.date ? `${itm?.date} at ${itm?.time}` : "--",
        actionBtns(itm),
      ]),
      totalCount: documents_data?.totalItems,
    };
  }, [documents_data]);
  return (
    <>
      <Modal open={photos} setOpen={setPhotos} width="500px">
        <ModalDelete setOpen={setPhotos} />
      </Modal>
      <TableLayout
        title="My Documents"
        filterBtns={FilterBtns}
        currentPage={searchQuery.page}
        totalCount={totalCount ?? 0}
        pageSize={searchQuery.pageSize}
        noNegativeMargin
      >
        <Table
          loading={documents_loading}
          columnNames={columnNames}
          rowsData={documents}
          noPadding
        />
      </TableLayout>
    </>
  );
}

export default MyDocuments;
