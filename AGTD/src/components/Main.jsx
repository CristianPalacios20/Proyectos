import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useAuth } from "../context/AuthContext";

import MainContent from "./MainContent";
import ChatScreen from "../screen/ChatScreen";
import InformacionScreen from "../screen/InformacionScreen";
import EditarTarea from "../screen/EditarTarea";
import NuevaSubtarea from "../screen/NuevaSubtarea";
import Destacadas from "../screen/Destacadas";

const Stack = createStackNavigator();

export default function Main({
  onLogout,
  setCurrentRoute,
  openModal,
  isLoading,
}) {
  const { selectedTab, setSelectedTab } = useAuth();
  const navRef = useNavigationContainerRef();

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
                isLoading={isLoading}
                onLogout={onLogout}
                openModal={openModal}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Chat" component={ChatScreen} />

          <Stack.Screen name="Informacion" component={InformacionScreen} />
          <Stack.Screen name="EditarTarea" component={EditarTarea} />
          <Stack.Screen name="NuevaSubTarea" component={NuevaSubtarea} />
          <Stack.Screen name="DestacarTarea" component={Destacadas} />
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
