import { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { useRouter } from "expo-router";

export default function Splash() {
  const router = useRouter();
  const { height } = Dimensions.get("window");

  const translateY = useRef(new Animated.Value(height / 2 - 32)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.6,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // 🔥 navegación real
        router.replace("/(auth)/login");
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.name,
          { transform: [{ translateY }, { scale }] },
        ]}
      >
        MercaApp
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  name: {
    fontSize: 64,
    fontFamily: "Inspiration",
  },
});
