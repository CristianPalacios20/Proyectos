import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import iconAdd from "../../assets/icons/iconAdd.png";
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
            style={stylesHeaderHome.AddTask}
            onPress={() => setSelectedTab("CrearTarea")}
          >
            <Image source={iconAdd} style={stylesHeaderHome.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const stylesHeaderHome = StyleSheet.create({
  content: {
    padding: 20,
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
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  AddTask: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: "#0099FF",
    overflow: "hidden",
  },
  imgSearch: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  quickActions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
