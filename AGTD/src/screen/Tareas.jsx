import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { useChat } from "../context/chatContext";

import HeaderHome from "../components/HeaderHome";
import SwipeToReveal from "../animaciones/SwipeToReveal";
import PorcentajeCircular from "../components/PorcentajeCircular";

import moment from "moment";
import "moment/locale/es";

import { Ionicons } from "@expo/vector-icons";

moment.locale("es"); //establece el idioma en español

export default function Tareas(props) {
  const { selectedTab, setSelectedTab, openModal } = props;

  const [diaSeleccionado, setDiaSeleccionado] = useState(null);
  const navigation = useNavigation();
  const refs = useRef({});
  const { dataChats, isLoading, setSelectedChat } = useChat();

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

  return (
    <SafeAreaView style={stylesTareas.content}>
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

            <Text
              style={[
                stylesTareas.dia,
                stylesTareas.numero,
                diaSeleccionado === dia.clave && stylesTareas.textoSeleccionado,
              ]}
            >
              {dia.numero}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        style={stylesTareas.taskBody}
        // Le decimos al scrollView que tome que crezca para que el conteinerChats tome el heigth 100%
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ left: 20, top: 10 }}>
          <Text style={stylesTareas.title}>Tus tareas</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#007BFF" style={{ flex: 1 }} />
        ) : !dataChats || dataChats.length === 0 ? (
          <View style={stylesTareas.emptyState}>
            <Text style={stylesTareas.emptyStateText}>
              Aún no tienes tareas. ¿Deseas crear una?
            </Text>
            <TouchableOpacity
              style={stylesTareas.createTaskButton}
              onPress={() => setSelectedTab("CrearTarea")}
            >
              <Ionicons name="add" size={28} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={stylesTareas.containerChats}>
            {dataChats.map((chat, index) => {
              if (!refs.current[chat.chatId]) {
                refs.current[chat.chatId] = React.createRef();
              }
              return (
                <SwipeToReveal
                  key={chat.chatId}
                  ref={refs.current[chat.chatId]}
                  // Cierra todos excepto este
                  onSwipeStart={() => {
                    Object.entries(refs.current).forEach(([id, ref]) => {
                      if (id !== chat.chatId && ref.current?.isOpen()) {
                        ref.current.closeSwipe();
                      }
                    });
                  }}
                  openModal={() => openModal("menu", chat.chatId)}
                >
                  <TouchableOpacity
                    style={[stylesTareas.task]}
                    onPress={async () => {
                      const currentRef = refs.current[chat.chatId];

                      // 1. Si ESTÁ ABIERTO: Cierra y NO navega
                      if (currentRef.current?.isOpen()) {
                        await currentRef.current.closeSwipe();
                        return;
                      }

                      // 2. Si ESTÁ CERRADO: Navega después de un pequeño delay
                      setTimeout(() => {
                        if (!currentRef.current?.isOpen()) {
                          setSelectedChat(chat.chatId);
                          navigation.navigate("Chat");
                        }
                      }, 150); // Delay óptimo para evitar conflicto con gestos
                    }}
                  >
                    <View style={stylesTareas.contentPorcentaje}>
                      <PorcentajeCircular />
                    </View>
                    <View
                      style={[
                        stylesTareas.chatInfoContainer,
                        index >= 0 ? stylesTareas.borderTopTask : null,
                      ]}
                    >
                      <Text
                        style={stylesTareas.chatTitle}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {chat.title}
                      </Text>
                      <View style={stylesTareas.desTask}>
                        <View style={stylesTareas.countTask}>
                          <Text style={{ color: "#0099FF" }}>
                            {chat.subtasks.length}
                          </Text>
                        </View>
                        <Text style={{ color: "#7b7d7d" }}>Subtarea(s)</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </SwipeToReveal>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
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
  },
  createTaskButton: {
    backgroundColor: "#007BFF",
    borderRadius: 50,
    padding: 12,
  },
  containerChats: {
    height: "100%",
    marginTop: 20,
    paddingLeft: 20,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: 70,
    overflow: "hidden",
  },

  contentPorcentaje: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 30,
    backgroundColor: "#e5e7e938",
  },
  chatInfoContainer: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    gap: 8,
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
  },

  borderTopTask: {
    borderTopWidth: 1,
    borderColor: "#d7dbdd",
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: "600",
    width: "80%",
    flexShrink: 1,
    flexGrow: 1,
    overflow: "hidden",
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
    backgroundColor: "#E4E4E7",
  },
  iconTareas: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
