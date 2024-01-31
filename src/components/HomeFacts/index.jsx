import React from "react";
import { FactsDetail } from "./HomeFacts.styles";

const HomeFacts = ({}) => {
  return (
    <FactsDetail>
      <strong className="heading">Home Facts</strong>
      <div className="holder">
        <div className="wrap">
          <strong className="subtitle">Listing</strong>
          <ul className="list">
            <li>
              <span className="text">status</span>
              <span className="text">active</span>
            </li>
            <li>
              <span className="text">listed</span>
              <span className="text">2 days ago</span>
            </li>
            <li>
              <span className="text">property type</span>
              <span className="text">Home</span>
            </li>
          </ul>
        </div>
        <div className="wrap">
          <strong className="subtitle">Property</strong>
          <ul className="list">
            <li>
              <span className="text">Year built</span>
              <span className="text">1948</span>
            </li>
            <li>
              <span className="text">Style</span>
              <span className="text">-</span>
            </li>
            <li>
              <span className="text">Community</span>
              <span className="text">Meadowbrook</span>
            </li>
            <li>
              <span className="text">Lot size</span>
              <span className="text">7,740 sq ft</span>
            </li>
            <li>
              <span className="text">MLS#</span>
              <span className="text">2179825</span>
            </li>
          </ul>
        </div>
        <div className="wrap">
        <strong className="subtitle">Property</strong>
          <ul className="list">
            <li>
              <span className="text">Year built</span>
              <span className="text">1948</span>
            </li>
            <li>
              <span className="text">Style</span>
              <span className="text">-</span>
            </li>
            <li>
              <span className="text">Community</span>
              <span className="text">Meadowbrook</span>
            </li>
            <li>
              <span className="text">Lot size</span>
              <span className="text">7,740 sq ft</span>
            </li>
            <li>
              <span className="text">MLS#</span>
              <span className="text">2179825</span>
            </li>
          </ul>
        </div>
      </div>
    </FactsDetail>
  );
};

export default HomeFacts;
