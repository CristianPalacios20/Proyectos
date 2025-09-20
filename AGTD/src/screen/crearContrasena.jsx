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

export default function crearContrasena() {
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => setScreen("resetearContrasena")}
            >
              <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image source={waveBottom} style={styles.waveBottom} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
