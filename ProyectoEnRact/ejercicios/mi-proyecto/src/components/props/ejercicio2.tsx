interface PerfilProps {
    nombre: string;
    edad: number;
    profesion: string;
}
const Perfil : React.FC<PerfilProps> = ({ nombre, edad, profesion }) => {
  return (
    <div>
        <h1>Ejercicio 2: Múltiples Props</h1>
        <p>Crea un componente Perfil que reciba nombre, edad y profesion y los muestre en una tarjeta.</p>
        <h3>Nombre: {nombre}</h3>
        <h3>Edad: {edad}</h3>
        <h3>Profesion {profesion}</h3>
    </div>
  )
}

export default Perfil;

