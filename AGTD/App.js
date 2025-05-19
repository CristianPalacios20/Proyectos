import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet } from "react-native";

import logo from "./assets/logo/logo-icon-transparent.png";

import Layout from "./components/Layout";
import LoggenIn from "./components/login/LoggedIn";
import LoginScreen from "./components/screen/LoginScreen";
import RegisterScreen from "./components/screen/RegisterScreen";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Tareas");
  const [selectedChat, setSelectedChat] = useState("chat_001");
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState("splash");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // primero desactiva la carga
    }, 2000);

    return () => clearTimeout(timer); // limpia si el componente se desmonta
  }, []);

  useEffect(() => {
    if (!isLoading && screen === "splash") {
      setScreen("welcome"); // cambia después de que se haya terminado de cargar
    }
  }, [isLoading]);

  const renderContent = () => {
    switch (screen) {
      case "splash":
        return (
          <View style={stylesApp.contentLogo}>
            <Text style={stylesApp.text}>
              Bienvenidos a AGT<Text style={{ color: "#28a3f6" }}>D</Text>
            </Text>
            <Image style={stylesApp.image} source={logo} />
          </View>
        );

      case "welcome":
        return (
          <LoggenIn
            setIsLoggedIn={() => setScreen("login")}
            goToRegister={() => setScreen("register")}
          />
        );

      case "login":
        return (
          <LoginScreen
            onLoginSuccess={() => setScreen("main")}
            onGoBack={() => setScreen("welcome")}
          />
        );

      case "register":
        return (
          <RegisterScreen
            onRegisterSuccess={() => setScreen("main")}
            onGoBack={() => setScreen("welcome")}
          />
        );

      case "main":
        return (
          <>
            <StatusBar style="dark" />
            <Layout
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              onLogout={() => setScreen("welcome")}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <View style={stylesApp.contenedor} >
      {renderContent()}
    </View>
  );
}

const stylesApp = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
    height: 220,
    transform: [{ rotate: "-140deg" }],
    marginTop: 50,
    resizeMode: "contain",
  },
});
