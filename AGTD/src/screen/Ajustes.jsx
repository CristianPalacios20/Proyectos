import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import perfil from "../../assets/icons/iconUser2.png";
import iconArrowLeft from "../../assets/icons/iconArrowLeft.png";
import iconKey from "../../assets/icons/iconKey.png";
import iconPadlock from "../../assets/icons/iconPadlock.png";
import iconNotification from "../../assets/icons/iconNotification.png";
import iconHelp from "../../assets/icons/iconHelp.png";
import iconFriends from "../../assets/icons/iconFriends.png";

export default function Ajustes({ onLogout, setSelectedTab }) {
  const navigation = useNavigation();

  const opcionesCuenta = [
    { icon: iconKey, label: "Cuenta" },
    { icon: iconPadlock, label: "Privacidad" },
    { icon: iconNotification, label: "Notificaciones" },
  ];

  const opcionesSoporte = [
    { icon: iconHelp, label: "Ayuda" },
    { icon: iconFriends, label: "Invitar a amigos" },
  ];
  return (
    <SafeAreaView edges={["top"]} style={stylesAjustes.content}>
      <View style={stylesAjustes.header}>
        <TouchableOpacity
          onPress={() => setSelectedTab("Tareas")}
          style={stylesAjustes.buttonBack}
        >
          <Image source={iconArrowBack} style={stylesAjustes.iconArrowBack} />
        </TouchableOpacity>
        <Text style={stylesAjustes.title}>Ajustes</Text>
      </View>

      <View style={stylesAjustes.contentOptions}>
        <View style={stylesAjustes.extraOptions}>
          <View
            style={[
              stylesAjustes.optionGroup,
              stylesAjustes.optionButtonPerfil,
            ]}
          >
            <View style={stylesAjustes.contenedorImgPerfil}>
              <Image source={perfil} style={stylesAjustes.perfil} />
            </View>
            <Text style={[stylesAjustes.optionText, stylesAjustes.perfiltext]}>
              Editar perfil
            </Text>
          </View>

          {/* Grupo Cuenta */}
          <View
            style={[stylesAjustes.optionGroup, stylesAjustes.optionGroupCuenta]}
          >
            <Text style={stylesAjustes.textCuenta}>cuenta</Text>
            <View style={stylesAjustes.contenedorBotones}>
              {opcionesCuenta.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={stylesAjustes.optionButton}
                  onPress={() =>
                    navigation.navigate("Informacion", {
                      label: item.label,
                    })
                  }
                >
                  <Image source={item.icon} style={stylesAjustes.img} />
                  <Text style={stylesAjustes.optionText}>{item.label}</Text>
                  <Image
                    source={iconArrowLeft}
                    style={stylesAjustes.iconArrowLeft}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Grupo Soporte */}
          <View
            style={[stylesAjustes.optionGroup, stylesAjustes.optionGroupExtras]}
          >
            <Text style={stylesAjustes.textSoporte}>soporte</Text>
            <View style={stylesAjustes.contenedorBotones}>
              {opcionesSoporte.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={stylesAjustes.optionButton}
                  onPress={() =>
                    navigation.navigate("Informacion", {
                      label: item.label,
                    })
                  }
                >
                  <Image source={item.icon} style={stylesAjustes.img} />
                  <Text style={stylesAjustes.optionText}>{item.label}</Text>
                  <Image
                    source={iconArrowLeft}
                    style={stylesAjustes.iconArrowLeft}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            style={stylesAjustes.botonCerrar}
            onPress={() => onLogout(false)}
          >
            <Text style={stylesAjustes.textoBotonCerrar}>cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesAjustes = StyleSheet.create({
  content: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    padding: 10,
  },

  title: {
    fontSize: 25,
    fontWeight: "600",
    paddingBottom: 5,
    marginBottom: 10,
    paddingLeft: 16,
  },

  buttonBack: {
    position: "absolute",
    flexDirection: "row",
    top: 20,
    left: 10,
    width: 80,
  },
  iconArrowBack: {
    width: 30,
    height: 20,
    resizeMode: "contain",
  },
  contentOptions: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  extraOptions: {
    flex: 1,
    gap: 30,
  },
  optionGroup: {
    width: "100%",
    borderRadius: 10,
  },
  optionButtonPerfil: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 20,
    padding: 20,
    backgroundColor: "transparent",
  },

  contenedorImgPerfil: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: "#D9D9D9",
  },

  perfil: {
    width: 110,
    height: 110,
    resizeMode: "cover",
  },
  optionText: {
    height: 20,
    fontSize: 16,
  },

  perfiltext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0099FF",
    height: 30,
  },

  optionButton: {
    flexDirection: "row",
    position: "relative",
    height: 20,
    gap: 10,
  },
  optionGroupCuenta: {
    justifyContent: "center",
    height: 120,
    gap: 15,
  },

  textCuenta: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#7B7D7D",
  },

  textSoporte: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#7B7D7D",
  },

  contenedorBotones: {
    gap: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  img: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  optionGroupExtras: {
    justifyContent: "center",
    height: 80,
    gap: 15,
    marginTop: 20,
  },
  iconArrowLeft: {
    position: "absolute",
    width: 20,
    height: 20,
    left: "90%",
    resizeMode: "contain",
  },

  botonCerrar: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
    width: "100%",
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#D7DBDD",
  },

  textoBotonCerrar: {
    textTransform: "capitalize",
    fontWeight: "600",
  },
});
