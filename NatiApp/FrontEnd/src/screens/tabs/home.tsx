import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import movimientos from "../../data/movimientos.json";
import colores from "../../assets/theme/colores";
import MenuInferior from "../../components/menus/menuInferior";

import vector7 from "../../assets/images/vector7.png";
import iconUser from "../../assets/icons/iconUserIII.png";
import iconEyeHide from "../../assets/icons/iconEyeHide.png";
import iconVisible from "../../assets/icons/iconVisible.png";
import iconArrowRight from "../../assets/icons/iconArrowRight.png";
import iconResumenAnual from "../../assets/icons/iconResumenAnual.png";
import iconNoti from "../../assets/icons/iconNoti.png";

import { useRoute } from "@react-navigation/native";

export default function Home({ navigation }: any) {
  const insets = useSafeAreaInsets();
  const route = useRoute;

  const [seeMonto, setSeeMonto] = useState(false);
  // const [iconActivo, setIconActivo] = useState(false);

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.headerContainer}>
        <ImageBackground
          source={vector7}
          style={[styles.header, { paddingTop: insets.top }]}
        >
          <View style={styles.profileContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={styles.avatarContainer}
            >
              <Image source={iconUser} style={styles.iconUser} />
            </TouchableOpacity>

            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.summaryButton}>
                <Image source={iconResumenAnual} style={styles.summaryIcon} />
                <Text style={styles.summaryText}>Resumen anual</Text>
              </TouchableOpacity>

              <Image source={iconNoti} style={styles.notificationIcon} />
            </View>
          </View>
          <View style={styles.infoContainer}>
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
            <View style={styles.totalUsuarioContainer}>
              <Text style={styles.totalLabel}>Total</Text>
              <View style={styles.totalValorContainer}>
                <Text style={styles.totalSimbolo}>$</Text>
                <Text style={styles.totalValor}>{seeMonto ? "0" : "***"}</Text>
              </View>
            </View>

            {/* Total natillera */}
            <TouchableOpacity
              style={styles.totalNatilleraContainer}
              onPress={() => navigation.navigate("InfoNatillera")}
            >
              <Text style={styles.totalNatilleraText}>Total natillera</Text>
              <Image
                source={iconArrowRight}
                style={styles.totalNatilleraIcon}
              />
            </TouchableOpacity>

            {/* Periodo */}
            <Text style={styles.periodoText}>Enero 2026</Text>
          </View>
        </ImageBackground>

        {/* ____________________________TRABAJANDO________________________________ */}

        <View style={styles.movementsHeader}>
          <Text style={styles.movementsTitle}>Últimos movimientos</Text>

          <TouchableOpacity onPress={()=>navigation.navigate("Movimientos")} style={styles.viewAllButton}>
            <Text style={styles.viewAllButtonText}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.movementsContainer}>
            {/* Encabezado */}

            {/* Lista de movimientos */}
            {movimientos.map((movimiento) => (
              <View key={movimiento.id} style={styles.movementsList}>
                <View style={styles.movementCard}>
                  {/* Información izquierda */}
                  <View style={styles.movementInfo}>
                    <View
                      style={[
                        movimiento.tipoMovimiento != "préstamo"
                          ? styles.movementIconContainer
                          : styles.movementIconContainerP,
                      ]}
                    >
                      <Image style={styles.movementIcon} />
                    </View>

                    <View style={styles.movementTextContainer}>
                      <Text style={styles.userName}>{movimiento.nombre}</Text>
                      <Text style={styles.movementType}>
                        {movimiento.tipoMovimiento}
                      </Text>
                    </View>
                  </View>

                  {/* Información derecha */}
                  <View style={styles.movementDetails}>
                    <View style={styles.movementValueContainer}>
                      <Text
                        style={[
                          movimiento.tipoMovimiento != "préstamo"
                            ? styles.movementValue
                            : styles.movementValueP,
                        ]}
                      >
                        {movimiento.tipoMovimiento == "préstamo" ? "-" : "+"} $
                        {movimiento.valor}
                      </Text>
                      <Text style={styles.movementDate}>
                        {movimiento.fecha}
                      </Text>
                    </View>

                    <Image style={styles.movementArrow} />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <MenuInferior />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#000",
  },

  headerContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  header: {
    height: 400,
    padding: 10,
    gap: 10,
    resizeMode: "contain",
  },

  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    backgroundColor: "#2DB964",
    borderRadius: 50,
  },

  iconUser: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },

  actionsContainer: {
    flexDirection: "row",
    gap: 20,
  },

  summaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    width: 165,
    height: 30,
    backgroundColor: "#2DB964",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#2DB964",
  },

  summaryIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  summaryText: {
    color: "white",
    fontWeight: "bold",
  },

  notificationIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
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

  movementsContainer: {
    flex: 1,
  },

  movementsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  movementsTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7B7D7D",
  },

  viewAllButton: {},

  viewAllButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2DB964",
  },

  movementsList: {
    height: 60,
    paddingHorizontal: 20,
  },

  movementCard: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#B3B6B7",
  },

  movementInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    height: "100%",
    gap: 11,
  },

  movementIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#2db9654a",
    borderRadius: 100,
  },

  movementIconContainerP: {
    width: 40,
    height: 40,
    backgroundColor: "#ff000027",
    borderRadius: 100,
  },

  movementIcon: {},

  movementTextContainer: {},

  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  movementType: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7B7D7D",
  },

  movementDetails: {
    height: "100%",
    justifyContent: "center",
  },

  movementValueContainer: {
    alignItems: "flex-end",
    gap: 1,
  },

  movementValue: {
    fontSize: 14,
    color: "#2DB964",
    fontWeight: "600",
  },

  movementValueP: {
    fontSize: 14,
    color: "red",
    fontWeight: "600",
  },

  movementDate: {
    fontSize: 12,
    color: "#7B7D7D",
    fontWeight: "600",
  },

  movementArrow: {},
});
