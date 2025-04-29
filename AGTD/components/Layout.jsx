import React from "react";
import { View, StyleSheet } from "react-native";

import HeaderHome from "./HeaderHome";
import Main from "./Main";
import Navigationheader from "./Navigationheader";

export default function Layout({selectedTab, setSelectedTab, selectedChat}) {
  return (
    <View style={styles.contenedor}>
      <HeaderHome />
      <Main selectedTab={selectedTab} selectedChat={selectedChat}/>
      <Navigationheader selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
