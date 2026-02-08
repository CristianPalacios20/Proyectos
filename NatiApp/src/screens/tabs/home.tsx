import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import colores from "../../assets/theme/colores";

import vector7 from "../../assets/images/vector7.png";
import iconUser from "../../assets/icons/iconUserII.png";
import iconEyeHide from "../../assets/icons/iconEyeHide.png";
import iconVisible from "../../assets/icons/iconVisible.png";
import iconArrowRight from "../../assets/icons/iconArrowRight.png";
import iconUsers from "../../assets/icons/iconUsers.png";
import iconPrestamos from "../../assets/icons/iconPrestamo.png";
import iconAportes from "../../assets/icons/iconAportes.png";
import iconResumenAnual from "../../assets/icons/iconResumenAnual.png";

export default function Home({navigation} : any) {
  const insets = useSafeAreaInsets();

  const [seeMonto, setSeeMonto] = useState(false);

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="transparent" />
      <ImageBackground
        source={vector7}
        style={[styles.header, { paddingTop: insets.top }]}
        // colors={[colores.inicioGradienteInicio, colores.inicioGradienteFin]}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 1 }}
      >
        {/* Perfil */}
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image source={iconUser} style={styles.iconUser} />
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.totalNatilleraContainer} onPress={()=> navigation.navigate("InfoNatillera")}>
            <Text style={styles.totalNatilleraText}>Total natillera</Text>
            <Image source={iconArrowRight} style={styles.totalNatilleraIcon} />
          </TouchableOpacity>

          {/* Periodo */}
          <Text style={styles.periodoText}>Enero 2026</Text>
        </View>
      </ImageBackground>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Personas")} style={styles.menuButton}>
          <Image source={iconUsers} style={styles.menuIcon} />
          <Text style={styles.menuText}>Personas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Prestamos")} style={styles.menuButton}>
          <Image source={iconPrestamos} style={styles.menuIcon} />
          <Text style={styles.menuText}>Préstamos/pagos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={iconAportes} style={styles.menuIcon} />
          <Text style={styles.menuText}>Aportes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Image source={iconResumenAnual} style={styles.menuIcon} />
          <Text style={styles.menuText}>Resumen anual</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "white",
    // borderWidth: 5,
    // borderColor: "red"
  },

  header: {
    width: 391,
    height: 400,
    padding: 10,
    gap: 10,
    resizeMode: "cover",
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

  iconUser: {
    width: 30,
    height: 30,
    resizeMode: "cover",
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
    marginTop: 60,
  },

  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 7,
  },

  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: 48,
    gap: 8,
    borderRadius: 10,
    backgroundColor: colores.botonPrimario,
  },

  menuIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  menuText: {
    fontSize: 14,
    color: colores.textoClaro,
  },
});
