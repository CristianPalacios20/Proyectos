import { Animated, StyleSheet, View } from "react-native";
import { useModal } from "../context/modalContext";
import AgregarPersonaModal from "../components/modals/agregarPersonaModal";
import NuevoPrestamoModal from "../components/modals/nuevoPrestamoModal";
import ModalConfirmCodigo from "./modals/modalConfirmCodigo";
import { SafeAreaView } from "react-native-safe-area-context";
import colores from "../assets/theme/colores";

export default function ModalManager() {
  const { modalType, isVisible, closeModal } = useModal();

  if (!isVisible) return null;

  const renderModal = () => {
    switch (modalType) {
      case "AGREGAR_PERSONA":
        return <AgregarPersonaModal onClose={closeModal} />;

      case "NUEVO_PRESTAMO":
        return <NuevoPrestamoModal onClose={closeModal} />;
      
      case "MODAL_CONFIRM_CODIGO":
        return <ModalConfirmCodigo onClose={closeModal}/>;

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.overlay} edges={[]}>
      <Animated.View style={styles.modalContainer}>
        {renderModal()}
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },

  modalContainer: {
    flex: 1,
    padding: 20,
  },
});
