import { View, Text, Button } from "react-native";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";

export default function PantallaPrincipal() {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <View>
      {user ? (
        <>
          <Text>Bienvenido {user.nombre}</Text>
          <Button title="cerrar sesión" onPress={logout} />
        </>
      ) : (
        <>
          <Text>No estás logueado</Text>
          <Button title="iniciar sesión" onPress={login} />
        </>
      )}
    </View>
  );
}
