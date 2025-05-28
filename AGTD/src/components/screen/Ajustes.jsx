import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Buscador from "../buscador";

import perfil from "../../../assets/icons/Perfil.png";
import iconArrowLeft from "../../../assets/icons/iconArrowLeft.png";
import iconKey from "../../../assets/icons/iconKey.png";
import iconPadlock from "../../../assets/icons/iconPadlock.png";
import iconNotification from "../../../assets/icons/iconNotification.png";
import iconHelp from "../../../assets/icons/iconHelp.png";
import iconFriends from "../../../assets/icons/iconFriends.png";
import iconLogOut from '../../../assets/icons/iconLogOut1.png';

export default function Ajustes({ onLogout }) {
  const [ajusteBusqueda, setAjusteBusqueda] = useState("");
  return (
    <SafeAreaView edges={['top']} style={stylesAjustes.content}>
      <Text style={stylesAjustes.title}>Ajustes</Text>
      <View style={stylesAjustes.contentSearch}>
        <Buscador
          valor={ajusteBusqueda}
          onCambiarTexto={setAjusteBusqueda}
          placeholder="Buscar en ajustes..."
        />
      </View>
      <View style={stylesAjustes.contentOptions}>
        <View style={stylesAjustes.extraOptions}>
          <TouchableOpacity
            style={[
              stylesAjustes.optionGroup,
              stylesAjustes.optionButtonPerfil,
            ]}
          >
            <Image source={perfil} style={stylesAjustes.perfil} />
            <Text style={stylesAjustes.optionText}>Nombre de usuario</Text>
          </TouchableOpacity>
          <View
            style={[stylesAjustes.optionGroup, stylesAjustes.optionGroupCuenta]}
          >
            <TouchableOpacity style={[stylesAjustes.optionButton]}>
              <Image source={iconKey} style={stylesAjustes.img} />
              <Text style={stylesAjustes.optionText}>Cuenta</Text>
              <Image
                source={iconArrowLeft}
                style={stylesAjustes.iconArrowLeft}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[stylesAjustes.optionButton]}>
              <Image source={iconPadlock} style={stylesAjustes.img} />
              <Text style={stylesAjustes.optionText}>Privacidad</Text>
              <Image
                source={iconArrowLeft}
                style={stylesAjustes.iconArrowLeft}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[stylesAjustes.optionButton]}>
              <Image source={iconNotification} style={stylesAjustes.img} />
              <Text style={stylesAjustes.optionText}>Notificaciones</Text>
              <Image
                source={iconArrowLeft}
                style={stylesAjustes.iconArrowLeft}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[stylesAjustes.optionGroup, stylesAjustes.optionGroupExtras]}
          >
            <TouchableOpacity style={[stylesAjustes.optionButton]}>
              <Image source={iconHelp} style={stylesAjustes.img} />
              <Text style={stylesAjustes.optionText}>Ayuda</Text>
              <Image
                source={iconArrowLeft}
                style={stylesAjustes.iconArrowLeft}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[stylesAjustes.optionButton]}>
              <Image source={iconFriends} style={stylesAjustes.img} />
              <Text style={stylesAjustes.optionText}>Invitar a amigos</Text>
              <Image
                source={iconArrowLeft}
                style={stylesAjustes.iconArrowLeft}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={stylesAjustes.logoutContainer}>
          <TouchableOpacity
            style={stylesAjustes.logoutButton}
            onPress={onLogout}
          >
            <Image source={iconLogOut} style={stylesAjustes.img}/>
             {/* <Text style={stylesAjustes.logoutText}>Cerrar sesión.</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesAjustes = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 10,
    paddingLeft: 16,
  },
  contentSearch: {
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
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
    // borderWidth: 1,
  },
  optionGroup: {
    alignSelf: "flex-start",
    width: "100%",
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  optionButtonPerfil: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    gap: 20,
    paddingLeft: 20,
    // borderWidth: 1,
  },
  perfil: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  optionText: {
    height: 20,
    fontSize: 16,
    // borderWidth: 1,
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
  img: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  optionGroupExtras: {
    justifyContent: "center",
    height: 80,
    gap: 15,
  },
  iconArrowLeft: {
    position: "absolute",
    width: 20,
    height: 20,
    left: "90%",
    resizeMode: "contain",
  },
  logoutContainer: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: 10,
    left: 30,
    backgroundColor: "#d0d3d4",
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
    })
  },
  logoutButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    padding: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
