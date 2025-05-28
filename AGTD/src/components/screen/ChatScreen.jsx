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

import iconArrowBack from "../../../assets/icons/iconArrowBack.png";
import iconPlus from "../../../assets/icons/iconPlus3.png";
import iconSend from "../../../assets/icons/iconSend.png";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen({ route }) {
  const { userName, message } = route.params;
  const [mensaje, setMensaje] = useState("");
  const navigation = useNavigation();

  return (
    // <SafeAreaView edges={['top']} style={{flex: 1,}}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -35 : 0} // Ajusta según tu header
      style={stylesChatScreen.content}
    >
      {/* Aquí se renderiza los mensajes según el chatId */}
      {/* <StatusBar translucent backgroundColor="transparent" style="dark" /> */}
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
            <Text style={stylesChatScreen.nameTask}>{userName}</Text>
          </View>

          <ScrollView style={stylesChatScreen.containerMessages}>
            <View style={stylesChatScreen.viewMessage}>
              <Text style={stylesChatScreen.message}>{message}</Text>
            </View>
          </ScrollView>

          {/* Mensajes */}
          <View style={stylesChatScreen.inputContainer1}>
            <View style={stylesChatScreen.inputContainer2}>
              <TouchableOpacity
                onPress={() =>
                  alert("Funciones como: agregar imagen, archivos, etc.")
                }
              >
                <Image source={iconPlus} style={stylesChatScreen.iconPlus} />
              </TouchableOpacity>
              <TextInput
                value={mensaje}
                onChangeText={setMensaje}
                style={stylesChatScreen.input}
              />
              <TouchableOpacity
                onPress={() => alert("Mensaje enviado")}
                style={stylesChatScreen.sendContainer}
              >
                <Image source={iconSend} style={stylesChatScreen.iconSend} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    // </SafeAreaView>
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
    height: 100,
    gap: 10,
    paddingLeft: 5,
    backgroundColor: "white",
  },
  containerButtonback: {
    marginTop: 60,
  },
  iconArrowBack: {
    width: 25,
    height: 25,
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
  inputContainer1: {
    height: 80,
    backgroundColor: "#ecf0f1",
    // borderWidth: 1,
  },
  inputContainer2: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    gap: 5,
    padding: 10,
    backgroundColor: "#ecf0f1",
    // borderWidth: 1,
  },
  input: {
    width: "80%",
    height: 30,
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#d7dbdd",
  },
  iconPlus: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    // borderWidth: 1,
  },
  sendContainer: {
    alignItems: "center",
    justifyContent: "center",
    // padding: 4,
    width: 30,
    height: 30,
    borderRadius: "50%",
    backgroundColor: "black",
  },
  iconSend: {
    width: 20,
    height: 25,
    resizeMode: "contain",
    // borderWidth: 1,
  },
});
