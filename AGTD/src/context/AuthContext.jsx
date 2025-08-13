import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [screen, setScreen] = useState("splash");

  const verificarUsuario = async () => {
    setIsLoading(true);
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        const userObj = JSON.parse(storedUser);
        setUser(userObj);
        // setScreen("main");
        return userObj;
      } else {
        setUser(null);
        return null;
        // setScreen("welcome");
      }
    } catch (error) {
      console.error("Error al cargar usuario: ", error);
      //   setScreen("welcome");
      setUser(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Llamar verificación automáticamente al montar
  useEffect(() => {
    verificarUsuario();
  }, []);

  const login = async (identificador, contrasena) => {
    try {
      const response = await fetch(
        "http://192.168.1.3/proyectoEnReact-Backend/backend/back-end-AGT/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correo: identificador, contrasena }),
        }
      );

      if (!response.ok) throw new Error("Error en la respuesta del servidor");

      const data = await response.json();

      if (data.success) {
        await AsyncStorage.setItem("user", JSON.stringify(data.users));
        setUser(data.users);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error en login:", error);
      return false;
    }
  };

  const register = async (nombre, correo, celular, contrasena) => {
    try {
      const response = await fetch(
        "http://192.168.1.3/proyectoEnReact-Backend/backend/back-end-AGT/register.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nombre, correo, celular, contrasena }),
        }
      );

      //primero verifica el estado de la respuesta.
      if (!response.ok) {
        throw new Error("¡Error en la respuesta del servidor!");
      }

      const data = await response.json();

      if (data.success) {
        await AsyncStorage.setItem("user", JSON.stringify(data.usuario));
        setUser(data.usuario);
        return { success: true, user: data.usuario };
      } else {
        return { success: false, message: data.message || "Error en registro" };
      }
    } catch (error) {
      console.log("Error en la solicitud", error);
      return { success: false, message: `Error: ${error.message}` };
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);
    setScreen("login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register,
        logout,
        screen,
        setScreen,
        isLoading,
        setIsLoading,
        verificarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el context fácil
export const useAuth = () => useContext(AuthContext);
