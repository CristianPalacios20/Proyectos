import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
// import styles from "./styles";

import iconHomeII from "../../assets/icons/iconHomeII.png";
import iconHomeActiII from "../../assets/icons/iconHomeActiII.png";
import iconUsersActivo from "../../assets/icons/iconUsers.png";
import iconUsersInac from "../../assets/icons/iconUsersInac.png";
import iconPrestamos from "../../assets/icons/iconPrestamo.png";
import iconPrestamoAct from "../../assets/icons/iconprestamoAct.png";
import iconPrestamoInac from "../../assets/icons/iconPrestamoInac.png";
import iconAportes from "../../assets/icons/iconAportes.png";
import iconAI from "../../assets/icons/iconAI.png";
import iconResumenAnual from "../../assets/icons/iconResumenAnual.png";

export default function MenuInferior() {
  const navigation = useNavigation<any>();
  const route = useRoute();

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.menuButton}
      >
        <Image
          source={route.name === "Home" ? iconHomeActiII : iconHomeII}
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Personas")}
        style={styles.menuButton}
      >
        <Image
          source={
            route.name === "Personas" ? iconUsersActivo : iconUsersInac
          }
          style={styles.menuIcon}
        />

        <Text style={styles.menuText}>Personas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconAI}>
        <Image source={iconAI} style={styles.imageIconAI} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Prestamos")}
        style={styles.menuButton}
      >
        <Image
          source={
            route.name === "Prestamos" ? iconPrestamoAct : iconPrestamoInac
          }
          style={styles.menuIcon}
        />
        <Text style={styles.menuText}>Préstamos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Aportes")}
        style={styles.menuButton}
      >
        <Image source={iconResumenAnual} style={styles.menuIcon} />
        <Text style={styles.menuText}>Aportes</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 7,
    borderWidth: 1,
  },

  menuButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    gap: 8,
    borderRadius: 10,
  },

  menuIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  menuText: {
    fontSize: 12,
    color: "#fff",
  },

  iconAI: {
    width: 60,
    height: 60,
  },

  imageIconAI: {
    width: 60,
    height: 60,
  },
});
