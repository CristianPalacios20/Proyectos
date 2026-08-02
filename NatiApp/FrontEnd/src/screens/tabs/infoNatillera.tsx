import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import iconArrow from "../../assets/icons/iconArrow.png";
import iconMonto from "../../assets/icons/iconMonto.png";
import iconPrestamos from "../../assets/icons/iconPrestamo.png";
import iconIntereses from "../../assets/icons/iconIntereses.png";
import colores from "../../assets/theme/colores";

export default function InfoNatillera({ navigation } : any) {
  type Tarjeta = {
    id: number;
    img: any | null;
    nombre: string;
    valor: string;
  };

  const tarjetas: Tarjeta[] = [
    { id: 1, img: iconMonto, nombre: "Monto", valor: "$0" },
    { id: 2, img: iconPrestamos, nombre: "Préstamo", valor: "$0" },
    { id: 3, img: iconIntereses, nombre: "Intereses", valor: "$0" },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screenContainer}>
        {/* Imagen principal */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.imageContainer}>
          <Image source={iconArrow} style={styles.mainImage} />
        </TouchableOpacity>

        {/* Título */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Así está la natillera</Text>
        </View>

        {/* Resumen general */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryLabel}>Todo suma</Text>
          <Text style={styles.summaryValue}>$0</Text>
        </View>

        {/* Tarjetas */}
        <View style={styles.cardsContainer}>
          {tarjetas.map((tarjeta) => (
            <View key={tarjeta.id} style={styles.card}>
              {tarjeta.img && (
                <Image source={tarjeta.img} style={styles.cardImage} />
              )}
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{tarjeta.nombre}</Text>
                <Text style={styles.cardValue}>{tarjeta.valor}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.fondoPantalla,
  },

  screenContainer: {},

  imageContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },

  mainImage: {
    width: 30,
    height: 30,
  },

  titleContainer: {
    padding: 10,
    marginTop: 10,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  summaryContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
  },

  summaryLabel: {
    fontSize: 16,
  },

  summaryValue: {
    fontSize: 32,
  },

  cardsContainer: {
    padding: 10,
    gap: 10,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    height: 78,
    padding: 10,
    gap: 10,
    borderRadius: 8,
    backgroundColor: "#2db9658e",
  },

  cardImage: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  cardHeader: {},


  cardTitle: {
    fontSize: 16,
  },

  cardValue: {},
});
