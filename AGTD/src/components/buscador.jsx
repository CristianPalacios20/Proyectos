import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import IA from "../../assets/img/IA.jpg";

export default function buscador({
  placeholder = "buscar",
  valor,
  onCambiarTexto,
}) {
  return (
    <View style={stylesBuscador.inputContent}>
      <TouchableOpacity>
        <Image source={IA} style={stylesBuscador.iconIA} />
      </TouchableOpacity>
      <TextInput
        style={stylesBuscador.inputSearch}
        placeholder={placeholder}
        value={valor}
        onChangeText={onCambiarTexto}
      />
    </View>
  );
}
const stylesBuscador = StyleSheet.create({
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  iconIA: {
    width: 28,
    height: 28,
    marginRight: 8,
    borderRadius: 20,
  },
  inputSearch: {
    flex: 1,
    height: 35,
  },
});
