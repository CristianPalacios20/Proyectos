import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inspiration: require("../../assets/fonts/Inspiration-Regular.ttf"),
  });

  // ⏳ Mientras cargan las fuentes, no renderices navegación
  if (!fontsLoaded) {
    return <View />; // o null
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
