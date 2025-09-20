import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import perfil from "../../assets/icons/iconUser2.png";
import iconEditar from "../../assets/icons/iconEdit2.png";
import iconArrowLeft from "../../assets/icons/iconArrowLeft.png";
import iconKey from "../../assets/icons/iconKey.png";
import iconPadlock from "../../assets/icons/iconPadlock.png";
import iconNotification from "../../assets/icons/iconNotification.png";
import iconHelp from "../../assets/icons/iconHelp.png";
import iconFriends from "../../assets/icons/iconFriends.png";

export default function Ajustes({ onLogout, setSelectedTab }) {
  const navigation = useNavigation();
  const { user, setScreen, logout } = useAuth();

  const opcionesCuenta = [
    { icon: iconKey, label: "Cuenta" },
    { icon: iconPadlock, label: "Privacidad" },
    { icon: iconNotification, label: "Notificaciones" },
  ];

  const opcionesSoporte = [
    { icon: iconHelp, label: "Ayuda" },
    { icon: iconFriends, label: "Invitar a amigos" },
  ];

  const handleLogout = async () => {
    await logout();
    setScreen("login");
  };

  return (
    <View style={stylesAjustes.content}>
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
          <View style={[stylesAjustes.optionGroup, stylesAjustes.optionPerfil]}>
            <View style={stylesAjustes.contenedorImgPerfil}>
              <Image source={perfil} style={stylesAjustes.perfil} />
            </View>
            <View style={stylesAjustes.contentEdit}>
              <TouchableOpacity style={stylesAjustes.userInfo}>
                <Text style={stylesAjustes.textNombre}>{user?.nombre}</Text>
                <Image source={iconArrowBack} style={stylesAjustes.iconArrow}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={stylesAjustes.edit}
                onPress={() => setSelectedTab("EditarPerfil")}
              >
                <Image source={iconEditar} style={stylesAjustes.iconEditar} />
              </TouchableOpacity>
            </View>
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
            onPress={handleLogout}
          >
            <Text style={stylesAjustes.textoBotonCerrar}>cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  optionPerfil: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 15,
    padding: 20,
    // backgroundColor: "white",
    // borderWidth: 1,
  },
  contenedorImgPerfil: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: "#D9D9D9",
  },
  contentEdit: {
    flexDirection: "row",
    gap: "10",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5
  },
  iconArrow: {
    width: 20,
    height: 20,
    transform: [{rotate: "-90deg"}]
  },
  edit: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 160,
    width: 50,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#d9d9d985",
  },
  iconEditar: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  perfil: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  textNombre: {
    fontSize: 18,
    fontWeight: "600",
  },
  optionText: {
    height: 20,
    fontSize: 16,
  },
  optionButton: {
    flexDirection: "row",
    position: "relative",
    height: 20,
    gap: 10,
  },
  optionGroupCuenta: {
    justifyContent: "center",
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
