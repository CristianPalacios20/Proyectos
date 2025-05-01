import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Boton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 150,
        padding: 10,
        backgroundColor: "blue",
      }}
    >
      <Text style={{ color: "white" }}>Presióna aquí</Text>
    </TouchableOpacity>
  );
}
