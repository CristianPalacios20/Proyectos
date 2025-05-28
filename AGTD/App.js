import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet } from "react-native";

import logo2 from "./assets/logo/LogoSample6.png";

import Layout from "./src/components/Layout";
import LoggenIn from "./src/components/login/LoggedIn";
import LoginScreen from "./src/components/screen/LoginScreen";
import RegisterScreen from "./src/components/screen/RegisterScreen";

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Tareas");
  const [selectedChat, setSelectedChat] = useState("chat_001");
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState("splash");
  const [currentRoute, setCurrentRoute] = useState(null);

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
            <Text style={stylesApp.text}>Bienvenido a AGT</Text>
            <Image style={stylesApp.image} source={logo2} />
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
            {/* <StatusBar style="dark" /> */}
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

  // const Stack = createStackNavigator();
  return (
    <SafeAreaProvider style={stylesApp.contenedor}>
      {renderContent()}
    </SafeAreaProvider>
  );
}

const stylesApp = StyleSheet.create({
  contenedor: {
    flex: 1,
    // backgroundColor: "white",
  },

  contentLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#28a3f6",
  },
  image: {
    width: 280,
    height: 300,
    // transform: [{ rotate: "-140deg" }],
    marginTop: 50,
    resizeMode: "contain",
    // borderWidth: 1,
  },
});
