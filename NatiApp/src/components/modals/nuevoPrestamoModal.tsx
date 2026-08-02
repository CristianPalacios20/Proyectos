import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import colores from "../../assets/theme/colores";

export default function nuevoPrestamoModal({ onClose }: any) {
  return (
    <View style={{}}>
      <View style={styles.modalHeader}>
        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>

        <Text style={styles.modalTitle}>Nuevo préstamo</Text>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs principales */}
      <View style={styles.inputsContainer}>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Cédula" />
      </View>

      {/* Monto */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Monto</Text>
        <TextInput style={styles.amountInput} placeholder="$0" />
      </View>

      {/* Fecha */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Interés del</Text>
        <Text style={styles.dateValue}>5% por cada $50.000</Text>
      </View>

      {/* Acción final */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.addPersonButton}>
          <Text style={styles.addPersonButtonText}>Agregar persona</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
     modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cancelButton: {},

  cancelButtonText: {
    fontSize: 16,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  saveButton: {},

  saveButtonText: {
    fontSize: 16,
  },

  inputsContainer: {
    marginTop: 40,
    gap: 15,
    // borderWidth: 1,
  },

  input: {
    height: 40,
    paddingHorizontal: 21,
    borderWidth: 1,
    borderColor: "#7B7D7D",
    borderRadius: 10,
  },

  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    marginTop: 10,
  },

  amountLabel: {
    fontSize: 16,
  },

  amountInput: {
    textAlign: "center",
    width: 137,
    height: 35,
    borderWidth: 1,
    borderColor: "#7B7D7D",
    borderRadius: 8,
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: "#7B7D7D",
  },

  dateLabel: {
    fontSize: 16,
  },

  dateValue: {
    color: colores.botonPrimario,
    fontWeight: "bold",
    fontSize: 16,
  },

  footerContainer: {
    marginTop: 30,
  },

  addPersonButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: colores.botonPrimario,
    borderRadius: 8,
  },

  addPersonButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: colores.textoClaro,
  },
})
