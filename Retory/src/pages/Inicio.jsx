import { useEffect, useRef } from "react";

import Carrusel from "../components/Carrusel";
import CarruselEventos from "../components/CarruselEventos";
import CarruselNoticias from "../components/CarruselNoticias";
import useAnimacionScroll from "../hooks/useAnimacionScroll";

import imagen1 from "../assets/img/imagen1.png";
import image3 from "../assets/img/Frame39.png";
import iconConocerMas from "../assets/icons/iconConocerMas.png";

import "../styles/inicio.css";

export default function Inicio() {
  const carruselInicioRef = useRef(null);
  const carruselProgramasRef = useRef(null);
  const intervaloRef = useRef(null);

  const handleNext = () => {
    const list = carruselInicioRef.current;
    const items = list.querySelectorAll(".item");
    if (items.length > 0) {
      list.appendChild(items[0]);
    }
  };
  const handlePrev = () => {
    const list = carruselInicioRef.current;
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

  const scroll = (direction) => {
    const contenedor = carruselProgramasRef.current;
    if (direction === "left2") {
      contenedor.scrollLeft -= 300;
    } else {
      contenedor.scrollLeft += 300;
    }
  };

  const imagenes = [
    imagen1,
    imagen1,
    imagen1,
    imagen1,
    imagen1,
    imagen1,
    imagen1,
    imagen1,
  ];

  useAnimacionScroll(".oculto, .contenido-seccion-oculto");

  useEffect(() => {
    iniciarAutoNext();
    return detenerAutoNext;
  }, []);

  return (
    <div id="inicio">
      <div
        className="carrusel"
        onMouseEnter={detenerAutoNext}
        onMouseLeave={iniciarAutoNext}
      >
        <div className="list" ref={carruselInicioRef}>
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
      </div>
      <div className="acerca-de-club-rotary">
        <img
          className="oculto"
          src={image3}
          alt="frame 39 "
          data-anim="slide-left"
        />
        <div className="contenido-seccion">
          <h2 className="oculto" data-anim="slide-right-h2">
            Título
          </h2>
          <p className="oculto" data-anim="slide-right-p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            unde illo minus. Nostrum laudantium dolores ab quaerat quis, amet
            repellendus dolorum impedit aliquid unde sit inventore magni, optio
            iste magnam. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Mollitia unde illo minus. Nostrum laudantium dolores ab
            quaerat quis, amet repellendus dolorum impedit aliquid unde sit
            inventore magni, optio iste magnam.
          </p>
          <button className="oculto" data-anim="slide-right-buttom">
            Leer más
          </button>
        </div>
      </div>
      <div className="contenedor-beneficios">
        <h2 className="oculto" data-anim="slide-up">
          TÍTULO
        </h2>

        <p className="des oculto" data-anim="fade">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          unde illo minus. Nostrum laudantium dolores ab quaerat quis, amet
          repellendus dolorum impedit aliquid unde sit inventore magni, optio
          iste magnam.
        </p>

        <img
          className="image3 oculto"
          src={image3}
          alt="decorativo"
          data-anim="zoom-in"
        />

        <div className="beneficios">
          <div className="oculto" data-anim="slide-left">
            <img src="img" alt="diamante" />
            <h3>Beneficio 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="oculto" data-anim="zoom-in">
            <img src="img" alt="diamante" />
            <h3>Beneficio 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="oculto" data-anim="slide-right">
            <img src="img" alt="diamante" />
            <h3>Beneficio 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>

      <div id="juventudRotatoria">
        <div className="content-juventudRotatoria">
          <h2>Juventud Rotatoria</h2>
          <h3>Nos matenemos jóvenes</h3>
        </div>
        <Carrusel />
      </div>
      <div id="programass">
        <div className="content-titles">
          <h2>Programas</h2>
          <h3>sueños hechos realidad</h3>
        </div>
        <div className="content-programas">
          <div className="carrusel-container2">
            <button className="arrow2 left2" onClick={() => scroll("left2")}>
              &#8249;
            </button>
            <div className="num1"></div>
            <div className="carrusel2" ref={carruselProgramasRef}>
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
        </div>
      </div>
      {/* style={{ backgroundImage: `url(${frame})` }} */}
      <div id="eventos">
        <div className="banner-eventos">
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
              necessitatibus quisquam totam. Similique dicta expedita sequi!
              Ullam tempora explicabo quia magnam labore minus reprehenderit eos
              quaerat. Neque aspernatur, odio cumque nemo id perspiciatis! Eius
              facilis et tempora dolorum excepturi recusandae dolore
              necessitatibus quisquam totam. Similique dicta expedita sequi!
            </p>
            <button>
              <img src={iconConocerMas} alt="icon evento" />
              <p>conoce más</p>
            </button>
          </div>
        </div>
        {/* <div className="conetendor-vector2" style={{backgroundImage: `url(${vector2})`}}>
          <img className="vector2"  alt="" />
        </div> */}
      </div>
      <div className="section" id="noticias">
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
      </div>
    </div>
  );
}
