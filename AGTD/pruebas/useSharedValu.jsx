import { View, Button } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function useSharedValu() {
  const width = useSharedValue(100);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View
        style={{ width, height: 100, backgroundColor: "violet", borderRadius: 5, }}
      />
      <Button onPress={handlePress} title="Clikc me" />
    </View>
  );
}
