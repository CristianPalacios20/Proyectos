import { Usuario } from '../../types/usuarios';

type UsuarioProps = {
    datos: Partial<Usuario>[];
}

const ListaUsuarios : React.FC<UsuarioProps> = ({ datos }) =>{
    return(
        <div>
            <h1>Ejercicio 5: Renderizar una Lista con Props</h1>
            <p>Crea un componente ListaUsuarios que reciba un array de usuarios y los muestre en una lista.</p>
            <ul>
                {datos.map((user, index) => (
                    <li key={index}>
                        {user.nombre} {user.edad}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaUsuarios;
