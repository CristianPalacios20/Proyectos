import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";

import ScreenWrapper from "./src/components/screen/ScreenWrapper";
import Layout from "./src/components/Layout";
import LoggenIn from "./src/components/login/LoggedIn";
import LoginScreen from "./src/components/screen/LoginScreen";
import RegisterScreen from "./src/components/screen/RegisterScreen";

import AnimatedCircle from "./src/components/screen/AnimatedCircle";

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
            <AnimatedCircle setScreen={setScreen} />
          </View>
        );

      case "welcome":
        return (
          <ScreenWrapper>
            <LoggenIn
              setIsLoggedIn={() => delayScreenChange("login")}
              goToRegister={() => delayScreenChange("register")}
            />
          </ScreenWrapper>
        );

      case "login":
        return (
          <ScreenWrapper>
            <LoginScreen
              onLoginSuccess={() => setScreen("main")}
              onGoBack={() => setScreen("welcome")}
              goToRegister={() => setScreen("register")}
            />
          </ScreenWrapper>
        );

      case "register":
        return (
          <ScreenWrapper>
            <RegisterScreen
              onRegisterSuccess={() => setScreen("main")}
              onGoBack={() => setScreen("welcome")}
            />
          </ScreenWrapper>
        );

      case "main":
        return (
          <ScreenWrapper>
            <Layout
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
              onLogout={() => setScreen("welcome")}
              currentRoute={currentRoute}
              setCurrentRoute={setCurrentRoute}
            />
          </ScreenWrapper>
        );
      default:
        return null;
    }
  };
  return (
    <SafeAreaProvider style={stylesApp.contenedor}>
      {renderContent()}
    </SafeAreaProvider>
  );
}

const stylesApp = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  contentLogo: {
    display: "flex",
    alignItems: "center",
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
