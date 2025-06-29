import { useState } from "react";
import "../styles/carrusel2.css";

import Rotaract from "../assets/img/Rotaract-logo.png"

const data = [
  {
    image : Rotaract,
    titulo: "Interac",
    descripcion: "Somos un club patrocinado por Rotary International...",
    color: "#009fe3", // Azul
  },
  {
    titulo: "Rotaract",
    descripcion:
      "Nuestro grupo Rotaract tiene como propósito ofrecer una oportunidad a los jóvenes...",
    color: "#e6007e", // Rosa
  },
  {
    titulo: "RYLA",
    descripcion: "RYLA es un seminario para Líderes Jóvenes...",
    color: "#f7931e", // Naranja
  },
];

export default function Carrusel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const getCardClass = (i) => {
    if (i === index) return "card center";
    if (i === (index - 1 + data.length) % data.length) return "card left";
    if (i === (index + 1) % data.length) return "card right";
    return "card hidden";
  };

  return (
    <div className="carousel-container">
      <button className="arrow" onClick={handlePrev}>
        &#10094;
      </button>

      <div className="cards-wrapper">
        {data.map((item, i) => (
          <div className={getCardClass(i)} key={i}>
            <h2 style={{ color: item.color }}>{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <button className="btn2">Descubrir cómo funciona</button>
          </div>
        ))}
      </div>

      <button className="arrow" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}
