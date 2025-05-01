import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Buscador from "../buscador";

export default function Archivos() {
  const [archivoBusqueda, setArchivoBusqueda] = useState("");
  return (
    <View style={styleArchivos.content}>
      <Text style={styleArchivos.title}>Archivos</Text>
      <View style={styleArchivos.contentSearch}>
        <Buscador
          valor={archivoBusqueda}
          onCambiarTexto={setArchivoBusqueda}
          placeholder="Buscar en archivos.."
        />
      </View>
    </View>
  );
}

const styleArchivos = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 10,
  },
  contentSearch: {
    paddingBottom: 10,
    paddingRight: 16,
  },
});
