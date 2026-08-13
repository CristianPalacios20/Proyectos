// import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import iconOk from "../../assets/icons/iconOk1.png";
import iconOk2 from "../../assets/icons/iconOk2.png";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../../context/AuthContext";

export default function Step4({ navigation }: any) {
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [esError, setEsError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const { login } = useAuth();

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

  const finalizarRegistro = () => {
    if (!aceptarTerminos) {
      setMensaje("Debes aceptar los términos y condiciones");
      setEsError(true);
      return;
    }
    login();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top"]}>
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

          {mensaje && (
            <View style={styles.messageContainer}>
              <View style={styles.messageContent}>
                <Image
                  style={styles.image}
                  source={esError ? iconOk : iconOk}
                />
                <Text style={styles.message}>{mensaje}</Text>
              </View>
            </View>
          )}

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image source={iconArrow} style={styles.imgBack} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => finalizarRegistro()}
              disabled={!aceptarTerminos}
              style={[
                styles.nextButton,
                !aceptarTerminos && styles.nextTextDisabled,
              ]}
            >
              <Text style={styles.nextText}>Siguiente</Text>
              <Image source={iconArrow1} style={styles.nextIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  textContainer: {
    gap: 40,
    paddingHorizontal: 20,
  },

  mainText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  secondaryText: {
    fontSize: 16,
  },

  actionsWrapper: {
    flex: 1,
    marginTop: 10,
  },

  acceptContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 60,
    borderTopRightRadius: 100,
  },

  imgBack: {
    width: 30,
    height: 30,
  },

  nextButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    width: 240,
    height: 70,
    padding: 10,
    backgroundColor: "#2DB964",
    borderTopLeftRadius: "100%",
  },

  nextText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  nextTextDisabled: {
    backgroundColor: "#CCC",
  },

  nextIcon: {
    width: 25,
    height: 25,
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
