import { AnimatedCircularProgress } from "react-native-circular-progress";
import { View, Text } from "react-native";

const getColorByPercentage = (porcentaje) => {
  if (porcentaje <= 30) return "#FF0000";
  if (porcentaje <= 70) return "#FFFF00";
  return "#0099FF";
};

export default function PorcentajeCircular() {
  const fillValue = 80;
  return (
    <View>
      <AnimatedCircularProgress
        size={50}
        width={4}
        fill={fillValue}
        tintColor={getColorByPercentage(fillValue)}
        backgroundColor="#e5e7e938"
      >
        {(fill) => <Text>{`${Math.round(fill)}%`}</Text>}
      </AnimatedCircularProgress>
    </View>
  );
}
