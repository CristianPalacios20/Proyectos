import { useEffect, useRef } from "react";

import Carrusel from "../components/Carrusel";
import CarruselProgramas from "../components/CarruselProgramas";
import CarruselEventos from "../components/CarruselEventos";
import CarruselNoticias from "../components/CarruselNoticias";
import CarruselEquipo from "../components/CarruselEquipo";

import "../styles/inicio.css";

import imagen1 from "../assets/img/imagen1.png";
import image3 from "../assets/img/Frame39.png";
import frame from "../assets/img/Frame36.png";
import iconConocerMas from "../assets/icons/iconConocerMas.png";

export default function Inicio() {
  const carruselRef = useRef(null);
  const intervaloRef = useRef(null);

  const handleNext = () => {
    const list = carruselRef.current;
    const items = list.querySelectorAll(".item");
    if (items.length > 0) {
      list.appendChild(items[0]);
    }
  };
  const handlePrev = () => {
    const list = carruselRef.current;
    const items = list.querySelectorAll(".item");
    if (items.length > 0) {
      list.prepend(items[items.length - 1]);
    }
  };

  const iniciarAutoNext = () => {
    if (!intervaloRef.current) {
      intervaloRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
  };

  const detenerAutoNext = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
  };

  useEffect(() => {
    iniciarAutoNext();
    return detenerAutoNext;
  }, []);

  return (
    <>
      <section
        className="carrusel"
        onMouseEnter={detenerAutoNext}
        onMouseLeave={iniciarAutoNext}
      >
        <div className="list" ref={carruselRef}>
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${imagen1})` }}
            >
              <div className="content">
                <h1>TITLE</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque necessitatibus voluptates inventore suscipit neque
                  asperiores nobis nulla illum, officiis repudiandae, ipsum
                  porro nostrum quibusdam commodi, assumenda cum hic animi
                  ipsam.
                </p>
                <div className="btn">
                  <button>Ver más</button>
                  <button>Escríbenos</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons next, prev */}
        <div className="arrows">
          <button className="prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </section>
      <section className="section">
        <img src={image3} alt="frame 39" />
        <div className="contenido-seccion">
          <h2>Título</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            unde illo minus. Nostrum laudantium dolores ab quaerat quis, amet
            repellendus dolorum impedit aliquid unde sit inventore magni, optio
            iste magnam. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Mollitia unde illo minus. Nostrum laudantium dolores ab
            quaerat quis, amet repellendus dolorum impedit aliquid unde sit
            inventore magni, optio iste magnam.
          </p>
          <button>Leer más</button>
        </div>
      </section>
      <section className="section">
        <h2>TÍTULO</h2>
        <p className="des">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          unde illo minus. Nostrum laudantium dolores ab quaerat quis, amet
          repellendus dolorum impedit aliquid unde sit inventore magni, optio
          iste magnam.
        </p>
        <img className="image3" src={image3} alt="" />
        <div className="beneficios">
          <div>
            <img src="" alt="diamante" />
            <h3>Beneficio 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
            <img src="" alt="diamante" />
            <h3>Beneficio 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div>
            <img src="" alt="diamante" />
            <h3>Beneficio 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
      <section className="section" id="juventudRotatoria">
        <div className="content-juventudRotatoria">
          <h2>Juventud Rotatoria</h2>
          <h3>Nos matenemos jóvenes</h3>
        </div>
        <Carrusel />
      </section>
      <section className="section" id="programas">
        <div className="content-titles">
          <h2>Programas</h2>
          <h3>sueños hechos realidad</h3>
        </div>
        <div className="content-programas">
          <CarruselProgramas
            imagenes={[
              imagen1,
              imagen1,
              imagen1,
              imagen1,
              imagen1,
              image3,
              image3,
            ]}
          />
        </div>
      </section>
      <section
        className="section"
        id="eventos"
        style={{ backgroundImage: `url(${frame})` }}
      >
        <div className="carrusel-eventos">
          <CarruselEventos
            imagenes={[
              imagen1,
              imagen1,
              imagen1,
              imagen1,
              imagen1,
              image3,
              image3,
            ]}
          />
        </div>
        <div className="des-eventos">
          <p className="des1">nos encanta hacer que sucedan</p>
          <h2>Eventos</h2>
          <p className="des">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            tempora explicabo quia magnam labore minus reprehenderit eos
            quaerat. Neque aspernatur, odio cumque nemo id perspiciatis! Eius
            facilis et tempora dolorum excepturi recusandae dolore
            necessitatibus quisquam totam. Similique dicta expedita sequi! Ullam
            tempora explicabo quia magnam labore minus reprehenderit eos
            quaerat. Neque aspernatur, odio cumque nemo id perspiciatis! Eius
            facilis et tempora dolorum excepturi recusandae dolore
            necessitatibus quisquam totam. Similique dicta expedita sequi!
          </p>
          <button>
            <img src={iconConocerMas} alt="icon evento" />
            <p>conoce más</p>
          </button>
        </div>
      </section>
      <section className="section" id="noticias">
        <div className="noticias-header">
          <h2>Noticias y Novedades</h2>
          <p>lo último de nuestro blog</p>
        </div>
        <div className="fondoBlue"></div>
        <div id="carruselNoticias">
          <CarruselNoticias
            imagenes={[
              image3,
              image3,
              image3,
              image3,
              image3,
              image3,
              image3,
              image3,
              image3,
              image3,
            ]}
          />
        </div>
      </section>
      <section className="section" id="nuestro-equipo">
        <div className="equipo-header">
          <h2>Nuestro Equipo</h2>
          <p>los que convierten ideas en realidad</p>
        </div>
        <div className="carrusel-equipo">
          <CarruselEquipo />
        </div>
      </section>
    </>
  );
}
