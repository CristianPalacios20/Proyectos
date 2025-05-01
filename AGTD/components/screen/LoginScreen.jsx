import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
} from "react-native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import ArrowLeft from "../../assets/icons/arrowLeft.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconGmail from "../../assets/icons/iconGmail.png";

{
  /* <TouchableOpacity onPress={onGoBack}>
<Text>Volver</Text>
</TouchableOpacity> */
}

export default function LoginScreen({ onLoginSuccess, onGoBack }) {
  return (
    <View style={stylesLoginScreen.conteiner}>
      <TouchableOpacity onPress={onGoBack} style={stylesLoginScreen.return}>
        <Image source={iconArrowBack} style={stylesLoginScreen.iconArrowBack} />
        <Text style={{ fontSize: 18 }}>Volver</Text>
      </TouchableOpacity>
      <View style={stylesLoginScreen.header}>
        <View style={stylesLoginScreen.headerTextContainer}>
          <Text style={stylesLoginScreen.title}>¡HOLA!</Text>
          <Text style={stylesLoginScreen.text}>Ingresa con tu cuenta</Text>
        </View>
        <View style={stylesLoginScreen.contentInputs}>
          <View style={stylesLoginScreen.contentInputUser}>
            <Image source={iconUser} style={stylesLoginScreen.iconUser} />
            <TextInput placeholder="Usuario" style={stylesLoginScreen.input} />
          </View>
          <View style={stylesLoginScreen.contentInputPass}>
            <Image
              source={iconLockPassword}
              style={stylesLoginScreen.iconUser}
            />
            <TextInput placeholder="password" style={stylesLoginScreen.input} />
            <TouchableOpacity
              onPress={() => alert("Mostrar password")}
              style={stylesLoginScreen.buttonView}
            >
              <Image source={iconView} style={stylesLoginScreen.iconView} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => alert("Recuperar contraseña")}
            style={stylesLoginScreen.buttonPass}
          >
            <Text style={stylesLoginScreen.forgotPass}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onLoginSuccess}
          style={stylesLoginScreen.buttonLogin}
        >
          <View style={stylesLoginScreen.contentTextLogin}>
            <Text style={stylesLoginScreen.textLogin}>Iniciar</Text>
            <ImageBackground style={stylesLoginScreen.contentImg}>
              <Image source={ArrowLeft} style={stylesLoginScreen.imgLogin} />
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <View style={stylesLoginScreen.contentRedes}>
        <View style={stylesLoginScreen.registerContainer}>
          <Text style={stylesLoginScreen.textCreateAccount}>
            Inicia sesión o
          </Text>
          <TouchableOpacity style={stylesLoginScreen.registerButton}>
            <Text style={stylesLoginScreen.textButton}>Crea una</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesLoginScreen.contentIcons}>
          <Image source={iconFacebook} style={stylesLoginScreen.iconFacebook} />
          <Image source={iconGmail} style={stylesLoginScreen.iconGmail} />
        </View>
      </View>
    </View>
  );
}

const stylesLoginScreen = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  return: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    padding: 10,
    gap: 10,
  },
  iconArrowBack: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#28a3f6",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7b7d7d",
  },
  input: {
    width: "80%",
  },
  contentInputs: {
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    gap: 20,
  },
  contentInputUser: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "white",
  },
  iconUser: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  contentInputPass: {
    flexDirection: "row",
    gap: 10,
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "white",
  },
  iconLockPassword: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  buttonView: {
    left: "60%",
  },
  iconView: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  buttonPass: {
    alignItems: "center",
    width: 200,
    left: "43%",
  },
  forgotPass: {
    fontWeight: "bold",
    color: "#a6acaf",
  },
  buttonLogin: {
    left: "22%",
    top: "10%",
  },
  contentTextLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    gap: 15,
  },
  textLogin: {
    fontSize: 40,
    fontWeight: "bold",
  },
  contentImg: {
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: "#28a3f6",
  },
  imgLogin: {
    width: 30,
    height: 20,
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  contentRedes: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
    gap: 20,
  },
  textCreateAccount: {
    fontSize: 16,
  },
  textButton: {
    color: "#28a3f6",
  },
  contentIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  iconFacebook: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  iconGmail: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
