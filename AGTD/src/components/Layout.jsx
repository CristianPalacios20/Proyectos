import { StyleSheet, View } from "react-native";

import Main from "./Main";

export default function Layout({
  selectedTab,
  setSelectedTab,
  selectedChat,
  setIsLoggedIn,
  onLogout,
  currentRoute,
  setCurrentRoute,
  onLoginSuccess
}) {
  const mostrarHeader = currentRoute !== "Chat";
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
