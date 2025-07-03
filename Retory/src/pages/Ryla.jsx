import { useState } from "react";

import useAnimacionScroll from "../hooks/useAnimacionScroll";

import ryla1 from "../assets/img/ryla1.jpg";
import ryla2 from "../assets/img/ryla2.jpg";
import ryla3 from "../assets/img/ryla3.jpg";
import ryla4 from "../assets/img/ryla4.jpg";
import ryla5 from "../assets/img/ryla5.jpg";
import RylaLogo from "../assets/img/RylaLogo.png";

import "../styles/ryla.css";

export default function Ryla() {
  useAnimacionScroll(".oculto");
  const [indice, setIndice] = useState(0);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenesRyla.length);
  };
  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenesRyla.length) % imagenesRyla.length);
  };

  const imagenesRyla = [ryla5, ryla1, ryla2, ryla3, ryla4];
  const video = ["https://www.youtube.com/embed/e2JAlNjz8Eg"];

  return (
    <div id="ryla">
      <div
        className={`ryla-banner ${indice === 0 ? "fondo-oscuro" : ""}`}
        style={{ backgroundImage: `url(${imagenesRyla[indice]})` }}
      >
        {indice === 0 && (
          <div className="ryla-banner-info">
            <img
              className="oculto"
              src={RylaLogo}
              alt="logo Ryla"
              data-anim="slide-left"
            />
            <p className="oculto" data-anim="slide-right">
              Es más conocido como RYLA, es un seminario que se realiza
              anualmente. Se enfoca en la formación de adolescentes y adultos
              para fomentar y reconocer las cualidades de liderazgo, con énfasis
              en la responsabilidad social, perspectiva internacional y
              superación personal. Se realizan actividades formativas de forma
              creativa que cautiven un público joven y los motive a ser
              partícipes de la transformación social. El tema que se trabajó en
              la décimo sexta versión del seminario fue la diversidad, bajo la
              consigna “Diversos somos, Un espacio para explorar un universo de
              posibilidades”.
            </p>
          </div>
        )}
        <div className="ryla-carrusel-submenu">
          <div className="ryla-botones-carrusel">
            <button onClick={anterior}>&#10094;</button>
            <button onClick={siguiente}>&#10095;</button>
          </div>
        </div>
        {indice >= 1 && (
          <img className="ryla-logo" src={RylaLogo} alt="logo interact" />
        )}
      </div>

      <div className="ryla-galeria-video">
        <div className="ryla-galeria-contenedor">
          <div className="ryla-galeria-descripcion oculto" data-anim="slide-left">
            <h2>Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quam
              repellat quis, commodi fuga soluta optio natus culpa nihil vitae
              amet, tenetur in minus harum debitis ipsam rerum nisi numquam.
            </p>
          </div>

          <div className="ryla-video-items">
            <div className="ryla-video-item oculto" data-anim="slide-right">
              <iframe
                className="ryla-video-player"
                width="560"
                height="315"
                src={video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
