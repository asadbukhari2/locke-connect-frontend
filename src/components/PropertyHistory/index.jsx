import React from "react";
import { HistoryCol } from "./PropertyHistory.styles";

const PropertyHistory = () => {
  return (
    <HistoryCol>
      <strong className="heading">Property History</strong>
      <div className="holder">
        <div className="info-box">
          <div className="text-box">
            <strong className="date">
              Nov 09, 2023
              <span className="state">Active</span>
            </strong>
            <span className="number">NWML #2177914</span>
          </div>
          <strong className="price">$1,649,000</strong>
        </div>
      </div>
    </HistoryCol>
  );
};

export default PropertyHistory;
