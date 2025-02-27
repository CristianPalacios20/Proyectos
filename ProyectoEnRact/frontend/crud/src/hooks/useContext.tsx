import React, { createContext, useState, useContext, useEffect } from 'react';

// Definir la interfaz para el usuario
interface User {
  id: number;
  correo: string;
  contrasena: string;
  nombres: string;
  apellidos: string;
}

// Definir el tipo del contexto
interface AuthContextType {
  user: User | null; // El usuario puede ser un objeto o null
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Función para actualizar el usuario
  logout: () => void; // Función para cerrar la sesión
  formatearNombreCompleto: (texto: string) => string;
}

// Crear el contexto con un valor inicial vacío
const AuthContext = createContext<AuthContextType & { capitalizarPrimeraLetra : (texto : string) => string } | undefined>(undefined);

// Proveedor del contexto
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [user, setUser] = useState<User | null>(null); // Estado del usuario

  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Guardar el usuario en localStorage cada vez que se actualice
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user'); // Eliminar del almacenamiento si no hay usuario
    }
  }, [user]);

  const capitalizarPrimeraLetra = (texto : string) : string => {
    return texto
    .toLowerCase()
    .split(' ')
    .map((palabra) =>palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
  }

  const formatearNombreCompleto = (): string =>{
    if(!user) '';
    const nombres = capitalizarPrimeraLetra(user?.nombres || '');
    const apellidos = capitalizarPrimeraLetra(user?.apellidos || '');
    return `${nombres.split(' ')[0]} ${apellidos.split(' ')[0].charAt(0)}.`;
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Eliminar del estado y del almacenamiento

  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, formatearNombreCompleto, capitalizarPrimeraLetra }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext debe ser usado dentro de un AuthProvider');
  }
  return context;
};








