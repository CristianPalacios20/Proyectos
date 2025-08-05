import { View, Text, Button } from "react-native";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const { logout, user } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View>
      <Text>Bienvenido {user.nombre}</Text>
      <Button
        title="Cerrar sesión"
        onPress={logout}
      />
    </View>
  );
}
