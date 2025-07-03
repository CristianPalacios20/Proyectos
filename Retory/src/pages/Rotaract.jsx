import { useState } from "react";

import useAnimacionScroll from "../hooks/useAnimacionScroll";

import rotaractLogo from "../assets/img/Rotaract-logo.png";
import rotaract1 from "../assets/img/rotaract1.jpg";
import rotaract2 from "../assets/img/rotaract2.jpg";
import rotaract3 from "../assets/img/rotaract3.jpg";
import rotaract4 from "../assets/img/rotaract4.jpg";
import rotaract5 from "../assets/img/rotaract5.jpg";
import rotaract6 from "../assets/img/rotaract6.jpg";
import rotaract7 from "../assets/img/rotaract7.jpg";
import imgWhite from "../assets/img/Frame39.png";

import "../styles/rotaract.css";

export default function Rotaract() {
  useAnimacionScroll(".oculto");
  const [indice, setIndice] = useState(0);
  const [indiceVideo, setIndiceVideo] = useState(0);
  const imagenesRotaract = [
    rotaract5,
    rotaract1,
    rotaract6,
    rotaract2,
    rotaract3,
    rotaract4,
    rotaract7,
  ];

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenesRotaract.length);
  };

  const anterior = () => {
    setIndice(
      (prev) => (prev - 1 + imagenesRotaract.length) % imagenesRotaract.length
    );
  };

  const siguienteVideo = () => {
    setIndiceVideo((prev) => (prev + 1) % videos.length);
  };

  const anteriorVideo = () => {
    setIndiceVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const juntaDirectiva = [
    {
      nombre: "sara hoyos",
      image: imgWhite,
      cargo: "presidenta",
    },
    {
      nombre: "sebastian casteñada",
      image: imgWhite,
      cargo: "vicepresidente",
    },
    {
      nombre: "laura gonzales",
      image: imgWhite,
      cargo: "secretaria",
    },
    {
      nombre: "marcela sampedro",
      image: imgWhite,
      cargo: "tesorera",
    },
    {
      nombre: "cristin camilo jaramillo",
      image: imgWhite,
      cargo: "presidente proyectos fundación rotary",
    },
  ];

  const videos = [
    { url: "https://www.youtube.com/embed/e2JAlNjz8Eg" },
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  ];
  return (
    <div id="rotaract">
      <div
        className={`rotaract-banner ${indice === 0 ? "fondo-oscuro" : ""}`}
        style={{ backgroundImage: `url(${imagenesRotaract[indice]})` }}
      >
        {indice === 0 && (
          <div className="rotaract-banner-info">
            <img
              className="oculto"
              src={rotaractLogo}
              alt="rotaract logo"
              data-anim="slide-left"
            />
            <p className="oculto" data-anim="slide-right">
              Nuestro grupo Rotaract tiene como propósito ofrecer una
              oportunidad a las personas jóvenes, mayores de 18, para aumentar
              los conocimientos y condiciones que les ayuden en su desarrollo
              personal, y que a su vez los impulsen a buscar una solución para
              mejorar las necesidades físicas y sociales de nuestra comunidad,
              por medio de nuestras obras sociales, promoviendo también mejores
              relaciones entre todos los clubes y el generar vínculos con los
              pueblos de todo el mundo en un marco de amistad y servicio.
              Rotaract comparte con Rotary la filosofía de la conciencia y la
              fraternidad internacional, la solidaridad, la amistad con vocación
              y actitud de servicio, la ética en los negocios, profesiones y
              oficios, y el servicio -en contraste con la beneficencia- como el
              mejor camino para lograr la paz en el mundo.
            </p>
          </div>
        )}

        <div className="rotaract-carrusel-submenu">
          <div className="rotaract-botones-carrusel">
            <button onClick={anterior}>&#10094;</button>
            <button onClick={siguiente}>&#10095;</button>
          </div>
        </div>
        {indice >= 1 && (
          <img
            className="logo-rotaract"
            src={rotaractLogo}
            alt="logo rotaract"
          />
        )}
      </div>
      <div className="junta-directiva-seccion">
        <div className="junta-directiva-contenedor">
          <h2 className="junta-directiva-titulo">Nuestra junta directiva</h2>
          <div className="junta-directiva-items">
            {juntaDirectiva.map((item, index) => (
              <div
                className="junta-directiva-item oculto"
                data-anim="fade-up"
                style={{ transitionDelay: `${index * 0.2}s` }}
                key={index}
              >
                <p className="junta-directiva-nombre">{item.nombre}</p>
                <div className="junta-directiva-imagen-contenedor">
                  <div className="junta-directiva-imagen-wrapper">
                    <img
                      src={item.image}
                      alt={item.nombre}
                      className="junta-directiva-imagen"
                    />
                  </div>
                </div>
                <p className="junta-directiva-cargo">{item.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="galeria-video">
        <div className="contenedor-videos">
          <div className="galeria-descripcion oculto" data-anim="slide-left">
            <h2>Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quam
              repellat quis, commodi fuga soluta optio natus culpa nihil vitae
              amet, tenetur in minus harum debitis ipsam rerum nisi numquam.
            </p>
          </div>
          <div className="video-items">
            <div className="video-item oculto" data-anim="slide-right">
              <iframe
                className="video-player"
                width="560"
                height="315"
                src={videos[indiceVideo].url}
                title={`Video ${indiceVideo + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="button-galeria oculto" data-anim="slide-right">
              <button onClick={siguienteVideo}>&#10094;</button>
              <button onClick={anteriorVideo}>&#10095;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
