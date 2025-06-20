import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MiComponente() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.boton}>
        <Text style={styles.textoBoton}>Mostrar Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)} // para Android
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.titulo}>Este es un modal</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.textoCerrar}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  boton: { backgroundColor: "#007BFF", padding: 12, borderRadius: 10 },
  textoBoton: { color: "white" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "40%",
    height: 200,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  textoCerrar: { color: "#007BFF", marginTop: 10 },
});
