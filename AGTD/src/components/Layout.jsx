import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Main from "./Main";
import IAbtn from "./IAbtn";
import ModalMenu from "../screen/modals/ModalMenu";
import ModalAddparticipant from "../screen/modals/ModalAddparticipant";

import { useChat } from "./Context";

const chatData = require("../json/Tareas.json");

export default function Layout({
  selectedTab,
  setSelectedTab,
  setIsLoggedIn,
  onLogout,
  setCurrentRoute,
  onLoginSuccess,
}) {
  const {
    setDataChats,
    selectedChat,
    setSelectedChat,
    isLoading,
    setIsLoading,
  } = useChat();
  const [modalVisible, setModalVisible] = useState(null);
  const [estadoOpciones, setEstadoOpciones] = useState({
    silenciado: false,
    destacada: false,
  });

  const openModal = (type, chatId) => {
    if (chatId) setSelectedChat(chatId);
    setModalVisible(type);
  };

  const closeModal = () => setModalVisible(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        if (chatData?.[0]?.chats) {
          setDataChats(chatData?.[0]?.chats);
        }
      } catch (error) {
        console.error("Error al cargar chats: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [selectedChat]);

  return (
    <View style={styles.contenedor}>
      <Main
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        selectedChat={selectedChat}
        setIsLoggedIn={setIsLoggedIn}
        onLogout={onLogout}
        setCurrentRoute={setCurrentRoute}
        onLoginSuccess={onLoginSuccess}
        openModal={openModal}
        isLoading={isLoading}
      />
      <IAbtn />
      {modalVisible === "menu" && (
        <ModalMenu
          closeModal={closeModal}
          selectedChat={selectedChat}
          estadoOpciones={estadoOpciones}
          setEstadoOpciones={setEstadoOpciones}
        />
      )}
      {modalVisible === "participantes" && (
        <ModalAddparticipant
          closeModal={closeModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
