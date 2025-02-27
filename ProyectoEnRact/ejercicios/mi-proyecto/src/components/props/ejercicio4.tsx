interface BotonProps {
    accion : () => void;
}
const Boton : React.FC<BotonProps> = ({accion}) => {
    return (
        <div>
            <h2>Ejercicio 4: Pasar una Función como Prop</h2>
            <p>Crea un botón que ejecute una función pasada como prop.</p>
            <button onClick={accion}>Haz click</button>
        </div>
    )
}

export default Boton;
