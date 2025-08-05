import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { NombreContext } from "./NombreContext";

export default function MostrarNombre() {
  const { nombre, setNombre } = useContext(NombreContext);
  return (
    <View>
      <Text>Hola {nombre}</Text>
      <Button onPress={() => setNombre("Stiven")} title="Cambiar nombre" />
    </View>
  );
}
