import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tareas from "./screen/Tareas";
import Archivos from "./screen/Archivos";
import Ajustes from "./screen/Ajustes";
import CrearTarea from "./CrearTarea";
import ChatScreen from "./screen/ChatScreen";

const chatData = require("./json/Tareas.json");
const Stack = createStackNavigator();

export default function Main({
  selectedTab,
  selectedChat,
  onLogout,
  setSelectedTab,
  setCurrentRoute,
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
      case "Archivos":
        return <Stack.Screen name="Archivos" component={Archivos} />;
      case "Ajustes":
        return (
          <Stack.Screen name="Ajustes">
            {(props) => <Ajustes {...props} onLogout={onLogout} />}
          </Stack.Screen>
        );
      case "CrearTarea":
        return <Stack.Screen name="Tareas" component={CrearTarea} />;
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
