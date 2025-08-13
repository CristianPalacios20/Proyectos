import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import AnimatedScreenWrapper from "../animaciones/AnimatedScreenWrapper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useChat } from "../context/chatContext";

import iconUser from "../../assets/icons/iconUser.png";
import iconAdd from "../../assets/icons/iconAdd.png";
import iconCalendar from "../../assets/icons/iconCalendario.png";
import iconSubtareas from "../../assets/icons/iconSubTareas.png";
import iconSend from "../../assets/icons/iconSend2.png";
import iconOk from "../../assets/icons/iconOk.png";
import iconError from "../../assets/icons/iconError.png";

export default function CrearTarea({ selectedTab, setSelectedTab, openModal }) {
  const [visible, setVisible] = useState(false);
  const [prioridad, setPrioridad] = useState("");
  const opcionesPrioridad = [" ", "Alta", "Media", "Baja"];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [participantsIds, setParticipantsIds] = useState([]);
  const [subTasksArray, setSubTasksArray] = useState([]);
  const [subTasksInput, setsubTasksInput] = useState("");

  const [showPicker, setShowPicker] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState(null);

  const { user } = useChat();

  const onChangeDate = (e, selectedDate) => {
    if (Platform.OS === "android") {
      setShowPicker(false); // se cierra automáticamente en Android
    }
  };

  const formateDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const participantes = [
    { icon: iconUser },
    { icon: iconUser },
    { icon: iconUser },
    { icon: iconUser },
  ];

  const crearTarea = async () => {
    if (!title || !description || !dueDate || !prioridad) {
      setMensaje("Por favor, completa los campos requeridos.");
      setTimeout(() => setMensaje(null), 3000);
      return;
    }
    const nuevaTarea = {
      title,
      description,
      dueDate: dueDate.toISOString().split("T")[0],
      priority: prioridad.toLowerCase(),
      createdBy: user?.id,
      participants: participantsIds,
      subTasks: subTasksArray.map((st) => ({
        name: st.name,
        completed: st.completed ?? false,
      })),
    };

    try {
      const res = await fetch("http://192.168.1.9/backend/registerTask.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaTarea),
      });

      const text = await res.text();

      // Intenta convertir a JSON si es posible
      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonErr) {
        throw new Error("La respuesta del servidor no es JSON:\n" + text);
      }

      if (!res.ok || data.success !== true) {
        throw new Error(data.message || "Error desconocido del servidor");
      }

      setMensaje(`Tarea creada`);
      setTipoMensaje("success");

      setTimeout(() => {
        setMensaje(null);
        setTipoMensaje(null);
      }, 4000);
    } catch (err) {
      console.error("❌ Error al guardar tarea:", err.message);
      setMensaje("Error al guardar tarea.");
      setTipoMensaje("error");

      setTimeout(() => {
        setMensaje(null);
        setTipoMensaje(null);
      }, 4000);
    }
  };

  return (
    <View style={styles.container}>
      <AnimatedScreenWrapper key={selectedTab} animacion="slideUp">
        <View style={styles.innerWrapper}>
          <View style={styles.topButtons}>
            <TouchableOpacity
              onPress={() => setSelectedTab("Tareas")}
              style={styles.iconButton}
            >
              <Text style={styles.bottomText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={crearTarea}>
              <Text style={styles.bottomText}>Guardar</Text>
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View style={styles.content}>
                <Text style={styles.title}>Coordina, colabora, crea.</Text>

                <View style={styles.inputGroup}>
                  <TextInput
                    placeholder="Título"
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                  />
                  <TextInput
                    placeholder="Descripción"
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    style={[styles.input, styles.inputDescripcion]}
                  />
                </View>

                <View style={styles.participantsSection}>
                  <Text style={styles.label}>Participantes</Text>
                  <View style={styles.participantsList}>
                    {participantes.map((item, index) => (
                      <View
                        key={index}
                        style={[
                          styles.participant,
                          {
                            marginLeft: index === 0 ? 0 : -25,
                            zIndex: participantes.length - index,
                          },
                        ]}
                      >
                        <Image
                          source={item.icon}
                          style={[styles.participantIcon]}
                        />
                      </View>
                    ))}
                    <TouchableOpacity
                      style={[styles.addParticipant]}
                      onPress={() => openModal("participantes")}
                    >
                      <Image source={iconAdd} style={styles.iconAdd} />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.dateSection}
                  onPress={() => setShowPicker(true)}
                >
                  <Image source={iconCalendar} style={styles.iconCalendar} />
                  <Text>{formateDate(dueDate)}</Text>
                  <Text style={styles.helperText}>fecha</Text>
                </TouchableOpacity>

                {/* Modal fecha */}
                <Modal transparent visible={showPicker} animationType="fade">
                  <Pressable
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                    onPress={() => setShowPicker(false)} // Cierra al tocar fuera
                  >
                    <View style={styles.modalDate}>
                      <DateTimePicker
                        value={dueDate}
                        mode="date"
                        display={Platform.OS === "ios" ? "spinner" : "calendar"}
                        onChange={(event, selectedDate) => {
                          if (selectedDate) setDueDate(selectedDate);
                        }}
                      />
                    </View>
                  </Pressable>
                </Modal>

                <View style={styles.prioritySection}>
                  <View style={styles.contentInputBottom}>
                    <TouchableOpacity
                      style={styles.BottomPriority}
                      onPress={() => setVisible(true)}
                    >
                      <Text style={styles.textPrioridad}>Prioridad</Text>
                      <View
                        style={[
                          styles.badge,
                          prioridad === "Alta"
                            ? styles.badgeAlta
                            : prioridad === "Media"
                            ? styles.badgeMedia
                            : styles.badgeBaja,
                        ]}
                      >
                        <Text style={styles.badgeText}>{prioridad}</Text>
                      </View>
                    </TouchableOpacity>

                    {/* Modal de opciones */}
                    <Modal transparent visible={visible} animationType="slide">
                      <Pressable
                        style={styles.modalBackground}
                        onPress={() => setVisible(false)}
                      >
                        <View style={styles.modalContent}>
                          {opcionesPrioridad.map((opt) => (
                            <TouchableOpacity
                              key={opt}
                              style={styles.option}
                              onPress={() => {
                                setPrioridad(opt);
                                setVisible(false);
                              }}
                            >
                              <Text style={styles.optionText}>{opt}</Text>
                            </TouchableOpacity>
                          ))}
                        </View>
                      </Pressable>
                    </Modal>
                  </View>
                </View>

                {/* Subtareas */}
                <View style={styles.subtaskSection}>
                  <View style={styles.subtaskHeader}>
                    <Image source={iconSubtareas} style={styles.subtaskIcon} />
                    <Text style={styles.labelSubtareas}>Subtareas</Text>
                  </View>
                  <View style={styles.subtaskInputWrapper}>
                    <TextInput
                      placeholder="Añadir subtarea"
                      style={styles.inputAddSubtask}
                      value={subTasksInput}
                      onChangeText={setsubTasksInput}
                    />
                    <TouchableOpacity
                      style={styles.buttomSend}
                      onPress={() => {
                        if (subTasksInput.trim()) {
                          setSubTasksArray([
                            ...subTasksArray,
                            { name: subTasksInput.trim(), completed: false },
                          ]);
                          setsubTasksInput("");
                        }
                      }}
                    >
                      <Image style={styles.iconSend} source={iconSend} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.contentSubTask}>
                    {subTasksArray.map((sub, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.subTaskItem,
                          index < subTasksArray.length - 1 &&
                            styles.borderBotomSubtask,
                        ]}
                      >
                        <Text style={styles.subTaskText}>{sub.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <View>
                  <TextInput
                    placeholder="Adjuntar archivo"
                    style={styles.input}
                  />
                </View>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={crearTarea}
                >
                  <Text style={styles.saveText}>Guardar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        {mensaje && (
          <View style={styles.contentMessage}>
            <View style={styles.message}>
              <Image
                source={tipoMensaje === "success" ? iconOk : iconError}
                style={styles.icon}
              />
              <Text style={styles.textMessage}>{mensaje}</Text>
            </View>
          </View>
        )}
      </AnimatedScreenWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 10,
      },
    }),
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  innerWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "96%",
    padding: 20,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    }),
  },

  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },

  bottomText: {
    color: "#0099FF",
    fontWeight: "bold",
    fontSize: 16,
  },

  content: {
    flex: 1,
    gap: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputGroup: {
    gap: 20,
  },
  input: {
    height: 43,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D0D3D4",
  },

  inputDescripcion: {
    height: 115,
    textAlignVertical: "top",
  },
  participantsSection: {
    height: 100,
  },

  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  participantsList: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },

  participant: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    borderWidth: 2,
    borderColor: "#fff",
  },

  participantIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "cover",
  },

  addParticipant: {
    marginLeft: 10,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#0099FF",
  },
  iconAdd: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  dateSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
  inputFecha: {
    height: "100%",
    width: "75%",
  },
  iconCalendar: {
    width: 25,
    height: 25,
    resizeMode: "cover",
  },
  modalDate: {
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
  },
  contentInputBottom: {
    alignItems: "center",
  },
  BottomPriority: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#D0D3D4",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: "#A6ACAF",
    fontWeight: "600",
  },
  badge: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 24,
    borderRadius: 20,
  },
  badgeAlta: {
    backgroundColor: "#FF8A8A",
  },
  badgeMedia: {
    backgroundColor: "#FFC300",
  },
  badgeBaja: {
    backgroundColor: "#58D68D",
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  option: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
  },

  textPrioridad: {
    color: "#ccc",
  },
  opciones: {
    borderWidth: 1,
  },
  subtaskSection: {
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
  subtaskHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  labelSubtareas: {
    fontSize: 16,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  subtaskInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
  },
  inputAddSubtask: {
    width: "80%",
  },
  buttomSend: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 35,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: "#0099FF",
    perspective: 500,
  },
  iconSend: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    transform: [{ rotateX: "-30deg" }, { rotateY: "-30deg" }, { scale: 1.1 }],
  },
  borderBotomSubtask: {
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
  },
  subTaskItem: {
    padding: 10,
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: "#0099FF",
    borderRadius: 10,
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
  },

  contentMessage: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
    width: "100%",
  },
  message: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    gap: 8,
    padding: 15,
    backgroundColor: "black",
    borderRadius: 50,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textMessage: {
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
