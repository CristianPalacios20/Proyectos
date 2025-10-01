import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useResetPassword } from "../context/resetPasswordProvider";
import { useAuth } from "../context/AuthContext";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconResetearContrasena from "../../assets/icons/iconResetearContrasena.png";
import waveBottom from "../../assets/img/wavesBottomBlack.png";
import { useRef, useState, useEffect } from "react";

export default function verificarCodigo() {
  const { correo, codigo, setCodigo, setUserId } = useResetPassword();
  const { setScreen } = useAuth();
  const [mensaje, setMensaje] = useState("");

  const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handelChange = (text, index) => {
    let newCodigo = [...codigo];
    newCodigo[index] = text;
    setCodigo(newCodigo);

    if (text && index < 3) {
      inputsRef[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backpace" && codigo[index] === "" && index > 0) {
      inputsRef[index - 1].focus();
    }
  };

  const validarCodigo = async (e) => {
    e.preventDefault();

    const codigoFinal = codigo.join("");

    if (codigoFinal.length < 4) {
      setMensaje("Debes de ingresar los 4 dígitos");
      return;
    }

    try {
      const reponse = await fetch(
        "http://192.168.1.2/proyectoEnReact-Backend/backend/back-end-AGT/verificar_codigo.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo, codigo: codigoFinal }),
        }
      );

      const data = await reponse.json();

      if (!data.success) {
        setMensaje(data.message);
      } else {
        setMensaje("Código validado correctamente ");
        setScreen("crearContrasena", { userId: data.userId });
        setUserId(data.userId);

        setCodigo(["", "", "", ""]);
      }
    } catch (error) {
      console.log("Error al conectar con el servidor", error);
      setMensaje("Error al conectar con el servidor");
    }
  };

  useEffect(() => {
    if (mensaje !== "") {
      const timer = setTimeout(() => {
        setMensaje("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => setScreen("recuperarContrasena")}
            >
              <Image source={iconArrowBack} style={styles.headerIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Validar código</Text>
          </View>

          {/* Body */}
          <View style={styles.body}>
            {/* Imagen + texto */}
            <View style={styles.imageContainer}>
              <View style={styles.imageWrapper}>
                <Image source={iconResetearContrasena} style={styles.image} />
              </View>
              <Text style={styles.description}>
                Por favor ingrese el código de 4 dígitos enviado al correo:
              </Text>
              <Text>{correo}</Text>
            </View>

            {/* Inputs + botones */}
            <View style={styles.form}>
              <View style={styles.codeInputs}>
                {[...Array(4)].map((_, index) => (
                  <View key={index} style={styles.codeBox}>
                    <TextInput
                      ref={(el) => (inputsRef[index] = el)}
                      maxLength={1}
                      keyboardType="numeric"
                      onChangeText={(text) => handelChange(text, index)}
                      value={codigo[index]}
                      style={styles.codeInput}
                    />
                  </View>
                ))}
              </View>

              <TouchableOpacity style={styles.resendButton}>
                <Text style={styles.resendText}>Reenviar código</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.verifyButton}
                onPress={validarCodigo}
              >
                <Text style={styles.verifyText}>Verificar</Text>
              </TouchableOpacity>
            </View>
          </View>
          {mensaje && (
            <View style={styles.contentMessage}>
              <View style={styles.message}>
                <Text style={styles.textMessage}>{mensaje}</Text>
              </View>
            </View>
          )}
        </View>
        <Image source={waveBottom} style={styles.waveBottom} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonBack: {
    position: "absolute",
    justifyContent: "center",
    left: 20,
    width: 40,
    height: 40,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 140,
    marginTop: 50,
    backgroundColor: "#E7E5E4",
    borderRadius: 100,
  },
  image: {
    width: 50,
    height: 50,
  },
  description: {
    flexDirection: "column",
    width: 240,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    gap: 20,
  },
  codeInputs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  codeBox: {
    width: 50,
    height: 50,
    // borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  },
  codeInput: {
    height: "100%",
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "#B3B6B7",
    fontSize: 18,
  },
  resendButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  resendText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0099FF",
  },
  verifyButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
  },
  verifyText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  waveBottom: {
    position: "absolute",
    width: "100%",
    height: 150,
    bottom: 0,
    resizeMode: "cover",
  },
  contentMessage: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    width: "100%",
  },
  message: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textMessage: {
    color: "white",
    fontWeight: "bold",
  },
});
