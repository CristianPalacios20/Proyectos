import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import iconCompartir from "../../../assets/icons/iconCompartir.png";
import iconEmail from "../../../assets/icons/iconEmail.png";
import iconQR from "../../../assets/icons/iconQR.png";
import iconTime from "../../../assets/icons/iconTime.png";

export default function InvitarAmigos() {
  const contenido = [
    { icon: iconCompartir, label: "Compartir enlace de invitación" },
    { icon: iconEmail, label: "Enviar invitación por correo" },
    { icon: iconQR },
    { icon: iconTime, label: "Historial de invitaciones enviadas" },
  ];
  return (
    <View style={style.contenedor}>
      <View>
        <Text>Hola</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    contenedor: {
        flex: 1,
            padding: 20,
    backgroundColor: "#fff",
    }
});
