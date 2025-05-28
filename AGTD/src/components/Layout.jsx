import { StyleSheet, View } from "react-native";

import Main from "./Main";
import NavigationHeader from "./Navigationheader";

export default function Layout({
  selectedTab,
  setSelectedTab,
  selectedChat,
  setIsLoggedIn,
  onLogout,
  currentRoute,
  setCurrentRoute,
}) {
  const mostrarHeader = currentRoute !== "Chat";
  return (
    <View style={styles.contenedor}>
      <Main
        selectedTab={selectedTab}
        // setSelectedTab={setSelectedTab}
        selectedChat={selectedChat}
        setIsLoggedIn={setIsLoggedIn}
        onLogout={onLogout}
        setCurrentRoute={setCurrentRoute}
      />
      {mostrarHeader && (
        <NavigationHeader
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
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
