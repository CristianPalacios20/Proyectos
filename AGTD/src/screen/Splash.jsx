import { useEffect } from "react";
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
  interpolateColor,
} from "react-native-reanimated";

import Waves from "../../assets/img/wavesBottom.png";
import IconArrow from "../../assets/icons/iconArrow.png";

const { width, height } = Dimensions.get("window");
const AnimatedImage = Animated.createAnimatedComponent(RNImage);

export default function Splash({ onFinish }) {
  // Animaciones
  const scale = useSharedValue(1);
  const circuloTranslateY = useSharedValue(0);
  const agtTranslateX = useSharedValue(0);
  const agtTranslateY = useSharedValue(0);
  const agtScale = useSharedValue(1);
  const welcomeOpacity = useSharedValue(0);
  const welcomeTraslateY = useSharedValue(200);
  const wavesTraslateY = useSharedValue(200);
  const wavesOpacity = useSharedValue(0);
  const continuarTraslateX = useSharedValue(80);
  const continuarOpacity = useSharedValue(0);

  // Color del texto (0 = blanco, 1 = negro)
  const colorProgress = useSharedValue(0);

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
        welcomeOpacity.value = withTiming(1, { duration: 1000 });
        welcomeTraslateY.value = withSpring(0, {
          damping: 10,
          stiffness: 100,
        });
      }, 1000)
    );

    // Mover círculo y cambiar color
    timeouts.push(
      setTimeout(() => {
        circuloTranslateY.value = withTiming(-250, { duration: 2800 });
        colorProgress.value = withTiming(1, { duration: 1000 }); // blanco → negro
      }, 3000)
    );

    // Animar waves
    timeouts.push(
      setTimeout(() => {
        wavesOpacity.value = withTiming(1, { duration: 400 });
        wavesTraslateY.value = withTiming(0, {
          duration: 800,
          easing: Easing.out(Easing.exp),
        });
      }, 5000)
    );

    // Botón continuar
    timeouts.push(
      setTimeout(() => {
        continuarOpacity.value = withTiming(1, { duration: 500 });
        continuarTraslateX.value = withSpring(0, {
          damping: 8,
          stiffness: 100,
        });
      }, 5500)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // Estilos animados
  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: circuloTranslateY.value }],
  }));

  const agtTextStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: agtTranslateX.value },
      { translateY: agtTranslateY.value },
      { scale: agtScale.value },
    ],
    color: interpolateColor(
      colorProgress.value,
      [0, 1],
      ["#fff", "#000"] // blanco → negro
    ),
  }));

  const welcomeTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: welcomeTraslateY.value }],
    opacity: welcomeOpacity.value,
    color: interpolateColor(colorProgress.value, [0, 1], ["#fff", "#000"]),
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

      <Animated.Text style={[styles.textoAGT, agtTextStyle]}>AGT</Animated.Text>

      <Animated.Text style={[styles.textoBienvenida, welcomeTextStyle]}>
        Bienvenido
      </Animated.Text>

      <AnimatedImage source={Waves} style={[styles.waves, wavesStyle]} />

      <Animated.View style={[styles.contenedorBotonContinuar, continuarStyle]}>
        <TouchableOpacity style={styles.botonContinuar} onPress={onFinish}>
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
    backgroundColor: "black",
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
    height: 400,
    bottom: 0,
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
