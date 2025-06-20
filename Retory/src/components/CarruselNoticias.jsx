import { useRef } from "react";
import "../styles/carruselNoticias.css";

export default function CarruselNoticias({ imagenes = [] }) {
  const carruselRef = useRef(null);

  const scroll = (direction) => {
    const contenedor = carruselRef.current;
    if (direction === "left4") {
      contenedor.scrollLeft -= 300;
    } else {
      contenedor.scrollLeft += 300;
    }
  };

  return (
    <div className="contenedor-carrusel-noticias">
      <button
        className="boton-carrusel izquierda"
        onClick={() => scroll("left4")}
      >
        &#8249;
      </button>
      <div className="lista-imagenes-noticias" ref={carruselRef}>
        {imagenes.map((img, i) => (
          <div className="item-noticias" key={i}>
            <img src={img} alt={`programa-${i}`} />
            <p>celebrando el día del trabajador</p>
            <button >Ir al contenido</button>
          </div>
        ))}
      </div>
      <button
        className="boton-carrusel derecha"
        onClick={() => scroll("right4")}
      >
        &#8250;
      </button>
    </div>
  );
}
