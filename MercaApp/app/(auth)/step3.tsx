import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import { router } from "expo-router";

export default function Step3() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>¿Cuál es tu nombre?</Text>
      </View>

      <View style={styles.containerInputs}>
        <View style={styles.fieldContainer}>
          {/* <Text style={styles.labelText}>Nombre</Text> */}
          <View style={styles.contentInput}>
            <TextInput placeholder="ingresa tu nombre" style={styles.input} />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          {/* <Text style={styles.labelText}>Apellido</Text> */}
          <View style={styles.contentInput}>
            <TextInput placeholder="ingresa tu apellido" style={styles.input} />
          </View>
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
          onPress={() => router.push("/resetPasswordStep4_Terms")}
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

  containerInputs: {
    gap: 15,
  },

  fieldContainer: {},

  contentInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingHorizontal: 14,
  },

  labelText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },

  input: {
    width: "100%",
    height: "100%",
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
