import { NavLink } from "react-router-dom";

import useAnimacionScroll from "../hooks/useAnimacionScroll";

import img from "../assets/img/Frame39.png";

import imgDonar from "../assets/img/imgDonar.jpg";
import botonPse from "../assets/img/botonpse.png";
import manosNinos from "../assets/img/mano-de-ninos.jpg";
import ropaBebe from "../assets/img/ropa-de-bebe.jpg";
import iconCall from "../assets/icons/iconCall.png";

import "../styles/donar.css";

export default function Donar() {
  useAnimacionScroll(".oculto");
  const aporte = [
    {
      image: img,
      descripcion:
        "Más niñas y niños como Nina, recibirán una educación y cuidado de calidad",
      boton: "Conoce más",
    },
    {
      image: img,
      descripcion:
        "Más cuidadoras como Doña Dora, ofrecerán un servicio de cuidado de alta calidad",
      boton: "Conoce más",
    },
    {
      image: img,
      descripcion:
        "Más ambientes alrededor de los niños y niñas serán seguros y estimulantes",
      boton: "Conoce más",
    },
  ];
  return (
    <div id="seccion-donaciones">
      <div className="donacion-contenido-secundario">
        <div
          className="donacion-banner oculto"
          style={{ backgroundImage: `url(${imgDonar})` }}
        >
          <div className="contenedor-frase">
            <p className="donacion-frase oculto" data-anim="slide-down">
              Con tu ayuda, transformamos sueños en oportunidades.
            </p>

            <div className="donacion-botones">
              <button
                className="btn-donacion oculto"
                data-anim="slide-left"
                style={{ transitionDelay: "0ms" }}
              >
                Aporta en dinero
              </button>
              <button
                className="btn-donacion oculto"
                data-anim="slide-left"
                style={{ transitionDelay: "150ms" }}
              >
                Aporta en voluntariado
              </button>
              <button
                className="btn-donacion oculto"
                data-anim="slide-left"
                style={{ transitionDelay: "300ms" }}
              >
                Aporta lo que no usas
              </button>
            </div>

            <p
              className="donacion-mensaje-final oculto"
              data-anim="slide-up"
              style={{ transitionDelay: "500ms" }}
            >
              Hoy puedes escribir un nuevo capítulo en la vida de alguien como
              Sofía.
            </p>
          </div>
        </div>

        <div className="donacion-razones">
          <h3
            className="donacion-titulo "
            data-anim="slide-up"
            style={{ transitionDelay: "0ms" }}
          >
            ¿Por qué aportar a Rotary?
          </h3>

          <p
            className="donacion-subtitulo oculto"
            data-anim="slide-up"
            style={{ transitionDelay: "200ms" }}
          >
            Con tu aporte:
          </p>

          <div className="donacion-lista">
            {aporte.map((item, index) => (
              <div
                className="donacion-item oculto"
                data-anim="fade-in"
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                key={index}
              >
                <img src={item.image} alt="" className="donacion-icono" />
                <p className="donacion-descripcion">{item.descripcion}</p>
                <button className="btn-conocer-mas">{item.boton}</button>
              </div>
            ))}
          </div>
        </div>

        <div className="donacion-llamado">
          <div className="donacion-llamado-contenido">
            <h2
              className="donacion-llamado-titulo oculto"
              data-anim="slide-up"
              style={{ transitionDelay: "0ms" }}
            >
              Aporta con tu donación
            </h2>

            <p
              className="donacion-llamado-texto oculto"
              data-anim="slide-up"
              style={{ transitionDelay: "200ms" }}
            >
              Soñamos en grande, pero avanzamos con pasos firmes y
              transformadores.
            </p>

            <p
              className="donacion-llamado-texto oculto"
              data-anim="slide-up"
              style={{ transitionDelay: "400ms" }}
            >
              Elige la meta que quieres ayudarnos a alcanzar en 2025. Tu aporte
              puede marcar la diferencia.
            </p>

            <NavLink
              className="donacion-boton-enlace oculto"
              data-anim="slide-up"
              style={{ transitionDelay: "600ms" }}
            >
              <img
                src={botonPse}
                alt="Botón PSE"
                className="donacion-boton-pse"
              />
            </NavLink>
          </div>
        </div>

        <div className="donacion-formas-extra">
          <div className="donacion-formas-header">
            <p className="donacion-formas-titulo">
              Todos los aportes son valiosos
            </p>
            <p className="donacion-formas-subtitulo">
              Acá encontrarás otras formas de contribuir
            </p>
          </div>

          <div className="donacion-formas-contenido">
            <div
              className="donacion-voluntariado oculto"
              data-anim="slide-left"
              style={{ transitionDelay: "0ms" }}
            >
              <p className="donacion-voluntariado-titulo">
                Aporta involucrándote directamente
              </p>
              <p className="donacion-voluntariado-texto">
                Contáctanos para organizar una jornada de voluntariado que se
                ajuste a tus necesidades.
              </p>
              <button className="donacion-btn-contacto">
                <img
                  src={iconCall}
                  alt=""
                  className="donacion-icono-contacto"
                />
                <p>Contáctanos</p>
              </button>
            </div>

            <div
              className="donacion-imagen-fondo oculto"
              data-anim="slide-right"
              style={{
                backgroundImage: `url(${manosNinos})`,
                transitionDelay: "300ms",
              }}
            >
              <p className="donacion-imagen-texto">Rotary</p>
            </div>
          </div>
          <div
            className="donacion-bloque-secundario oculto"
            data-anim="fade-in"
            style={{
              backgroundImage: `url(${ropaBebe})`,
              transitionDelay: "0ms",
            }}
          >
            <div className="donacion-bloque-contenido">
              <p
                className="donacion-bloque-titulo oculto"
                data-anim="slide-up"
                style={{ transitionDelay: "200ms" }}
              >
                Aporta donando lo que ya no usas
              </p>

              <button
                className="donacion-boton-principal oculto"
                data-anim="slide-up"
                style={{ transitionDelay: "400ms" }}
              >
                <img src={iconCall} alt="" className="donacion-boton-icono" />
                <p>Contáctanos</p>
              </button>

              <button
                className="donacion-boton-secundario oculto"
                data-anim="slide-up"
                style={{ transitionDelay: "600ms" }}
              >
                <p>Conoce más</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
