import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import { router } from "expo-router";

export default function Step2() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Ingresa tu dirección de correo electrónico
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Correo electrónico</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="nombre@ejemplo.com" style={styles.input} />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Image source={iconArrow} style={styles.imgBack} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/resetPasswordStep3_UserInfo")}
          style={styles.nextButton}
        >
          <Text style={styles.nextText}>
            <Text style={styles.nextTextBold}>Siguiente</Text>
          </Text>
          <Image source={iconArrow1} style={styles.nextIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "white",
  },

  titleContainer: {
    marginBottom: 30,
  },

  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },

  inputContainer: {
    gap: 8,
  },

  labelText: {
    fontSize: 14,
    color: "#555",
  },

  inputWrapper: {
    height: 45,
    borderWidth: 1,
    borderColor: "#E7E5E4",
    borderRadius: 12,
    paddingHorizontal: 14,
    justifyContent: "center",
  },

  input: {
    fontSize: 16,
    color: "#000",
  },
  buttonsContainer: {
    width: "100%",
    top: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#E7E5E4",
    borderRadius: 50,
  },

  imgBack: {
    width: 30,
    height: 30,
  },

  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
  },

  nextText: {
    fontSize: 14,
    color: "#FFF",
  },

  nextTextBold: {
    fontWeight: "600",
  },

  nextIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFF",
  },
});
