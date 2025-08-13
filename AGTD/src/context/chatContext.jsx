import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

// const tareasData = require("../../json/Tareas.json");

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [dataChats, setDataChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState("chat_001");

  useEffect(() => {
    fetch("http://192.168.1.3/proyectoEnReact-Backend/backend/back-end-AGT/chats.php")
      .then((responde) => responde.json())
      .then((data) => {
        if (data.success) {
          setDataChats(data.data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener tareas", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <ChatContext.Provider
      value={{
        dataChats,
        setDataChats,
        isLoading,
        setIsLoading,
        selectedChat,
        setSelectedChat,
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
