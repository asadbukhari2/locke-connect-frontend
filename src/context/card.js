import { useState } from 'react';
import { createContextHook } from 'use-context-hook';

const context = {};

export const MyContext = createContextHook(context);

export const MyContextProvider = ({ children }) => {
  const [cardVal, setCardVal] = useState(1);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  console.log({ tabs, activeTab });
  const contextValue = {
    cardVal,
    setCardVal,
    tabs,
    setTabs,
    activeTab,
    setActiveTab,
  };
  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};
