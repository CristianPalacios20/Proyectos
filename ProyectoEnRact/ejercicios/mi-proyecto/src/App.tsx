import Nn from './components/props/nn';
import Saludo from './components/props/ejercicio1';
import Perfil from './components/props/ejercicio2';
import Usario from './components/props/ejercicio3';
import Boton from './components/props/ejercicio4';
import ListaUsuarios from './components/props/ejercicio5';
import './App.css'

function App() {

  const usuarios = {
    nombre: "Cristian",
    edad: 24,
    profesion: "Desarrollador"
  }

  const handleClick = () => {
    alert("¡Hola, Cristian!");
  }

  const usuarios2 = [
    {nombre: "Cristian"},
    {edad: 24}
  ]

  return (
    <>
      <Nn/>
      <Saludo nombre='Cristian'/>
      <Perfil 
        nombre="Cristian"
        edad={20}
        profesion="Desarrollador"
      />
      <Usario datos={usuarios}/>
      <Boton accion={handleClick}/>
      <ListaUsuarios datos={usuarios2}/>
    </>
  )
}

export default App
