import React from "react";
import { TabContent } from "./AllTabsContent.styles";


function AllTabsContent() {
  return (
    <TabContent>
      <ul className="list">
        <li>
          <div className="left-box">
            <span className="count">01</span>
            <strong className="heading">Jane Addams Middle School</strong>
          </div>
          <div className="list-box">
            <span className="text">Public</span>
            <span className="text">6-8</span>
            <span className="text">0.2mi</span>
          </div>
        </li>
        <li>
          <div className="left-box">
            <span className="count">02</span>
            <strong className="heading">Nathan Hale High School</strong>
          </div>
          <div className="list-box">
            <span className="text">Public</span>
            <span className="text">6-8</span>
            <span className="text">0.2mi</span>
          </div>
        </li>
        <li>
          <div className="left-box">
            <span className="count">03</span>
            <strong className="heading">Jane Addams Middle School</strong>
          </div>
          <div className="list-box">
            <span className="text">Public</span>
            <span className="text">6-8</span>
            <span className="text">0.2mi</span>
          </div>
        </li>
        <li>
          <div className="left-box">
            <span className="count">04</span>
            <strong className="heading">Nathan Hale High School</strong>
          </div>
          <div className="list-box">
            <span className="text">Public</span>
            <span className="text">6-8</span>
            <span className="text">0.2mi</span>
          </div>
        </li>
        <li>
          <div className="left-box">
            <span className="count">05</span>
            <strong className="heading">Jane Addams Middle School</strong>
          </div>
          <div className="list-box">
            <span className="text">Public</span>
            <span className="text">6-8</span>
            <span className="text">0.2mi</span>
          </div>
        </li>
      </ul>
    </TabContent>
  );
}

export default AllTabsContent;
