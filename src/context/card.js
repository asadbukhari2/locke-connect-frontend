import { useState } from "react";
import { createContextHook } from "use-context-hook";

const context = {};

export const MyContext = createContextHook(context);

export const MyContextProvider = ({ children }) => {
  const [cardVal, setCardVal] = useState(1);

  const contextValue = {
    cardVal,
    setCardVal,
  };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
