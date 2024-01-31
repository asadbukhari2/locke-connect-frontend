import { AuthContext } from "@/context/authContext";
import { socketServer } from "@/utils/socketServerConnection";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContextHook } from "use-context-hook";

const TypingNotify = () => {
  const [isTyping, setIsTyping] = useState(false);
  const { currentConversation } = useSelector((state) => state.chat);
  const { user } = useContextHook(AuthContext, ["user"]);
  const socket = socketServer();
  const oid = currentConversation?.participants.find((id) => id !== user.id);

  useEffect(() => {
    if (socket) {
      const handleTyping = (data) => {
        if (data.from === oid) setIsTyping(true);
      };

      const handleTypingEnd = (data) => {
        if (data.from === oid) setIsTyping(false);
      };

      socket.on("typing", handleTyping);
      socket.on("typing-end", handleTypingEnd);

      return () => {
        socket.off("typing", handleTyping);
        socket.off("typing-end", handleTypingEnd);
      };
    }
  }, [socket, currentConversation, user.id]);

  return <>{isTyping && `${currentConversation.channelName} is typing...`}</>;
};

export default React.memo(TypingNotify);
