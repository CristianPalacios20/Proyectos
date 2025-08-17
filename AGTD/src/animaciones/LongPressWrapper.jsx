import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function LongPressWrapper({
  children,
  minDuration = 800,
  onLongPress,
}) {
  const longPressGesture = Gesture.LongPress()
    .minDuration(minDuration)
    .onStart(() => {
      if (onLongPress) onLongPress();
    });
  return (
    <GestureDetector gesture={longPressGesture}>{children}</GestureDetector>
  );
}
