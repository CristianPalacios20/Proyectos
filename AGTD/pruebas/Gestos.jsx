import { View, Text, TouchableOpacity } from "react-native";
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function Gestos() {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const popupAlpha = useSharedValue(0);
  const popupPosition = useSharedValue({ x: 0, y: 0 });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y },
    ],
  }));

  const animatedPopupStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: popupPosition.value.x },
      { translateY: popupPosition.value.y },
    ],
    opacity: popupAlpha.value,
  }));

  const dragGesture = Gesture.Pan()
    .onStart(() => {
      popupAlpha.value = withTiming(0);
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = { ...offset.value };
    });

  const longPressGesture = Gesture.LongPress().onStart(() => {
    popupPosition.value = { ...offset.value };
    popupAlpha.value = withTiming(1);
  });

  const composed = Gesture.Race(dragGesture, longPressGesture);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GestureDetector gesture={composed}>
        <Animated.View
          style={[
            {
              width: 100,
              height: 100,
              backgroundColor: "skyblue",
              borderRadius: 12,
            },
            animatedStyle,
          ]}
        />
      </GestureDetector>

      <Animated.View
        style={[
          {
            position: "absolute",
            width: 100,
            height: 40,
            backgroundColor: "black",
            borderRadius: 8,
          },
          animatedPopupStyle,
        ]}
      >
        <Text style={{ color: "white", textAlign: "center", marginTop: 8 }}>
          Popup
        </Text>
      </Animated.View>
    </View>
  );
}
