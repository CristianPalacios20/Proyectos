import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Layout from "./components/Layout";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image } from "react-native-animatable";

import logo from "./assets/logo/logo-icon-transparent.png";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Tareas");
  const [selectedChat, setSelectedChat] = useState("chat_001");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1 segundo de retraso
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={stylesApp.contenedor} edges={["top"]}>
        {isLoading ? (
          <View style={stylesApp.contentLogo}>
            <Text style={stylesApp.text}>
              Bienvenidos a AGT<Text style={{ color: "#28a3f6" }}>D</Text>
            </Text>
            <Image style={stylesApp.image} source={logo} />
          </View>
        ) : (
          <>
            <StatusBar
              style="dark"
              backgroundColor="#fff"
              translucent={false}
            />
            <Layout
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          </>
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const stylesApp = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
  },

  contentLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 30,
  },
  image: {
    height: 120,
    width: 120,
    // marginTop: 20,
    resizeMode: "contain",
  },
});
