import React, { useState } from "react";
import { View,Text } from "react-native";

import Message from "./Message";
import UserCard from "./userCard";
import Boton from "./Boton";
import Contenedor from "./Contenedor";
import Cambiador from "./Cambiador";
import MostrarMensaje from "./MostrarMensaje";
import EditarMensaje from "./EditarMensaje";

export default function Layout2() {
  const [mensaje, setMensaje] = useState('Mensaje inicial.');
  const [mensaje2, setMensaje2] = useState('Esperando mensaje');
  const usuario = {
    nombre: "Cristian",
    edad: 24,
    address: {
      pais: "Colombia",
      ciudad: "Medellín",
    },
    
  };
  const saludar = () => {
    alert("¡Hola!, esta función viene del padre.");
  };
  return (
    <View>
      <Message text="Hola desde el componente padre!" />
      <UserCard user={usuario} />
      <Boton onPress={saludar} />
      <Contenedor>
        <Text>Este contenido es pasado como children</Text>
      </Contenedor>
      <Text>{mensaje}</Text>
      <Cambiador setMensaje={setMensaje}/>
      <MostrarMensaje mensaje2={mensaje2} />
      <EditarMensaje setMensaje2={setMensaje2}/>
    </View>
  );
}
