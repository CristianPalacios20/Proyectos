import { useRef } from "react";
import "../styles/carruselInteract.css";

export default function CarruselInteract({ imagenes = [] }) {
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
    <div className="contenedor-carrusel-interact">
      <button
        className="flecha-carrusel-interact izquierda"
        onClick={() => scroll("left3")}
      >
        &#8249;
      </button>

      <div className="carrusel-interact" ref={carruselRef}>
        {imagenes.map((img, i) => (
          <div className="item-carrusel-interact" key={i}>
            <img src={img} alt={`programa-${i}`} />
          </div>
        ))}
      </div>

      <button
        className="flecha-carrusel-interact derecha"
        onClick={() => scroll("right3")}
      >
        &#8250;
      </button>
    </div>
  );
}
