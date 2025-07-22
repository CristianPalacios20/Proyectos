import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HeaderHome from "../components/HeaderHome";
import SwipeToReveal from "../animaciones/SwipeToReveal";

import moment from "moment";
import "moment/locale/es";

import iconTareas from "../../assets/logo/logo-icon-tareas-transparent.png";
import { Ionicons } from "@expo/vector-icons";

moment.locale("es"); //establece el idioma en español

export default function Tareas(props) {
  const { data = [], isLoading, selectedTab, setSelectedTab } = props;
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const navigation = useNavigation();

  const diasSemana = Array.from({ length: 7 }).map((_, index) => {
    const dia = moment()
      .startOf("week")
      .add(index + 1, "days");
    return {
      nombre: dia.format("ddd"),
      numero: dia.format("D"),
      clave: dia.format("YYYY-MM-DD"),
    };
  });

  const eliminarTask = () => {
    const siono = alert(`deseas eliminar la tarea ${data.chatTitle}`);
    if (siono === "S") {
      alert("Tarea eliminada");
    }
  };

  return (
    <View style={stylesTareas.content}>
      <HeaderHome selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <View style={[stylesTareas.contenedorCalendar]}>
        {diasSemana.map((dia, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setDiaSeleccionado(dia.clave)}
            style={[
              stylesTareas.dia,
              diaSeleccionado === dia.clave && stylesTareas.diaSeleccionado,
            ]}
          >
            <Text
              style={[
                stylesTareas.nombre,
                diaSeleccionado === dia.clave && stylesTareas.textoSeleccionado,
              ]}
            >
              {dia.nombre}
            </Text>
            ;
            <Text
              style={[
                stylesTareas.dia,
                stylesTareas.numero,
                diaSeleccionado === dia.clave && stylesTareas.textoSeleccionado,
              ]}
            >
              {dia.numero}
            </Text>
            ;
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={stylesTareas.taskBody}>
        <View style={{ left: 20, top: 10 }}>
          <Text style={stylesTareas.title}>Tus tareas</Text>
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
              <SwipeToReveal key={chat.chatId}>
                <TouchableOpacity
                  style={stylesTareas.task}
                  onPress={() =>
                    navigation.navigate("Chat", {
                      chatId: chat.chatId,
                      titulo: chat.title,
                      message: chat.messages[0]?.content ?? "sin mensajes",
                      // messages: chat.messages,
                    })
                  }
                >
                  <View style={stylesTareas.contentTask}>
                    <Image
                      source={iconTareas}
                      style={stylesTareas.iconTareas}
                    />
                  </View>
                  <View style={stylesTareas.chatInfoContainer}>
                    <Text style={stylesTareas.chatTitle}>{chat.title}</Text>
                    <View style={stylesTareas.desTask}>
                      <View style={stylesTareas.countTask}>
                        <Text style={{ color: "white" }}>
                          {chat.tasks.length}
                        </Text>
                      </View>
                      <Text style={{ color: "#7b7d7d" }}>Subtarea(s)</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </SwipeToReveal>
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
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 5,
    marginBottom: 10,
    borderColor: "#d7dbdd",
  },
  contenedorCalendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },

  dia: {
    alignItems: "center",
    gap: 5,
  },
  nombre: {
    fontWeight: "bold",
    color: "#979A9A",
    fontSize: 12,
    textTransform: "uppercase",
  },
  numero: {
    fontSize: 12,
    color: "#979A9A",
    marginBottom: 4,
  },

  diaSeleccionado: {
    borderBottomWidth: 2,
    borderBottomColor: "#007BFF",
  },

  textoSeleccionado: {
    color: "#007BFF",
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
    marginTop: 20,
  },
  task: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    height: 70,
    overflow: "hidden",
  },
  contentTask: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    top: 8,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 30,
    backgroundColor: "#e5e7e938",
  },
  chatInfoContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#d7dbdd",
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  desTask: {
    flexDirection: "row",
    gap: 5,
    left: 10,
    color: "#777",
    width: 100,
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
