import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useChat } from "../context/chatContext";
import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";

export default function MultiModals({ type, setType }) {
  const { chatActual } = useChat();

  if (!type || type === "opciones") return null;

  const closeModal = () => setType(null);

  const renderContent = () => {
    switch (type) {
      case "EliminarTarea":
        return (
          <AnimatedScreenWrapper
            style={{ justifyContent: "center", alignItems: "center" }}
            animacion="slideUp"
          >
            <View style={styles.contentEliminar}>
              <View style={styles.message}>
                <Text>¿Estas seguro de eliminar la tarea </Text>
                <Text style={styles.nameTask}>{chatActual.title}?</Text>
              </View>
              <View style={styles.actionsEliminar}>
                <TouchableOpacity style={[styles.deleteButton, styles.btn]}>
                  <Text style={styles.deleteText}>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={closeModal}
                  style={[styles.cancelButton, styles.btn]}
                >
                  <Text style={styles.cancelText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </AnimatedScreenWrapper>
        );
        break;

      case "completada":
        return (
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Tarea completada</Text>
            </View>
          </View>
        );
        break;

      case "compartirTarea":
        return (
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Tarea completada</Text>
            </View>
          </View>
        );
        break;

      case "recordatorio":
        return (
          <View style={styles.content}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancelar</Text>
              </TouchableOpacity>
              <Text style={styles.title}>Configurar recordatorio</Text>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveText}>Guardar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.body}></View>
          </View>
        );
        break;

      default:
        break;
    }
  };

  return (
    <Pressable style={styles.overlay} onPress={closeModal}>
      {renderContent()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    zIndex: 1,
  },
  contentEliminar: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
    width: "90%",
    gap: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  message: {
    flexDirection: "row",
  },
  nameTask: {
    fontWeight: "bold",
  },
  actionsEliminar: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    padding: 10,
    borderRadius: 20,
    // borderWidth: 1,
  },
  deleteButton: {
    backgroundColor: "#ff000038",
  },
  deleteText: {
    fontWeight: "bold",
    color: "red",
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#0099FF",
  },
  cancelText: {
    fontWeight: "bold",
    color: "#0099FF",
  },
});
