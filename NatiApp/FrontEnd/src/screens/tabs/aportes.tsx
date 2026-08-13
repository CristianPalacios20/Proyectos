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

export default function Aportes({ navigation }: any) {
  // const [activo, setActivo] = useState<number | null>(null);
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
                  style={styles.backButton}
                >
                  <Image source={iconBack} style={styles.backIcon} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Aportes</Text>
              </View>

              <TouchableOpacity style={styles.newLoanButton}>
                <Text style={styles.newLoanButtonText}>Nuevo préstamo</Text>

                <Image style={styles.newLoanButtonIcon} />
              </TouchableOpacity>
            </SafeAreaView>
          </ImageBackground>

          <SafeAreaView edges={["top"]}></SafeAreaView>
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
    borderWidth: 1,
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
    borderWidth: 1,
  },

  backIcon: {
    flex: 1,
    width: 30,
    resizeMode: "contain",
  },

  headerTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },

  newLoanButton: {},

  newLoanButtonText: {},

  newLoanButtonIcon: {},

  headerSubtitle: {
    color: "#fff",
  },
});
