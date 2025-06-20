// src/componentes/Carrusel3D.jsx
import "../styles/Carrusel3D.css";

import image1 from "../assets/img/imagen1.png"

const imagenes = [
  "../assets/img/imagen1.png",
  "../assets/img/imagen1.png",
  "../assets/img/imagen1.png",
  "../assets/img/imagen1.png",
];

const Carrusel3D = () => {
  return (
    <section className="carrusel-3d">
      {imagenes.map((src, index) => (
        <div
          key={index}
          className="imagen-3d"
          style={{
            transform: `perspective(1000px) rotateY(${index % 2 === 0 ? "-10deg" : "10deg"})`,
          }}
        >
          <img src={src} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default Carrusel3D;
