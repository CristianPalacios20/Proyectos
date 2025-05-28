import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderHome from "../HeaderHome";
import Buscador from "../buscador";

import iconTareas from "../../../assets/logo/logo-icon-tareas-transparent.png";
import { Ionicons } from "@expo/vector-icons";

export default function Tareas({
  data = [],
  isLoading,
  navigation,
}) {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  return (
    <SafeAreaView edges={['top']} style={stylesTareas.content}>
      <HeaderHome />
      <View style={stylesTareas.taskBody}>
        <Text style={stylesTareas.title}>Tareas</Text>
        <View style={stylesTareas.contentSearch}>
          <Buscador
            valor={textoBusqueda}
            onCambiarTexto={setTextoBusqueda}
            placeholder="Buscar en tareas..."
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
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}

const stylesTareas = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white"
  },
  taskBody: {
    flex: 1,
    paddingLeft: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 10,
    borderColor: "#d7dbdd",
  },
  contentSearch: {
    paddingBottom: 10,
    paddingRight: 16,
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
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
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
