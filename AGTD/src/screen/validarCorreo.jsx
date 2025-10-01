import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconRecuperarContrasena from "../../assets/icons/iconRecuperarContrasena.png";
import waveBottom from "../../assets/img/wavesBottomBlack.png";

import { useResetPassword } from "../context/resetPasswordProvider";
import { useAuth } from "../context/AuthContext";

export default function recuperarContrasena() {
  const [mensaje, setMensaje] = useState("");
  const { correo, setCorreo } = useResetPassword();
  const { setScreen } = useAuth();

  const enviarCódigo = async (e) => {
    e.preventDefault();
    if (correo.trim() === "") {
      setMensaje("Por favor ingresa tu correo");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.1.2/proyectoEnReact-Backend/backend/back-end-AGT/validar_correo.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo }),
        }
      );
      const data = await response.json();
      if (!data.success) {
        console.error("Error", data.message);
      } else {
        setMensaje("El código fue enviado a tu correo");
        setScreen("resetearContrasena", { correo });

        // setCorreo("");
      }
    } catch (error) {
      console.log("Error, no se pudo conectar al servidor");
    }
  };

  useEffect(() => {
    if (mensaje !== "") {
      const timer = setTimeout(() => {
        setMensaje("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => setScreen("login")}
          >
            <Image source={iconArrowBack} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Recuperar contraseña</Text>
        </View>

        <View style={styles.body}>
          {/* contenedor img */}
          <View style={styles.imageContainer}>
            <View style={styles.imageWrapper}>
              <Image source={iconRecuperarContrasena} style={styles.image} />
            </View>
            <Text style={styles.description}>
              Por favor ingrese su correo para recuperar contraseña
            </Text>
          </View>

          {/* formulario */}
          <View style={styles.form}>
            <Text style={styles.label}>Correo</Text>
            <View
              style={[
                styles.inputContainer,
                mensaje ? { borderColor: "red" } : {},
              ]}
            >
              <TextInput
                value={correo}
                onChangeText={setCorreo}
                placeholder="correo@gmail.com"
                style={styles.input}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={enviarCódigo}>
              <Text style={styles.buttonText}>Continuar</Text>
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
    backgroundColor: "#D6D3D1",
    borderRadius: 100,
  },
  image: {
    width: 50,
    height: 50,
  },
  description: {
    width: 250,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    marginTop: 40,
    gap: 5,
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
  },
  inputContainer: {
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E7E5E4",
  },
  input: {
    width: "100%",
    height: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginTop: 20,
    backgroundColor: "black",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 16,
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
    borderRadius: 40,
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
