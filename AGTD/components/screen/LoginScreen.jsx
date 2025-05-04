import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Platform,
} from "react-native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import ArrowLeft from "../../assets/icons/arrowLeft.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconGmail from "../../assets/icons/iconGmail.png";

export default function LoginScreen({ onLoginSuccess, onGoBack }) {
  const [ocultar, setOcultar] = useState(true);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const login = async () => {
    if (correo.trim() === "" || contrasena.trim() === "") {
      setMensaje("¡Por favor ingresa usuario y/o contraseña!");
      return;
    }
    console.log("Enviando:", { correo, contrasena });
    try {
      const response = await fetch(
        "http://192.168.1.3/Proyectos/AGTD/backend/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo, contrasena }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      setCorreo("");
      setContrasena("");

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (data.success) {
        console.log("Bienvenido", data.usuario);
        console.log(data.usuario);
      } else {
        setMensaje(data.message);
      }
    } catch (error) {
      console.error("Error al hacer la solictud:", error);
      setMensaje(`Error: ${error.message}`);
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
    <View style={stylesLoginScreen.conteiner}>
      <TouchableOpacity onPress={onGoBack} style={stylesLoginScreen.return}>
        <Image source={iconArrowBack} style={stylesLoginScreen.iconArrowBack} />
        <Text style={{ fontSize: 18 }}>Volver</Text>
      </TouchableOpacity>
      <View style={stylesLoginScreen.header}>
        <View style={stylesLoginScreen.headerTextContainer}>
          <Text style={stylesLoginScreen.title}>¡Florece con cada tarea!</Text>
          <Text style={stylesLoginScreen.text}>
            Inicia sesión y cultiva tu productividad
          </Text>
        </View>
        <View style={stylesLoginScreen.contentInputs}>
          <View style={stylesLoginScreen.contentInputUser}>
            <Image source={iconUser} style={stylesLoginScreen.iconUser} />
            <TextInput
              placeholder="Usuario"
              value={correo}
              onChangeText={setCorreo}
              style={stylesLoginScreen.input}
            />
          </View>
          {/* Inputs */}
          <View style={stylesLoginScreen.contentInputPass}>
            <Image
              source={iconLockPassword}
              style={stylesLoginScreen.iconUser}
            />
            <TextInput
              placeholder="password"
              value={contrasena}
              onChangeText={setContrasena}
              style={stylesLoginScreen.input}
              secureTextEntry={ocultar}
            />
            <TouchableOpacity
              onPress={() => setOcultar(!ocultar)}
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

        {/* Mensaje de error */}
        {mensaje && (
          <Text style={stylesLoginScreen.menssageError}>{mensaje}</Text>
        )}

        {/* Boton login */}
        <TouchableOpacity onPress={login} style={stylesLoginScreen.buttonLogin}>
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
            Inicia sesión con o
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
    backgroundColor: "#F5F5F5",
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#28a3f6",
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 18,
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
    padding: 20
  },
  contentInputUser: {
    flexDirection: "row",
    alignItems: "center",
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
        paddingLeft: 15,
        elevation: 1,
        backgroundColor: "white",
      },
    }),
  },
  iconUser: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain",
  },
  contentInputPass: {
    flexDirection: "row",
    alignItems: "center",
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
    marginRight: 5,
    resizeMode: "contain",
  },
  buttonView: {
    ...Platform.select({
      ios: {
        left: 10,
      },
    }),
  },
  iconView: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  buttonPass: {
    alignItems: "center",
    width: 200,
    left: "44%",
  },
  forgotPass: {
    fontWeight: "bold",
    color: "#a6acaf",
  },
  menssageError: {
    position: "absolute",
    color: "red",
    ...Platform.select({
      ios: {
        top: "80%",
      },
      android: {
        top: "84%",
      },
    }),
  },
  buttonLogin: {
    left: "22%",
    top: "5%",
  },
  contentTextLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    gap: 10,
  },
  textLogin: {
    ...Platform.select({
      ios: {
        fontSize: 40,
      },
      android: {
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
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
