import { useRef } from "react";

import "../styles/carruselRotaract.css";

export default function CarruselRotaract({ videos = [] }) {
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
    <div className="carrusel-rotaract">
      <div className="rotaract-carrusel-contenedor">
        <button
          className="rotaract-flecha izquierda"
          onClick={() => scroll("left3")}
        >
          &#8249;
        </button>

        <div className="rotaract-carrusel" ref={carruselRef}>
          {videos.map((url, i) => (
            <div className="rotaract-carrusel-item" key={i}>
              <div className="rotaract-video-wrapper">
                <video controls>
                  <source src={url} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>

        <button
          className="rotaract-flecha derecha"
          onClick={() => scroll("right3")}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
