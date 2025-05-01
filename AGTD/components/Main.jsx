import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Tareas from "./screen/Tareas";
import Archivos from "./screen/Archivos";
import Ajustes from "./screen/Ajustes";

const chatData = require("./json/ArchJson.json");

export default function Main({ selectedTab, selectedChat, onLogout }) {
  const [dataChats, setDataChats] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (chatData && chatData.chats) {
        setDataChats(chatData.chats);
      }
      setIsloading(false);
    }, 2000);
  }, [selectedChat]);
  const renderContent = () => {
    switch (selectedTab) {
      case "Tareas":
        return (
          <Tareas
            data={dataChats}
            isLoading={isLoading}
            
          />
        );
      case "Archivos":
        return <Archivos />;
      case "Ajustes":
        return <Ajustes onLogout={onLogout}/>;
      default:
        return <Tareas />;
    }
  };
  return <View style={stylesMain.content}>{renderContent()}</View>;
}

const stylesMain = StyleSheet.create({
  content: {
    flex: 1,
    // borderWidth: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
