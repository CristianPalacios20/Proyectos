import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";

import { useChat } from "../context/chatContext";
import { useModal } from "../context/modalContext";

import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";

export default function MultiModals() {
  const { type, setType } = useModal();
  const { chatActual, selectedSubtask } = useChat();

  if (!type || type === "opciones") return null;

  const closeModal = () => setType(null);

  const subTaskSelected = chatActual?.subtasks?.find(
    (s) => s.subtaskId === selectedSubtask
  );

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
                <Text style={styles.pregunta}>
                  ¿Estas seguro de eliminar la tarea:
                </Text>
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

      case "modalSubtask":
        return (
          <BlurView intensity={20} style={styles.modalSubtask}>
            <View style={styles.modalContent}>
              <View style={styles.contentSubtask}>
                <Text style={styles.textSubtask}>{subTaskSelected.name}</Text>
              </View>
              <View style={styles.contentButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.modalButtonEditar]}
                >
                  <Text style={styles.modalText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={[styles.modalText, styles.deleteText]}>
                    Eliminar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
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
    // backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  contentEliminar: {
    position: "absolute",
    alignItems: "center",
    bottom: 40,
    width: "90%",
    gap: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
  },
  message: {
    textAlign: "center",
  },
  pregunta: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  nameTask: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    color: "#999999",
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

  // Modal subtask
  modalSubtask: {
    position: "relative",
    width: "100%",
    height: "100%",

    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    position: "absolute",
    bottom: "40%",
    left: 20,
    gap: 10,
    // borderWidth: 1,
  },
  contentSubtask: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  textSubtask: {
    fontSize: 16,
  },
  contentButtons: {
    borderRadius: 10,
    backgroundColor: "white",
  },
  modalButton: {
    justifyContent: "center",
    width: 200,
    height: 45,
    paddingHorizontal: 14,
  },
  modalButtonEditar: {
    borderBottomWidth: 1,
    borderColor: "#00000044",
  },
  modalText: {
    fontSize: 18,
  },
  deleteText: {
    color: "#E53935",
  },
});
