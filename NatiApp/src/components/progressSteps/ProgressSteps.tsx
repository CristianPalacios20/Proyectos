import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface ProgressStepsProps {
  pasos: string[];
  pasoActual: number;
  icono: ImageSourcePropType;
}

const TAM_CIRCULO = 30;

export default function ProgressSteps({
  pasos,
  pasoActual,
  icono,
}: ProgressStepsProps) {
  const progreso = useRef(new Animated.Value(0)).current;

  const [anchoContenedor, setAnchoContenedor] = useState(0);

  const totalPasos = pasos.length;

  useEffect(() => {
    const porcentaje = (pasoActual - 1) / (totalPasos - 1);

    Animated.timing(progreso, {
      toValue: porcentaje,
      duration: 450,
      useNativeDriver: false,
    }).start();
  }, [pasoActual]);

  const recorrido = Math.max(anchoContenedor - TAM_CIRCULO, 0);

  const anchoAnimado = progreso.interpolate({
    inputRange: [0, 1],
    outputRange: [0, recorrido],
  });

  return (
    <View
      style={styles.container}
      onLayout={(e) => setAnchoContenedor(e.nativeEvent.layout.width)}
    >
      <View style={styles.progressBackground} />

      <Animated.View
        style={[
          styles.progressActive,
          {
            width: anchoAnimado,
          },
        ]}
      />

      {pasos.map((paso, index) => {
        const posicion =
          index === 0
            ? styles.stepStart
            : index === pasos.length - 1
            ? styles.stepEnd
            : styles.stepCenter;

        return (
          <View key={index} style={[styles.step, posicion]}>
            <View
              style={[
                styles.stepIconContainer,
                index + 1 <= pasoActual && styles.stepCompleted,
              ]}
            >
              <Image source={icono} style={styles.stepIcon} />
            </View>

            <Text style={styles.stepText}>{paso}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  progressBackground: {
    position: "absolute",
    top: 11,
    left: 15,
    right: 15,
    height: 2,
    backgroundColor: "#DADADA",
  },

  progressActive: {
    position: "absolute",
    top: 11,
    left: 15,
    height: 2,
    backgroundColor: "#000",
  },

  step: {
    flex: 1,
  },

  stepStart: {
    alignItems: "flex-start",
  },

  stepCenter: {
    alignItems: "center",
  },

  stepEnd: {
    alignItems: "flex-end",
  },

  stepIconContainer: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#DADADA",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    overflow: "hidden"
  },

  stepCompleted: {
    backgroundColor: "#000",
  },

  stepIcon: {
    width: 16,
    height: 10,
    resizeMode: "contain",
  },

  stepText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
  },
});