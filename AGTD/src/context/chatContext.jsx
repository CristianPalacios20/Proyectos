import { useEffect, useState } from "react";
import { createContext, useContext } from "react";

import { useAuth } from "./AuthContext";

export const ChatContext = createContext(null);

export const ChatProvider = ({ children }) => {
  const [dataChats, setDataChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState("");

  const { user } = useAuth();

useEffect(() => {
  if (!user) return; // ⬅️ no ejecuta hasta que user exista

  const obtenerTareas = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.7/proyectoEnReact-Backend/backend/back-end-AGT/chats.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.id }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Servidor respondió con estatus:  ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Datos recibidos: ", data);

      if (data.success) {
        setDataChats(data.data);
      } else {
        console.warn("la API respondió: ", data);
      }
    } catch (error) {
      console.error("Error al obtener tareas: ", error.message);
    }
  };

  obtenerTareas();
}, [user]); // <- se dispara cuando user cambie


  const chatActual = dataChats.find(
    (chat) => Number(chat.chatId) === Number(selectedChat)
  );

  const crearTarea = async ({
    title,
    description,
    dueDate,
    prioridad,
    participantsIds,
    subTasks,
  }) => {
    //Valida fecha
    let fechaFormateada = null;
    if (dueDate instanceof Date && !isNaN(dueDate)) {
      fechaFormateada = dueDate.toISOString().split("T")[0];
    }

    const nuevaTarea = {
      title,
      description,
      dueDate: fechaFormateada,
      priority: prioridad.toLowerCase(),
      createdBy: user?.id,
      participants: participantsIds,
      subtasks: Array.isArray(subTasks)
        ? subTasks.map((st) => ({
            name: st.name,
            completed: st.completed ?? false,
          }))
        : [],
    };

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => {
        controller.abort();
      }, 5000);

      const res = await fetch(
        "http://192.168.1.7/proyectoEnReact-Backend/backend/back-end-AGT/registerTask.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevaTarea),
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      const text = await res.text();

      // Intenta convertir a JSON si es posible
      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonErr) {
        throw new Error("La respuesta del servidor no es JSON:\n" + text);
      }

      if (!res.ok || data.success !== true) {
        throw new Error(data.message || "Error desconocido del servidor");
      }

      if (data.success) {
        // Actualiza el estado.
        setDataChats((prev) => [
          ...prev,
          {
            chatId: data.chatid,
            title,
            description,
            dueDate: fechaFormateada,
            priority: prioridad.toLowerCase(),
            createdBy: user?.id,
            subtasks: subTasks,
            participants: participantsIds,
          },
        ]);
      }

      return true;
    } catch (err) {
      if (err.name === "AbortError") {
        console.error("⌛ El servidor tardó demasiado en responder");
      } else {
        console.error("❌ Error al guardar tarea:", err.message);
      }

      return false;
    }
  };

  return (
    <ChatContext.Provider
      value={{
        dataChats,
        setDataChats,
        isLoading,
        setIsLoading,
        chatActual,
        selectedChat,
        setSelectedChat,
        crearTarea,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat debe usarse dentro de ChatProvider");
  }
  return context;
};
