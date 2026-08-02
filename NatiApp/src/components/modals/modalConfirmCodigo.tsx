import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useModal } from "../../context/modalContext";
import { useNavigation } from "@react-navigation/native";

type props = {
  phone: string;
};
export default function modalConfirmCodigo({phone}: any) {
  const { modalData, closeModal } = useModal();
  const navigation = useNavigation<any>();

  const continuar = () =>{
    closeModal();

    navigation.navigate("Step1", {
      phone: modalData.phone,
    });
  };
  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <View style={styles.dragIndicatorContainer}>
          <View style={styles.dragIndicator} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>¿Deseas continuar?</Text>

          <Text style={styles.description}>
            Le enviaremos el código de autenticación al número de teléfono que
            proporcionó
          </Text>
        </View>

        <View style={styles.phoneContainer}>
          <Text style={styles.phoneText}>(+57) {modalData?.phone}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={closeModal}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.continueButton}
            onPress={continuar}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },

  dragIndicatorContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  dragIndicator: {
    width: 40,
    height: 4,
    backgroundColor: "#B3B6B7",
    borderRadius: 100,
  },

  modalContainer: {
    position: "relative",
    width: "100%",
    height: 280,
    backgroundColor: "white",
    borderRadius: 20,
  },

  contentContainer: {
    gap: 8,
    marginTop: 20,
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  description: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "semibold",
    color: "#7B7D7D",
  },

  phoneContainer: {
    // borderWidth: 1,
    marginTop: 30,
  },

  phoneText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  cancelButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: 170,
    height: 50,
    borderRadius: 10,
  },

  cancelButtonText: {
    fontWeight: "bold",
  },

  continueButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 170,
    height: 50,
    backgroundColor: "black",
    borderRadius: 10,
  },

  continueButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
