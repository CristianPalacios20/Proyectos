import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Platform,
} from "react-native";

import HeaderHome from "../HeaderHome";
import Buscador from "../buscador";

import iconTareas from "../../../assets/logo/logo-icon-tareas-transparent.png";
import { Ionicons } from "@expo/vector-icons";

export default function Tareas({
  data = [],
  isLoading,
  navigation,
  selectedTab,
  setSelectedTab,
}) {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filtros = [
    { name: "Todos", value: "all" },
    { name: "Pendientes", value: "pending" },
    { name: "Finalizado", value: "done" },
  ];

  return (
    <View edges={["top"]} style={stylesTareas.content}>
      <HeaderHome selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ScrollView style={stylesTareas.taskBody}>
        <View style={{ left: 20, top: 10 }}>
          <Text style={stylesTareas.title}>Tus tareas</Text>
        </View>
        <View style={[stylesTareas.contentSearch]}>
          <Buscador
            valor={textoBusqueda}
            onCambiarTexto={setTextoBusqueda}
            placeholder="Crear con IA o buscar"
          />
        </View>
        <View style={stylesTareas.filterTabs}>
          {filtros.map((filtro) => (
            <TouchableOpacity
              key={filtro.value}
              onPress={() => setActiveFilter(filtro.value)}
              style={[
                stylesTareas.filterTab,
                {
                  backgroundColor:
                    activeFilter === filtro.value ? "#28a3f6" : "#e5e7e9",
                },
              ]}
            >
              <Text
                style={[
                  stylesTareas.textFiltertab,
                  {
                    color: activeFilter === filtro.value ? "white" : "#979a9a",
                  },
                ]}
              >
                {filtro.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#007BFF" style={{ flex: 1 }} />
        ) : !data || data.length === 0 ? (
          <View style={stylesTareas.emptyState}>
            <Text style={stylesTareas.emptyStateText}>
              Aún no tienes tareas. ¿Deseas crear una?
            </Text>
            <TouchableOpacity
              style={stylesTareas.createTaskButton}
              onPress={() => alert("Agregar tarea")}
            >
              <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={stylesTareas.containerChats}>
            {data.map((chat) => (
              <TouchableOpacity
                key={chat.chatId}
                style={stylesTareas.task}
                onPress={() =>
                  navigation.navigate("Chat", {
                    chatId: chat.chatId,
                    userName: chat.title,
                    message: chat.messages[0]?.content ?? "sin mensajes",
                    messages: chat.messages,
                  })
                }
              >
                <View style={stylesTareas.contentTask}>
                  <Image source={iconTareas} style={stylesTareas.iconTareas} />
                </View>
                <View style={stylesTareas.chatInfoContainer}>
                  <Text style={stylesTareas.chatTitle}>{chat.title}</Text>
                  <View style={stylesTareas.desTask}>
                    <View style={stylesTareas.countTask}>
                      <Text style={{ color: "white" }}>
                        {chat.tasks.length}
                      </Text>
                    </View>
                    <Text style={{ color: "#7b7d7d" }}>tarea(s)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const stylesTareas = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white",
  },
  taskBody: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 10,
    borderColor: "#d7dbdd",
  },
  contentSearch: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    marginBottom: 20,
  },
  filterTabs: {
    flexDirection: "row",
    height: 40,
    gap: 10,
    left: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  filterTab: {
    justifyContent: "center",
    padding: 8,
    borderRadius: 18,
  },
  textFiltertab: {
    fontWeight: "bold",
    color: "#979a9a",
  },
  emptyState: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyStateText: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 8,
  },
  createTaskButton: {
    backgroundColor: "#007BFF",
    borderRadius: 50,
    padding: 12,
  },
  containerChats: {
    paddingLeft: 16,
  },
  task: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
    paddingLeft: 5,
    gap: 10,
  },
  contentTask: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    top: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 30,
    shadowColor: "#000",
    backgroundColor: "#e5e7e9",
  },
  chatInfoContainer: {
    width: "100%",
    borderBottomWidth: 1,
    gap: 5,
    borderColor: "#d7dbdd",
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  desTask: {
    flexDirection: "row",
    gap: 5,
    left: 10,
    color: "#777",
    height: 45,
  },
  countTask: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#28a3f6",
  },
  iconTareas: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
