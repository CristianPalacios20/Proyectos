import RootNavigator from "./src/navigation/RootNavigator";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RootNavigator />
    </View>
  );
}
