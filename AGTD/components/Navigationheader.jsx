import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons, FontAwesome, EvilIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";


export default function Navigationheader({ selectedTab, setSelectedTab }) {
  const tabs = [
    {
      name: "Archivos",
      icon: <EvilIcons name="archive" size={30} />,
      animation: "bounceIn",
    },
    {
      name: "Tareas",
      icon: <FontAwesome name="tasks" size={25} />,
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
            style={[
              stylesNavigationHeader.navItem,
              {
                backgroundColor:
                  selectedTab === tab.name ? "#aed6f1" : "transparent",
              },

            ]}
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
    justifyContent: 'center', 
    height: 90,
    paddingTop: 5,
    paddingLeft: 40,
    paddingRight: 40,
    // borderWidth: 1,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    gap: 20,
    height: 60,
    padding: 5,
    // backgroundColor: "white",
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
      },
      
    }),
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
