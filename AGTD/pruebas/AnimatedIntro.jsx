// AnimatedIntro.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function AnimatedIntro({ onFinish = () => {} }) {
  // Paso 1: expansión
  const scale = useSharedValue(1);

  // Paso 2: mover logo y mostrar texto
  const logoY = useSharedValue(0);
  const welcomeOpacity = useSharedValue(0);

  // Paso 3: ocultar círculo expandido
  const circleOpacity = useSharedValue(1);

  // Paso 4: mostrar pantalla azul final
  const blueOverlayOpacity = useSharedValue(0);

  useEffect(() => {
    // Paso 1: círculo se expande
    scale.value = withTiming(10, {
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
    });

    // Paso 2a: "AGT" se mueve hacia arriba
    logoY.value = withDelay(
      1500,
      withTiming(-height / 3, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      })
    );

    // Paso 2b: Aparece "BIENVENIDO"
    welcomeOpacity.value = withDelay(
      2500,
      withTiming(1, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      })
    );

    // Paso 3: Círculo se desvanece
    circleOpacity.value = withDelay(
      3500,
      withTiming(0, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      })
    );

    // Paso 4: Pantalla azul completa + finalizar animación
    blueOverlayOpacity.value = withDelay(
      4600,
      withTiming(1, {
        duration: 800,
        easing: Easing.inOut(Easing.ease),
      }, () => {
        runOnJS(onFinish)(); // Llama al final
      })
    );
  }, []);

  // Estilos animados
  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: circleOpacity.value,
  }));

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: logoY.value }],
  }));

  const welcomeStyle = useAnimatedStyle(() => ({
    opacity: welcomeOpacity.value,
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: blueOverlayOpacity.value,
  }));

  return (
    <View style={styles.container}>
      {/* Paso 1: círculo azul expandiéndose */}
      <Animated.View style={[styles.circle, circleStyle]} />

      {/* Paso 2: AGT (logo) y BIENVENIDO */}
      <Animated.Text style={[styles.logo, logoStyle]}>AGT</Animated.Text>
      <Animated.Text style={[styles.welcomeText, welcomeStyle]}>
        BIENVENIDO
      </Animated.Text>

      {/* Paso 4: fondo azul que cubre todo */}
      <Animated.View style={[styles.fullBlueOverlay, overlayStyle]} />
    </View>
  );
}

const CIRCLE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: '#0094FF',
  },
  logo: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0094FF',
  },
  welcomeText: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0094FF',
  },
  fullBlueOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0094FF',
    zIndex: 10,
  },
});
