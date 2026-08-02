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
} from "react-native";
import { BlurView } from "expo-blur";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import ProgressSteps from "../../components/progressSteps/ProgressSteps";
import { pasosRegistro } from "../../components/progressSteps/progessSteps";
import ModalConfirmCodigo from "../../components/modals/modalConfirmCodigo";
import { useModal } from "../../context/modalContext";

import colores from "../../assets/theme/colores";

import iconOk2 from "../../assets/icons/iconOk2.png";
import iconUser from "../../assets/icons/iconUserII.png";
import iconApple from "../../assets/icons/iconApple.png";
import iconGoogle from "../../assets/icons/iconGoogle.png";
import iconIphone from "../../assets/icons/iconIphone.png";
import iconIphone2 from "../../assets/icons/iconIphone2.png";
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
          <BlurView intensity={10} style={styles.contentContainer}>
            <SafeAreaView edges={["top"]} style={{ flex: 1, padding: 20 }}>
              <View style={styles.contentTitle}>
                <Text style={styles.title}>NatiApp</Text>
              </View>

              <ProgressSteps
                pasos={pasosRegistro}
                pasoActual={1}
                icono={iconOk2}
              />

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
                        <Image source={iconIphone2} style={styles.countryFlag} />
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
              <TouchableOpacity
                onPress={onNext}
                style={styles.buttonContinue}
              >
                <Text style={styles.buttonContinueText}>Continuar</Text>
              </TouchableOpacity>
              <View style={styles.separatorContainer}>
                <View style={styles.separatorLine}></View>
                <Text style={styles.separatorText}>O</Text>
                <View style={styles.separatorLine}></View>
              </View>
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={iconApple} style={styles.socialButtonImage} />
                  <Text style={styles.socialButtonText}>
                    Continúe con Apple
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={iconGoogle} style={styles.socialButtonImage} />
                  <Text style={styles.socialButtonText}>
                    Continúe con Google
                  </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
            {mensaje !== "" && (
              <View
                style={[
                  styles.message,
                  {
                    top: insets.top,
                  },
                ]}
              >
                <View style={styles.contentTextMessage}>
                  <View style={styles.contenIconIphone}>
                    <Image source={iconIphone} style={styles.iconIphone} />
                  </View>
                  <Text style={styles.textMessage}>{mensaje}</Text>
                </View>
              </View>
            )}
          </BlurView>
        </View>
      </TouchableWithoutFeedback>
      {isVisible && <ModalConfirmCodigo phone={phone} />}
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: "Inspiration",
  },

  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
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
    paddingHorizontal: 12,
    borderWidth: 2,

    borderRadius: 10,
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
    borderColor: "#7B7D7D"
  },

  countryFlag: {
    width: 20,
    height: 20
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
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
    borderRadius: 10,
  },

  buttonContinueText: {
    color: colores.textoClaro,
    fontSize: 16,
    fontWeight: "bold",
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
    width: "100%",
    marginTop: 20,
    gap: 11,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    gap: 7,
    borderWidth: 1,
    borderColor: "#7B7D7D",
    borderRadius: 10,
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
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    padding: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contentTextMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    borderRadius: 100,
    height: 50,
    padding: 15,
    gap: 5,
  },
  contenIconIphone: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  iconIphone: {
    width: 25,
    height: 25,
  },

  textMessage: {
    fontWeight: "500",
    color: "white",
  },
});
