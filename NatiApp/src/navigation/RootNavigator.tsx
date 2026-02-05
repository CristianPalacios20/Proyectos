import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import AuthNavigator from "./AuthNavigator";
import TabsNavigator from "./TabsNavigator";
import Splash from "../screens/splash";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const iniciarApp = async () => {
      // Simula carga inicial (luego token / storage)
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsLoading(false);
    };

    iniciarApp();
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <StatusBar translucent style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="App">
            {() => <TabsNavigator />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Auth">
            {() => <AuthNavigator />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
