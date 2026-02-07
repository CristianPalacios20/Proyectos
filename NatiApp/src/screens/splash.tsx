import { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
// import { useRouter } from "expo-router";

type Props = {
  onFinish: () => void;
};

export default function Splash({ onFinish }: Props) {
  // const router = useRouter();
  const { height } = Dimensions.get("window");

  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        //parallel sirve para que todas las animaciones inicien jusntas ejemplo: translateY y scale
        Animated.timing(translateY, {
          toValue: -height / 2 + 80,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.6,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onFinish();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.text, { transform: [{ translateY }, { scale }] }]}
      >
        NatiApp
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 64,
    fontFamily: "Inspiration",
    textAlign: "center",
  },
});
