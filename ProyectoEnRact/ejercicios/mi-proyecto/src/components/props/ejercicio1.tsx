interface SaludoProps {
    nombre: string;
}

const Saludo : React.FC<SaludoProps> = ({nombre}) => {
  return (
    <div>
        <h2>Ejercicio 1:</h2>
        <p> Crea un componente Saludo que reciba una prop llamada nombre y la muestre dentro de un h1.</p>
        <p style={{color : 'blue'}}>Hola, {nombre}</p>
    </div>
  )
}

export default Saludo;

