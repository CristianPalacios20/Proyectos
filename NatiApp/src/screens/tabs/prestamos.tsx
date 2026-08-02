import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import NuevoPrestamoModal from "../../components/modals/nuevoPrestamoModal";
import { useModal } from "../../context/modalContext";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconPlus from "../../assets/icons/iconPlus.png";

const { height } = Dimensions.get("window");

export default function Prestamos({ navigation }: any) {
  const { openModal, isVisible } = useModal();
  const translateY = useRef(new Animated.Value(-height)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  type Prestamo = {
    id: number;
    nombre: string;
    valor: string;
    fecha: string;
  };

  const prestamos: Prestamo[] = [
    { id: 1, nombre: "Martha López", valor: "500.000", fecha: "01/01/2026" },
    { id: 2, nombre: "Juana Gómez", valor: "300.000", fecha: "15/01/2026" },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => navigation.goBack()}
            >
              <Image source={iconArrowBack} style={styles.headerIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Préstamos</Text>
          </View>
          <View style={styles.screenContainer}>
            {/* Cuerpo */}
            <View style={styles.bodyContainer}>
              {/* Acción principal */}
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  onPress={() => openModal("AGREGAR_PERSONA")}
                  style={styles.addLoanButton}
                >
                  <Image source={iconPlus} style={styles.addLoanIcon} />
                  <Text style={styles.addLoanText}>Registrar préstamo</Text>
                </TouchableOpacity>
              </View>

              {/* Resumen */}
              <View style={styles.summaryContainer}>
                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Préstamos activos</Text>
                  <Text style={styles.summaryValue}>$8.200.000</Text>
                </View>

                <View style={styles.summaryDivider} />

                <View style={styles.summaryItem}>
                  <Text style={styles.summaryLabel}>Debe del mes</Text>
                  <Text style={styles.summaryValue}>$1.850.000</Text>
                </View>
              </View>
            </View>

            {/* Usuarios / préstamos */}
            <View style={styles.loansContainer}>
              {prestamos.map((prestamo) => (
                <View key={prestamo.id} style={styles.loanCard}>
                  {/* Info principal */}
                  <View style={styles.loanHeader}>
                    <View style={styles.loanMainInfo}>
                      <Text style={styles.loanName}>{prestamo.nombre}</Text>
                      <Text style={styles.loanAmount}>${prestamo.valor}</Text>
                    </View>

                    <Text style={styles.loanDate}>{prestamo.fecha}</Text>
                  </View>

                  {/* Detalles */}
                  <View style={styles.loanDetails}>
                    <View style={styles.interestContainer}>
                      <Text style={styles.interestLabel}>Porc. Interés</Text>
                      <Text style={styles.interestValue}>5%</Text>
                    </View>

                    <View style={styles.detailsDivider} />

                    <View style={styles.moraContainer}>
                      <Text style={styles.moraText}>
                        3 meses 25 días en mora
                      </Text>
                    </View>
                  </View>

                  {/* Acciones */}
                  <View style={styles.loanActions}>
                    <TouchableOpacity style={styles.payButton}>
                      <Text style={styles.payButtonText}>Registrar pago</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewPaymentsButton}>
                      <Text style={styles.viewPaymentsText}>Ver pagos</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
          {isVisible && <NuevoPrestamoModal />}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

import { StyleSheet } from "react-native";
import colores from "../../assets/theme/colores";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondoPantalla,
    // borderWidth: 1
  },

  screenContainer: {
    flex: 1,
    padding: 20,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: colores.extra,
  },

  buttonBack: {
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

  bodyContainer: {
    // borderWidth: 1,
  },

  actionContainer: {
    alignItems: "flex-end",
    // borderWidth: 1,
  },

  addLoanButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 203,
    height: 40,
    gap: 10,
    backgroundColor: colores.botonPrimario,
    borderRadius: 8,
  },

  addLoanIcon: {
    width: 15,
    height: 15,
  },

  addLoanText: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  summaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 76,
    gap: 15,
    padding: 10,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 8,
  },

  summaryItem: {
    // alignItems: "center",
    width: 145,
    // borderWidth: 1
  },

  summaryLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: colores.botonPrimario,
  },

  summaryValue: {
    fontSize: 24,
  },

  summaryDivider: {
    height: "100%",
    borderWidth: 1,
    borderColor: "#646464",
    borderRadius: 10,
  },

  loansContainer: {
    marginTop: 20,

    gap: 16,
  },

  loanCard: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    gap: 16,
  },

  loanHeader: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#B3B6B7",
  },

  loanMainInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  loanName: {
    fontSize: 18,
    fontWeight: "500",
  },

  loanAmount: {
    fontSize: 18,
  },

  loanDate: {
    marginTop: 10,
  },

  loanDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: colores.fondoPantalla,
  },

  interestContainer: {
    flexDirection: "row",
    gap: 5,
  },

  interestLabel: {
    fontSize: 14,
  },

  interestValue: {},

  detailsDivider: {},

  moraContainer: {},

  moraText: {},

  loanActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    // justifyContent: "space-between",
  },

  payButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 40,
    borderRadius: 8,
    backgroundColor: colores.botonPrimario,
  },

  payButtonText: {
    fontSize: 16,
    color: colores.textoClaro,
  },

  viewPaymentsButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 40,
    borderRadius: 8,
    backgroundColor: colores.botonPrimario,
  },

  viewPaymentsText: {
    fontSize: 16,
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
