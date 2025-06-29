// Carrusel3D.jsx
import { useState } from "react";
import "../styles/Carrusel3D2.css";

import img1 from "../assets/img/Rotaract.png";
import img2 from "../assets/img/Rotaract.png";
import img3 from "../assets/img/Rotaract.png";
import img4 from "../assets/img/Rotaract.png";

const imagenes = [img1, img2, img3, img4];

export default function Carrusel3D() {
  const [indice, setIndice] = useState(0);

  const siguiente = () =>
    setIndice((prev) => (prev + 1) % imagenes.length);
  const anterior = () =>
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="contenedor-carrusel">
      <button className="boton" onClick={anterior}>‹</button>

      <div className="carrusel3D">
        {imagenes.map((img, i) => {
          const offset = i - indice;
          return (
            <div
              key={i}
              className="slide"
              style={{
                transform: `translateX(${offset * 300}px) scale(${
                  i === indice ? 1 : 0.8
                })`,
                zIndex: i === indice ? 2 : 1,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
            >
              <img src={img} alt={`img-${i}`} />
            </div>
          );
        })}
      </div>

      <button className="boton" onClick={siguiente}>›</button>
    </div>
  );
}

