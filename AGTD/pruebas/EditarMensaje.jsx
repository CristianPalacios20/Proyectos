import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

export default function EditarMensaje({ setMensaje2 }) {
  const [input, setInput] = useState();

  const enviarMensaje = () => {
    setMensaje2(input);
    setInput("");
  };
  return (
    <View>
      <Button
        title="Enviar mensaje: '¡Hola Mundo!'"
        onPress={() => setMensaje2("¡Hola Mundo!")}
      />
      <Button
        title="Enviar mensaje: '¡React Native Rocks!'"
        onPress={() => setMensaje2("¡React Native Rocks!")}
      />
      <TextInput
        placeholder="escribe algo..."
        value={input}
        onChangeText={setInput}
        style={{
          borderWidth: 1,
          height: 60,
        }}
      />
      <Button title="enviar" onPress={enviarMensaje} />
    </View>
  );
}
