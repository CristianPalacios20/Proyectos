import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import AuthNavigator from "./AuthNavigator";
import TabsNavigator from "./TabsNavigator";
import Splash from "../screens/splash";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { isLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const iniciarApp = async () => {
      // Simula carga inicial (luego token / storage)
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsLoading(false);
    };

    iniciarApp();
  }, []);

  if (isLoading) {
    return <Splash onFinish={() => setIsLoading(false)} />;
  }

  return (
    <NavigationContainer>
      <StatusBar translucent style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <Stack.Screen name="App" component={TabsNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
