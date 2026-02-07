import { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import colores from "../../assets/theme/colores";

import iconEyeHide from "../../assets/icons/iconEyeHide.png";
import iconVisible from "../../assets/icons/iconVisible.png";

import iconArrowRight from "../../assets/icons/iconArrowRight.png";
import vector6 from "../../assets/images/vector.png";

export default function Home() {
  const insets = useSafeAreaInsets();

  const [seeMonto, setSeeMonto] = useState(false);

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="transparent" />
      <LinearGradient
        style={[styles.header, {paddingTop: insets.top}]}
        colors={[colores.inicioGradienteInicio, colores.inicioGradienteFin]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Perfil */}
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer} />
        </View>

        {/* Contenido principal */}
        <View style={styles.infoContainer}>
          {/* Estado / Advertencia */}
          <View style={styles.estadoContainer}>
            <View style={styles.containerMonto}>
              <Text style={styles.estadoText}>Depósito bajo monto</Text>
              <TouchableOpacity onPress={() => setSeeMonto(!seeMonto)}>
                <Image
                  source={seeMonto ? iconEyeHide : iconVisible}
                  style={styles.estadoIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.montoPrincipalContainer}>
              <Text style={styles.montoSimbolo}>$</Text>
              <Text style={styles.montoValor}>{seeMonto ? "0" : "****"}</Text>
            </View>
          </View>

          {/* Total usuario */}
          <View style={styles.totalUsuarioContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <View style={styles.totalValorContainer}>
              <Text style={styles.totalSimbolo}>$</Text>
              <Text style={styles.totalValor}>{seeMonto ? "0" : "***"}</Text>
            </View>
          </View>

          {/* Total natillera */}
          <TouchableOpacity style={styles.totalNatilleraContainer}>
            <Text style={styles.totalNatilleraText}>Total natillera</Text>
            <Image source={iconArrowRight} style={styles.totalNatilleraIcon} />
          </TouchableOpacity>

          {/* Periodo */}
          <Text style={styles.periodoText}>Enero 2026</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "white",
    borderWidth: 1,
  },

  header: {
    height: 350,
    padding: 10,
    gap: 10,
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    backgroundColor: "#E7E5E4",
    borderRadius: 50,
  },

  avatarText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#007AFF",
  },

  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  estadoContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
  },

  containerMonto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  estadoText: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  estadoIcon: {
    width: 22,
    height: 22,
  },

  montoPrincipalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  montoSimbolo: {
    fontSize: 32,
    color: colores.textoClaro,
    fontWeight: "bold",
  },

  montoValor: {
    fontSize: 32,
    color: colores.textoClaro,
    fontWeight: "bold",
  },

  totalUsuarioContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 239,
    height: 41,
    gap: 5,
    backgroundColor: "#14532d7c",
    borderRadius: 8,
    marginBottom: 10,
  },

  totalLabel: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  totalValorContainer: {
    flexDirection: "row",
  },

  totalSimbolo: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  totalValor: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  totalNatilleraContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 127,
    height: 28,
    gap: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },

  totalNatilleraText: {
    fontSize: 13,
    color: colores.textoClaro,
  },

  totalNatilleraIcon: {
    width: 18,
    height: 18,
  },

  periodoText: {
    fontSize: 16,
    color: colores.textoClaro,
    fontWeight: "600",
    marginTop: 30,
  },
});
