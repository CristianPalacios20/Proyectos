import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

import colores from "../../assets/theme/colores";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Step2({ navigation }: any) {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorCorreo, setErrorCorreo] = useState(false);

  useEffect(() => {
    if (!mensaje) return;

    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [mensaje]);

  const validarCambioCorreo = (text: string) => {
    setCorreo(text);

    if (text.trim() === "") {
      setErrorCorreo(true);
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

    setErrorCorreo(!emailValido);
  };

  const manejarCambio = () => {
    if (correo.trim() === "" || errorCorreo) {
      setMensaje("Ingresa un correo válido");
      setErrorCorreo(true);
      return;
    }
    navigation.replace("Step3");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }} edges={["top"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                Ingresa tu dirección de correo electrónico
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.labelText}>Correo electrónico</Text>
              <View
                style={[styles.inputWrapper, errorCorreo && styles.errorCorreo]}
              >
                <TextInput
                  placeholder="nombre@ejemplo.com"
                  value={correo}
                  onChangeText={validarCambioCorreo}
                  keyboardType="email-address"
                  style={[styles.input]}
                />
              </View>
            </View>

            {mensaje && (
              <View style={styles.contentMessage}>
                <View style={styles.message}>
                  <Text style={styles.textMessage}>{mensaje}</Text>
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
                onPress={() => manejarCambio()}
                style={styles.nextButton}
              >
                <Text style={styles.nextText}>Siguiente</Text>
                <Image source={iconArrow1} style={styles.nextIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    // paddingTop: 20,
    backgroundColor: "white",
  },

  titleContainer: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  titleText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },

  inputContainer: {
    gap: 8,
    paddingHorizontal: 20,
  },

  labelText: {
    fontSize: 14,
    // fontWeight: "bold"
  },

  inputWrapper: {
    height: 45,
    borderWidth: 1,
    borderColor: "#E7E5E4",
    borderRadius: 20,
    paddingHorizontal: 14,
    justifyContent: "center",
  },

  input: {
    fontSize: 16,
    color: "#000",
  },

  errorCorreo: {
    borderWidth: 1,
    borderColor: "red",
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
    fontWeight: "600",
    color: colores.textoClaro,
  },

  nextTextBold: {},

  nextIcon: {
    width: 25,
    height: 25,
    tintColor: "#FFF",
  },

  contentMessage: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },

  message: {
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  textMessage: {
    color: "white",
  },
});
