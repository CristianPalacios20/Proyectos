import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  ImageBackground,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import ProgressSteps from "../../components/progress/ProgressSteps";
import { pasosRegistro } from "../../components/progress/progessSteps";
import ModalConfirmCodigo from "../../components/modals/modalConfirmCodigo";
import { useModal } from "../../context/modalContext";

import colores from "../../assets/theme/colores";

import group187 from "../../assets/images/Group187.png";
import iconOk2 from "../../assets/icons/iconOk2.png";
import iconUser from "../../assets/icons/iconUserII.png";
import iconFacebook from "../../assets/icons/iconFacebook.png";
import iconApple from "../../assets/icons/iconApple.png";
import iconGoogle from "../../assets/icons/iconGoogle.png";
import iconIphone from "../../assets/icons/iconIphone.png";
import iconIphone2 from "../../assets/icons/iconIphone2.png";
import iconArrow1 from "../../assets/icons/iconArrow1.png";
import Step1 from "./step1";

export default function Login({ navigation }: any) {
  const [phone, setPhone] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { isVisible, openModal } = useModal();
  const [modal, setModal] = useState("");

  const progreso = useRef(new Animated.Value(0)).current;
  const pasoActual = 2;
  const totalPasos = 3;
  const CircleOneY = useRef(new Animated.Value(0)).current;
  const CircleTwoX = useRef(new Animated.Value(0)).current;
  const CircleThreeScale = useRef(new Animated.Value(0)).current;
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMensaje("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [mensaje]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(CircleOneY, {
          toValue: 50,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(CircleOneY, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(CircleTwoX, {
          toValue: 40,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(CircleTwoX, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(CircleThreeScale, {
          toValue: 40,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(CircleThreeScale, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  useEffect(() => {
    const porcentaje = (pasoActual - 1) / (totalPasos - 1);

    Animated.timing(progreso, {
      toValue: porcentaje,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [pasoActual]);

  const anchoAnimado = progreso.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const manejarCambio = (texto: string) => {
    const soloNumeros = texto.replace(/[^0-9]/g, "");
    setPhone(soloNumeros);
  };

  const validarNumero = (phone: string) => {
    if (!phone.startsWith("3")) return false;
    if (phone.length !== 10) {
      setMensaje("Ingresa un número válido de 10 números");
      return;
    }
    return true;
  };

  const onNext = async () => {
    Keyboard.dismiss();
    setPhone("");
    if (phone === "") {
      setMensaje("Por favor ingresa tu número de celular");
      return false;
    }

    if (!validarNumero(phone)) {
      setMensaje("Número inválido");
      return false;
    }

    openModal("MODAL_CONFIRM_CODIGO", {
      phone,
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle={"light-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <AnimatedBlurView
            intensity={150}
            style={[
              styles.backgroundCircle,
              styles.circleOne,
              {
                transform: [
                  {
                    translateY: CircleOneY,
                  },
                ],
              },
            ]}
          />
          <AnimatedBlurView
            intensity={150}
            style={[
              styles.backgroundCircle,
              styles.circleTwo,
              {
                transform: [
                  {
                    translateX: CircleTwoX,
                  },
                ],
              },
            ]}
          />
          <AnimatedBlurView
            intensity={150}
            style={[
              styles.backgroundCircle,
              styles.circleThree,
              { transform: [{ translateX: CircleThreeScale }] },
            ]}
          />
          <View style={styles.contentContainer}>
            <ImageBackground style={styles.backgroundOne} source={group187}>
              <View style={styles.contentTitle}>
                <Text style={styles.title}>NatiApp</Text>
                <Text style={styles.textBienvenida}>
                  Bienvenido a tu app de ahorros
                </Text>
              </View>
            </ImageBackground>
            <View style={{ flex: 1, padding: 20 }}>
              {/* <ProgressSteps
                pasos={pasosRegistro}
                pasoActual={1}
                icono={iconOk2}
              /> */}

              <View style={styles.titleContainer}>
                <Text style={styles.titleNum}>
                  Ingresa tu número de celular
                </Text>

                <Text style={styles.description}>
                  Te enviaremos un código de verificación para confirmar que
                  eres tú.
                </Text>
              </View>

              <View style={styles.phoneContainer}>
                <Text style={styles.phoneLabel}>Número de celular</Text>
                <View style={styles.phoneInputWrapper}>
                  <View style={styles.inputAndIcon}>
                    <View style={styles.textAndInput}>
                      <View style={styles.countryCodeContainer}>
                        <Image
                          source={iconIphone2}
                          style={styles.countryFlag}
                        />
                        <Text style={styles.placeholderText}>+57</Text>
                      </View>
                      <TextInput
                        value={phone}
                        onChangeText={manejarCambio}
                        keyboardType="numeric"
                        placeholder="Ingresa tu número"
                        style={styles.phoneInput}
                      />
                    </View>
                    <Image source={iconUser} style={styles.phoneImage} />
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={onNext} style={styles.buttonContinue}>
                <Text style={styles.buttonContinueText}>Continuar</Text>
                <Image style={styles.iconArrow1} source={iconArrow1} />
              </TouchableOpacity>
              <View style={styles.separatorContainer}>
                <View style={styles.separatorLine}></View>
                <Text style={styles.separatorText}>O</Text>
                <View style={styles.separatorLine}></View>
              </View>
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                    source={iconFacebook}
                    style={styles.socialButtonImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={iconApple} style={styles.socialButtonImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={iconGoogle} style={styles.socialButtonImage} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isVisible && <ModalConfirmCodigo phone={phone} />}
      {mensaje !== "" && (
        <View
          style={[
            styles.message,
            {
              // top: insets.top,
            },
          ]}
        >
          <View style={styles.contentTextMessage}>
            {/* <View style={[styles.contenIconIphone, ]}> */}
            <Image source={iconIphone2} style={styles.iconIphone} />
            {/* </View> */}
            <Text style={styles.textMessage}>{mensaje}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundOne: {
    width: "100%",
    height: 280,
  },

  container: {
    flex: 1,
    width: "100%",
  },

  backgroundCircle: {
    position: "absolute",
    backgroundColor: "#2DB964",
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    opacity: 0.4,
  },

  circleOne: {
    top: -50,
    left: -50,
  },

  circleTwo: {
    top: 200,
    right: -80,
  },

  circleThree: {
    bottom: 120,
    left: -60,
  },

  contentContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  contentTitle: {
    justifyContent: "center",
    top: 90,
    paddingLeft: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "Inspiration",
    color: "white",
    letterSpacing: 2,
  },

  textBienvenida: {
    color: "#7B7D7D",
    fontSize: 14,
  },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  },

  titleContainer: {
    gap: 10,
    marginBottom: 20,
  },

  titleNum: {
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7B7D7D",
  },

  progressLineBackground: {
    position: "absolute",
    top: 15,
    left: 15,
    right: 15,
    height: 2,
    backgroundColor: "#D9D9D9",
  },

  progressLineActive: {
    position: "absolute",
    top: 15,
    left: 15,
    height: 2,
    backgroundColor: "#000",
    zIndex: 1,
  },

  step: {
    flex: 1,
    position: "relative",
  },

  step1: {
    alignItems: "flex-start",
  },

  step2: {
    alignItems: "center",
  },

  step3: {
    alignItems: "flex-end",
  },

  stepIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  stepIcon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },

  stepText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },

  phoneContainer: {
    width: "100%",
    gap: 11,
    marginTop: 20,
  },
  phoneLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phoneInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    width: "100%",
    overflow: "hidden",
  },
  inputAndIcon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#555555",
  },

  textAndInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 70,
    height: 20,
    gap: 10,
    borderRightWidth: 1,
    borderColor: "#7B7D7D",
  },

  countryFlag: {
    width: 20,
    height: 20,
  },

  placeholderText: {
    fontWeight: "bold",
  },

  phoneInput: {
    flex: 1,
    height: 45,
  },
  phoneImage: {
    width: 23,
    height: 23,
    resizeMode: "cover",
  },

  buttonContinue: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
    borderRadius: 100,
  },

  buttonContinueText: {
    color: colores.textoClaro,
    fontSize: 16,
    fontWeight: "bold",
  },

  iconArrow1: {
    width: 25,
    height: 25,
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  separatorLine: {
    width: 161,
    borderWidth: 1,
    borderColor: "#7b7d7d7a",
  },

  separatorText: {},

  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    gap: 11,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    gap: 7,
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "#00000",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: colores.textoOscuro,
  },
  socialButtonImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  message: {
    position: "absolute",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    paddingTop: 40,
    // paddingHorizontal: 20,
  },

  contentTextMessage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // width: 300,
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 100,
    borderWidth: 1,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  contenIconIphone: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
  },

  iconIphone: {
    width: 25,
    height: 25,
  },

  textMessage: {
    fontWeight: "500",
    fontSize: 15,
    // color: "white",
  },
});
