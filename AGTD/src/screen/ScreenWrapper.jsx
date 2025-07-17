import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function ScreenWrapper({ children }) {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(500);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 400,
      easing: Easing.out(Easing.ease),
    });
    translateX.value = withTiming(0, {
      duration: 400,
      easing: Easing.out(Easing.ease),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View style={[style.contenedor, animatedStyle]}>
      {children}
    </Animated.View>
  );
}

const style = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
});
