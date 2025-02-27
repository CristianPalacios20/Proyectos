interface UsuariosProps {
    datos : {
        nombre: string;
        edad: number;
        profesion: string;
    }
}

const Usuarios : React.FC<UsuariosProps> = ({ datos }) =>{
    return (
        <div>
            <h1>Ejercicio 3:</h1>
            <h2> Pasar Props como un Objeto.</h2>
            <p>Nombre: {datos.nombre}</p>
            <p>Edad: {datos.edad}</p>
            <p>Profesion: {datos.edad}</p>
        </div>
    )
}

export default Usuarios;
