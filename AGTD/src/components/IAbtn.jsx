import React from "react";
import {
  StyleSheet,
  Platform,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  Pressable,
} from "react-native-gesture-handler";

import IA from "../../assets/img/IA.png";

export default function BtnIA() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .onStart(() => {
      //guardamos la posición acumulada entre gestos con startX y startY
      startX.value = offsetX.value;
      startY.value = offsetY.value;
    })
    .onUpdate((e) => {
      offsetX.value = startX.value + e.translationX;
      offsetY.value = startY.value + e.translationY;
    });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  }));
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[style.container, animatedStyle]}>
        <Pressable onPress={() => alert("hola")} style={style.btn}>
          <Animated.Image source={IA} style={style.imgIA} />
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
}

const style = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    bottom: 100,
    right: 20,
    zIndex: 10,
    borderRadius: 30,
    overflow: "hidden",
    borderColor: "#797d7f",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  btn: {
    width: 35,
    height: 35,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  imgIA: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 30,
  },
});
