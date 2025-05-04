import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Platform,
} from "react-native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import ArrowLeft from "../../assets/icons/arrowLeft.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconGmail from "../../assets/icons/iconGmail.png";

import datasUser from "../json/Users.json";

export default function RegisterScreen({ onGoBack, onRegisterSuccess }) {
  const [ocultar, setOcultar] = useState(true);
  const [usuarios, setUsuarios] = useState(datasUser.usuarios || []);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const registrarUser = () => {
    if (correo.trim() === "" && contrasena.trim() === "") {
      alert("Debes completar todos los campos");
      return;
    }

    const userExiste = usuarios.some((u) => u.correo === correo);
    if (userExiste) {
      alert(`El correo: ${correo} ya existe.`);
    }

    const nuevoUsuario = {
      id: usuarios.length + 1,
      correo,
      contrasena,
    };

    setUsuarios([...usuarios, nuevoUsuario]);
    setCorreo("");
    setContrasena("");
  };

  return (
    <View style={sttyleregisterScreen.conteiner}>
      <TouchableOpacity onPress={onGoBack} style={sttyleregisterScreen.return}>
        <Image source={iconArrowBack} style={{ width: 20, height: 20 }} />
        <Text style={{ fontSize: 18 }}>Volver</Text>
      </TouchableOpacity>
      <View style={sttyleregisterScreen.header}>
        <View style={sttyleregisterScreen.headerTextContainer}>
          <Text style={sttyleregisterScreen.title}>
            ¡Haz florecer tus tareas!
          </Text>
          <Text style={sttyleregisterScreen.text}>
            Crea tu cuenta y mejora tu productividad desde hoy.
          </Text>
        </View>
        <View style={sttyleregisterScreen.contentInputs}>
          <View style={sttyleregisterScreen.contentInputUser}>
            <Image source={iconUser} style={sttyleregisterScreen.iconUser} />
            <TextInput
              placeholder="Usuario"
              keyboardType="email-address"
              value={correo}
              onChangeText={setCorreo}
              style={sttyleregisterScreen.input}
            />
          </View>
          <View style={sttyleregisterScreen.contentInputPass}>
            <Image
              source={iconLockPassword}
              style={sttyleregisterScreen.iconUser}
            />
            <TextInput
              placeholder="password"
              secureTextEntry={ocultar}
              value={contrasena}
              onChangeText={setContrasena}
              style={sttyleregisterScreen.input}
            />
            <TouchableOpacity
              onPress={() => setOcultar(!ocultar)}
              style={sttyleregisterScreen.buttonView}
            >
              <Image source={iconView} style={sttyleregisterScreen.iconView} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            // onRegisterSuccess();
            registrarUser();
          }}
          style={sttyleregisterScreen.buttonRegister}
        >
          <View style={sttyleregisterScreen.contentTextLogin}>
            <Text style={sttyleregisterScreen.textLogin}>Registrar</Text>
            <View style={sttyleregisterScreen.contentImg}>
              <Image source={ArrowLeft} style={sttyleregisterScreen.imgRegister} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={sttyleregisterScreen.contentRedes}>
        <View style={sttyleregisterScreen.registerContainer}>
          <Text style={sttyleregisterScreen.textCreateAccount}>
            Inicia sesión con o
          </Text>
          <TouchableOpacity style={sttyleregisterScreen.registerButton}>
            <Text style={sttyleregisterScreen.textButton}>Crea una</Text>
          </TouchableOpacity>
        </View>
        <View style={sttyleregisterScreen.contentIcons}>
          <TouchableOpacity
            onPress={() => alert("Iniciar sesión con facebook")}
          >
            <Image
              source={iconFacebook}
              style={sttyleregisterScreen.iconFacebook}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Iniciar sesión con Gmail")}>
            <Image source={iconGmail} style={sttyleregisterScreen.iconGmail} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const sttyleregisterScreen = StyleSheet.create({
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
    textAlign: "center",
    width: "100%",
    fontSize: 45,
    fontWeight: "bold",
    color: "#28a3f6",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7b7d7d",
  },
  input: {
    width: "80%",
    height: "100%",
  },
  contentInputs: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    gap: 20,
    paddingTop: 20,
  },
  contentInputUser: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    borderRadius: 30,
    ...Platform.select({
      ios: {
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: "white",
      },
      android: {
        height: 50,
        padding: 7,
        paddingLeft: 15,
        elevation: 1,
        backgroundColor: "white",
      },
    }),
  },
  iconUser: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  contentInputPass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    borderRadius: 30,
    ...Platform.select({
      ios: {
        height: 50,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: "white",
      },
      android: {
        height: 50,
        padding: 7,
        paddingLeft: 15,
        elevation: 1,
        backgroundColor: "white",
      },
    }),
  },
  iconLockPassword: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  buttonView: {
    ...Platform.select({
      android: {
        right: 15,
      },
    }),
  },
  iconView: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  forgotPass: {
    fontWeight: "bold",
    color: "#a6acaf",
  },
  buttonRegister: {
    left: "20%",
    top: "10%",
  },
  contentTextLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    gap: 10,
  },
  textLogin: {
    fontWeight: "bold",
    ...Platform.select({
      ios: { fontSize: 30 },
      android: { fontSize: 25 },
    }),
  },
  contentImg: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#28a3f6",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        padding: 8,
        elevation: 3,
      },
    }),
  },
  imgRegister: {
    width: 28,
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
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  iconGmail: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
