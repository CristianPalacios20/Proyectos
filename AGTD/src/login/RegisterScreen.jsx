import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";

import iconUser from "../../assets/icons/iconUser.png";
import iconEmail from "../../assets/icons/iconEmail3.png";
import iconPhone from "../../assets/icons/iconPhone2.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import vector2 from "../../assets/img/wavesBottomBlack.png";
import iconError from "../../assets/icons/iconError.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconGoogle from "../../assets/icons/iconGoogle.png";

export default function RegisterScreen() {
  const [ocultar, setOcultar] = useState(true);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const inputNombreRef = useRef(null);
  const inputCorreoRef = useRef(null);
  const inputCelularRef = useRef(null);
  const inputContrasenaRef = useRef(null);

  const { register, setScreen } = useAuth();

  const [focusedIndex, setFocusedIndex] = useState(null);

  const inputsRefs = [
    inputNombreRef,
    inputCorreoRef,
    inputCelularRef,
    inputContrasenaRef,
  ];

  const inputsRegister = [
    {
      placeholder: "Nombre",
      value: nombre,
      onChangeText: setNombre,
      icon: iconUser,
      keyboardType: "default",
      secure: false,
    },
    {
      placeholder: "correo",
      value: correo,
      onChangeText: setCorreo,
      icon: iconEmail,
      keyboardType: "email-address",
      secure: false,
    },
    {
      placeholder: "celular",
      value: celular,
      onChangeText: setCelular,
      icon: iconPhone,
      keyboardType: "default",
      secure: false,
    },
    {
      placeholder: "password",
      value: contrasena,
      onChangeText: setContrasena,
      icon: iconLockPassword,
      keyboardType: "default",
      secure: true,
    },
  ];

  const handleRegister = async () => {
    if (
      nombre.trim() === "" ||
      correo.trim() === "" ||
      celular.trim() === "" ||
      contrasena.trim() === ""
    ) {
      setMensaje("Debes completar todos los campos");
      return;
    }

    try {
      const ok = await register(nombre, correo, celular, contrasena);

      console.log(ok);

      if (ok.success) {
        setScreen("main");
      } else {
        setMensaje("Error al registrar. Intenta de nuevo");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error en el registro");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [mensaje]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={sttyleregisterScreen.conteiner}>
        <Image source={vector2} style={sttyleregisterScreen.vector} />
        <SafeAreaView edges={["top"]} style={sttyleregisterScreen.body}>
          <Text style={sttyleregisterScreen.titleRegistrar}>Registrar</Text>
          <View style={sttyleregisterScreen.form}>
            <View style={sttyleregisterScreen.conteinerInputs}>
              {inputsRegister.map((item, index) => (
                <Pressable
                  key={index}
                  style={[
                    sttyleregisterScreen.contentInput,
                    focusedIndex === index && sttyleregisterScreen.focusInput,
                  ]}
                >
                  <Image source={item.icon} style={sttyleregisterScreen.icon} />

                  <TextInput
                    ref={inputsRefs[index]}
                    placeholder={item.placeholder}
                    value={item.value}
                    onChangeText={item.onChangeText}
                    keyboardType={item.keyboardType}
                    style={sttyleregisterScreen.input}
                    secureTextEntry={item.secure && ocultar}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    returnKeyType={
                      index === inputsRegister - 1 ? "done" : "next"
                    }
                    onSubmitEditing={() => {
                      if (index < inputsRefs.length - 1) {
                        inputsRefs[index + 1].current.focus();
                      } else {
                        handleRegister();
                      }
                    }}
                  />

                  {item.secure && (
                    <TouchableOpacity
                      onPress={() => setOcultar(!ocultar)}
                      style={sttyleregisterScreen.buttonView}
                    >
                      <Image
                        source={iconView}
                        style={sttyleregisterScreen.iconView}
                      />
                    </TouchableOpacity>
                  )}
                </Pressable>
              ))}
            </View>
            <View style={sttyleregisterScreen.contentButtonRegister}>
              <TouchableOpacity
                onPress={handleRegister}
                style={sttyleregisterScreen.buttonRegister}
              >
                <Text style={sttyleregisterScreen.textLogin}>Registrar</Text>
              </TouchableOpacity>
            </View>
            <View style={sttyleregisterScreen.loginContainer}>
              <Text style={sttyleregisterScreen.loginText}>
                ¿Ya tienes cuenta?
              </Text>
              <TouchableOpacity style={sttyleregisterScreen.loginButton}>
                <Text
                  style={sttyleregisterScreen.loginButtonText}
                  onPress={() => setScreen("login")}
                >
                  Iniciar sesión
                </Text>
              </TouchableOpacity>
            </View>
            <View style={sttyleregisterScreen.contentRedes}>
              <View style={sttyleregisterScreen.registerContainer}>
                <View style={sttyleregisterScreen.span}></View>
                <Text style={sttyleregisterScreen.textCreateAccount}>O</Text>
                <View style={sttyleregisterScreen.span}></View>
              </View>
              <View style={sttyleregisterScreen.contentIcons}>
                <TouchableOpacity
                  style={sttyleregisterScreen.button}
                  onPress={() => alert("Iniciar con Google")}
                >
                  <Image
                    source={iconGoogle}
                    style={[sttyleregisterScreen.icon]}
                  />
                  <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                    Continuar con Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={sttyleregisterScreen.button}
                  onPress={() => alert("Iniciar con Facebook")}
                >
                  <Image
                    source={iconFacebook}
                    style={[sttyleregisterScreen.iconFacebook]}
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
            <View style={sttyleregisterScreen.contentMessageError}>
              <View style={sttyleregisterScreen.message}>
                <Image
                  source={iconError}
                  style={sttyleregisterScreen.iconError}
                />
                <Text style={sttyleregisterScreen.textError}>{mensaje}</Text>
              </View>
            </View>
          )}
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const sttyleregisterScreen = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  vector: {
    position: "absolute",
    width: "100%",
    height: "150",
    bottom: 0,
    zIndex: 100,
    resizeMode: "cover",
  },
  body: {
    flex: 1,
  },
  titleRegistrar: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    bottom: 0,
    width: "100%",
    height: "100%",
    gap: 20,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  conteinerInputs: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
    marginTop: 40,
  },
  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#7B7D7D",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: {
    width: "80%",
    height: "100%",
  },
  focusInput: {
    borderWidth: 2,
    borderColor: "#0099FF",
    ...Platform.select({
      ios: {
        shadowColor: "#0099FF",
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
    }),
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  contentInputPass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 10,
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
  contentButtonRegister: {
    width: "100%",
  },
  buttonRegister: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "black",
    borderRadius: 10,
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
  imgRegister: {
    width: 28,
    height: 20,
  },
  messageError: {
    position: "absolute",
    width: "100%",
    top: "60%",
    textAlign: "center",
    color: "red",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    paddingVertical: 20,
  },
  loginText: {
    fontSize: 16,
  },
  loginButtonText: {
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
    maxWidth: "80%",
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
  buttonLogin: {
    left: "22%",
  },
});
