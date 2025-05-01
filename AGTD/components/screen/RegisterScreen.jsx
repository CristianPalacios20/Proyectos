import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import iconArrowBack from "../../assets/icons/iconArrowBack.png";

export default function RegisterScreen({ onGoBack }) {
  return (
    <View>
      <TouchableOpacity onPress={onGoBack} style={{flexDirection: 'row',}}>
        <Image source={iconArrowBack} style={{width: 20, height: 20,}}/>
        <Text style={{ fontSize: 18 }}>Volver</Text>
      </TouchableOpacity>
      {/* <Text>Register</Text> */}
    </View>
  );
}
