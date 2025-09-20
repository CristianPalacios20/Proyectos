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

import { useAuth } from "../context/AuthContext";
export default function recuperarContrasena() {
  const { setScreen } = useAuth();

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
            <View style={styles.inputContainer}>
              <TextInput placeholder="correo@gmail.com" style={styles.input} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setScreen("resetearContrasena")}>
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <Image source={waveBottom} style={styles.waveBottom}/>
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
    bottom: 0,
    resizeMode: "contain"
  }
});
