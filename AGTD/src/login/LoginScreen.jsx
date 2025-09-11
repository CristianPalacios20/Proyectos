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

import iconUser from "../../assets/icons/iconUser.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconGoogle from "../../assets/icons/iconGoogle.png";
import vector2 from "../../assets/img/wavesBottomBlack.png";
import iconError from "../../assets/icons/iconError.png";

export default function LoginScreen() {
  const [ocultar, setOcultar] = useState(true);
  const [identificador, setIdentificador] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { setScreen, login, isLoadingloading } = useAuth();

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

    if (!ok) {
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
        <Image source={vector2} style={stylesLoginScreen.vector} />
        <SafeAreaView edges={["top"]} style={stylesLoginScreen.body}>
          <Text style={stylesLoginScreen.textLogin}>Login</Text>
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
              <Text style={stylesLoginScreen.textLoguear}>Login</Text>
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
                <TouchableOpacity
                  style={stylesLoginScreen.button}
                  onPress={() => alert("Iniciar con Google")}
                >
                  <Image source={iconGoogle} style={[stylesLoginScreen.icon]} />
                  <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                    Continuar con Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={stylesLoginScreen.button}
                  onPress={() => alert("Iniciar con Facebook")}
                >
                  <Image
                    source={iconFacebook}
                    style={[stylesLoginScreen.iconFacebook]}
                  />
                  <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                    Continuar con Facebook
                  </Text>
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
    gap: 0,
  },
  vector: {
    position: "absolute",
    bottom: 0,
    height: "150",
    zIndex: 100,
    resizeMode: "cover",
  },
  body: {
    flex: 1,
  },
  textLogin: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  contentTextMoti: {
    width: "100%",
    paddingHorizontal: 22,
    marginTop: 30,
    gap: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    width: "100%",
    fontWeight: "bold",
    color: "#00000050",
  },
  form: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  contentInputs: {
    width: "100%",
    gap: 20,
    paddingVertical: 20,
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
    borderWidth: 1,
    borderColor: "#7B7D7D"
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
    fontSize: 15,
    fontWeight: "bold",
    color: "#a6acaf",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
  },
  textLoguear: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    color: "white",
    ...Platform.select({
      ios: {},
      android: {
        fontSize: 30,
      },
    }),
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
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center",
    gap: 12,
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#7B7D7D",
    borderRadius: 10,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain", 
  },

  iconFacebook: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },

  message: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    gap: 8,
    paddingHorizontal: 20,
    backgroundColor: "black",
    // backgroundColor: "#E7E5E4",
    borderRadius: 50,
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
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
});
