import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Main from "./Main";
import IAbtn from "./IAbtn";
import ModalMenu from "../screen/ModalMenu";

export default function Layout({
  selectedTab,
  setSelectedTab,
  selectedChat,
  setIsLoggedIn,
  onLogout,
  currentRoute,
  setCurrentRoute,
  onLoginSuccess,
}) {
  const mostrarHeader = currentRoute !== "Chat";
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

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
      />
      <IAbtn />
      {modalVisible && <ModalMenu closeModal={closeModal}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
