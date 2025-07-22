import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import iconEditar from "../../assets/icons/iconEditar.png";
import iconEliminar from "../../assets/icons/iconEliminar2.png";
import iconUser from "../../assets/icons/iconUser.png";
import iconArrowLeft from "../../assets/icons/iconArrowLeft.png";

export default function EditarTarea({ setSelectedTab }) {
  const navigation = useNavigation();

  const subtareas = [
    { subtarea: "subtarea #1" },
    { subtarea: "subtarea #2" },
    { subtarea: "subtarea #3" },
    { subtarea: "subtarea #4" },
  ];

  const participantes = [
    { icon: iconUser },
    { icon: iconUser },
    { icon: iconUser },
    { icon: iconUser },
  ];
  return (
    <SafeAreaView edges={["top"]} style={stylesEditarTarea.container}>
      <View style={stylesEditarTarea.header}>
        <View style={stylesEditarTarea.headerTitle}>
          <TouchableOpacity
            style={stylesEditarTarea.buttomBack}
            onPress={() => navigation.goBack()}
          >
            <Image source={iconArrowBack} style={stylesEditarTarea.iconBack} />
          </TouchableOpacity>
          <Text style={stylesEditarTarea.title}>editar tarea</Text>
        </View>
        <TouchableOpacity style={stylesEditarTarea.saveButton}>
          <Text style={stylesEditarTarea.saveText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={stylesEditarTarea.scroll}>
        <View style={stylesEditarTarea.section}>
          <View style={stylesEditarTarea.inputGroup}>
            {/* <Text style={stylesEditarTarea.labelTitulo}>Título</Text> */}
            <TextInput placeholder="Título" style={stylesEditarTarea.input} />
          </View>
          <View style={stylesEditarTarea.inputGroup}>
            {/* <Text style={stylesEditarTarea.labelDescripcion}>Descripción</Text> */}
            <TextInput
              placeholder="Descripcion"
              multiline
              style={[
                stylesEditarTarea.input,
                stylesEditarTarea.inputDescripcion,
              ]}
            />
          </View>
        </View>

        <View style={[stylesEditarTarea.section, stylesEditarTarea.meta]}>
          <View style={stylesEditarTarea.metaGroup}>
            <Text
              style={[stylesEditarTarea.label, stylesEditarTarea.labelFechaVen]}
            >
              Fecha vencimiento
            </Text>
            <Text style={stylesEditarTarea.metaText}>5 de mayo</Text>
          </View>
          <View style={stylesEditarTarea.metaGroup}>
            <Text
              style={[
                stylesEditarTarea.label,
                stylesEditarTarea.labelPriodidad,
              ]}
            >
              Prioridad
            </Text>
            <View style={stylesEditarTarea.prioridadBox}>
              <View style={[stylesEditarTarea.prioridadDot]}></View>
              <Text style={stylesEditarTarea.metaText}>alta</Text>
            </View>
          </View>
          <View style={stylesEditarTarea.metaGroup}>
            <Text
              style={[
                stylesEditarTarea.label,
                stylesEditarTarea.labelCategoria,
              ]}
            >
              Categoría
            </Text>
            <Text style={stylesEditarTarea.metaText}>trabajo</Text>
          </View>
        </View>

        <View
          style={[
            stylesEditarTarea.section,
            stylesEditarTarea.sectionSubtareas,
          ]}
        >
          <View style={stylesEditarTarea.subtareasHeader}>
            <Text style={stylesEditarTarea.labelSubtareas}>Subtareas</Text>
            <View style={stylesEditarTarea.contentBottoms}>
              <TouchableOpacity>
                <Image
                  source={iconEditar}
                  style={stylesEditarTarea.iconEditar}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={iconEliminar}
                  style={stylesEditarTarea.iconEliminar}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={stylesEditarTarea.subtareasList}>
            {subtareas.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={stylesEditarTarea.subtareaItem}
              >
                <Text style={stylesEditarTarea.subtareaText}>
                  {item.subtarea}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={[
            stylesEditarTarea.section,
            stylesEditarTarea.sectionParticipantes,
          ]}
        >
          <View style={stylesEditarTarea.participantsHeader}>
            <Text style={stylesEditarTarea.labelParticipantes}>
              Participantes
            </Text>
            <TouchableOpacity style={stylesEditarTarea.buttomEliminar}>
              <Text style={stylesEditarTarea.eliminarTexto}>
                Eliminar participante
              </Text>
            </TouchableOpacity>
          </View>
          <View style={stylesEditarTarea.participantsContent}>
            {participantes.map((item, index) => (
              <View
                key={index}
                style={[
                  stylesEditarTarea.avatarWrapper,
                  { right: index * 25, zIndex: participantes.length - index },
                ]}
              >
                <Image
                  source={item.icon}
                  style={stylesEditarTarea.avatarImage}
                />
              </View>
            ))}
            <TouchableOpacity style={stylesEditarTarea.addParticipant}>
              <Text style={stylesEditarTarea.addParticipantText}>
                Agregar participantes
              </Text>
              <Image source={iconArrowLeft} style={stylesEditarTarea.iconAdd} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesEditarTarea = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttomBack: {
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 40,
  },
  iconBack: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 25,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#EBEBEB",
  },
  saveText: {
    color: "#0099FF",
    fontWeight: "bold",
  },
  scroll: {
    flex: 1,
    gap: 20,
    paddingTop: 30,
    // borderWidth: 1,
  },
  section: {
    gap: 20,
  },
  inputGroup: {
    gap: 10,
  },
  labelDescripcion: {
    fontSize: 20,
    fontWeight: "500",
  },
  labelTitulo: {
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#D0D3D4",
    borderRadius: 10,
  },
  inputDescripcion: {
    height: 75,
  },
  meta: {
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#B3B6B7",
  },

  metaText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    textTransform: "capitalize",
  },

  prioridadBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  prioridadDot: {
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: "red",
  },

  metaGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7B7D7D",
  },

  sectionSubtareas: {
    marginBottom: 20,
  },

  subtareasHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelSubtareas: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contentBottoms: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconEditar: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  subtareasList: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#B3B6B7",
    borderRadius: 10,
  },
  subtareaItem: {
    padding: 10,
  },
  sectionParticipantes: {
    // borderWidth: 1,
  },

  participantsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelParticipantes: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eliminarTexto: {
    fontSize: 16,
    color: "red",
  },
  participantsContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },
  avatarImage: {
    width: 30,
    height: 30,
  },
  addParticipant: {
    flexDirection: "row",
    alignItems: "center",
  },
  addParticipantText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#979A9A",
  },
  iconAdd: {
    width: 15,
    height: 15,
  },
});
