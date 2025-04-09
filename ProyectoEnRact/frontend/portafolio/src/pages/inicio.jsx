import React from "react";
import download from "../assets/Download.svg";
import iconHTML from "../assets/icon-html.svg";
import iconCSS from "../assets/icon-css.svg";
import iconJS from "../assets/icon-js.svg";
import iconReact from "../assets/icon-react.svg";
import iconPhp from "../assets/icon-php.svg";
import iconMysql from "../assets/icon-mysql.svg";
import "../Styles/inicio.css";

export default function inicio() {
  return (
    <section id="inicio">
      <div className="contenido">
        <h1>Bienvenido a mi portafolio.</h1>
        <div>
          Soy Desarrollador Frontend enfocado en crear experiencias web
          modernas, rápidas y accesibles.
        </div>
        <div className="btn">
          <button>Leer más</button>
          <button>
            Descargar Cv
            <img src={download} alt="descargar" />
          </button>
        </div>
      </div>
      <div className="habilidades">
        <h2>My Skills</h2>
        <div className="items">
          <img src={iconHTML}/>
          <img src={iconCSS}/>
          <img src={iconJS}/>
          <img src={iconReact}/>
          <img src={iconPhp}/>
          <img src={iconMysql}/>
        </div>
      </div>
    </section>
  );
}
