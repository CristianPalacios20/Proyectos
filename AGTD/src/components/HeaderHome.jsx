import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import Edit from "../../assets/icons/iconEdit.png";
import iconSetting from "../../assets/icons/iconAjustes.png";
import iconBuscar from "../../assets/icons/iconBuscar.png";

export default function HeaderHome({ setSelectedTab }) {
  return (
    <View style={stylesHeaderHome.content}>
      <StatusBar backgroundColor="#007BFF" barStyle="dark-content" />
      <View style={stylesHeaderHome.headerButtons}>
        <Text style={stylesHeaderHome.nameApp}>
          AG<Text style={{ color: "#28a3f6" }}>T</Text>
        </Text>
        <View style={stylesHeaderHome.quickActions}>
          <TouchableOpacity
            onPress={() => setSelectedTab("Buscar")}
            style={stylesHeaderHome.bottomSetting}
          >
            <Image source={iconBuscar} style={stylesHeaderHome.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("Ajustes")}
            style={stylesHeaderHome.bottomSetting}
          >
            <Image source={iconSetting} style={stylesHeaderHome.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesHeaderHome.options}
            onPress={() => setSelectedTab("CrearTarea")}
          >
            <Image source={Edit} style={stylesHeaderHome.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const stylesHeaderHome = StyleSheet.create({
  content: {
    height: 90,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    overflow: "hidden",
  },
  headerButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameApp: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomSetting: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
  options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 20,
    // backgroundColor: "#e5e7e9",
    overflow: "hidden",
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
    gap: 10,
  },
  userContainer: {
    position: "absolute",
    left: 20,
    bottom: 10,
  },
  textUser: {
    fontSize: 30,
    // color: "white",
  },
});
