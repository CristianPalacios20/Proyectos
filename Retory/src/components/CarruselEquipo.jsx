import "../styles/carruselEquipo.css";
import img1 from "../assets/img/Children-pana.svg";

// Simulamos un array de miembros del equipo
const miembros = [
  { imagen: img1, nombre: "Laura Gómez" },
  { imagen: img1, nombre: "Carlos Ruiz" },
  { imagen: img1, nombre: "Sofía Ramírez" },
  { imagen: img1, nombre: "Miguel Torres" },
  { imagen: img1, nombre: "Valentina López" },
  { imagen: img1, nombre: "Andrés Martínez" },
  { imagen: img1, nombre: "Camila Ríos" },
  { imagen: img1, nombre: "Julián Castillo" },
  { imagen: img1, nombre: "Paola Díaz" },
  { imagen: img1, nombre: "David Hernández" },
];

export default function CarruselEquipo() {
  return (
    <div className="carrusel-equipo">
      {miembros.map((miembro, index) => (
        <div
          className="item-equipo"
          style={{ animationDelay: `-${(index + 1) * 2}s` }}
          key={index}
        >
          <img src={miembro.imagen} alt={miembro.nombre} />
          <p className="nombre-equipo">{miembro.nombre}</p>
        </div>
      ))}
    </div>
  );
}
