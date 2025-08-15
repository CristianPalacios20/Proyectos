import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useChat } from "../context/chatContext";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconMenu from "../../assets/icons/iconMenu.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconStar from "../../assets/icons/iconStar.png";
import iconEditar from "../../assets/icons/iconEditar.png";
import iconEliminar from "../../assets/icons/iconEliminar.png";
import iconMarcar from "../../assets/icons/iconMarcar.png";
import iconDestacar from "../../assets/icons/iconDestacar.png";
import iconCompartir from "../../assets/icons/iconCompartir2.png";
import iconDuplicar from "../../assets/icons/iconDuplicar.png";
import iconRecordar from "../../assets/icons/iconRecordar.png";

export default function ChatScreen({ route }) {
  // const { titulo, chatId } = route.params;
  const navigation = useNavigation();

  const { chatActual, chatId, setSelectedChat } = useChat();

  useEffect(() => {

    if (chatId != null) {
      setSelectedChat(Number(chatId)); // lo guardamos como número
    }
  }, [chatId, setSelectedChat]);

  const participantes = [
    {
      icon: iconUser,
      nombre: "nombre",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totampossimus dolore saepe! Possimus illum amet aliquid officia",
    },
    {
      icon: iconUser,
      nombre: "nombre",
      comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: iconUser,
      nombre: "nombre",
      comentario:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totampossimus dolore saepe!",
    },
    {
      icon: iconUser,
      nombre: "nombre",
      comentario: "Lorem ipsum dolor sit amet",
    },
  ];
  const opciones = [
    { icon: iconEditar, opcion: "editar tarea", tab: "EditarTarea" },
    { icon: iconEliminar, opcion: "eliminar tarea", tab: "EliminarTarea" },
    { icon: iconMarcar, opcion: "marcar como completada", tab: "MarcarTarea" },
    { icon: iconDestacar, opcion: "destacar", tab: "DestacarTarea" },
    { icon: iconCompartir, opcion: "compartir tarea", tab: "CompartirTarea" },
    { icon: iconDuplicar, opcion: "duplicar tarea", tab: "DuplicarTarea" },
    {
      icon: iconRecordar,
      opcion: "configurar recordatorio",
      tab: "RecordatorioTarea",
    },
  ];

  const [textoActivo, setTextoActivo] = useState(null);
  const [modalActivo, setModalActivo] = useState(false);
  const [prioridad, setPrioridad] = useState("");

  const toggleColor = (index) => {
    setTextoActivo(index === textoActivo ? null : index);
    setModalActivo(false);
  };

  const toggleModal = () => {
    setModalActivo((prev) => !prev);
  };

  const handleOpcionPresss = (index, item) => {
    toggleColor(index);
    if (item.tab) {
      navigation.navigate(item.tab);
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={stylesChatScreen.content}>
      <View style={stylesChatScreen.body}>
        <View style={stylesChatScreen.headerChat}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={stylesChatScreen.containerButtonback}
          >
            <Image
              source={iconArrowBack}
              style={stylesChatScreen.iconArrowBack}
            />
          </TouchableOpacity>
          <Text
            style={stylesChatScreen.nameTask}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {chatActual.title}
          </Text>
          <TouchableOpacity
            style={stylesChatScreen.openModal}
            onPress={toggleModal}
          >
            <Image source={iconMenu} style={stylesChatScreen.menu} />
          </TouchableOpacity>
        </View>

        {modalActivo && (
          <Pressable
            style={stylesChatScreen.contentModal}
            onPress={toggleModal}
          >
            <View style={stylesChatScreen.modal}>
              {opciones.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleOpcionPresss(index, item)}
                  style={stylesChatScreen.botonOpcion}
                >
                  <Image
                    source={item.icon}
                    style={stylesChatScreen.opcionIcon}
                  />
                  <Text
                    style={[
                      stylesChatScreen.opcionTexto,
                      { color: index === textoActivo ? "#0099FF" : "black" },
                    ]}
                  >
                    {item.opcion}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        )}

        <ScrollView style={stylesChatScreen.containerInfo}>
          <View style={stylesChatScreen.contentInfo}>
            <View style={stylesChatScreen.descripcion}>
              <Text style={stylesChatScreen.title}>Descripción</Text>
              <Text style={stylesChatScreen.subtitle}>
                {chatActual ? (
                  <Text>{chatActual?.description ?? ""}</Text>
                ) : (
                  <Text>Selecciona un chat</Text>
                )}
              </Text>
            </View>

            <View style={stylesChatScreen.detailsSection}>
              <View style={stylesChatScreen.detailItem}>
                <Text style={stylesChatScreen.detailLabel}>
                  Fecha vencimiento
                </Text>
                <Text style={stylesChatScreen.detailValue}>
                  {chatActual?.dueDate ?? "Sin fecha"}
                </Text>
              </View>
              <View style={stylesChatScreen.detailItem}>
                <Text style={stylesChatScreen.detailLabel}>Prioridad</Text>
                <View
                  style={[
                    stylesChatScreen.contenPrioridad,
                    chatActual.priority === "alta"
                      ? stylesChatScreen.priorytyAA
                      : chatActual.priority === "media"
                      ? stylesChatScreen.priorityMM
                      : chatActual.priority === "baja"
                      ? stylesChatScreen.prioridadBB
                      : null,
                  ]}
                >
                  <View
                    style={[
                      stylesChatScreen.circle,
                      chatActual.priority === "alta"
                        ? stylesChatScreen.priorytyA
                        : chatActual.priority === "media"
                        ? stylesChatScreen.priorityM
                        : chatActual.priority === "baja"
                        ? stylesChatScreen.prioridadB
                        : null,
                    ]}
                  />
                  <Text style={stylesChatScreen.detailValue}>
                    {chatActual?.priority ?? "Sin prioridad"}
                  </Text>
                </View>
              </View>
              <View style={stylesChatScreen.detailItem}>
                <Text style={stylesChatScreen.detailLabel}>Categoria</Text>
                <Text style={stylesChatScreen.detailValue}>
                  {chatActual?.category ?? "sin categoría"}
                </Text>
              </View>
            </View>

            <View style={stylesChatScreen.subtasksSection}>
              <View style={stylesChatScreen.subtasksHeader}>
                <Text style={stylesChatScreen.sectionTitle}>Subtareas</Text>
                <TouchableOpacity
                  style={stylesChatScreen.addSubtaskButton}
                  onPress={() => navigation.navigate("NuevaSubTarea")}
                >
                  <Text style={stylesChatScreen.addSubtaskText}>
                    Agregar subtarea
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={stylesChatScreen.contentSubtask}>
                {chatActual?.subtasks?.map((subtask, index) => (
                  <View
                    key={subtask.subtaskId}
                    style={[
                      stylesChatScreen.contentBottom,
                      index >= 1 ? stylesChatScreen.borderTop : null,
                    ]}
                  >
                    <TouchableOpacity style={stylesChatScreen.buttomSubTask}>
                      <View style={stylesChatScreen.circleII}></View>
                      <Text style={[stylesChatScreen.subtaskItem]}>
                        {subtask.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>

            <View style={stylesChatScreen.participantsSection}>
              <Text style={stylesChatScreen.sectionTitle}>Participantes</Text>
              <View style={stylesChatScreen.participants}>
                <View style={stylesChatScreen.participantInfo}>
                  <View style={stylesChatScreen.contentParticipant}>
                    <Image
                      source={iconUser}
                      style={stylesChatScreen.participantImage}
                    />
                  </View>
                  <Text style={stylesChatScreen.participantName}>
                    {chatActual.createdBy}
                  </Text>
                  <Image
                    source={iconStar}
                    style={stylesChatScreen.participantStatus}
                  />
                </View>

                <View style={stylesChatScreen.participantsList}>
                  {chatActual?.participants?.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        stylesChatScreen.participant,
                        {
                          right: index * 25,
                          zIndex: participantes.length - index,
                        },
                      ]}
                    >
                      <Image
                        source={item.avatar}
                        style={stylesChatScreen.participantIcon}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>

            <View style={stylesChatScreen.commentsSection}>
              <Text style={stylesChatScreen.sectionTitle}>Comentarios</Text>
              <View style={stylesChatScreen.commentsList}>
                {chatActual?.comments?.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      stylesChatScreen.containerComment,
                      chatActual.comments === null
                        ? { borderColor: "transparent" }
                        : "",
                    ]}
                  >
                    <View style={stylesChatScreen.commentItem}>
                      <View style={stylesChatScreen.commentAvatar}>
                        <Image
                          source={iconUser}
                          style={stylesChatScreen.commentImage}
                        />
                      </View>
                      <View style={stylesChatScreen.commentContent}>
                        <Text style={stylesChatScreen.commentName}>
                          {item.name}
                        </Text>
                        <Text style={stylesChatScreen.commentDate}>
                          {item.timestamp}
                        </Text>
                      </View>
                    </View>

                    <View style={stylesChatScreen.viewComment}>
                      <Text style={stylesChatScreen.commentText}>
                        {item.content}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const stylesChatScreen = StyleSheet.create({
  content: {
    flex: 1,
  },

  body: {
    flex: 1,
  },

  headerChat: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },

  containerButtonback: {
    justifyContent: "center",
    width: 50,
    height: 40,
  },

  iconArrowBack: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  iconMenu: {
    width: 20,
    height: 20,
  },
  nameTask: {
    fontSize: 18,
    fontWeight: "bold",
    flexShrink: 1,
    flexGrow: 1,
    overflow: "hidden",
  },

  openModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  contentModal: {
    position: "absolute",
    alignItems: "flex-end",
    top: 50,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    overflow: "hidden",
    zIndex: 1,
  },

  modal: {
    justifyContent: "center",
    width: 250,
    // right: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },

  botonOpcion: {
    flexDirection: "row",
    gap: 10,
    padding: 8,
  },

  opcionTexto: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "capitalize",
  },

  /************************* */
  containerInfo: {
    padding: 20,
  },

  contentInfo: {
    flex: 1,
    gap: 20,
  },

  descripcion: {
    gap: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  detailsSection: {
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#B3B6B7",
  },

  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
  },

  detailLabel: {
    color: "#7B7D7D",
    fontWeight: "bold",
  },

  contenPrioridad: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 4,
    maxWidth: 80,
    borderRadius: 20,
  },

  priorytyAA: {
    backgroundColor: "#ff00005b",
  },
  priorityMM: {
    backgroundColor: "#ffff0057",
  },

  prioridadBB: {
    backgroundColor: "#0099ff50",
  },

  circle: {
    width: 10,
    height: 10,
    backgroundColor: "#a6acaf",
    borderRadius: 50,
  },

  priorytyA: {
    backgroundColor: "#FF0000",
  },
  priorityM: {
    backgroundColor: "#FFFF00",
  },

  prioridadB: {
    backgroundColor: "#0099FF",
  },

  detailValue: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  subtasksSection: {
    gap: 10,
  },

  subtasksHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  addSubtaskText: {
    fontSize: 16,
    color: "#0099FF",
  },

  contentSubtask: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#B3B6B7",
    borderRadius: 10,
  },

  contentBottom: {
    padding: 5,
  },

  buttomSubTask: {
    flexDirection: "row",
    alignItems: "center",
  },

  circleII: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderRadius: 50,
  },

  subtaskItem: {
    padding: 5,
  },

  borderTop: {
    borderTopWidth: 1,
    borderColor: "#B3B6B7",
  },

  participantsSection: {
    gap: 8,
  },

  participants: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  participantInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  contentParticipant: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    borderColor: "#fff",
  },

  participantImage: {
    width: 30,
    height: 30,
  },

  participantName: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },

  commentsSection: {
    gap: 10,
  },

  commentsList: {
    // borderWidth: 1,
  },

  containerComment: {
    padding: 10,
    gap: 10,
    borderColor: "#B3B6B7",
    borderRadius: 10,
  },

  commentItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  commentAvatar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    borderColor: "#fff",
  },

  commentImage: {
    width: 30,
    height: 30,
  },

  commentContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 0.8,
  },

  commentName: {
    fontWeight: "600",
    textTransform: "capitalize",
    flex: 1,
  },

  commentDate: {
    color: "#979A9A",
  },

  viewComment: {
    paddingLeft: 10,
  },

  /* ************ */

  participantsList: {
    flexDirection: "row",
    width: 90,
  },

  participant: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    borderColor: "#fff",
  },

  participantIcon: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: "cover",
  },
});
