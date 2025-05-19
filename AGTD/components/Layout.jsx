import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView  style={styles.contenedor}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    // backgroundColor: "#F5F5F5",
  },
});
