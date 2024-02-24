import { useMemo, useState } from 'react';
import { createContextHook } from 'use-context-hook';

const context = {};

export const MyContext = createContextHook(context);

export const MyContextProvider = ({ children }) => {
  const [cardVal, setCardVal] = useState(1);
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [currentTab, setCurrentTab] = useState(null);

  const contextValue = useMemo(
    () => ({
      cardVal,
      setCardVal,
      tabs,
      setTabs,
      activeTab,
      setActiveTab,
      currentTab,
      setCurrentTab,
    }),
    [tabs, activeTab, currentTab],
  );
  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};
