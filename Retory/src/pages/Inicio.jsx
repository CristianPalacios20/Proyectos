import { useEffect, useRef } from "react";

import Carrusel from "../components/Carrusel";
import CarruselEventos from "../components/CarruselEventos";
import CarruselNoticias from "../components/CarruselNoticias";
import useAnimacionScroll from "../hooks/useAnimacionScroll";

import imagen1 from "../assets/img/imagen1.png";
import inicio1 from "../assets/img/inicio1.jpg";
import inicio2 from "../assets/img/inicio2.jpg";
import inicio3 from "../assets/img/inicio3.jpg";
import inicio4 from "../assets/img/inicio4.jpg";
import inicio5 from "../assets/img/inicio5.jpg";
import inicio6 from "../assets/img/inicio6.jpg";
import inicio7 from "../assets/img/inicio7.jpg";
import inicio8 from "../assets/img/inicio8.jpg";
import inicio9 from "../assets/img/inicio9.jpg";
import inicio10 from "../assets/img/inicio10.jpg";
import inicio11 from "../assets/img/inicio11.jpg";
import inicio12 from "../assets/img/inicio12.jpg";
import inicio13 from "../assets/img/inicio13.jpg";
import inicio14 from "../assets/img/inicio14.jpg";
import inicio15 from "../assets/img/inicio15.jpg";
import inicio16 from "../assets/img/inicio16.jpg";
import inicio17 from "../assets/img/inicio17.jpg";
import inicio18 from "../assets/img/inicio18.jpg";
import inicio19 from "../assets/img/inicio19.jpg";
import inicio20 from "../assets/img/inicio20.jpg";
import programas1 from "../assets/img/programas1.jpg";
import eventos1 from "../assets/img/eventos1.jpg";
import eventos2 from "../assets/img/eventos2.jpg";
import eventos3 from "../assets/img/eventos3.jpg";
import eventos4 from "../assets/img/eventos4.jpg";
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

  const comprobarDispositivo = () => {
    const esMovil = window.innerWidth <= 768;
    if (esMovil) {
      detenerAutoNext();
    } else {
      iniciarAutoNext();
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

  const imagenesInicio = [
    imagen1,
    inicio1,
    inicio2,
    inicio3,
    inicio4,
    inicio5,
    inicio6,
    inicio7,
    inicio8,
    inicio9,
    inicio10,
    inicio11,
    inicio12,
    inicio13,
    inicio14,
    inicio15,
    inicio16,
    inicio17,
    inicio18,
    inicio19,
    inicio20,
  ];

  const imagenes = [
    { src: imagen1, des: "Atención prenatal" },
    { src: inicio1, des: "Sala cunas" },
    { src: inicio2, des: "Pre-Jardín" },
    { src: inicio2, des: "Jardín transición" },
    { src: inicio2, des: "Párvulos" },
    { src: inicio2, des: "Caminadores" },
    { src: inicio2, des: "Acompañamiento en tareas" },
  ];

  useAnimacionScroll(".oculto, .contenido-seccion-oculto");

  useEffect(() => {
    comprobarDispositivo();
    window.addEventListener("resize", comprobarDispositivo);
    return () => {
      window.removeEventListener("resize", comprobarDispositivo);
      detenerAutoNext();
    };
  }, []);

  return (
    <div id="inicio">
      <div
        className="carrusel"
        onMouseEnter={detenerAutoNext}
        onMouseLeave={iniciarAutoNext}
      >
        <div className="list" ref={carruselInicioRef}>
          {[...Array(21)].map((_, index) => (
            <div
              key={index}
              className={`item ${index === 1 ? "fondo-oscuro" : ""}`}
              style={{
                backgroundImage: `url(${imagenesInicio[index]})`,
              }}
            >
              {index === 1 && (
                <div className={`content`}>
                  <p className="nombre">Club Rotario Envigado</p>
                  <h1>¿Quiénes somos?</h1>
                  <p>
                    Desde los primeros pasos, en el Centro Educativo Club
                    Rotario Envigado acompañamos a cada niño con afecto, juego y
                    aprendizajes que fortalecen su desarrollo integral. Nuestro
                    propósito es brindarles un entorno seguro, alegre y lleno de
                    valores, donde puedan crecer, descubrir y soñar con un
                    futuro mejor
                  </p>
                  <div className="btn">
                    <button>Ver más</button>
                    <button>Escríbenos</button>
                  </div>
                </div>
              )}
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
      <div id="programass">
        <div className="content-titles">
          <h2>Programas</h2>
          <h3>sueños hechos realidad</h3>
        </div>
        <div className="contenedor-beneficios">
          <p className="des oculto" data-anim="fade">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            unde illo minus. Nostrum laudantium dolores ab quaerat quis, amet
            repellendus dolorum impedit aliquid unde sit inventore magni, optio
            iste magnam.
          </p>
          <img
            className="programasImg oculto"
            src={programas1}
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
        <div className="content-programas">
          <div className="carrusel-container2">
            <button className="arrow2 left2" onClick={() => scroll("left2")}>
              &#8249;
            </button>
            <div className="num1"></div>
            <div className="carrusel2" ref={carruselProgramasRef}>
              {imagenes.map((item, i) => (
                <div
                  className="carrusel-item2"
                  key={i}
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <div className="carrusel-item2-des">{item.des}</div>
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
      <div id="juventudRotatoria">
        <div className="content-juventudRotatoria">
          <h2>Juventud Rotatoria</h2>
          <h3>Nos matenemos jóvenes</h3>
        </div>
        <Carrusel />
      </div>
      <div id="eventos">
        <div className="banner-eventos">
          <div className="carrusel-eventos">
            <CarruselEventos
              imagenes={[
                {
                  src: eventos1,
                  titulo: "Trabajador Meritorio",
                  des: "Reconocimiento a quienes realizan una labor incansable y dedicada",
                },
                {
                  src: eventos2,
                  titulo: "Siembra de Arboles",
                  des: "Premium – Banner te ofrece un amplio rango de estilos y opciones con los que te enamorarás perdidamente",
                },
                {
                  src: eventos3,
                  titulo: "Bingo Rotario",
                  des: "Participa en nuestros eventos programados y pasa un rato divertido en buena compañía.",
                },
                {
                  src: eventos4,
                  titulo: "Bazar del Usado",
                  des: "Se realiza tradicionalmente cada año entre los meses de octubre o noviembre el cual dura 2 días.",
                },
              ]}
            />
          </div>
          <div className="des-eventos">
            <p className="des1">nos encanta hacer que sucedan</p>
            <h2>Eventos</h2>
            <p className="des">
              El club Rotario Envigado se enorgullece de llevar a cabo eventos
              anuales destinados a beneficiar a la comunidad. Cada año,
              organizamos diversas actividades con el firme propósito de
              contribuir al bienestar de nuestros ciudadanos. Estos eventos no
              solo son una manifestación de nuestro compromiso social, sino
              también una oportunidad para generar un impacto positivo en la
              comunidad que servimos. Estamos dedicados a crear iniciativas
              significativas que promueven el bien común y mejoran la calidad de
              vida de aquellos que nos rodean.
            </p>
            <button>
              <img src={iconConocerMas} alt="icon evento" />
              <p>conoce más</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
