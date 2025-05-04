import React from "react";
import { View, StyleSheet } from "react-native";

import HeaderHome from "./HeaderHome";
import Main from "./Main";
import NavigationHeader from "./Navigationheader";

export default function Layout({
  selectedTab,
  setSelectedTab,
  selectedChat,
  setIsLoggedIn,
  onLogout
}) {
  return (
    <View style={styles.contenedor}>
      <HeaderHome />
      <Main
        selectedTab={selectedTab}
        selectedChat={selectedChat}
        setIsLoggedIn={setIsLoggedIn}
        onLogout={onLogout}
      />
      <NavigationHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    // backgroundColor: "#F5F5F5",
  },
});
