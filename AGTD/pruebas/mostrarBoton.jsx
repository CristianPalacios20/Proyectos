import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

export default function mostrarBoton() {
  const translateX = useSharedValue(0);
  const MAX_TRANSLATE = -120;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));
  const deleteButtomStyles = useAnimatedStyle(() => ({
    opacity: translateX.value < 0 ? withTiming(1) : withTiming(0),
  }));
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (e.translationX < 0) {
        translateX.value = e.translationX;
      }
    })
    .onEnd(() => {
      if (translateX.value < MAX_TRANSLATE / 2) {
        translateX.value = withTiming(MAX_TRANSLATE);
      } else {
        translateX.value = withTiming(0);
      }
    });
  const eliminar = () => {
    alert("Tarea eliminada");
  };
  return (
    <View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.row}>
            {/* Botón de eliminar detrás */}
            <Animated.View style={[styles.deleteButton, deleteButtomStyles]}>
              <Pressable onPress={eliminar}>
                <Text style={styles.deleteText}>Eliminar</Text>
              </Pressable>
            </Animated.View>

            {/* Elemento arrastrable */}
            <GestureDetector gesture={panGesture}>
              <Animated.View style={[styles.card, animatedStyle]}>
                <Text style={styles.cardText}>Tarea pendiente</Text>
              </Animated.View>
            </GestureDetector>
          </View>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  row: {
    height: 80,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    // borderRadius: 10,
    position: "absolute",
    width: "100%",
    height: "100%",
    elevation: 4,
  },
  cardText: {
    width: "100%",
    fontSize: 18,
    color: "black",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
