import { router, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  TouchableNativeFeedback,
} from "react-native";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";

export default function Step1() {
  const [codigo, setCodigo] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const [mensaje, setMensaje] = useState("");

  const { phone, usuarioExiste } = useLocalSearchParams<{
    phone?: string;
    usuarioExiste?: string;
  }>();

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
      router.replace("/(tabs)/home");
    } else {
      router.replace("/(auth)/step2");
    }
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textDescription}>
            Ingresa el código de 4 dígitos enviado a través de SMS al
          </Text>
          <Text style={styles.phoneNumber}>#</Text>
        </View>

        <View style={styles.codeContainer}>
          {codigo.map((digito, index) => (
            <View key={index} style={styles.inputBox}>
              <TextInput
                ref={(ref) => {
                  inputsRef.current[index] = ref;
                }}
                style={styles.codeInput}
                keyboardType="numeric"
                maxLength={1}
                value={digito}
                onChangeText={(text) => manejarCambio(text, index)}
                onKeyPress={(e) => manejarKeyPress(e, index)}
              />
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={[styles.actionItem]}>
            <Text style={styles.actionText}>Reenviar código de SMS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionItem, styles.actionItemLlamarme]}
          >
            <Text style={styles.actionText}>Llamarme</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Image source={iconArrow} style={styles.imgBack} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => validarCodigo()}
            style={styles.nextButton}
          >
            <Text style={styles.nextText}>
              <Text style={styles.nextTextBold}>Siguiente</Text>
            </Text>
            <Image source={iconArrow1} style={styles.nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    position: "relative",
  },

  textContainer: {
    gap: 10,
  },

  textDescription: {
    fontSize: 24,
    color: "#444",
  },

  phoneNumber: {
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
  },

  codeContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 30,
  },

  inputBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: "#DDD",
    justifyContent: "center",
    alignItems: "center",
  },

  codeInput: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    borderBottomWidth: 1,
    borderColor: "#B3B6B7",
  },

  actionsContainer: {
    marginBottom: 20,
    gap: 11,
  },

  actionItem: {
    alignItems: "center",
    width: 205,
    height: 30,
    paddingVertical: 8,
    backgroundColor: "#E7E5E4",
    borderRadius: 50,
  },

  actionItemLlamarme: {
    width: 119,
    paddingVertical: 6,
  },

  actionText: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },

  buttonsContainer: {
    width: "100%",
    top: "40%",
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
