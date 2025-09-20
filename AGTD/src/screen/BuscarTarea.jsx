import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import Buscador from "../components/buscador";
import Destacadas from "./Destacadas";

import iconClose from "../../assets/icons/iconClose.png";

export default function Buscar({ setSelectedTab }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtros = [
    { name: "Todas", value: "all" },
    { name: "Pendientes", value: "pending" },
    { name: "Finalizadas", value: "done" },
    { name: "Destacadas", value: "dest" },
  ];
  return (
    <View style={style.container}>
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
          <View style={{ overflow: "hidden" }}>
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
          <View style={style.filterContent}>
            {activeFilter === "all" && (
              <Text style={style.filterTitle}>Tareas</Text>
            )}
            {activeFilter === "pending" && (
              <Text style={style.filterTitle}>Pendientes</Text>
            )}
            {activeFilter === "done" && (
              <Text style={style.filterTitle}>Finalizadas</Text>
            )}
            {activeFilter === "dest" && <Destacadas />}
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 10,
      },
    }),
  },

  panelWrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        borderRadius: 20,
      },
    }),
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  contentBuscador: {
    width: "90%",
  },

  filterTabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  filterContent: {
    flex: 1,
  },
});
