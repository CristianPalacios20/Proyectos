import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function Navigationheader({ selectedTab, setSelectedTab }) {
  const tabs = [
    {
      name: "Tareas",
      icon: <FontAwesome name="tasks" size={20} />,
      animation: "pulse",
    },
    {
      name: "Ajustes",
      icon: <Ionicons name="settings" size={25} color="gray" />,
      animation: "flipInX",
    },
  ];
  return (
    <View style={stylesNavigationHeader.contenedor}>
      <View style={stylesNavigationHeader.nav}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={stylesNavigationHeader.button}
            onPress={() => {
              setSelectedTab(tab.name);
            }}
          >
            {/* icon animado */}
            <Animatable.View
              animation={selectedTab === tab.name ? tab.animation : ""} // si es seleccionado, rebota
              duration={500}
            >
              {/* Cambiar de color dinámicamente */}
              {React.cloneElement(tab.icon, {
                color: selectedTab === tab.name ? "black" : "gray",
                style: [
                  { backfaceVisibility: "visible" }, // ✅ solucionamos el crash
                  tab.icon.props?.style || {},
                ],
              })}
            </Animatable.View>
            <Text
              style={[
                stylesNavigationHeader.texto,
                { color: selectedTab === tab.name ? "black" : "gray" },
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const stylesNavigationHeader = StyleSheet.create({
  contenedor: {
    display: "flex",
    alignItems: "center",
    height: 90,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#F5F5F5",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    gap: 40,
    width: 120,
    padding: 5,
    marginTop: 10,
  },
  button: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  navItem: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  texto: {
    fontSize: 10,
  },
  img: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
