import React from "react";
import { FactsDetail } from "./HomeDetails.styles";

const HomeDetails = ({}) => {
  return (
    <FactsDetail>
      <strong className="heading">Home Details</strong>
      <div className="holder">
        <div className="column">
          <div className="box">
            <strong className="subtitle">Appliances</strong>
            <ul className="list">
              <li>
                <span className="text">Dishwasher</span>
              </li>
              <li>
                <span className="text">Drayer</span>
              </li>
              <li>
                <span className="text">Refrigerator</span>
              </li>
              <li>
                <span className="text">Stove/Range</span>
              </li>
              <li>
                <span className="text">Washer</span>
              </li>
            </ul>
          </div>
          <div className="box">
            <strong className="subtitle">Flooring</strong>
            <ul className="list">
              <li>
                <span className="text">Hardwood</span>
              </li>
              <li>
                <span className="text">Vinyl</span>
              </li>
              <li>
                <span className="text">Carpet</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <strong className="subtitle">Interior</strong>
            <ul className="list">
              <li>
                <span className="text">Hardwood</span>
              </li>
              <li>
                <span className="text">Wall to wall carpet</span>
              </li>
              <li>
                <span className="text">Double Pane/Strorm Window</span>
              </li>
              <li>
                <span className="text">Dining Room</span>
              </li>
              <li>
                <span className="text">Fireplace</span>
              </li>
            </ul>
          </div>
          <div className="box">
            <strong className="subtitle">Bathroom</strong>
            <ul className="list">
              <li>
                <span className="text">1 Full bath</span>
              </li>
              <li>
                <span className="text">1 Half bath</span>
              </li>
              <li>
                <span className="text">2 Baths</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <strong className="subtitle">Fireplace</strong>
            <ul className="list">
              <li>
                <span className="text">Has Fireplace</span>
              </li>
              <li>
                <span className="text">Using Gas Only</span>
              </li>
              <li>
                <span className="text">1 Fireplace</span>
              </li>
            </ul>
          </div>
          <div className="box">
            <strong className="subtitle">Heating & Cooling</strong>
            <ul className="list">
              <li>
                <span className="text">Cooling available</span>
              </li>
              <li>
                <span className="text">Water Heater</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FactsDetail>
  );
};

export default HomeDetails;
