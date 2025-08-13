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
  SafeAreaView,
} from "react-native";
import { useAuth } from "../context/AuthContext";

import ArrowLeft from "../../assets/icons/arrowLeft.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconEmail from "../../assets/icons/iconEmail3.png";
import iconPhone from "../../assets/icons/iconPhone2.png";
import iconLockPassword from "../../assets/icons/iconLockPassword.png";
import iconView from "../../assets/icons/iconView.png";
import vector from "../../assets/img/waveTop.png";
import iconError from "../../assets/icons/iconError.png";

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
        <Image source={vector} style={sttyleregisterScreen.vector} />
        <SafeAreaView edges={["top"]} style={sttyleregisterScreen.body}>
          <View style={sttyleregisterScreen.headerTextContainer}>
            <Text style={sttyleregisterScreen.title}>Bienvenido a AGT</Text>
            <Text style={sttyleregisterScreen.text}>
              ¡Haz florecer tus tareas y mejora tu productividad desde hoy!.
            </Text>
          </View>
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
                  <Image
                    source={item.icon}
                    style={sttyleregisterScreen.icon}
                  />

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
                <View style={sttyleregisterScreen.contentTextLogin}>
                  <Text style={sttyleregisterScreen.textLogin}>Continuar</Text>
                  <View style={sttyleregisterScreen.contentImg}>
                    <Image
                      source={ArrowLeft}
                      style={sttyleregisterScreen.imgRegister}
                    />
                  </View>
                </View>
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
    backgroundColor: "black",
  },
  vector: {
    position: "absolute",
    width: "100%",
  },
  body: {
    flex: 1,
  },
  headerTextContainer: {
    justifyContent: "flex-end",
    width: "100%",
    height: "20%",
    padding: 20,
    gap: 8,
  },
  title: {
    width: "100%",
    fontSize: 30,
    fontWeight: "bold",
    color: "#0099FF",
  },
  text: {
    fontSize: 15,
    color: "white",
  },
  form: {
    position: "absolute",
    bottom: 0,
    height: "84%",
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
  input: {
    width: "80%",
    height: "100%",
  },
  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 10,
    height: 40,
    borderWidth: 1.5,
    paddingHorizontal: 10,
    borderRadius: 10,
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
    alignItems: "flex-end",
    width: "100%",
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
      ios: { fontSize: 30 },
      android: { fontSize: 25 },
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
