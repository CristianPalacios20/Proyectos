import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useAuth } from "../context/AuthContext";

import ArrowLeft from "../../assets/icons/arrowLeft.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconGmail from "../../assets/icons/iconGmail.png";
import vector from "../../assets/img/waveTop.png";
import iconError from "../../assets/icons/iconError.png";

export default function LoginScreen() {
  const [ocultar, setOcultar] = useState(true);
  const [identificador, setIdentificador] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { setScreen, login } = useAuth();

  const [focusedIndex, setFocusedIndex] = useState(null);

  const inputs = [
    {
      placeholder: "Usuario",
      value: identificador,
      onChangeText: setIdentificador,
      icon: iconUser,
      secure: false,
    },
    {
      placeholder: "Password",
      value: contrasena,
      onChangeText: setContrasena,
      icon: iconLockPassword,
      secure: true,
    },
  ];

  const handleLogin = async () => {
    if (identificador.trim() === "" || contrasena.trim() === "") {
      setMensaje("¡Por favor ingresa usuario y/o contraseña!");
      return;
    }

    const ok = await login(identificador, contrasena);

    if (ok) {
      setScreen("main");
    } else {
      setMensaje("Usuario y/o contraseña incorrectos");
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={stylesLoginScreen.conteiner}>
        <Image source={vector} style={stylesLoginScreen.vector} />
        <SafeAreaView edges={["top"]} style={stylesLoginScreen.body}>
          <View style={stylesLoginScreen.contentTextMoti}>
            <Text style={stylesLoginScreen.title}>Bienvenido a AGT</Text>
            <Text style={stylesLoginScreen.text}>
              ¡Florece con cada tarea y cultiva tu productividad!.
            </Text>
          </View>
          <View style={stylesLoginScreen.form}>
            <View style={stylesLoginScreen.contentInputs}>
              {/* Inputs */}
              <View style={stylesLoginScreen.inputs}>
                {inputs.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      stylesLoginScreen.contentInput,
                      item.secure && stylesLoginScreen.contentInputPassword,
                    ]}
                  >
                    <Image
                      source={item.icon}
                      style={stylesLoginScreen.iconUser}
                    />
                    <TextInput
                      placeholder={item.placeholder}
                      value={item.value}
                      onChangeText={item.onChangeText}
                      style={[stylesLoginScreen.input]}
                      secureTextEntry={item.secure && ocultar}
                    />
                    {item.secure && (
                      <TouchableOpacity
                        onPress={() => setOcultar(!ocultar)}
                        style={stylesLoginScreen.buttonView}
                      >
                        <Image
                          source={iconView}
                          style={stylesLoginScreen.iconView}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
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

            {/* Botón login */}
            <TouchableOpacity
              onPress={handleLogin}
              style={stylesLoginScreen.buttonLogin}
            >
              <View style={stylesLoginScreen.contentTextLogin}>
                <Text style={stylesLoginScreen.textLogin}>Iniciar</Text>
                <ImageBackground style={stylesLoginScreen.contentImg}>
                  <Image
                    source={ArrowLeft}
                    style={stylesLoginScreen.imgLogin}
                  />
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <View style={stylesLoginScreen.containerRegister}>
              <Text style={stylesLoginScreen.registerText}>
                ¿No tienes cuenta?
              </Text>
              <TouchableOpacity style={stylesLoginScreen.registerButton}>
                <Text
                  style={stylesLoginScreen.registerButtonText}
                  onPress={() => setScreen("register")}
                >
                  Regístrate
                </Text>
              </TouchableOpacity>
            </View>

            <View style={stylesLoginScreen.contentRedes}>
              <View style={stylesLoginScreen.registerContainer}>
                <View style={stylesLoginScreen.span}></View>
                <Text style={stylesLoginScreen.textCreateAccount}>
                  O regístrate con
                </Text>
                <View style={stylesLoginScreen.span}></View>
              </View>
              <View style={stylesLoginScreen.contentIcons}>
                <TouchableOpacity onPress={() => alert("Iniciar con Facebook")}>
                  <Image
                    source={iconFacebook}
                    style={stylesLoginScreen.iconFacebook}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("Iniciar con Gmail")}>
                  <Image
                    source={iconGmail}
                    style={stylesLoginScreen.iconGmail}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Mensaje de error */}
          {mensaje && (
            <View style={stylesLoginScreen.contentMessageError}>
              <View style={stylesLoginScreen.message}>
                <Image source={iconError} style={stylesLoginScreen.iconError} />
                <Text style={stylesLoginScreen.textError}>{mensaje}</Text>
              </View>
            </View>
          )}
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const stylesLoginScreen = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "black",
  },
  vector: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  body: {
    flex: 1,
  },
  contentTextMoti: {
    justifyContent: "flex-end",
    width: "100%",
    height: "20%",
    padding: 20,
    gap: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0099FF",
  },
  text: {
    width: "100%",
    fontSize: 15,
    color: "white",
  },
  form: {
    position: "absolute",
    width: "100%",
    height: "84%",
    bottom: 0,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },
  contentInputs: {
    width: "100%",
    gap: 20,
    paddingVertical: 20,
    marginTop: 40,
    overflow: "hidden",
  },
  inputs: {
    gap: 10,
  },
  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    gap: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  input: {
    width: "80%",
    height: "100%",
  },
  iconUser: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  iconLockPassword: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain",
  },
  buttonView: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
  },
  iconView: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  buttonPass: {
    alignItems: "center",
    width: 200,
    left: "44%",
  },
  forgotPass: {
    color: "#a6acaf",
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
    color: "#0099FF",
    ...Platform.select({
      ios: {
        fontSize: 40,
      },
      android: {
        fontSize: 30,
      },
    }),
  },
  contentImg: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#0099FF",
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

  containerRegister: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    paddingVertical: 20,
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
  },

  registerButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  contentRedes: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 20,
    paddingVertical: 20,
    marginTop: 20,
    overflow: "hidden",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    overflow: "hidden",
  },
  span: {
    borderWidth: 1,
    borderColor: "#b8b8b8ff",
    width: "100%",
  },
  textCreateAccount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contentIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  iconFacebook: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  iconGmail: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  contentMessageError: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "6%",
    width: "100%",
  },
  message: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    gap: 8,
    paddingHorizontal: 20,
    backgroundColor: "#E7E5E4",
    borderRadius: 15,
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
  iconError: {
    width: 20,
    height: 20,
  },
  textError: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#0099FF",
  },
  buttonLogin: {
    left: "22%",
  },
});
