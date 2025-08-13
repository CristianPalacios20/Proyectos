import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image as RNImage,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from "react-native-reanimated";

import Waves from "../../assets/img/WavesBlue.png";
import IconArrow from "../../assets/icons/iconArrow.png";

const { width, height } = Dimensions.get("window");

const AnimatedImage = Animated.createAnimatedComponent(RNImage);

export default function Splash({ setScreen, onFinish }) {
  const [textoColor, setTextoColor] = useState("#fff");
  const scale = useSharedValue(1);
  const circuloOpacity = useSharedValue(1);
  const agtTranslateX = useSharedValue(0);
  const agtTranslateY = useSharedValue(0);
  const agtScale = useSharedValue(1);
  const welcomeOpacity = useSharedValue(0);
  const welcomeTraslateY = useSharedValue(200);
  const wavesTraslateY = useSharedValue(200);
  const wavesOpacity = useSharedValue(0);
  const continuarTraslateX = useSharedValue(200);
  const continuarOpacity = useSharedValue(0);

  useEffect(() => {
    const timeouts = [];

    // Escalar el círculo
    timeouts.push(
      setTimeout(() => {
        scale.value = withTiming(10, {
          duration: 600,
          easing: Easing.inOut(Easing.ease),
        });
      }, 1000)
    );

    // Animar "AGT"
    timeouts.push(
      setTimeout(() => {
        agtTranslateX.value = withTiming(-width / 2 + 60, { duration: 400 });
        agtTranslateY.value = withTiming(-height / 2 + 60, { duration: 400 });
        agtScale.value = withTiming(1, { duration: 800 });
      }, 1000)
    );

    // Mostrar "Bienvenido"
    timeouts.push(
      setTimeout(() => {
        welcomeOpacity.value = withTiming(1, { duration: 400 });
        welcomeTraslateY.value = withSpring(0, {
          damping: 10,
          stiffness: 100,
        });
      }, 1000)
    );
    setTimeout(() => {
      circuloOpacity.value = withTiming(0, { duracion: 400 });
      setTextoColor("#0094ff");
    }, 2000);

    // Animar waves
    timeouts.push(
      setTimeout(() => {
        wavesOpacity.value = withTiming(1, { duration: 400 });
        wavesTraslateY.value = withTiming(0, {
          duration: 800,
          easing: Easing.out(Easing.exp),
        });
      }, 1800)
    );

    timeouts.push(
      setTimeout(() => {
        continuarOpacity.value = withTiming(1, { duration: 500 });
        continuarTraslateX.value = withSpring(0, {
          damping: 8,
          stiffness: 120,
        });
      }, 2500)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: circuloOpacity.value,
  }));

  const agtTextStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: agtTranslateX.value },
      { translateY: agtTranslateY.value },
      { scale: agtScale.value },
    ],
  }));

  const welcomeTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: welcomeTraslateY.value }],
    opacity: welcomeOpacity.value,
  }));

  const wavesStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: wavesTraslateY.value }],
    opacity: wavesOpacity.value,
  }));

  const continuarStyle = useAnimatedStyle(() => ({
    opacity: continuarOpacity.value,
    transform: [{ translateX: continuarTraslateX.value }],
  }));

  return (
    <View style={styles.contenedor}>
      <Animated.View style={[styles.circulo, circleStyle]} />

      <Animated.Text
        style={[styles.textoAGT, agtTextStyle, { color: textoColor }]}
      >
        AGT
      </Animated.Text>

      <Animated.Text
        style={[
          styles.textoBienvenida,
          welcomeTextStyle,
          { color: textoColor },
        ]}
      >
        Bienvenido
      </Animated.Text>
      <AnimatedImage source={Waves} style={[styles.waves, wavesStyle]} />
      <Animated.View style={[styles.contenedorBotonContinuar, continuarStyle]}>
        <TouchableOpacity
          style={styles.botonContinuar}
          onPress={onFinish}
        >
          <RNImage source={IconArrow} style={[styles.iconArrow]} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const CIRCLE_SIZE = 320;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  circulo: {
    position: "absolute",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: "#0094ff",
    alignItems: "center",
    justifyContent: "center",
  },
  textoAGT: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 36,
  },
  textoBienvenida: {
    position: "absolute",
    top: "40%",
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  waves: {
    position: "absolute",
    width: width,
    height: 450,
    bottom: 0,
    resizeMode: "cover",
  },

  contenedorBotonContinuar: {
    position: "absolute",
    top: "80%",
    left: "10%",
  },

  botonContinuar: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderWidth: 5,
    borderRightColor: "transparent",
    borderRightWidth: 4,
    borderColor: "white",
    borderRadius: 40,
    transform: [{ rotate: "-45deg" }],
  },

  iconArrow: {
    width: 25,
    height: 25,
    transform: [{ rotate: "45deg" }],
  },
});
