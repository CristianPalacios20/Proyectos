import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";
import perfil from "../../assets/icons/iconUser2.png";

export default function EditarPerfil({ setSelectedTab }) {
  return (
    <View style={stylesPerfil.container}>
      <View style={stylesPerfil.header}>
        <TouchableOpacity
          onPress={() => setSelectedTab("Ajustes")}
          style={stylesPerfil.backButton}
        >
          <Image source={iconArrowBack} style={stylesPerfil.iconBack} />
        </TouchableOpacity>
        <Text style={stylesPerfil.title}>Perfil</Text>
      </View>
      <View style={stylesPerfil.photoSection}>
        <View style={stylesPerfil.photos}>
          <Image source={perfil} style={stylesPerfil.profileImage} />
          <Image style={stylesPerfil.editIcon} />
        </View>
        <Text style={stylesPerfil.editPhotoText}>Editar foto</Text>
      </View>
      <View style={stylesPerfil.form}>
        <View style={stylesPerfil.inputGroup}>
          <Text style={stylesPerfil.label}>Nombre</Text>
          <TextInput style={stylesPerfil.input} />
        </View>

        <View style={stylesPerfil.inputGroup}>
          <Text style={stylesPerfil.label}>Número de teléfono</Text>
          <TextInput style={stylesPerfil.input} />
        </View>

        <View style={stylesPerfil.inputGroup}>
          <Text style={stylesPerfil.label}>Contacto</Text>
          <TextInput style={stylesPerfil.input} />
        </View>
      </View>
    </View>
  );
}

const stylesPerfil = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    justifyContent: "center",
    width: 30,
    height: 30,
    left: 0,
  },

  iconBack: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  photoSection: {
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    padding: 40,
  },
  photos: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "#D9D9D9",
  },
  editPhotoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0099FF",
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    height: 45,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
});
