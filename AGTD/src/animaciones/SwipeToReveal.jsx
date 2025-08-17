import { useImperativeHandle, forwardRef, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import iconMenu from "../../assets/icons/iconMenu3.png";
import iconChecked from "../../assets/icons/iconChecked.png";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const SwipeToReveal = forwardRef(
  ({ children, openModal, style, onSwipeStart }, ref) => {
    const translateX = useSharedValue(0);
    const scale = useSharedValue(1);
    const MAX_TRANSLATE = -160;
    const messageOpacity = useSharedValue(0);

    const [liked, setLiked] = useState(true);

    const closeSwipe = () => {
      translateX.value = withTiming(0);
    };

    useImperativeHandle(ref, () => ({
      isOpen: () => translateX.value !== 0,
      closeSwipe: () => (translateX.value = withTiming(0)),
    }));

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }));

    // 🔹 Estilo para el rebote del icono
    const iconScaleStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const deleteButtonStyle = useAnimatedStyle(() => ({
      opacity: translateX.value < 0 ? withTiming(1) : withTiming(0),
    }));

    const messageStyle = useAnimatedStyle(() => ({
      opacity: messageOpacity.value,
    }));

    const panGesture = Gesture.Pan()
      .onUpdate((e) => {
        if (e.translationX < 0) {
          runOnJS(onSwipeStart)?.();
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

    const handleLiked = () => {
      const newLiked = !liked;
      setLiked(newLiked);

      // Rebote
      scale.value = withSpring(1.3, { stiffness: 200 }, () => {
        scale.value = withSpring(1);
      });

      // Mostrar mensaje
      messageOpacity.value = withTiming(1, { duration: 2000 }, () => {
        messageOpacity.value = withTiming(0, { duration: 2000 });
      });
    };

    return (
      <>
        <View style={styles.container}>
          {/* Botón de opciones */}
          <Animated.View style={[styles.row, style]}>
            <Pressable
              onPress={openModal}
              style={[
                styles.button,
                styles.buttonOtraOpcions,
                deleteButtonStyle,
              ]}
            >
              <Image source={iconMenu} style={styles.icon} />
            </Pressable>
            <Pressable
              onPress={handleLiked}
              style={[styles.button, deleteButtonStyle]}
            >
              <Animated.View style={iconScaleStyle}>
                <Ionicons
                  name="heart"
                  size={30}
                  color={liked ? "#0099FF" : "white"}
                />
              </Animated.View>
            </Pressable>
          </Animated.View>

          {/* Área deslizable */}
          <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.card, animatedStyle]}>
              {children}
            </Animated.View>
          </GestureDetector>
        </View>
        <Animated.View
          style={[styles.contentMessage, messageStyle]}
          pointerEvents="none"
        >
          <View style={styles.glass}>
            <Image source={iconChecked} style={styles.iconChecked} />
            <Text style={styles.text}>
              {liked
                ? "Agregada a la lista de destacados"
                : "Eliminada a la lista de destacados"}
            </Text>
          </View>
        </Animated.View>
      </>
    );
  }
);

export default SwipeToReveal;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 70,
    overflow: "hidden",
  },
  card: {
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#0099ff4d",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: "100%",
  },
  buttonOtraOpcions: {
    backgroundColor: "#6161614d",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },

  contentMessage: {
    position: "absolute",
    bottom: "20%",
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  glass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "90%",
    height: 50,
    gap: 10,
    paddingHorizontal: 15,
    borderRadius: 100,
    backgroundColor: "black",
  },
  iconChecked: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 15
  },
});
