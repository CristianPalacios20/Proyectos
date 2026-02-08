import { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

import iconArrowBack from "../assets/icons/iconArrowBack.png";

import colores from "../assets/theme/colores";

export function PersonCard({ persona, abierto, onPress }: any) {
  const rotateAnim = useRef(new Animated.Value(abierto ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: abierto ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [abierto]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "270deg"],
  });

  return (
    <TouchableOpacity
      style={[styles.personCard, abierto && styles.personCardAbierto]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Info principal */}
      <View style={styles.personInfo}>
        <Text style={styles.personName}>{persona.nombre}</Text>

        <Animated.Image
          source={iconArrowBack}
          style={[
            styles.personStatusIcon,
            { transform: [{ rotate: rotateInterpolate }] },
          ]}
        />
      </View>

      {/* Detalles */}
      {abierto && (
        <>
          <View style={styles.personFooter}>
            <Text style={styles.aporteLabel}>Aportó:</Text>
            <Text style={styles.aporteValue}>{persona.aporte}</Text>
          </View>
          <View style={styles.contentDetailsButton}>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  personCard: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 8,
  },

  personCardAbierto: {
    height: 118,
  },

  personInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },

  personName: {
    fontSize: 16,
    fontWeight: "600",
  },

  personStatusIcon: {
    width: 20,
    height: 20,
    transform: [{ rotate: "180deg" }],
  },

  personFooter: {
    flexDirection: "row",
    gap: 5, 
    paddingHorizontal: 10,
  },

  aporteContainer: {
    flexDirection: "row",
    gap: 5,
  },

  aporteLabel: {
    fontSize: 16,
  },

  aporteValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  contentDetailsButton: {
    alignItems: "flex-end",
    top: 16,
    paddingHorizontal: 10,
  },

  detailsButton: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 30,
    backgroundColor: colores.botonPrimario,
    borderRadius: 5,
  },

  detailsButtonText: {
    color: colores.textoClaro,
  },
});
