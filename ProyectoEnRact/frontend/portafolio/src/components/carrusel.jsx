import React, { useState } from "react";
import "../Styles/carrusel.css"; 

const Carrusel = ({ elementos }) => {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguiente = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === elementos.length - 1 ? 0 : prevIndice + 1
    );
  };

  const anterior = () => {
    setIndiceActual((prevIndice) =>
      prevIndice === 0 ? elementos.length - 1 : prevIndice - 1
    );
  };

  return (
    <div className="carrusel">
      <button className="boton boton-anterior" onClick={anterior}>
        &#10094;
      </button>

      <div className="carrusel-contenedor">
        {elementos.map((elemento, indice) => (
          <div
            key={indice}
            className={`carrusel-item ${
              indice === indiceActual ? "activo" : ""
            }`}
          >
            <img src={elemento} alt={`Slide ${indice + 1}`} />
          </div>
        ))}
      </div>

      <button className="boton boton-siguiente" onClick={siguiente}>
        &#10095;
      </button>
    </div>
  );
};

export default Carrusel;
