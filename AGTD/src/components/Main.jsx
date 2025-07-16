import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tareas from "./screen/Tareas";
import Ajustes from "./screen/Ajustes";
import BuscarOCrear from "./screen/BuscarOCrear";
import CrearTarea from "./screen/CrearTarea";
import ChatScreen from "./screen/ChatScreen";
import InformacionScreen from "./screen/InformacionScreen";
import AnimatedScreenWrapper from "./AnimatedScreenWrapper";

const chatData = require("./json/Tareas.json");
const Stack = createStackNavigator();

export default function Main({
  selectedTab,
  selectedChat,
  onLogout,
  setSelectedTab,
  setCurrentRoute,
  onLoginSuccess,
}) {
  const [dataChats, setDataChats] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const navRef = useNavigationContainerRef();

  useEffect(() => {
    setTimeout(() => {
      if (chatData && chatData.chats) {
        setDataChats(chatData.chats);
      }
      setIsloading(false);
    }, 2000);
  }, [selectedChat]);

  const renderContent = () => {
    switch (selectedTab) {
      case "Tareas":
        return (
          <Stack.Screen name="Tareas">
            {(props) => (
              <Tareas
                {...props}
                data={dataChats}
                isLoading={isLoading}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            )}
          </Stack.Screen>
        );
      case "Ajustes":
        return (
          <Stack.Screen name="Ajustes">
            {(props) => (
              <Ajustes
                {...props}
                onLogout={onLogout}
                setSelectedTab={setSelectedTab}
              />
            )}
          </Stack.Screen>
        );
        break;
      case "Buscar":
        return (
          <Stack.Screen name="Buscar">
            {(props) => (
              <AnimatedScreenWrapper animacion="slideUp">
                <BuscarOCrear
                  {...props}
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              </AnimatedScreenWrapper>
            )}
          </Stack.Screen>
        );
        break;
      case "CrearTarea":
        return (
          <Stack.Screen name="CrearTarea">
            {(props) => (
              <CrearTarea
                {...props}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            )}
          </Stack.Screen>
        );
      default:
        return (
          <Stack.Screen>
            {(props) => (
              <Tareas
                {...props}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            )}
          </Stack.Screen>
        );
        break;
    }
  };
  return (
    <View style={stylesMain.content}>
      <NavigationContainer
        independent={true}
        ref={navRef}
        onStateChange={() => {
          const route = navRef.getCurrentRoute();
          if (route) setCurrentRoute(route.name);
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {renderContent()}
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Informacion" component={InformacionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const stylesMain = StyleSheet.create({
  content: {
    flex: 1,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
