import { useImperativeHandle, forwardRef } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import iconMenu from "../../assets/icons/iconMenu2.png"

const SwipeToReveal = forwardRef(
  ({ children, openModal, style, onSwipeStart }, ref) => {
    const translateX = useSharedValue(0);
    const MAX_TRANSLATE = -80;

    const closeSwipe = () => {
      translateX.value = withTiming(0);
    };

    const isOpen = () => translateX.value !== 0;

    // ✅ Exponer métodos imperativos
    useImperativeHandle(ref, () => ({
      isOpen: () => {
        return translateX.value !== 0;
      },
      closeSwipe: () => {
        translateX.value = withTiming(0);
      },
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }));
    const deleteButtonStyle = useAnimatedStyle(() => ({
      opacity: translateX.value < 0 ? withTiming(1) : withTiming(0),
    }));
    const panGesture = Gesture.Pan()
      .onUpdate((e) => {
        if (e.translationX < 0) {
          runOnJS(onSwipeStart)?.();  // Llama al padre para cerrar otros swipes
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
        {/* Botón de opciones */}
        <Animated.View style={[styles.row, style]}>
          <Pressable
            onPress={openModal}
            style={[styles.deleteButton, deleteButtonStyle]}
          >
            <Image source={iconMenu} style={styles.deleteText} />
          </Pressable>
        </Animated.View>
        {/* Área deslizable + cierre automático al tocar */}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.card, animatedStyle]}>
            {children}
          </Animated.View>
        </GestureDetector>
      </View>
    );
  }
);

export default SwipeToReveal;

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
    justifyContent: "center",
    overflow: "hidden",
  },
  deleteButton: {
    position: "relative",
    backgroundColor: "#0099FF",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    paddingRight: 15,
  },
  deleteText: {
    width: 50,
    height: 50,
  },
});
