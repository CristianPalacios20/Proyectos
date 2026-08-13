import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import colores from "../../assets/theme/colores";
import { useModal } from "../../context/modalContext";
import AgregarPersonaModal from "../../components/modals/agregarPersonaModal";

import frameHeader from "../../assets/images/frameHeader.png";
import iconBack from "../../assets/icons/iconBack.png";
import iconSearch from "../../assets/icons/iconSearch.png";

import MenuInferior from "../../components/menus/menuInferior";

export default function Movimientos({ navigation }: any) {
  const [activo, setActivo] = useState<number | null>(null);
  const acciones = [
    {
      id: 1,
      nombre: "Todos",
    },
    {
      id: 2,
      nombre: "Aportes",
    },
    {
      id: 3,
      nombre: "Pagos",
    },
    {
      id: 4,
      nombre: "Préstamos",
    },
  ];
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.content}>
          <StatusBar style="light" />
          <ImageBackground source={frameHeader} style={styles.headerBackground}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Image source={iconBack} style={styles.backIcon} />
            </TouchableOpacity>

            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>Movimientos</Text>
              <Text style={styles.headerSubtitle}>
                Historial de movimientos
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.searchContainer}>
            <View style={styles.contentInput}>
              <Image source={iconSearch} style={styles.searchIcon} />
              <TextInput
                placeholder="Buscar movimiento"
                style={styles.searchInput}
              />
            </View>

            <View style={styles.filterContainer}></View>
          </View>

          <View style={styles.containerActions}>
            <View style={styles.actionsContainer}>
              {acciones.map((accion) => (
                <TouchableOpacity
                  key={accion.id}
                  onPress={() => setActivo(accion.id)}
                  style={[
                    styles.actionButton,
                    activo === accion.id && styles.actionButtonActivo,
                  ]}
                >
                  <Text
                    style={[
                      styles.actionButtonText,
                      activo === accion.id && styles.actionButtonTextActivo,
                    ]}
                  >
                    {accion.nombre}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <SafeAreaView style={styles.safeArea} edges={["top"]}>

          </SafeAreaView>
        </View>
        <MenuInferior />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  headerBackground: {
    flexDirection: "row",
    height: 110,
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  backButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 40,
    top: 55,
    left: 10,
    right: 0,
    bottom: 0,
  },

  backIcon: {
    flex: 1,
    width: 30,
    resizeMode: "contain",
  },

  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  headerSubtitle: {
    color: "#fff",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 6,
  },

  contentInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    paddingHorizontal: 10,
    gap: 10,
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#B3B6B7",
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    height: "100%",
  },

  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  filterContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#2DB96420",
    borderRadius: 100,
  },

  containerActions: {
    padding: 10,
  },

  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 100,
  },

  actionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 30,
    borderWidth: 1,
    borderColor: "#B3B6B7",
    borderRadius: 100,
  },

  actionButtonActivo: {
    borderWidth: 0,
    backgroundColor: "#2DB96490",
  },

  actionButtonText: {
    fontWeight: "bold",
    color: "#2DB964",
  },

  actionButtonTextActivo: {
    color: "#14532D",
  },

  safeArea: {
    flex: 1,
  },
});
