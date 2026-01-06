import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const { width, height } = Dimensions.get("window");

export default function WhatsAppEffect() {
  const [showMenu, setShowMenu] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const timerRef = useRef(null);

  const scale = useSharedValue(1);

  const handlePressIn = () => {
    timerRef.current = setTimeout(() => {
      setIsSelected(true);
      scale.value = withSpring(1.05, { damping: 15 });
      setShowMenu(true);
    }, 400);
  };

  const handlePressOut = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
    setIsSelected(false);
    scale.value = withSpring(1);
  };

  const animatedMessageStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Mensaje normal en la lista */}
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View
          style={[
            styles.message,
            animatedMessageStyle,
            isSelected && styles.messageSelected,
          ]}
        >
          <Text style={styles.text}>Hola! Este es un mensaje 🎉</Text>
        </Animated.View>
      </Pressable>

      {/* Overlay */}
      {showMenu && (
        <Animated.View
          entering={FadeIn.duration(200)}
          exiting={FadeOut.duration(200)}
          style={StyleSheet.absoluteFill}
        >
          {/* Blur + tap fuera para cerrar */}
          <BlurView intensity={60} tint="dark" style={StyleSheet.absoluteFill}>
            <Pressable
              style={StyleSheet.absoluteFill}
              onPress={handleCloseMenu}
            />
          </BlurView>

          {/* 👇 Clon del mensaje flotante arriba del blur */}
          <Animated.View
            style={[
              styles.messageFloating,
              animatedMessageStyle,
              styles.messageSelected,
            ]}
          >
            <Text style={styles.text}>Hola! Este es un mensaje 🎉</Text>
          </Animated.View>

          {/* Menú flotante */}
          <Animated.View
            entering={ZoomIn.springify().damping(15)}
            exiting={ZoomOut.duration(150)}
            style={styles.menu}
          >
            <Text style={styles.menuItem}>Reply</Text>
            <Text style={styles.menuItem}>Forward</Text>
            <Text style={styles.menuItem}>Copy</Text>
            <Text style={[styles.menuItem, { color: "red" }]}>Delete</Text>
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  message: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    elevation: 3,
  },
  messageSelected: {
    backgroundColor: "#e8f0fe",
    borderColor: "#4285f4",
    borderWidth: 1,
  },
  messageFloating: {
    position: "absolute",
    top: height / 2.5, // puedes ajustar esto
    alignSelf: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    elevation: 6,
  },
  text: {
    fontSize: 16,
  },
  menu: {
    position: "absolute",
    bottom: height / 4,
    left: width / 6,
    right: width / 6,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
});
