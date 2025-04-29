import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Archivos() {
  return (
    <View style={styleArchivos.content}>
      <Text style={styleArchivos.title}>Archivos</Text>
    </View>
  );
}

const styleArchivos = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
  }
})
