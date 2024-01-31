import React from "react";
import TabsSet from "../TabsSet";
import LoanProduct from "../LoanProduct";
import { StyleRateModal } from "./TodayRateModal.styles";

const tabs = [
  { label: "Loan Products & Todays Rate", content: <LoanProduct /> },
  { label: "Easy Loan Products", content: "Easy Loan Products" },
];

function TodayRateModal() {
  return (
    <StyleRateModal>
      <TabsSet tabs={tabs} todayRate />
    </StyleRateModal>
  );
}

export default TodayRateModal;
