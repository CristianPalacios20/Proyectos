import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export default function ChatScreen({ route, setSelectedTab }) {
  const { titulo } = route.params;
  const navigation = useNavigation();
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
      setSelectedTab(item.tam);
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
          <Text style={stylesChatScreen.nameTask}>{titulo}</Text>
          <TouchableOpacity
            style={stylesChatScreen.openModal}
            onPress={toggleModal}
          >
            <Image source={iconMenu} style={stylesChatScreen.menu} />
          </TouchableOpacity>
          {modalActivo && (
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
          )}
        </View>

        <ScrollView style={stylesChatScreen.containerInfo}>
          <View style={stylesChatScreen.contentInfo}>
            <View style={stylesChatScreen.descripcion}>
              <Text style={stylesChatScreen.title}>Descripción</Text>
              <Text style={stylesChatScreen.subtitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quaerat vero voluptatibus ipsam sequi ullam pariatur dolorem
                eos. Veritatis quasi quibusdam dicta repellendus et ut dolore
                itaque alias iusto labore.
              </Text>
            </View>

            <View style={stylesChatScreen.detailsSection}>
              <View style={stylesChatScreen.detailItem}>
                <Text style={stylesChatScreen.detailLabel}>
                  Fecha vencimiento
                </Text>
                <Text style={stylesChatScreen.detailValue}>fecha</Text>
              </View>
              <View style={stylesChatScreen.detailItem}>
                <Text style={stylesChatScreen.detailLabel}>Prioridad</Text>
                <Text style={stylesChatScreen.detailValue}>Prioridad</Text>
              </View>
              <View style={stylesChatScreen.detailItem}>
                <Text style={stylesChatScreen.detailLabel}>Categoria</Text>
                <Text style={stylesChatScreen.detailValue}>trabajo</Text>
              </View>
            </View>

            <View style={stylesChatScreen.subtasksSection}>
              <View style={stylesChatScreen.subtasksHeader}>
                <Text style={stylesChatScreen.sectionTitle}>Subtareas</Text>
                <TouchableOpacity style={stylesChatScreen.addSubtaskButton}>
                  <Text style={stylesChatScreen.addSubtaskText}>
                    Agregar subtarea
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={stylesChatScreen.subtaskList}>
                <Text style={stylesChatScreen.subtaskItem}>Subtare#1</Text>
                <Text style={stylesChatScreen.subtaskItem}>Subtare#2</Text>
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
                  <Text style={stylesChatScreen.participantName}>nombre</Text>
                  <Image
                    source={iconStar}
                    style={stylesChatScreen.participantStatus}
                  />
                </View>

                <View style={stylesChatScreen.participantsList}>
                  {participantes.map((item, index) => (
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
                        source={item.icon}
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
                {participantes.map((item, index) => (
                  <View key={index} style={stylesChatScreen.containerComment}>
                    <View style={stylesChatScreen.commentItem}>
                      <View style={stylesChatScreen.commentAvatar}>
                        <Image
                          source={iconUser}
                          style={stylesChatScreen.commentImage}
                        />
                      </View>
                      <View style={stylesChatScreen.commentContent}>
                        <Text style={stylesChatScreen.commentName}>
                          {item.nombre}
                        </Text>
                        <Text style={stylesChatScreen.commentDate}>
                          16 junio 14:32
                        </Text>
                      </View>
                    </View>

                    <View style={stylesChatScreen.viewComment}>
                      <Text style={stylesChatScreen.commentText}>
                        {item.comentario}
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
    gap: 10,
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
  },

  openModal: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  modal: {
    position: "absolute",
    justifyContent: "center",
    top: 50,
    right: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    zIndex: 1,
  },

  botonOpcion: {
    flexDirection: "row",
    gap: 10,
    padding: 8,
  },

  opcionTexto: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
  },

  /************************* */
  containerInfo: {
    padding: 20,
  },

  contentInfo: {
    flex: 1,
    gap: 20,
    // borderWidth: 1,
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

  subtaskList: {
    gap: 5,
  },
  subtaskItem: {
    padding: 5,
  },

  participantsSection: {
    gap: 8,
    // borderWidth: 1,
  },

  participants: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  participantInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // borderWidth: 1,
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
    borderWidth: 1,
    borderColor: "#B3B6B7",
    borderRadius: 10,
  },

  containerComment: {
    padding: 10,
    gap: 10,
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
    // borderWidth: 1,
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
