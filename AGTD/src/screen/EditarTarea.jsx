import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function EditarTarea({setSelectedTab}) {
  return (
    <View style={stylesEditarTarea.container}>
      <View style={stylesEditarTarea.header}>
        <View style={stylesEditarTarea.headerTitle}>
          <Image style={stylesEditarTarea.iconBack} />
          <Text style={stylesEditarTarea.title}>Editar tarea</Text>
        </View>
        <TouchableOpacity style={stylesEditarTarea.saveButton}>
          <Text style={stylesEditarTarea.saveText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={stylesEditarTarea.scroll}>
        <View style={stylesEditarTarea.section}>
          <View style={stylesEditarTarea.inputGroup}>
            <Text style={stylesEditarTarea.label}>Título</Text>
            <TextInput placeholder="" style={stylesEditarTarea.input} />
          </View>
          <View style={stylesEditarTarea.inputGroup}>
            <Text style={stylesEditarTarea.label}>Descripción</Text>
            <TextInput placeholder="" style={stylesEditarTarea.input} />
          </View>
        </View>

        <View style={stylesEditarTarea.section}>
          <View style={stylesEditarTarea.metaGroup}>
            <Text style={stylesEditarTarea.label}>Fecha vencimiento</Text>
            <Text style={stylesEditarTarea.metaText}>fecha</Text>
          </View>
          <View style={stylesEditarTarea.metaGroup}>
            <Text style={stylesEditarTarea.label}>Prioridad</Text>
            <View style={stylesEditarTarea.prioridadBox}>
              <View style={stylesEditarTarea.prioridadDot}></View>
              <Text style={stylesEditarTarea.metaText}>alta</Text>
            </View>
          </View>
          <View style={stylesEditarTarea.metaGroup}>
            <Text style={stylesEditarTarea.label}>Categoría</Text>
            <Text style={stylesEditarTarea.metaText}>trabajo</Text>
          </View>
        </View>

        <View style={stylesEditarTarea.section}>
          <View style={stylesEditarTarea.subtareasHeader}>
            <Text style={stylesEditarTarea.label}>Subtareas</Text>
            <Image style={stylesEditarTarea.iconAdd} />
            <Image style={stylesEditarTarea.iconAdd} />
          </View>
          <View style={stylesEditarTarea.subtareasList}>
            <Text style={stylesEditarTarea.subtareaItem}>Subtarea #1</Text>
            <Text style={stylesEditarTarea.subtareaItem}>Subtarea #1</Text>
          </View>
        </View>

        <View style={stylesEditarTarea.section}>
          <View style={stylesEditarTarea.participantsHeader}>
            <Text style={stylesEditarTarea.label}>Participantes</Text>
            <Text style={stylesEditarTarea.eliminarTexto}>Eliminar</Text>
          </View>
          <View style={stylesEditarTarea.participantsContent}>
            <View style={stylesEditarTarea.avatarWrapper}>
              <Image style={stylesEditarTarea.avatarImage} />
            </View>
            <View style={stylesEditarTarea.addParticipant}>
              <Text style={stylesEditarTarea.addParticipantText}>
                Agregar participantes
              </Text>
              <Image style={stylesEditarTarea.iconAdd} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
