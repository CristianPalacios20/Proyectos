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

export default function Personas({ navigation }: any) {
  // const [activo, setActivo] = useState<number | null>(null);
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
              <Text style={styles.headerTitle}>Personas</Text>
              <Text style={styles.headerSubtitle}>
                Participantes de la natillera
              </Text>
            </View>
          </ImageBackground>
          
          <SafeAreaView edges={["top"]}>

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

  
});
