import React from "react";
import { View, Button } from "react-native";

export default function Cambiador({setMensaje}) {
  return (
    <View>
      <Button
        title="Cambiar mensaje 'Hola desde el hijo'"
        onPress={() => setMensaje("Hola desde el hijo")}
      />
      <Button
        title="Cambiar mensaje 'Otro mensaje más'"
        onPress={() => setMensaje("Otro mensaje más")}
      />
    </View>
  );
}
