import { AuthContext } from "@/context/authContext";
import { setMessages } from "@/features/messageSlice";
import { socketServer } from "@/utils/socketServerConnection";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContextHook } from "use-context-hook";

const ChatComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [localMessages, setLocalMessages] = useState([]);
  const [sendto, setSendTo] = useState([]);

  const [inputMessage, setInputMessage] = useState("");
  const socket = socketServer();

  const dispatch = useDispatch();

  const { user } = useContextHook(AuthContext, ["user"]);

  const online = useSelector((state) => state.onlineUsers);
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    setLocalMessages(message);
    return () => {
      setLocalMessages([]);
    };
  }, [message]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const message = {
        from: user.id,
        to: sendto.map((_) => _.userId),
        text: inputMessage,
        type: "text",
      };

      socket.emit("direct-message", message);

      dispatch(setMessages([...localMessages, message]));

      setInputMessage("");
    }
  };

  console.log(sendto);
  const addUserToSendTo = (user) => {
    // Check if user is already in sendTo array
    const isUserInSendTo = sendto.find(
      (existingUser) => existingUser.userId === user.userId
    );

    // If user is not in sendTo, add them
    if (!isUserInSendTo) {
      setSendTo((prev) => [...prev, user]);
    }
  };

  return (
    <div>
      <div>
        <h2>Online Users:</h2>
        <ul>
          {online?.map((user) => (
            <li
              style={{ cursor: "pointer" }}
              key={user.userId}
              onClick={() => {
                addUserToSendTo(user);
                setLocalMessages([]);
              }}
            >
              {user.displayName}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Chat localMessages:</h2>

        <div
          style={{
            border: "1px solid #ccc",
            minHeight: "200px",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>{sendto.map((_) => _.displayName)}</h3>
          </div>
          <div>
            {localMessages?.map((message, index) => (
              <div key={index}>
                <strong>
                  {/* {message.from === user.id ? "me" : selectedChat.displayName}: */}
                </strong>{" "}
                {message.text}
              </div>
            ))}
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter your message"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={handleSendMessage} disabled={sendto.length < 1}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
