import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native";

import iconCompartir3 from "../../assets/icons/iconCompartir3.png";

export default function ModalAddparticipant({ closeModal }) {
  return (
    <View edges={["top"]} style={stylesModalParticipant.wrapper}>
      <View style={stylesModalParticipant.container}>
        <View style={stylesModalParticipant.header}>
          <TouchableOpacity
            style={stylesModalParticipant.headerButton}
            onPress={closeModal}
          >
            <Text style={stylesModalParticipant.headerButtonText}>
              cancelar
            </Text>
          </TouchableOpacity>
          <Text style={stylesModalParticipant.title}>
            Agregar participantes
          </Text>
          <TouchableOpacity style={stylesModalParticipant.headerButton}>
            <Text style={stylesModalParticipant.headerButtonText}>agregar</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesModalParticipant.contentInputs}>
          <TextInput
            placeholder="Correo o celular"
            style={stylesModalParticipant.input}
          />
        </View>

        <ScrollView style={stylesModalParticipant.body}>
          <View style={stylesModalParticipant.inviteContainer}>
            <TouchableOpacity style={stylesModalParticipant.inviteButton}>
              <View style={stylesModalParticipant.inviteIconWrapper}>
                <Image
                  source={iconCompartir3}
                  style={stylesModalParticipant.inviteIcon}
                />
              </View>
              <Text style={stylesModalParticipant.inviteText}>
                Invitar vía link o código QR
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const stylesModalParticipant = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "95%",
    gap: 20,
    padding: 15,
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
  },
  headerButtonText: {
    fontSize: 16,
    textTransform: "capitalize",
    color: "#0099FF",
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D0D3D4",
    borderRadius: 10,
    textTransform: "lowercase",
  },
  body: {
    flex: 1,
  },
  inviteButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#E5E5E5",
  },
  inviteIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 30,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
  },
  inviteIcon: {
    width: 18,
    height: 18,
  },
});
