import React, { useEffect } from "react";

import { createContextHook, useContextHook } from "use-context-hook";
import { connectToServer, socketServer } from "@/utils/socketServerConnection";
import { AuthContext } from "./authContext";

const context = {};

export const SocketContext = createContextHook(context);

export function SocketContextProvider(props) {
  const { isLoggedIn, user } = useContextHook(AuthContext, [
    "isLoggedIn",
    "user",
  ]);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        connectToServer(user);
      }, 1000);
    }

    return () => {
      if (socketServer()) {
        socketServer().off("connect");
        socketServer().off("disconnect");
        socketServer().off();
      }
    };
  }, [isLoggedIn, user]);

  return (
    <SocketContext.Provider value={{ socketServer: socketServer() }}>
      {props.children}
    </SocketContext.Provider>
  );
}
