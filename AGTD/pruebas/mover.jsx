import React from "react";
import { View, Button } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function Mover() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  const panGesture = Gesture.Pan()
    .onStart(() => {
      // Aquí podrías hacer vibrar el dispositivo o animar algo
    })
    .onUpdate((e) => {
      translateX.value = offsetX.value + e.translationX;
      translateY.value = offsetY.value + e.translationY;
    })
    .onEnd(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;

      // 👇 OPCIONAL: rebote suave al soltar
      // translateX.value = withSpring(0);
      // translateY.value = withSpring(0);
      // offsetX.value = 0;
      // offsetY.value = 0;
    });

  const cambiarTamaño = () => {
    scale.value = withTiming(scale.value === 1 ? 1.5 : 1, {
      duration: 500,
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              { width: 100, height: 100, backgroundColor: "tomato" },
              animatedStyles,
            ]}
          />
        </GestureDetector>

        {/* Botones de control */}
        <Button
          title="Derecha"
          onPress={() => {
            translateX.value = withTiming(translateX.value + 100);
            offsetX.value = translateX.value + 100;
          }}
        />
        <Button
          title="Izquierda"
          onPress={() => {
            translateX.value = withTiming(translateX.value - 100);
            offsetX.value = translateX.value - 100;
          }}
        />
        <Button
          title="Arriba"
          onPress={() => {
            translateY.value = withTiming(translateY.value - 100);
            offsetY.value = translateY.value - 100;
          }}
        />
        <Button
          title="Abajo"
          onPress={() => {
            translateY.value = withTiming(translateY.value + 100);
            offsetY.value = translateY.value + 100;
          }}
        />
        <Button
          title="Ocultar"
          onPress={() => {
            opacity.value = withTiming(opacity.value === 1 ? 0 : 1);
          }}
        />
        <Button
          title="Scalar"
          onPress={cambiarTamaño}
        />
        <Button
          title="Reset"
          onPress={() => {
            translateX.value = withSpring(0);
            translateY.value = withSpring(0);
            offsetX.value = 0;
            offsetY.value = 0;
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}
