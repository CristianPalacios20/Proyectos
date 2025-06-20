import React from "react";

import "../styles/carruselClubFun.css"

import setting from "../assets/img/setting.png"

export default function CarruselClubsFun() {
  const mensajes = [
    "Comprometidos con la comunidad",
    "Transformamos ideas en acciones",
    "Innovación con propósito",
    "Jóvenes líderes en acción",
    "Pasión por servir",
  ];
  return (
    <div className="carrusel-textos">
      <div className="carrusel-track">
        {[...mensajes, ...mensajes].map((texto, index) => (
          <div className="carrusel-item" key={index}>
            <img src={setting} className="rotary" alt="" />
            <span>{texto}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
