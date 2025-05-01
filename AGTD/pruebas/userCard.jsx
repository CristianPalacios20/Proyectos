import React from "react";

import { View, Text } from "react-native";

export default function userCard({user}) {
  return (
    <View style={{margin: 10,}}>
      <Text>Nombre: {user.nombre}</Text>
      <Text>Edad: {user.edad}</Text>
      <Text>Dirección: {user.address.pais}</Text>
    </View>
  );
}
