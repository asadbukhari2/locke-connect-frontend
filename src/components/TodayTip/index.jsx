import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TipColumn } from "./TodayTip.styles";
import Modal from "../Modal";
import TodayRateModal from "../TodayRateModal";

function TodayTip({ heading, setRateModal }) {
  return (
    <>
      <TipColumn>
        <strong className="title">Todays Tips</strong>
        <strong className="heading">{heading}</strong>
        <button
          className="view-all"
          type="button"
          onClick={() => setRateModal(true)}
        >
          View Todays Rate <IoIosArrowRoundForward size="25" className="ico" />
        </button>
      </TipColumn>
    </>
  );
}

export default TodayTip;
