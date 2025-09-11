import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

import logo from "../../assets/img/imgInicioII.png";

export default function Login({ setIsLoggedIn, goToRegister }) {
  const [loadingButton, setLoadingButton] = useState(null);

  const handleDelayedAction = (action, buttonKey, delay = 2000) => {
    setLoadingButton(buttonKey);
    setTimeout(() => {
      setLoadingButton(null);
      action();
    }, delay);
  };
  return (
    <SafeAreaView edges={["top"]} style={stylesLogin.content}>
      <View style={stylesLogin.contentTitle}>
        <Text style={stylesLogin.title}>
          AG<Text style={{ color: "#28a3f6" }}>T</Text>
        </Text>
      </View>
      <View style={stylesLogin.logoSection}>
        <Image source={logo} style={stylesLogin.imgLogoLogin} />
        <View style={stylesLogin.motivationalTextContainer}>
          <Text style={stylesLogin.motivationalText}>
            Cada día cuenta. <Text style={{ color: "#00ADEF" }}>Organiza</Text>,{" "}
            <Text style={{ color: "#F39C12" }}>actúa</Text> y{" "}
            <Text style={{ color: "#FF6B6B" }}>florece</Text>.
          </Text>
        </View>
        <View style={stylesLogin.buttonContainer}>
          <TouchableOpacity
            style={stylesLogin.buttonLogin}
            disabled={loadingButton !== null}
            onPress={() => handleDelayedAction(setIsLoggedIn, "login")}
          >
            {loadingButton === "login" ? (
              <View>
                <ActivityIndicator size="small" color="white" />
              </View>
            ) : (
              <Text style={stylesLogin.buttonText}>Iniciar sesión</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesLogin.buttonRegister}
            disabled={loadingButton !== null}
            onPress={() => handleDelayedAction(goToRegister, "register")}
          >
            {loadingButton === "register" ? (
              <View>
                <ActivityIndicator size="small" color="white" />
              </View>
            ) : (
              <Text style={stylesLogin.buttonText}>Registrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesLogin = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  contentTitle: {
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  logoSection: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    padding: 20,
  },
  imgLogoLogin: {
    right: "8%",
    width: 400,
    height: 300,
    bottom: 50,
    resizeMode: "cover",
  },
  motivationalTextContainer: {},
  motivationalText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    gap: 10,
    top: 20,
  },
  buttonRegister: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
});
