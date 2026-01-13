import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";

export default function Step4() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>
          Acepta los Términos y revisa el Aviso de privacidad de MercaApp.
        </Text>
        <Text style={styles.secondaryText}>
          Al seleccionar Acepto a continuación, conformo que revisé los Términos
          de uso y reconozco que leí el Aviso de privacidad. Soy mayor de 18
          años.
        </Text>
      </View>

      <View style={styles.actionsWrapper}>
        <View style={styles.acceptContainer}>
          <Text style={styles.acceptText}>Aceptar</Text>
          <View style={styles.checkboxContainer}>
            <Image style={styles.checkboxIcon} />
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
            onPress={() => router.push("/home")}
            style={styles.nextButton}
          >
            <Text style={styles.nextText}>
              <Text style={styles.nextTextBold}>Siguiente</Text>
            </Text>
            <Image source={iconArrow1} style={styles.nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  textContainer: {
    gap: 40,
  },

  mainText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  secondaryText: {
    fontSize: 16,
  },

  actionsWrapper: {
    top: "45%",
    gap: 50,
  },

  acceptContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    borderTopWidth: 1,
  },

  acceptText: {},

  checkboxContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#979A9A",
  },

  checkboxIcon: {},

  buttonsContainer: {
    width: "100%",
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
