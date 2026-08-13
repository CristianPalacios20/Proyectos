import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";

import ProgressSteps from "../../components/progress/ProgressSteps";
import { pasosRegistro } from "../../components/progress/progessSteps";
import colores from "../../assets/theme/colores";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import iconOk2 from "../../assets/icons/iconOk2.png";

export default function Step1({ navigation, route }: any) {
  const [codigo, setCodigo] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const [inputActive, setInputActive] = useState<number | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [tiempo, setTiempo] = useState(30);
  const [puedeReenviar, setPuedeReenviar] = useState(false);
  const { login } = useAuth();

  const { phone, usuarioExiste } = route?.params ?? {};

  const manejarCambio = (text: string, index: number) => {
    const valor = text.replace(/[^0-9]/g, "");

    const nuevoCodigo = [...codigo];
    nuevoCodigo[index] = valor[0];
    setCodigo(nuevoCodigo);

    if (index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const manejarKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !codigo[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const validarCodigo = () => {
    const codigoFinal = codigo.join("");

    if (codigoFinal.length !== 4) {
      setMensaje("Código incompleto");
      return;
    }

    if (codigoFinal !== "1234") {
      alert("Código incorrecto");
      setCodigo(["", "", "", ""]);
      return;
    }

    const usuarioExiste = phone === "3121234567";

    if (usuarioExiste === true) {
      login();
    } else {
      navigation.replace("Step2", { phone });
    }
  };

  useEffect(() => {
    if (puedeReenviar) return;

    const intervalo = setInterval(() => {
      setTiempo((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          setPuedeReenviar(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalo);
  }, [puedeReenviar]);

  const reenvIarCodigo = () => {
    setTiempo(30);
    setPuedeReenviar(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} edges={["top"]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableNativeFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIconContainer}></View>
              <Text style={styles.logoText}>NatiApp</Text>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
              <ProgressSteps
                pasos={pasosRegistro}
                pasoActual={2}
                icono={iconOk2}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textTitle}>
                Ingresa el código de 4 dígitos
              </Text>
              <Text style={styles.textDescription}>Enviamos un SMS a</Text>
              <Text style={styles.phoneNumber}>(+57) {phone} </Text>
            </View>

            <View style={styles.containerCode}>
              <View style={styles.codeContainer}>
                {codigo.map((digito, index) => (
                  <View
                    key={index}
                    style={[
                      styles.inputBox,
                      inputActive === index && styles.codeInputFocused,
                    ]}
                  >
                    <TextInput
                      ref={(ref) => {
                        inputsRef.current[index] = ref;
                      }}
                      style={[styles.codeInput]}
                      keyboardType="numeric"
                      maxLength={1}
                      value={digito}
                      onFocus={() => setInputActive(index)}
                      onBlur={() => setInputActive(null)}
                      onChangeText={(text) => manejarCambio(text, index)}
                      onKeyPress={(e) => manejarKeyPress(e, index)}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.resendContainer}>
                <Text style={styles.resendLabel}>¿No recibiste el código?</Text>

                <TouchableOpacity
                  disabled={!puedeReenviar}
                  onPress={reenvIarCodigo}
                  style={[
                    styles.resendButton,
                    !puedeReenviar && styles.resendButtonDisabled,
                  ]}
                >
                  <Text
                    style={[
                      styles.resendButtonText,
                      !puedeReenviar && styles.resendButtonTextDisabled,
                    ]}
                  >
                    {puedeReenviar
                      ? "Reenviar código"
                      : `Reenviar en ( ${tiempo}s )`}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Image source={iconArrow} style={styles.imgBack} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => validarCodigo()}
                style={styles.nextButton}
              >
                <Text style={styles.nextText}>Siguiente</Text>
                <Image source={iconArrow1} style={styles.nextIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },

  logoContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },

  logoIconContainer: {},

  logoText: {
    fontSize: 20,
    fontFamily: "Hubot-Sans",
    fontWeight: "bold",
  },

  textContainer: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  textDescription: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7B7D7D",
  },

  phoneNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  containerCode: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },

  resendContainer: {
    flexDirection: "row",
    gap: 5,
  },

  resendLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#B3B6B7",
  },

  resendButton: {},

  resendButtonDisabled: {
    opacity: 0.5,
  },

  resendButtonTextDisabled: {
    fontWeight: "bold",
    color: "#999",
  },

  resendButtonText: {
    fontWeight: "bold",
  },

  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  inputBox: {
    width: 55,
    height: 61,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },

  codeInputFocused: {
    borderColor: "#2DB964",
    borderWidth: 2,
  },

  codeInput: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    borderColor: "#B3B6B7",
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

  nextTextBold: {
  },

  nextIcon: {
    width: 25,
    height: 25,
    tintColor: "#FFF",
  },
});
