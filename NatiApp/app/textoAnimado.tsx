import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import { useEffect, useRef } from "react";

const { height } = Dimensions.get("window");

export default function TextoAnimado() {
  const posicionY = useRef(new Animated.Value(height / 2)).current;

  useEffect(() => {
    Animated.timing(posicionY, {
      toValue: 80, // posición final arriba
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.texto,
          {
            transform: [{ translateY: posicionY }],
          },
        ]}
      >
        Bienvenido a MercaApp
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
