import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";
import { useChat } from "../context/chatContext";

import iconClose from "../../assets/icons/iconClose.png";
import iconNotificacion from "../../assets/icons/iconNotificacion.png";
import iconSilenciarNoti from "../../assets/icons/iconSilenciarNoti.png";
import iconInfo from "../../assets/icons/iconInfo2.png";
import iconDestacar from "../../assets/icons/iconDestacar3.png";
import iconEliminarFav from "../../assets/icons/iconEliminarDes9.png";
import iconEliminar2 from "../../assets/icons/iconEliminar3.png";

export default function ModalMenu({
  closeModal,
  selectedChat,
  estadoOpciones,
  setEstadoOpciones,
}) {
  const [visible, setVisible] = useState(true);

  const opciones = [
    {
      opcion: estadoOpciones.silenciado ? "Activar sonido" : "Silenciar",
      icon: estadoOpciones.silenciado ? iconNotificacion : iconSilenciarNoti,
    },
    { opcion: "Info tarea", icon: iconInfo },
    {
      opcion: estadoOpciones.destacada
        ? "Eliminar de destacadas"
        : "Agregar a destacadas",
      icon: estadoOpciones.destacada ? iconEliminarFav : iconDestacar,
    },
    { opcion: "Eliminar tarea", icon: iconEliminar2 },
  ];

  const handleClose = () => {
    setVisible(false);
  };
  const acciones = {
    Silenciar: () =>
      setEstadoOpciones((prev) => ({ ...prev, silenciado: true })),
    "Activar sonido": () =>
      setEstadoOpciones((prev) => ({ ...prev, silenciado: false })),
    "Agregar a destacadas": () =>
      setEstadoOpciones((prev) => ({ ...prev, destacada: true })),
    "Eliminar de destacadas": () =>
      setEstadoOpciones((prev) => ({ ...prev, destacada: false })),
    "Info tarea": () => alert("Mostrar información"),
    "Eliminar tarea": () => alert("¿Seguro de eliminar?"),
  };

  const handleOption = (opc) => {
    if (acciones[opc]) {
      acciones[opc]();
      handleClose();
    } else {
      console.warn("opcion no reconocida", opc);
    }
  };

  const { dataChats } = useChat();
  const chatSeleccionado = dataChats?.find(
    (chat) => chat.chatId === selectedChat
  );
  const tituloChat = chatSeleccionado?.title || "titulo no disponible";
  console.log(selectedChat);
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
              <Text
                style={stylesModalTarea.tituloTarea}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {tituloChat}
              </Text>
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
                onPress={() => handleOption(item.opcion)}
              >
                <Text style={stylesModalTarea.opcionText}>{item.opcion}</Text>
                {item.icon && (
                  <Image style={stylesModalTarea.icon} source={item.icon} />
                )}
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
    alignItems: "center",
    width: "100%",
    height: "45%",
    padding: 20,
    bottom: 0,
    backgroundColor: "#F4F4F5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    overflow: "hidden"
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "90%"
  },
  porcentaje: {
    width: 20,
    height: 20,
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
    flexShrink: 1,
    flexGrow: 1,
    overflow: "hidden",
  },
  opciones: {
    width: "100%",
    gap: 15,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBlock: 20,
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
    fontWeight: "400",
  },

  icon: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: "#b3b6b7b2",
  },
});
