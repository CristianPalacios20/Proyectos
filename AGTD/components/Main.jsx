import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Tareas from "./screen/Tareas";
import Archivos from "./screen/Archivos";
import Ajustes from "./screen/Ajustes";

const chatData = require('./json/ArchJson.json');

export default function Main({ selectedTab, selectedChat }) {
  const [dataChats, setDataChats] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      if(chatData && chatData.chats){
        setDataChats(chatData.chats);
      }
      setIsloading(false);
    }, 2000)
  }, [selectedChat]);
  const renderContent = () => {
    switch (selectedTab) {
      case "Tareas":
        return <Tareas data={dataChats} isLoading={isLoading}/>;
      case "Archivos":
        return <Archivos />;
      case "Ajustes":
        return <Ajustes />;
      default:
        return <Tareas />;
    }
  };
  return <ScrollView style={stylesMain.content}>{renderContent()}</ScrollView>;
}

const stylesMain = StyleSheet.create({
  content: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
