import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Buscador from "../buscador";
import { Ionicons } from "@expo/vector-icons";
import iconTareas from "../../assets/logo/logo-icon-tareas-transparent.png";

export default function Tareas({ data, isLoading }) {
  // const { title } = data;
  const [textoBusqueda, setTextoBusqueda] = useState('');
  return (
    <View style={stylesTareas.content}>
      <View style={stylesTareas.taskBody}>
        <Text style={stylesTareas.title}>Tareas</Text>
        <View style={stylesTareas.contentSearch}>
          <Buscador
            valor={textoBusqueda}
            onCambiarTexto={setTextoBusqueda}
            placeholder="Buscar tareas..."
          />
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
          <ScrollView>
            {data.map((chat) => (
              <TouchableOpacity
                key={chat.chatId}
                style={stylesTareas.task}
                onPress={() => alert(`Abrir chat: ${chat.title}`)}
              >
                <View style={stylesTareas.contentTask}>
                  <Image source={iconTareas} style={stylesTareas.iconTareas} />
                </View>
                <View style={stylesTareas.chatInfoContainer}>
                  <Text style={stylesTareas.chatTitle}>{chat.title}</Text>
                  <Text style={stylesTareas.desTask}>
                    {chat.tasks.length} tarea(s)
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
}

const stylesTareas = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 16,
    backgroundColor: "#fff",
    // borderWidth: 1,
  },
  taskBody: {
    flex: 1,
    // borderWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    // borderBottomWidth: 1,
    borderColor: "#d7dbdd",
  },
  contentSearch: {
    // paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
  },
  emptyState: {
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
  task: {
    paddingTop: 5,
    paddingLeft: 5,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  chatInfoContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#d7dbdd",
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: "600",
    // marginBottom: 5,
  },
  desTask: {
    left: 10,
    color: "#777",
    height: 45,
    // marginBottom: 30,
  },
  contentTask: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: "#e5e7e9",
  },
  iconTareas: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
