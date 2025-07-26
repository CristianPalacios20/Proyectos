import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainContent from "./MainContent";
import ChatScreen from "../screen/ChatScreen";
import InformacionScreen from "../screen/InformacionScreen";
import EditarTarea from "../screen/EditarTarea";
import NuevaSubtarea from "../screen/NuevaSubtarea";
import Destacadas from "../screen/Destacadas";

const chatData = require("../json/Tareas.json");
const Stack = createStackNavigator();

export default function Main({
  selectedTab,
  selectedChat,
  onLogout,
  setSelectedTab,
  setCurrentRoute,
  onLoginSuccess,
  openModal,
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="MainContent">
            {(props) => (
              <MainContent
                {...props}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                selectedChat={selectedChat}
                isLoading={isLoading}
                dataChats={dataChats}
                onLogout={onLogout}
                openModal={openModal}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Chat">
            {(props) => (
              <ChatScreen
                {...props}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Informacion" component={InformacionScreen} />
          <Stack.Screen name="EditarTarea" component={EditarTarea} />
          <Stack.Screen name="NuevaSubTarea" component={NuevaSubtarea} />
          <Stack.Screen name="Destacadas" component={Destacadas} />
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
