import { View, StyleSheet } from "react-native";
import { use, useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ScreenWrapper from "./src/screen/ScreenWrapper";
import Layout from "./src/components/Layout";
import LoggenIn from "./src/login/LoggedIn";
import LoginScreen from "./src/login/LoginScreen";
import RegisterScreen from "./src/login/RegisterScreen";
import { ChatProvider } from "./src/components/Context";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AnimatedCircle from "./src/screen/AnimatedCircle";
import { useChat } from "./src/components/Context";

function AppContent() {
  const [selectedTab, setSelectedTab] = useState("Tareas");
  const [currentRoute, setCurrentRoute] = useState(null);
  const { user, setUser, selectedChat, screen, setScreen, setIsLoading } =
    useChat();

  const verificarUsuario = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setScreen("main");
      } else {
        setScreen("welcome");
      }
    } catch (error) {
      console.error("Error al cargar usuario: ", error);
      setScreen("welcome");
    } finally {
      setIsLoading(false);
    }
  };

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
            <AnimatedCircle onFinish={verificarUsuario} />
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
              // onLoginSuccess={() => setScreen("main")}
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
          <Layout
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            selectedChat={selectedChat}
            onLogout={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
              setScreen("welcome");
            }}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />
        );
      default:
        return null;
    }
  };
  return renderContent();
}

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider style={stylesApp.contenedor}>
        <ChatProvider>
          <AppContent />
        </ChatProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const stylesApp = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
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
