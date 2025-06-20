import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet } from "react-native";

import logo from "./assets/logo/Group23.png";
import Vector3 from "./assets/img/Vector3.png";

import Layout from "./src/components/Layout";
import LoggenIn from "./src/components/login/LoggedIn";
import LoginScreen from "./src/components/screen/LoginScreen";
import RegisterScreen from "./src/components/screen/RegisterScreen";

import Modal from "./pruebas/modal";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Tareas");
  const [selectedChat, setSelectedChat] = useState("chat_001");
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState("splash");
  const [currentRoute, setCurrentRoute] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // primero desactiva la carga
    }, 4000);

    return () => clearTimeout(timer); // limpia si el componente se desmonta
  }, []);

  useEffect(() => {
    if (!isLoading && screen === "splash") {
      setScreen("welcome"); // cambia después de que se haya terminado de cargar
    }
  }, [isLoading]);

  const delayScreenChange = (nextScreen, delay = 1000) => {
    setIsLoading(true);
    setTimeout(() => {
      setScreen(nextScreen);
      setIsLoading(false);
    }, delay);
  };

  const renderContent = () => {
    switch (screen) {
      case "splash":
        return (
          <View style={stylesApp.contentLogo}>
            <Text style={stylesApp.text}>Bienvenido a AGT</Text>
            <Image source={Vector3} style={stylesApp.vector3} />
          </View>
        );

      case "welcome":
        return (
          <LoggenIn
            setIsLoggedIn={() => delayScreenChange("login")}
            goToRegister={() => delayScreenChange("register")}
          />
        );

      case "login":
        return (
          <LoginScreen
            onLoginSuccess={() => setScreen("main")}
            onGoBack={() => setScreen("welcome")}
            goToRegister={() => setScreen("register")}
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
            <Layout
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              onLogout={() => setScreen("welcome")}
              currentRoute={currentRoute}
              setCurrentRoute={setCurrentRoute}
            />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <SafeAreaProvider style={stylesApp.contenedor}>
      {renderContent()}
      {/* <Modal /> */}
    </SafeAreaProvider>
  );
}

const stylesApp = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#0099FF",
  },
  contentLogo: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    top: "40%",
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 280,
    height: 300,
    marginTop: 50,
    resizeMode: "contain",
  },
  vector3: {
    position: "absolute",
    width: "100%",
    height: "40%",
    bottom: 0,
    resizeMode: "cover",
  },
});
