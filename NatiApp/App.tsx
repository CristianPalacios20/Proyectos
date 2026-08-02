import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import RootNavigator from "./src/navigation/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/AuthContext";
import { ModalProvider } from "./src/context/modalContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ModalProvider>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <RootNavigator />
          </View>
        </ModalProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
