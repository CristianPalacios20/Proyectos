import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Edit from "../../assets/icons/opciones.png";

export default function HeaderHome() {
  return (
    <View style={stylesHeaderHome.content}>
      <TouchableOpacity
        style={stylesHeaderHome.options}
        onPress={() => alert("Opciones")}
      >
        <Image source={Edit} style={stylesHeaderHome.optionsImg} />
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold',}}>
        AGT<Text style={{color: '#28a3f6'}}>D</Text>
      </Text>
      <View style={stylesHeaderHome.quickActions}>
        <TouchableOpacity
          style={stylesHeaderHome.button}
          onPress={() => alert("Agregar tarea")}
        >
          <MaterialIcons name="add" size={23} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesHeaderHome = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    // borderWidth: 1,
  },
  options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#e5e7e9",
    overflow: "hidden",
  },
  optionsImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  imgLogo: {
    width: 35,
    height: 35,
    transform: [{ rotate: "130deg" }],
    resizeMode: "contain",
  },
  imgSearch: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: "#28a3f6",
  },
  quickActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
