/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import TableLayout from "../TableLayout";
import Table from "../Table";
import Image from "next/image";
import deleteIcon from "../../../public/delete-icon.svg";
import heartIcon from "../../../public/heart-icon.svg";
import chatIcon from "../../../public/chat-icon.svg";
import shareIcon from "../../../public/share-icon.svg";
import crownIcon from "../../../public/crown-icon.svg";
import img01 from "../../../public/img05.png";
import Button from "../Button";

function MySavedPeople() {
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    startDate: "",
    endDate: "",
  });

  const actionBtns = () => (
    <div className="actionBtnList">
      <li>
        <Button sm variant="danger">
          <Image src={heartIcon} alt="img" />
        </Button>
      </li>
      <li>
        <Button outline>
          <Image src={shareIcon} alt="img" />
        </Button>
      </li>
      <li>
        <Button outline>
          <Image src={chatIcon} alt="img" />
        </Button>
      </li>
      <li>
        <Button outline>
          <Image src={deleteIcon} alt="img" />
        </Button>
      </li>
      <li>
        <Button sm outline>
          View Profile
        </Button>
      </li>
    </div>
  );

  const rows = [
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Mandy Hartmann</strong>
          <span className="subtitle">License : #0125465</span>
        </div>
      </div>,
      "March 2023",
      <div className="agentType">
        <Image src={crownIcon} width="24" alt="img" />
        Real estate agent
      </div>,
      actionBtns(),
    ],
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Mandy Hartmann</strong>
          <span className="subtitle">License : #0125465</span>
        </div>
      </div>,
      "March 2023",
      <div className="agentType">
        <Image src={crownIcon} width="24" alt="img" />
        Contractor
      </div>,
      actionBtns(),
    ],
    [
      <div className="info-box">
        <div className="img-box">
          <Image src={img01} alt="img" />
        </div>
        <div className="text-box">
          <strong className="title">Mandy Hartmann</strong>
          <span className="subtitle">License : #0125465</span>
        </div>
      </div>,
      "March 2023",
      <div className="agentType">
        <Image src={crownIcon} width="24" alt="img" />
        Loan Agent
      </div>,
      actionBtns(),
    ],
  ];

  const columnNames = [
    "Property And Location",
    "Joined Since",
    "Agent Type",
    "",
  ];

  return (
    <>
      <TableLayout
        title="My Saved People"
        currentPage={searchQuery.page}
        totalCount={totalCount ?? 0}
        pageSize={searchQuery.pageSize}
        noNegativeMargin
      >
        <Table
          loading={loading}
          columnNames={columnNames}
          rowsData={rows}
          noPadding
        />
      </TableLayout>
    </>
  );
}

export default MySavedPeople;
