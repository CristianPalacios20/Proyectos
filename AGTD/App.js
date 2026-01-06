import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ScreenWrapper from "./src/screen/ScreenWrapper";
import Layout from "./src/components/Layout";
import LoggenIn from "./src/login/LoggedIn";
import LoginScreen from "./src/login/LoginScreen";
import RegisterScreen from "./src/login/RegisterScreen";
import RecuperarContrasena from "./src/screen/validarCorreo";
import ResetearContrasena from "./src/screen/verificarCodigo";
import CrearContrasena from "./src/screen/cambiarContrasena";
import AppProvider from "./src/context/AppProvider";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screen/Splash";
import { useAuth } from "./src/context/AuthContext";

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState(null);
  const {
    setUser,
    screen,
    setScreen,
    setIsLoading,
    verificarUsuario,
  } = useAuth();

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
            <Splash
              onFinish={async () => {
                const usuario = await verificarUsuario(); // se lee de AsyncStore
                if (usuario) {
                  setScreen("layout"); // 👍 Si está logueado -> se va a layout
                } else {
                  setScreen("welcome"); // 👎 Sino a -> welcome
                }
              }}
            />
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

      case "layout":
        return (
          <Layout
            onLogout={async () => {
              await AsyncStorage.removeItem("user");
              setUser(null);
              setScreen("welcome");
            }}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
          />
        );
      case "recuperarContrasena":
        return <RecuperarContrasena />;
      case "resetearContrasena":
        return <ResetearContrasena />;
      case "crearContrasena":
        return <CrearContrasena />;
      default:
        return null;
    }
  };
  return renderContent();
}

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider style={stylesApp.contenedor}>
        <AppProvider>
          <AppContent />
        </AppProvider>
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
