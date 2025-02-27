import { useState } from 'react'
import axios from 'axios';

export default function useAuthRegistro() {

    const [registroNombres, setRegistroNombres] = useState('');
    const [registroApellidos, setRegistroApellidos] = useState('');
    const [registroCorreo, setRegistroCorreo] = useState('');
    const [registroContrasena, setRegistroContrasena] = useState('');
    const [registroMensaje, setRegistroMensaje] = useState('');
    const [rolId, setRolId] = useState('');
    const [registroLoading, setRegistroLoading] = useState(false);

    const handleRegistro = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setRegistroLoading(true); // Comienza la carga
        // Enviar datos al backend para registrar un nuevo usuario
        try{
            const response = await axios.post(
                'http://localhost/ProyectoEnRact/backend/api/registro.php', 
            {
                nombres : registroNombres,
                apellidos: registroApellidos,
                correo : registroCorreo,
                contrasena :  registroContrasena,
                rol_id: rolId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        
            );

            if (response.data.success) {
                setRegistroMensaje(response.data.message);
                setRegistroNombres('');
                setRegistroApellidos('');
                setRegistroCorreo('');
                setRegistroContrasena('');
                setRolId('');

                setTimeout(() => {
                    setRegistroMensaje('');
                }, 5000);

            } else {
                setRegistroMensaje(response.data.message);
                setTimeout(() => {
                    setRegistroMensaje('');
                }, 5000);

            }
        }catch(error){
            console.error( 'Error en el registro: ', error);
            setRegistroMensaje('Hubo un error en el registro');
        }finally{
            setRegistroLoading(false); // Finaliza la carga
        }
    }
  return { 
    registroNombres,
    setRegistroNombres,
    registroApellidos,
    setRegistroApellidos,
    registroCorreo,
    setRegistroCorreo,
    registroContrasena,
    setRegistroContrasena,
    rolId,
    setRolId,
    registroMensaje,
    handleRegistro,
    registroLoading,
    }
}
