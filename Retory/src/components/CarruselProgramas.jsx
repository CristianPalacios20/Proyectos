import { useRef } from "react";
import "../styles/carruselProgramas.css";

export default function CarruselProgramas ({ imagenes = [] }) {
  const carruselRef = useRef(null);

  const scroll = (direction) => {
    const contenedor = carruselRef.current;
    if (direction === "left2") {
      contenedor.scrollLeft -= 300;
    } else {
      contenedor.scrollLeft += 300;
    }
  };

  return (
    <div className="carrusel-container2">
      <button className="arrow2 left2" onClick={() => scroll("left2")}>
        &#8249;
      </button>
      <div className="num1"></div>
      <div className="carrusel2" ref={carruselRef}>
        {imagenes.map((img, i) => (
          <div className="carrusel-item2" key={i}>
            <img src={img} alt={`programa-${i}`} />
          </div>
        ))}
      </div>
      <div className="num2"></div>
      <button className="arrow2 right2" onClick={() => scroll("right2")}>
        &#8250;
      </button>
    </div>
  );
};

