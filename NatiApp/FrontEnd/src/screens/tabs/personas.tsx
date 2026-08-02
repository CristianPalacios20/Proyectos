import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colores from "../../assets/theme/colores";
import { useModal } from "../../context/modalContext";
import AgregarPersonaModal from "../../components/modals/agregarPersonaModal";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconPlus from "../../assets/icons/iconPlus.png";
import { PersonCard } from "../../components/personaCard";

const { height } = Dimensions.get("window");

export default function Personas({ navigation }: any) {
  // const [visible, setVisible] = useState(false);
  const { openModal, isVisible } = useModal();
  const translateY = useRef(new Animated.Value(-height)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const [abiertoIndex, setAbiertoIndex] = useState<number | null>(null);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const personas = [
    { nombre: "Cristian Palacios", aporte: "800.000" },
    { nombre: "Denny Roa", aporte: "1.000.000" },
  ];

  // const toggleFooter = (index: number) => {
  //   const esAbierto = abiertoIndex === index;
  //   const nuevoEstado = esAbierto ? null : index;

  //   setAbiertoIndex(nuevoEstado);

  //   Animated.timing(rotateAnim, {
  //     toValue: esAbierto ? 1 : 0,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const rotateInterpolate = rotateAnim.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["180deg", "270deg"],
  // });

  // const abrirModal = () => {
  //   setVisible(true);

  //   Animated.parallel([
  //     Animated.timing(translateY, {
  //       toValue: 0,
  //       duration: 400,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(opacity, {
  //       toValue: 1, // 👈 debe ir a 1 para que aparezca
  //       duration: 400,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // };

  // const cerrarModal = () => {
  //   Animated.parallel([
  //     Animated.timing(translateY, {
  //       toValue: -height,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(opacity, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //   ]).start(() => setVisible(false));
  // };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.bottomBack}
              onPress={() => navigation.goBack()}
            >
              <Image source={iconArrowBack} style={styles.headerIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Personas</Text>
          </View>

          <View style={styles.screenContainer}>
            {/* Acción principal */}
            <View style={styles.actionContainer}>
              <TouchableOpacity
                onPress={() => openModal("AGREGAR_PERSONA")}
                style={styles.addButton}
              >
                <Image source={iconPlus} style={styles.addButtonIcon} />
                <Text style={styles.addButtonText}>Agregar persona</Text>
              </TouchableOpacity>
            </View>

            {/* Tarjeta / Item de persona */}
            {personas.map((persona, index) => (
              <PersonCard
                key={index}
                persona={persona}
                abierto={abiertoIndex === index}
                onPress={() =>
                  setAbiertoIndex(abiertoIndex === index ? null : index)
                }
              />
            ))}
          </View>
          {isVisible && <AgregarPersonaModal/>}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E7E5E4",
  },

  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 5,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: 20,
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: colores.botonPrimario,
  },

  bottomBack: {
    justifyContent: "center",
    width: 40,
    height: 40,
  },

  headerIcon: {
    width: 25,
    height: 25,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: colores.botonPrimario,
  },

  actionContainer: {
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 20,
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 192,
    height: 40,
    gap: 10,
    backgroundColor: colores.botonPrimario,
    borderRadius: 8,
  },

  addButtonIcon: {
    width: 14,
    height: 15,
  },

  addButtonText: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  personCard: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 8,
  },

  personCardAbierto: {
    height: 140,
  },

  personInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },

  personName: {
    fontSize: 16,
    fontWeight: "600",
  },

  personStatusIcon: {
    width: 20,
    height: 20,
    transform: [{ rotate: "180deg" }],
  },

  personFooter: {
    top: 8,
    paddingHorizontal: 10,
  },

  aporteContainer: {
    flexDirection: "row",
    gap: 5,
  },

  aporteLabel: {
    fontSize: 16,
  },

  aporteValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  contentDetailsButton: {
    alignItems: "flex-end",
    top: 8,
  },

  detailsButton: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 112,
    height: 30,
    backgroundColor: colores.botonPrimario,
    borderRadius: 5,
  },

  detailsButtonText: {
    color: colores.textoClaro,
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
  },

  modalContainer: {
    flex: 1,
    padding: 20,
  },
 
});
