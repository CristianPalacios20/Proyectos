import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inspiration: require("../../assets/fonts/Inspiration-Regular.ttf"),
  });

  if (!fontsLoaded) return <View />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // statusBarStyle: "light",
        // statusBarTranslucent: true,
      }}
    />
  );
}
