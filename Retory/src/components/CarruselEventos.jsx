import { useRef } from "react";
import "../styles/carruselEventos.css";

export default function CarruselEventos({ imagenes = [] }) {
  const carruselRef = useRef(null);

  const scroll = (direction) => {
    const contenedor = carruselRef.current;
    if (direction === "left3") {
      contenedor.scrollLeft -= 300;
    } else {
      contenedor.scrollLeft += 300;
    }
  };

  return (
    <div className="carrusel-container3">
      <button className="arrow3 left3" onClick={() => scroll("left3")}>
        &#8249;
      </button>
      <div className="carrusel3" ref={carruselRef}>
        {imagenes.map((item, i) => (
          <div
            className="carrusel-item3"
            key={i}
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <div className="carrusel-content-titulo">
              <h2>{item.titulo}</h2>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="arrow3 right3" onClick={() => scroll("right3")}>
        &#8250;
      </button>
    </div>
  );
}
