import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import iconDestacar from "../../assets/icons/iconDestacar2.png";
import { useState } from "react";

export default function Destacadas() {
  const destacadas = [
  {
    titulo: "Revisar propuesta de diseño",
    icon: iconDestacar,
    fecha: "10 de abril",
    prioridad: "A",
  },
  {
    titulo: "Enviar cotización al cliente",
    icon: iconDestacar,
    fecha: "22 de junio",
    prioridad: "M",
  },
  {
    titulo: "Actualizar base de datos",
    icon: iconDestacar,
    fecha: "1 de julio",
    prioridad: "B",
  },
  {
    titulo: "Organizar reunión semanal",
    icon: iconDestacar,
    fecha: "15 de julio",
    prioridad: "B",
  },
  {
    titulo: "Capacitación del nuevo personal",
    icon: iconDestacar,
    fecha: "28 de marzo",
    prioridad: "M",
  },
  {
    titulo: "Diseñar campaña publicitaria",
    icon: iconDestacar,
    fecha: "30 de junio",
    prioridad: "A",
  },
  {
    titulo: "Revisar feedback del cliente",
    icon: iconDestacar,
    fecha: "12 de mayo",
    prioridad: null,
  },
];

  const [prioridad, setPrioridad] = useState("");

  return (
    <ScrollView
      contentContainerStyle={stylesDestacadas.contenedor}
      showsVerticalScrollIndicator={false}
    >
      {destacadas.map((item, index) => (
        <TouchableOpacity key={index} style={[stylesDestacadas.card]}>
          <View style={stylesDestacadas.cardContent}>
            <Text style={stylesDestacadas.cardTitle}>{item.titulo}</Text>
            <Image source={item.icon} style={stylesDestacadas.cardIcon} />
          </View>
          <View style={[stylesDestacadas.cardFooter]}>
            <View
              style={[
                stylesDestacadas.dot,
                item.prioridad === "A"
                  ? stylesDestacadas.badgeAA
                  : item.prioridad === "M"
                  ? stylesDestacadas.badgeMM
                  : item.prioridad === "B"
                  ? stylesDestacadas.badgeBB
                  : null,
              ]}
            />
            <View style={stylesDestacadas.dateContainer}>
              <Text
                style={[
                  stylesDestacadas.dateText,
                  item.prioridad === "A"
                    ? stylesDestacadas.badgeA
                    : item.prioridad === "M"
                    ? stylesDestacadas.badgeM
                    : item.prioridad === "B"
                    ? stylesDestacadas.badgeB
                    : null,
                ]}
              >
                {item.fecha}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const stylesDestacadas = StyleSheet.create({
  contenedor: {
    // flex: 1,
    gap: 20,
    // borderWidth: 1,
  },
  card: {
    padding: 15,
    gap: 20,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 300
  },

  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    maxWidth: 110,
    padding: 5,
    backgroundColor: "white",
    borderRadius: 50,
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: "#b3b6b7",
    borderRadius: 50,
  },

  dateText: {
    fontWeight: "bold",
    color: "black",
  },

  badgeA: {
    color: "red",
  },
  badgeM: {
    color: "orange",
  },
  badgeB: {
    color: "blue",
  },
  badgeAA: {
    backgroundColor: "red",
  },
  badgeMM: {
    backgroundColor: "orange",
  },
  badgeBB: {
    backgroundColor: "blue",
  },
  dateContainer: {},
});
