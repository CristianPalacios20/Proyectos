import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

//Arrastrar un cuadrado con el dedo (en X e Y), con animación suave.
export default function DragBox() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const panGestute = Gesture.Pan()
    .onUpdate((e) => {
      offsetX.value = e.translationX;
      offsetY.value = e.translationY;
    })
    .onEnd(() => {
      //regresa al centro con un rebote
      offsetX.value = withSpring(0);
      offsetY.value = 0;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value }],
    };
  });
  return (
    <View>
      <GestureDetector gesture={panGestute}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
  },
});
