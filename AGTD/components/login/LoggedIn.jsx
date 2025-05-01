import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Logo from "../../assets/logo/logo-icon2-transparent.png";

export default function Login({ setIsLoggedIn, goToRegister }) {
  return (
    <View style={stylesLogin.content}>
      <View style={stylesLogin.contentTitle}>
        <Text style={stylesLogin.title}>
          AGT<Text style={{ color: "#28a3f6" }}>D</Text>
        </Text>
      </View>
      <View style={stylesLogin.logoSection}>
        <Image source={Logo} style={stylesLogin.imgLogoLogin} />
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
            onPress={() => setIsLoggedIn(true)}
          >
            <Text style={stylesLogin.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesLogin.buttonRegister}
            onPress={goToRegister}
          >
            <Text style={stylesLogin.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const stylesLogin = StyleSheet.create({
  content: {
    flex: 1,
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
    height: 330,
    bottom: 50,
    resizeMode: "contain",
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
  },
  buttonRegister: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#28a3f6",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#28a3f6",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
