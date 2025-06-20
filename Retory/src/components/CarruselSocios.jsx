import "../styles/carruselSocios.css";

import socio1 from "../assets/img/socio1.png";
import socio2 from "../assets/img/socio2.png";
import socio3 from "../assets/img/socio3.png";
import socio4 from "../assets/img/socio4.png";
import img1 from "../assets/img/Children-pana.svg";

const socios = [
  { imagen: socio1, nombre: "Hernando Uribe Correa" },
  { imagen: socio2, nombre: "Gabriela Ruiz Palacio" },
  { imagen: socio3, nombre: "Francisco Garcés Correa" },
  { imagen: socio4, nombre: "Socio Paul Harris" },
  { imagen: img1, nombre: "Rocio Restrepo Jaramillo" },
  { imagen: img1, nombre: "Roberto Alonso Sanchez Salazar" },
  { imagen: img1, nombre: "Carlos Mario Ramirez Velasquez" },
  { imagen: img1, nombre: "Maria Cenelia Orozco Nieto" },
  { imagen: img1, nombre: "Jose Alberto Restrepo Arenas" },
  { imagen: img1, nombre: "Andres Tamayo Buitrago" },
  //   { imagen: img1, nombre: "Luis Ignacio Correa Vasquez" },
  //   { imagen: img1, nombre: "Beatriz Velasquez Restrepo" },
  //   { imagen: img1, nombre: "Leoncio Oquendo Mejia" },
  //   { imagen: img1, nombre: "Durlandy Chaverra Muñoz" },
  //   { imagen: img1, nombre: "Jairo Alexander Cepeda Virviescas" },
  //   { imagen: img1, nombre: "Carlos Eduardo Maya Ospina" },
  //   { imagen: img1, nombre: "Dolly Maria Quintero Betancur" },
  //   { imagen: socio1, nombre: "Jaime Betancur Zuluaga" },
];

export default function CarruselSocios() {
  return (
    <div className="carrusel-socios">
      {socios.map((miembro, index) => (
        <div
          className="tarjeta-socio"
          style={{ animationDelay: `-${(index + 1) * 2}s` }}
          key={index}
        >
          <img src={miembro.imagen} alt={miembro.nombre} />
          <p className="nombre-socio">{miembro.nombre}</p>
        </div>
      ))}
    </div>
  );
}
