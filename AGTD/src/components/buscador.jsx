import { View, TextInput, StyleSheet, Image } from "react-native";

import imgSearch from "../../assets/icons/Search.png";

export default function buscador({
  placeholder = "buscar",
  valor,
  onCambiarTexto,
}) {
  return (
    <View style={stylesBuscador.inputContent}>
      <Image source={imgSearch} style={stylesBuscador.iconSearch} />
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
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  iconSearch: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  inputSearch: {
    flex: 1,
    height: 35,
  },
});
