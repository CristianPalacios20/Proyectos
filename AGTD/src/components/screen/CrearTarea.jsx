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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import iconUser from "../../../assets/icons/iconUser.png";
import iconAdd from "../../../assets/icons/iconAdd.png";
import iconCalendar from "../../../assets/icons/iconCalendar.png";
import iconSubtareas from "../../../assets/icons/iconSubTareas.png";
import iconSend from "../../../assets/icons/iconSend.png";

export default function CrearTarea({ setSelectedTab }) {
  const participantes = [
    { icon: iconUser },
    { icon: iconUser },
    { icon: iconUser },
    { icon: iconUser },
  ];

  const [visible, setVisible] = useState(false);
  const [prioridad, setPrioridad] = useState("");
  const opcionesPrioridad = ["Alta", "Media", "Baja"];

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.innerWrapper}>
        <View style={styles.topButtons}>
          <TouchableOpacity
            onPress={() => setSelectedTab("Tareas")}
            style={styles.iconButton}
          >
            <Text style={styles.bottomText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.bottomText}>Guardar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.title}>Coordina, colabora, crea.</Text>

            <View style={styles.inputGroup}>
              <TextInput placeholder="Título" style={styles.input} />
              <TextInput
                placeholder="Descripción"
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
                <TouchableOpacity style={[styles.addParticipant]}>
                  <Image source={iconAdd} style={styles.iconAdd} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.dateSection}>
              <Image source={iconCalendar} style={styles.iconCalendar} />
              <TextInput
                placeholder="Fecha de vencimiento"
                style={styles.inputFecha}
              />
              <Text style={styles.helperText}>fecha</Text>
            </View>

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

            <View style={styles.subtaskSection}>
              <View style={styles.subtaskHeader}>
                <Image source={iconSubtareas} style={styles.subtaskIcon} />
                <Text style={styles.labelSubtareas}>Subtareas</Text>
              </View>
              <View style={styles.subtaskInputWrapper}>
                <TextInput placeholder="Añadir subtarea" style={styles} />
                <TouchableOpacity style={styles.buttomSend}>
                  <Image style={styles.iconSend} source={iconSend} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TextInput placeholder="Adjuntar archivo" style={styles.input} />
            </View>
            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveText}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  innerWrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
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
  },
  buttomSend: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#0099FF",
  },
  iconSend: {
    width: 22,
    height: 22,
    resizeMode: "cover",
    transform: [{ rotate: "-10deg" }],
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
});
