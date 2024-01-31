import React, { useState } from "react";
import { TabsList, TabButton, TabContent } from "./TabsSet.styles";

const TabsSet = ({ tabs, todayRate, responsive }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabsList $todayRate={todayRate}>
        {tabs.map((tab, index) => (
          <TabButton
            $responsive={responsive}
            $todayRate={todayRate}
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsList>
      {tabs.map((tab, index) => (
        <TabContent key={index} isActive={index === activeTab}>
          {tab.content}
        </TabContent>
      ))}
    </div>
  );
};

export default TabsSet;
