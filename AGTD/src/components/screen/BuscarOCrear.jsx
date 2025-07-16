import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import Buscador from "../buscador";

import iconClose from "../../../assets/icons/iconClose.png";

export default function Buscar({ setSelectedTab }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtros = [
    { name: "Todas", value: "all" },
    { name: "Pendientes", value: "pending" },
    { name: "Finalizadas", value: "done" },
    { name: "Destacadas", value: "dest" },
  ];
  return (
    <SafeAreaView edges={["top: 0"]} style={style.container}>
      <View style={style.overlay}>
        <View style={style.panelWrapper}>
          <View style={style.searchRow}>
            <View style={style.contentBuscador}>
              <Buscador />
            </View>
            <TouchableOpacity onPress={() => setSelectedTab("Tareas")}>
              <Image source={iconClose} />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.filterTabs}
          >
            {filtros.map((filtro) => (
              <TouchableOpacity
                key={filtro.value}
                onPress={() => setActiveFilter(filtro.value)}
                style={[
                  style.filterTab,
                  {
                    backgroundColor:
                      activeFilter === filtro.value ? "#28a4f66e" : "#e5e7e9",
                  },
                ]}
              >
                <Text
                  style={[
                    style.textFilterTab,
                    {
                      color:
                        activeFilter === filtro.value ? "black" : "#979a9a",
                    },
                  ]}
                >
                  {filtro.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
  },

  panelWrapper: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentBuscador: {
    width: 300,
  },

  filterTabs: {
    flexDirection: "row",
    height: 40,
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  filterTab: {
    justifyContent: "center",
    height: 28,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  textFiltertab: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#979a9a",
  },
});
