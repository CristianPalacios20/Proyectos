// import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import iconOk from "../../assets/icons/iconOk1.png";
import iconOk2 from "../../assets/icons/iconOk2.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Step4({ navigation }: any) {
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [esError, setEsError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [mensaje]);

  const aceptar = () => {
    setAceptarTerminos((prev) => {
      const nuevoValor = !prev;
      setMensaje(
        nuevoValor
          ? "Términos aceptados"
          : "Debes aceptar los términos y condiciones",
      );

      setEsError(!nuevoValor);

      return nuevoValor;
    });
  };

  const irSiguiente = () => {
    if (!aceptarTerminos) {
      setMensaje("Debes aceptar los términos y condiciones");
      setEsError(true);
      return;
    }
    navigation.replace("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            Acepta los Términos y revisa el Aviso de privacidad de MercaApp.
          </Text>
          <Text style={styles.secondaryText}>
            Al seleccionar Acepto a continuación, conformo que revisé los
            Términos de uso y reconozco que leí el Aviso de privacidad. Soy
            mayor de 18 años.
          </Text>
        </View>

        <View style={styles.actionsWrapper}>
          <View style={styles.acceptContainer}>
            <Text style={styles.acceptText}>Aceptar</Text>
            <TouchableOpacity
              onPress={() => aceptar()}
              style={[
                styles.checkboxContainer,
                aceptarTerminos ? styles.mostarImage : styles.ocultarImage,
              ]}
            >
              <Image
                source={iconOk2}
                style={[styles.checkboxIcon, { opacity: esError ? 0 : 1 }]}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image source={iconArrow} style={styles.imgBack} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => irSiguiente()}
              disabled={!aceptarTerminos}
              style={[
                styles.nextButton,
                !aceptarTerminos && styles.nextTextDisabled,
              ]}
            >
              <Text style={styles.nextText}>
                <Text style={styles.nextTextBold}>Siguiente</Text>
              </Text>
              <Image source={iconArrow1} style={styles.nextIcon} />
            </TouchableOpacity>
          </View>
        </View>
        {mensaje && (
          <View style={styles.messageContainer}>
            <View style={styles.messageContent}>
              <Image style={styles.image} source={esError ? iconOk : iconOk} />
              <Text style={styles.message}>{mensaje}</Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
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
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#979A9A",
  },

  mostarImage: {
    backgroundColor: "black",
    borderWidth: 0,
  },

  ocultarImage: {
    backgroundColor: "white",
  },

  checkboxIcon: {
    width: 10,
    height: 10,
    opacity: 0,
  },

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

  nextTextDisabled: {
    backgroundColor: "#CCC",
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

  messageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    top: "15%",
  },

  messageContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    gap: 8,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 20,
  },

  image: {
    width: 20,
    height: 20,
  },

  message: {
    color: "white",
  },
});
