import { useState} from 'react'
import axios from 'axios';

interface User{
    id : number;
    correo : string;
    contrasena : string;
    nombres : string;
    apellidos : string;
}

function useAuth() {
    const [user, setUser] = useState <User | null> (null); // Estado para almacenar los datos
    const [loading, setLoading] = useState <boolean> (false); // Estado para manejar la carga de la solicitud
    const [error, setError] = useState <string | null> (null); // Estado para manejar errores

    const Auth = async (correo: string, contrasena: string) : Promise <{ success : boolean; user ? : User; message ? : string }> => {
        setLoading(true); // comienza la carga
        setError(null); // limpia errores

        try{

            const response = await axios.post(
                'http://localhost/ProyectoEnRact/backend/api/login.php',
            {
                correo,
                contrasena
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if(response.data.success){
                setUser(response.data.usuario); // almacena los datos del usaurio si el inicio de sesión fue exitoso
                // console.log('Usuario almacenado en setUser:', response.data.usuario);
                return { success : true, user : response.data.usuario };
            }else{
                setError(response.data.message); // muestra el mensaje de error si las credenciales son incorrectas
                setTimeout(() =>{
                    setError(''); // limpia el error después de 5 segundos
                }, 5000)
                return { success : false, message : response.data.message };
            }

        }catch(err : any){
            if(err.response){
                setError(err.response.data.message || 'Error en la respuesta del servidor');
            }else if(err.request){
                setError('No se pudo conectar al servidor');
            }else{
                setError(err.message || 'Error desconocido');
            }
            return { success : false, message : 'Error en la solicitud' };
        }finally{
            setLoading(false); // finaliza la carga
        }
    };

  return { user, setUser, Auth, loading, error };
}

export default useAuth;
