import { createContext, useState } from 'react'

// 1: Crea el contexto
export const NombreContext = createContext();

// 2: Crear el proveedor
export const NombreProvider = ({children}) =>{
    const [nombre, setNombre] = useState("Cristian");

    return(
        <NombreContext.Provider value={{nombre, setNombre}}>
            {children}
        </NombreContext.Provider>
    )

} 
