import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useResetPassword } from "../context/resetPasswordProvider";
import { useAuth } from "../context/AuthContext";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconPasswordCheck from "../../assets/icons/iconPasswordCheck.png";
import iconView from "../../assets/icons/iconView2.png";
import iconViewOff from "../../assets/icons/iconViewOff.png";
import waveBottom from "../../assets/img/wavesBottomBlack.png";

export default function crearContrasena() {
  const { userId } = useResetPassword();
  const { setScreen } = useAuth();
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isError, setIsError] = useState(false);

  const [buttons, setButtons] = useState({
    first: false,
    second: false,
  });

  const toggleButton = (key) => {
    setButtons((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const cambiarContrasena = async (e) => {
    e.preventDefault();

    if (!contrasena || !confirmar) {
      setMensaje("Debes completar ambos campos");
      setIsError(true);
      return;
    }

    if (contrasena !== confirmar) {
      setMensaje("Las constraseñas no coinciden");
      setIsError(true);
      return;
    }

    console.log("Payload enviado:", { userId, nuevaContrasena: contrasena });

    try {
      const response = await fetch(
        "http://192.168.1.2/proyectoEnReact-Backend/backend/back-end-AGT/cambiar_contrasena.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, nuevaContrasena: contrasena }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        setMensaje(data.message);
        setIsError(true);
      } else {
        // setUserId(data.userId);
        setMensaje("Contraseña actualizada correctamente");
        setIsError(false);
        setContrasena("");
        setConfirmar("");
      }
    } catch (error) {
      console.log("Error en la conexión", error);
      setMensaje("No se pudo conectar con el servidor");
    }
  };

  useEffect(() => {
    if (mensaje !== "") {
      const time = setTimeout(() => {
        setMensaje("");
      }, 5000);
    }
  }, [mensaje]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={40} // 👈 distancia en px entre el teclado y el input
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
          <View style={styles.wrapper}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => setScreen("login")}
              >
                <Image source={iconArrowBack} style={styles.headerIcon} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Crear contraseña</Text>
            </View>

            {/* Body */}
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View style={styles.body}>
                <View style={styles.imageContainer}>
                  <View style={styles.imageWrapper}>
                    <Image source={iconPasswordCheck} style={styles.image} />
                  </View>
                  <Text style={styles.description}>
                    Ingresa tu nueva contraseña
                  </Text>
                </View>

                {/* Formulario */}
                <View style={styles.form}>
                  <Text style={styles.label}>Contraseña nueva</Text>
                  <View
                    style={[
                      styles.inputContainer,
                      isError ? { borderColor: "red" } : {},
                    ]}
                  >
                    <TextInput
                      placeholder=""
                      secureTextEntry={!buttons.first}
                      value={contrasena}
                      onChangeText={setContrasena}
                      style={styles.input}
                    />
                    <TouchableOpacity
                      style={styles.buttonView}
                      onPress={() => toggleButton("first")}
                    >
                      <Image
                        source={buttons.first ? iconView : iconViewOff}
                        style={styles.iconView}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={[styles.label, styles.labelConfirmar]}>
                    Confirmar contraseña
                  </Text>
                  <View
                    style={[
                      styles.inputContainer,
                      isError ? { borderColor: "red" } : {},
                    ]}
                  >
                    <TextInput
                      placeholder=""
                      secureTextEntry={!buttons.second}
                      value={confirmar}
                      onChangeText={setConfirmar}
                      style={styles.input}
                    />
                    <TouchableOpacity
                      style={styles.buttonView}
                      onPress={() => toggleButton("second")}
                    >
                      <Image
                        source={buttons.second ? iconView : iconViewOff}
                        style={styles.iconView}
                      />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={cambiarContrasena}
                  >
                    <Text style={styles.buttonText}>Continuar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>

            {/* Mensaje */}
            {mensaje && (
              <View style={styles.contentMessage}>
                <View style={styles.message}>
                  <Text style={styles.textMessage}>{mensaje}</Text>
                </View>
              </View>
            )}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Image source={waveBottom} style={styles.waveBottom} />
    </KeyboardAvoidingView>
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
    gap: 5,
    padding: 20,
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    gap: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E7E5E4",
  },
  input: {
    width: "90%",
    height: "100%",
  },
  iconView: {
    width: 25,
    height: 25,
  },
  labelConfirmar: {
    marginTop: 10,
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
    left: 0,
    right: 0,
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
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#000",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textMessage: {
    color: "white",
    textAlign: "center",
  },
});
