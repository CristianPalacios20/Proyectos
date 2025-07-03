import { useState } from "react";
import useAnimacionScroll from "../hooks/useAnimacionScroll";

import Interact1 from "../assets/img/interact1.jpg";
import interact2 from "../assets/img/interact2.jpg";
import interact3 from "../assets/img/interact3.jpg";
import interact4 from "../assets/img/interact4.jpg";
import interact5 from "../assets/img/interact5.jpg";
import interactLogo from "../assets/img/interact-logo.png";

import "../styles/interact.css";

export default function Interact() {
  useAnimacionScroll(".oculto");
  const [indice, setIndice] = useState(0);

  const imagenesInteract = [
    interact5,
    Interact1,
    interact2,
    interact3,
    interact4,
  ];

  const video = ["https://www.youtube.com/embed/e2JAlNjz8Eg"];

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenesInteract.length);
  };
  const anterior = () => {
    setIndice(
      (prev) => (prev - 1 + imagenesInteract.length) % imagenesInteract.length
    );
  };

  return (
    <div id="interact">
      <div
        className={`interact-banner ${indice === 0 ? "fondo-oscuro" : ""}`}
        style={{ backgroundImage: `url(${imagenesInteract[indice]})` }}
        data-anime="slide-up"
      >
        {indice === 0 && (
          <div className="interact-banner-info">
            <img
              className="oculto"
              src={interactLogo}
              alt="logo interact"
              data-anim="slide-left"
            />
            <p
              className="oculto"
              data-anim="slide-left"
              style={{ transitionDelay: "450ms" }}
            >
              Somos un club patrocinado por Rotary International, que invita a
              jóvenes entre los 12 y los 18 años a que fortalezcan sus
              capacidades de liderazgo, siempre trabajando en pro de la
              comunidad. La amistad, el compañerismo y las ansias de ser parte
              del cambio, son nuestro motor para realizar proyectos que impacten
              a las comunidades que más lo necesitan. Los socios o interactianos
              participan en actividades de servicio mientras se divierten y
              adquieren una perspectiva internacional. Los clubes Interact
              organizan todos los años al menos dos proyectos de servicio.
            </p>
          </div>
        )}

        <div className="interact-carrusel-submenu">
          <div className="interact-botones-carrusel">
            <button onClick={anterior}>&#10094;</button>
            <button onClick={siguiente}>&#10095;</button>
          </div>
        </div>
        {indice >= 1 && (
          <img
            className="interact-logo"
            src={interactLogo}
            alt="logo interact"
          />
        )}
      </div>

      <div className="interact-galeria-video">
        <div className="interact-galeria-contenedor">
          <div
            className="interact-galeria-descripcion oculto"
            data-anim="slide-left"
          >
            <h2>Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quam
              repellat quis, commodi fuga soluta optio natus culpa nihil vitae
              amet, tenetur in minus harum debitis ipsam rerum nisi numquam.
            </p>
          </div>

          <div className="interact-video-items oculto" data-anim="slide-right">
            <div className="interact-video-item">
              <iframe
                className="interact-video-player"
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
