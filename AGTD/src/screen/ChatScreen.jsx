import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";

export default function ChatScreen({ route }) {
  const { titulo, message } = route.params;
  const [mensaje, setMensaje] = useState("");
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -35 : 0} // Ajusta según tu header
      style={stylesChatScreen.content}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
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
          </View>

          <ScrollView style={stylesChatScreen.containerMessages}>
            <View style={stylesChatScreen.viewMessage}>
              <Text style={stylesChatScreen.message}>{message}</Text>
            </View>
          </ScrollView>

          {/* Mensajes */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const stylesChatScreen = StyleSheet.create({
  content: {
    flex: 1,
    gap: 10,
  },
  headerChat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    paddingLeft: 5,
    backgroundColor: "white",
  },
  containerButtonback: {
    position: "absolute",
    marginTop: 60,
    left: 0,
  },
  iconArrowBack: {
    width: 45,
    height: 20,
    resizeMode: "contain",
  },
  nameTask: {
    marginTop: 60,
    fontSize: 18,
    fontWeight: "bold",
  },
  containerMessages: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  viewMessage: {
    justifyContent: "center",
    maxWidth: 240,
    minHeight: 35,
    marginTop: 10,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "white",
  },
  message: {
    fontSize: 15,
  },
});
