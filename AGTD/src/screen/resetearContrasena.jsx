import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconResetearContrasena from "../../assets/icons/iconResetearContrasena.png";
import waveBottom from "../../assets/img/wavesBottomBlack.png";

export default function resetearContrasena() {
  const { setScreen } = useAuth();

  return (
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
          <Text style={styles.headerTitle}>Recuperar contraseña</Text>
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
            <Text>cristian1gmail.com</Text>
          </View>

          {/* Inputs + botones */}
          <View style={styles.form}>
            <View style={styles.codeInputs}>
              <View style={styles.codeBox}>
                <TextInput style={styles.codeInput} />
              </View>
              <View style={styles.codeBox}>
                <TextInput style={styles.codeInput} />
              </View>
              <View style={styles.codeBox}>
                <TextInput style={styles.codeInput} />
              </View>
              <View style={styles.codeBox}>
                <TextInput style={styles.codeInput} />
              </View>
            </View>

            <TouchableOpacity style={styles.resendButton}>
              <Text style={styles.resendText}>Reenviar código</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.verifyButton}
              onPress={() => setScreen("crearContrasena")}
            >
              <Text style={styles.verifyText}>Verificar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image source={waveBottom} style={styles.waveBottom} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  buttonBack: {
    position: "absolute",
    justifyContent: "center",
    left: 0,
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
    // borderWidth: 1,
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
    borderWidth: 2,
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
    bottom: 0,
    resizeMode: "contain",
  },
});
