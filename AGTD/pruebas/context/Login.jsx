import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  return (
    <View>
      <Button title="Iniciar sesión" onPress={login} />
    </View>
  );
}
