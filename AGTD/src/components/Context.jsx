import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
const tareasData = require("../json/Tareas.json");

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [dataChats, setDataChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState("chat_001");
   const [screen, setScreen] = useState("splash");

  useEffect(() => {
    if (tareasData?.chats) {
      setDataChats(tareasData.chats);
    }
    setIsLoading(false);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        dataChats,
        setDataChats,
        isLoading,
        setIsLoading,
        selectedChat,
        setSelectedChat,
        screen,
        setScreen,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat debe usarse dentro de ChatProvider");
  }
  return context;
};
