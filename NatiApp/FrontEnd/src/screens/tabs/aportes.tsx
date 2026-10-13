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
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import frameHeader from "../../assets/images/frameHeader.png";
import iconBack from "../../assets/icons/iconBack.png";
import iconSearch from "../../assets/icons/iconSearch.png";

import MenuInferior from "../../components/menus/menuInferior";

export default function Aportes({ navigation }: any) {
  const [filtro, setFiltro] = useState<"pendientes" | "activos">("pendientes");
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.content}>
          <StatusBar style="light" />
          <ImageBackground source={frameHeader} style={styles.headerBackground}>
            <SafeAreaView edges={["top"]} style={styles.headerContent}>
              <View style={styles.headerTop}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={[styles.backButton]}
                >
                  <Image source={iconBack} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                  <Text style={styles.headerTitle}>Aportes / </Text>
                  <Text style={styles.statusTitle}>
                    {filtro === "pendientes" ? "Pendientes" : "Activos"}
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <View style={styles.estadoFilterContainer}>
              <View style={styles.estadoContainer}>
                <TouchableOpacity
                  style={[
                    styles.estadoButton,
                    filtro === "pendientes" && styles.estadoButtonActivo,
                    filtro === "pendientes" && styles.nn,
                  ]}
                  onPress={() => setFiltro("pendientes")}
                >
                  <View style={styles.estadoButtonTextContainer}>
                    <Text style={styles.estadoButtonText}>Pendientes</Text>
                  </View>

                  {filtro === "pendientes" && (
                    <View style={[styles.estadoButtonCountContainer]}>
                      <Text style={styles.estadoButtonCount}>4</Text>
                    </View>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.estadoButton,
                    filtro === "activos" && styles.estadoButtonActivo,
                    filtro === "activos" && styles.n1,
                  ]}
                  onPress={() => setFiltro("activos")}
                >
                  {filtro === "activos" && (
                    <View style={[styles.estadoButtonCountContainer]}>
                      <Text style={styles.estadoButtonCount}>9</Text>
                    </View>
                  )}

                  <View style={styles.estadoButtonTextContainer}>
                    <Text style={styles.estadoButtonText}>Activos</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.searchContainer}>
              <View style={styles.contentInput}>
                <Image source={iconSearch} style={styles.searchIcon} />

                <TextInput
                  placeholder="Buscar participante"
                  style={styles.searchInput}
                />
              </View>
            </View>

            <ScrollView />
          </View>
        </View>
        <View></View>
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  backButton: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 40,
    height: 40,
  },

  backIcon: {
    flex: 1,
    width: 30,
    resizeMode: "contain",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  statusTitle: {
    paddingTop: 5,
    color: "#ffffff82",
  },

  headerTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  contentContainer: {},

  estadoFilterContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  estadoContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    height: 35,
    borderWidth: 1,
    borderColor: "#B3B6B7",
    borderRadius: 100,
  },

  estadoButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 5,
    borderRadius: 100,
  },

  nn: {
    backgroundColor: "#2DB96440",
    borderColor: "red",
  },

  n1: {
    backgroundColor: "#2DB96440",
    borderColor: "red",
  },

  estadoButtonActivo: {
    gap: 5,
  },

  estadoButtonTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  estadoButtonText: {},

  estadoButtonCountContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderRadius: 100,
    // display: "none",
  },

  estadoButtonCountContainerVisible: {
    display: "flex",
  },

  estadoButtonCount: {},

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
});
