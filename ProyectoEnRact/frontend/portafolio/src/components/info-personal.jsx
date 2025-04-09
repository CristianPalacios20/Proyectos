import React from "react";
import imgPresent from "../assets/imgPresentacion.png";
import email from "../assets/icon-gmail.svg";
import mobile from "../assets/mobile(1).svg";
import linkedIn from "../assets/linkedin(1).svg";
import github from "../assets/github(1).svg";
import "../Styles/infoPersonal.css";

export default function InfoPersonal() {
  return (
    <section id="informacion-personal">
      <div className="presentacion-principal">
        <div className="contenedor-imagen">
          <img src={imgPresent} alt="foto de perfil" />
        </div>
        <p className="nombre">Cristian Palacios</p>
        <p className="rol">Desarrollador FrontEnd</p>
      </div>
      <span className="seprarador"></span>
      <div className="contacto-contenedor">
        <div className="contacto-item">
          <div className="icono">
            <img src={email} alt="email" />
          </div>
          <div className="contacto-detalle">
            <p>email</p>
            <p>palaciosstiven208@gmail.com</p>
          </div>
        </div>
        <div className="contacto-item">
          <div className="icono">
            <img src={mobile} alt="email" />
          </div>
          <div className="contacto-detalle">
            <p>teléfono</p>
            <p>+(54) 3126373606</p>
          </div>
        </div>
        <div className="contacto-item">
          <div className="icono">
            <img src={linkedIn} alt="email" />
          </div>
          <div className="contacto-detalle">
            <p>linkeInd</p>
            <p>linkedin.com/in/cristian-palacios-273858278</p>
          </div>
        </div>
        <div className="contacto-item">
          <div className="icono">
            <img src={github} alt="email" />
          </div>
          <div className="contacto-detalle">
            <p>github</p>
            <p>https://github.com/CristianPalacios20</p>
          </div>
        </div>
      </div>
    </section>
  );
}
