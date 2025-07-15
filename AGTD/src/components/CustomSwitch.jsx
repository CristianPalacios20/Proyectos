import { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomSwitch({ isOn, onToggle }) {
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={[
        style.contenedor,
        { backgroundColor: isOn ? "#0099FF" : "#dcdde1" },
      ]}
    >
      <View
        style={[style.circle, { alignSelf: isOn ? "flex-end" : "flex-start" }]}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  contenedor: {
    width: 50,
    height: 30,
    borderRadius: 30,
    padding: 3,
    justifyContent: "center",
  },

  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
});
