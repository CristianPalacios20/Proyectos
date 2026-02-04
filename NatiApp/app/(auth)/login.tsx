import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { router } from "expo-router";

import colores from "../../assets/theme/colores"

import iconUser from "../../assets/icons/iconUserII.png";
import iconApple from "../../assets/icons/iconApple.png";
import iconGoogle from "../../assets/icons/iconGoogle.png";


export default function Login() {
  const [phone, setPhone] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [mensaje]);

  const manejarCambio = (texto: string) => {
    const soloNumeros = texto.replace(/[^0-9]/g, "");
    setPhone(soloNumeros);
  };

  const validarNumero = (phone: string) => {
    if (!phone.startsWith("3")) return false;
    if (phone.length !== 10) {
      setMensaje("Ingresa un número válido de 10 números");
      return;
    }
    return true;
  };

  const onNext = async () => {
    if (phone === "") {
      setMensaje("Por favor ingresa tu número de celular");
      return;
    }

    if (!validarNumero(phone)) {
      setMensaje("Número inválido");
      return;
    }

    router.push({
      pathname: "/(tabs)/home",
      params: { phone },
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>NatiApp</Text>
        </View>
        {/* ------------------------------------ */}
        <View style={styles.phoneContainer}>
          <Text style={styles.phoneLabel}>Número de teléfono móvil</Text>
          <View style={styles.phoneInputWrapper}>
            {/* <View style={styles.flagContainer}>
              <Text style={styles.arrow}>flecha</Text>
            </View> */}
            <View style={styles.inputAndIcon}>
              <View style={styles.textAndInput}>
                <Text style={styles.placeholderText}>+57</Text>
                <TextInput
                  value={phone}
                  onChangeText={manejarCambio}
                  keyboardType="numeric"
                  placeholder="Ingresa tu número"
                  style={styles.phoneInput}
                />
              </View>
              <Image source={iconUser} style={styles.phoneImage} />
            </View>
          </View>
        </View>
        {/* ------------------------------------ */}
        <TouchableOpacity
          onPress={() => onNext()}
          style={styles.buttonContinue}
        >
          <Text style={styles.buttonContinueText}>Continuar</Text>
        </TouchableOpacity>
        {/* ------------------------------------ */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.separatorText}>O</Text>
          <View style={styles.separatorLine}></View>
        </View>
        {/* ------------------------------------ */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={iconApple} style={styles.socialButtonImage} />
            <Text style={styles.socialButtonText}>Continúe con Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={iconGoogle} style={styles.socialButtonImage} />
            <Text style={styles.socialButtonText}>Continúe con Google</Text>
          </TouchableOpacity>
        </View>
        {mensaje !== "" && (
          <View style={styles.message}>
            <Text style={styles.textMessage}>{mensaje}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontFamily: "Inspiration",
  },
  contentTitle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  phoneContainer: {
    gap: 11,
    width: "100%",
  },
  phoneLabel: {
    fontSize: 16,
  },
  phoneInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    width: "100%",
    overflow: "hidden",
  },
  // flagContainer: {
  //   width: 72,
  //   height: 45,
  //   paddingVertical: 5,
  //   paddingHorizontal: 8,
  //   backgroundColor: "#E7E5E4",
  //   borderRadius: 10,
  // },
  // arrow: {},
  inputAndIcon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    paddingHorizontal: 12,
    backgroundColor: "#E7E5E4",
    borderRadius: 10,
  },
  textAndInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  placeholderText: {},
  phoneInput: {
    flex: 1,
    height: 45,
    // color: "blue"
  },
  phoneImage: {
    width: 23,
    height: 23,
    resizeMode: "cover",
  },
  buttonContinue: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colores.botonPrimario,
    borderRadius: 10,
  },
  buttonContinueText: {
    color: colores.textoClaro,
    fontSize: 16,
    fontWeight: "bold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  separatorLine: {
    width: 161,
    borderWidth: 1,
    borderColor: "#7b7d7d7a",
  },
  separatorText: {},
  socialContainer: {
    width: "100%",
    marginTop: 20,
    gap: 11,
    // borderWidth: 1,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    gap: 7,
    borderWidth: 1,
    borderColor: "#7B7D7D",
    borderRadius: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: colores.textoOscuro
  },
  socialButtonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  message: {
    borderWidth: 1,
    position: "absolute",
    minWidth: 150,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "black",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  textMessage: {
    fontWeight: "500",
    color: "white",
  },
});
