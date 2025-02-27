import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import { useAuthContext } from './useContext';

function useLogin() {
    const navigate = useNavigate();
    const { Auth: login, loading, error } = useAuth(); //funcion para iniciar sessión
    const { setUser } = useAuthContext(); // desestructuramos useAuth
    const [correo, setCorreo] = useState('');
    const [ contrasena, setContrasena ] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result =  await login(correo, contrasena);
        if(result.success && result.user){
            setUser(result.user);
            console.log('Inicio de sesión exitoso.');
            // Redireccionar a la página principal
            navigate('/dashboard');
        }else{
            // Mostrar mensaje de error
            console.log(`Error: ${JSON.stringify(result.message)}`);
        }
    };

    return {
        correo, 
        setCorreo,
        contrasena,
        setContrasena,
        handleLogin,
        loading,
        error,
    }
}

export default useLogin;
