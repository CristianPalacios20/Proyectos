import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import iconArrowBack from "../../assets/icons/iconArrowBack.png";

export default function NuevaSubtarea() {
  const navigation = useNavigation();
  return (
    <SafeAreaView edges={["top"]} style={stylesNuevaSubtarea.container}>
      <View style={stylesNuevaSubtarea.content}>
        <View style={stylesNuevaSubtarea.header}>
          <TouchableOpacity
            style={stylesNuevaSubtarea.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={iconArrowBack}
              style={stylesNuevaSubtarea.backIcon}
            />
          </TouchableOpacity>
          <Text style={stylesNuevaSubtarea.title}>Nueva subtarea</Text>
        </View>

        <ScrollView style={stylesNuevaSubtarea.body}>
          <TextInput placeholder="Subtarea" style={stylesNuevaSubtarea.input} />

          <View style={stylesNuevaSubtarea.actions}>
            <TouchableOpacity style={stylesNuevaSubtarea.cancelButton}>
              <Text
                style={[
                  stylesNuevaSubtarea.cancelText,
                  stylesNuevaSubtarea.actionText,
                ]}
              >
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesNuevaSubtarea.createButton}>
              <Text
                style={[
                  stylesNuevaSubtarea.createText,
                  stylesNuevaSubtarea.actionText,
                ]}
              >
                Crear
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const stylesNuevaSubtarea = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: "0",
    width: 40,
    height: 40,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    paddingTop: 20,
  },
  input: {
    height: 50,
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#CACFD2",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginTop: 50,
  },
  actionText: {
    textTransform: "uppercase",
    fontSize: 18
  },

  createText: {
    color: "#0099FF",
  },
});
