import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

export default function AnimatedIntro2() {
  const scale = useSharedValue(1);
  const logoY = useSharedValue(0);
  const welcomeOpacity = useSharedValue(0);
  const circleOpacity = useSharedValue(1); // NUEVO

  useEffect(() => {
    // Expandir el círculo
    scale.value = withTiming(10, {
      duration: 1500,
      easing: Easing.inOut(Easing.ease),
    });

    // Mover logo hacia arriba
    logoY.value = withDelay(
      1500,
      withTiming(-height / 3, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      })
    );

    // Mostrar "BIENVENIDO"
    welcomeOpacity.value = withDelay(
      2500,
      withTiming(1, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    );

    // Desvanecer círculo azul para mostrar fondo blanco
    circleOpacity.value = withDelay(
      3500,
      withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    );
  }, []);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: circleOpacity.value, // NUEVO
  }));

  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: logoY.value }],
  }));

  const welcomeStyle = useAnimatedStyle(() => ({
    opacity: welcomeOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, circleStyle]} />
      <Animated.Text style={[styles.logo, logoStyle]}>AGT</Animated.Text>
      <Animated.Text style={[styles.welcomeText, welcomeStyle]}>
        BIENVENIDO
      </Animated.Text>
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
});
