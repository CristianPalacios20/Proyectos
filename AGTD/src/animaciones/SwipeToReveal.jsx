import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  StyleProp,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function SwipeToReveal({ children, ondelete, style }) {
  const translateX = useSharedValue(0);
  const MAX_TRANSLATE = -120;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  const deleteButtonStyle = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? withTiming(1) : withTiming(0),
  }));
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX < 0) {
        translateX.value = e.translationX;
      }
    })
    .onEnd(() => {
      if (translateX.value < MAX_TRANSLATE / 2) {
        translateX.value = withTiming(MAX_TRANSLATE);
      } else {
        translateX.value = withTiming(0);
      }
    });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.row, style]}>
        <Pressable
          onPress={ondelete}
          style={[styles.deleteButton, deleteButtonStyle]}
        >
          <Text style={styles.deleteText}>opciones</Text>
        </Pressable>
      </Animated.View>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  row: {
    height: 70,
    justifyContent: "center",
    overflow: "hidden",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    position: "absolute",
    width: "100%",
    height: "100%",
    elevation: 4,
    justifyContent: "center",
    overflow: "hidden",
  },
  deleteButton: {
    position: "relative",
    backgroundColor: "#626567",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    paddingRight: 25,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
