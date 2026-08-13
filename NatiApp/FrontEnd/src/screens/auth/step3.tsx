import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
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

export default function Step3({ navigation, route }: any) {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!mensaje) return;

    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [mensaje]);

  const manejarCambio = () => {
    if (nombres === "" || apellidos === "") {
      setMensaje("Por favor ingresa tus datos");
      setError(true);
      return;
    }

    navigation.replace("Step4");
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
              <Text style={styles.titleText}>¿Cuál es tu nombre?</Text>
            </View>

            <View style={styles.containerInputs}>
              <View style={[styles.fieldContainer]}>
                <View style={[styles.contentInput, error && styles.error]}>
                  <TextInput
                    placeholder="ingresa tu nombre"
                    value={nombres}
                    onChangeText={setNombres}
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.fieldContainer}>
                <View style={[styles.contentInput, error && styles.error]}>
                  <TextInput
                    placeholder="ingresa tu apellido"
                    value={apellidos}
                    onChangeText={setApellidos}
                    style={styles.input}
                  />
                </View>
              </View>
            </View>

            {mensaje && (
              <View style={styles.containerMessage}>
                <View style={styles.contentMessage}>
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

  containerInputs: {
    gap: 15,
  },

  fieldContainer: {
    paddingHorizontal: 20,
  },

  contentInput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 20,
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
  error: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
  },

  containerMessage: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },

  contentMessage: {
    width: "auto",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 20,
  },

  message: {
    color: "white",
  },
});
