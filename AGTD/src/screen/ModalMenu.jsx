import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";

import iconClose from "../../assets/icons/iconClose.png";
import { useState } from "react";

export default function ModalMenu({ closeModal }) {
  const opciones = [
    { opcion: "silenciar", icon: null },
    { opcion: "Info tarea", icon: null },
    { opcion: "eliminar de favoritos", icon: null },
    { opcion: "eliminar tarea", icon: null },
  ];

  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Pressable style={stylesModalTarea.wrapper} onPress={handleClose}>
      <AnimatedScreenWrapper
        animacion="slideUp"
        visible={visible}
        duration={300}
        onFinish={closeModal}
        style={stylesModalTarea.containerFondo}
      >
        <Pressable onPress={() => {}} style={stylesModalTarea.containerModal}>
          {/* Header */}
          <View style={stylesModalTarea.header}>
            <View style={stylesModalTarea.headerInfo}>
              <View style={stylesModalTarea.porcentaje}></View>
              <Text style={stylesModalTarea.tituloTarea}>título tarea</Text>
            </View>
            <TouchableOpacity
              onPress={handleClose}
              style={stylesModalTarea.closeButton}
            >
              <Image
                source={iconClose}
                alt="close modal"
                style={stylesModalTarea.closeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Opciones */}
          <View style={stylesModalTarea.opciones}>
            {opciones.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  stylesModalTarea.opcionItem,
                  index >= 1 ? stylesModalTarea.borderTop : null,
                ]}
              >
                <Text style={stylesModalTarea.opcionText}>{item.opcion}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </AnimatedScreenWrapper>
    </Pressable>
  );
}

const stylesModalTarea = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  containerFondo: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  containerModal: {
    position: "absolute",
    width: "100%",
    height: "40%",
    padding: 20,
    bottom: 0,
    backgroundColor: "#F4F4F5",
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  porcentaje: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
  tituloTarea: {
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  opciones: {
    gap: 15,
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 12,
  },
  opcionItem: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  opcionText: {
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "400",
  },

  borderTop: {
    borderTopWidth: 1,
    borderColor: "#b3b6b7b2",
  },
});
