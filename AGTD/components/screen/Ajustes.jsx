import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Buscador from "../buscador";
// {setIsLoggedIn}
export default function Ajustes({onLogout}) {
  const [ajusteBusqueda, setAjusteBusqueda] = useState("");
  return (
    <View style={stylesAjustes.content}>
      <Text style={stylesAjustes.title}>Ajustes</Text>
      <View style={stylesAjustes.contentSearch}>
        <Buscador
          valor={ajusteBusqueda}
          onCambiarTexto={setAjusteBusqueda}
          placeholder="Buscar en ajustes..."
        />
      </View>
      <View style={stylesAjustes.contentOptions}>
        <View style={stylesAjustes.extraOptions}>
          <Text>Otras cosas</Text>
        </View>
        <View style={stylesAjustes.logoutContainer}>
          <TouchableOpacity 
          style={stylesAjustes.logoutButton}
          onPress={onLogout}
          >
            <Text style={stylesAjustes.logoutText}>Cerrar sesión.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const stylesAjustes = StyleSheet.create({
  content: {
    flex: 1,
    // borderWidth: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 10,
    paddingLeft: 16,
  },
  contentSearch: {
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
  },
  contentOptions: {
    flex: 1,
    // borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  extraOptions: {
    flex: 1,
  },
  logoutContainer: {
    // borderWidth: 1,
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#28a3f6',
  },
  logoutText:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
