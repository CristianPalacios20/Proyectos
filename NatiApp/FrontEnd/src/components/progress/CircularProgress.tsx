import React, { useEffect, useRef } from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface CircularProgressProps {
  porcentaje: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
}

export default function CircularProgress({
  porcentaje,
  size = 45,
  strokeWidth = 6,
  color = "#2DB964",
  backgroundColor = "#2DB96420",
}: CircularProgressProps) {
  const radio = (size - strokeWidth) / 2;

  const circunferencia = 2 * Math.PI * radio;

  const progreso = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progreso, {
      toValue: porcentaje,
      duration: 700,
      useNativeDriver: false,
    }).start();
  }, [porcentaje]);

  const strokeDashoffset = progreso.interpolate({
    inputRange: [0, 100],
    outputRange: [circunferencia, 0],
  });

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
        },
      ]}
    >
      <Svg width={size} height={size}>
        {/* Fondo */}
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radio}
          strokeWidth={strokeWidth}
        />

        {/* Progreso */}
        <AnimatedCircle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radio}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circunferencia}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      <View style={styles.content}>
        {/* <Text style={styles.text}>{porcentaje}%</Text> */}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2DB964",
  },
});