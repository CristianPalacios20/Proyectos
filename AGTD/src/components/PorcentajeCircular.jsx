import { AnimatedCircularProgress } from "react-native-circular-progress";
import { View, Text, StyleSheet } from "react-native";

const getColorByPercentage = (porcentaje) => {
  if (porcentaje <= 30) return "#FF0000";   // rojo: 0 - 30
  if (porcentaje <= 70) return "#FFFF00";   // amarillo: 31 - 70
  return "#0099FF";                         // azul: 71 - 100
};

export default function PorcentajeCircular() {
  const fillValue = 80;
  return (
    <View style={styles.porcentajeCircular}>
      <AnimatedCircularProgress
        size={40}
        width={4}
        fill={fillValue}
        tintColor={getColorByPercentage(fillValue)}
        backgroundColor="#e5e7e938"
      >
        {(fill) => <Text style={styles.text}>{`${Math.round(fill)}%`}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}

const styles = StyleSheet.create({
  porcentajeCircular: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 12
  },
})
