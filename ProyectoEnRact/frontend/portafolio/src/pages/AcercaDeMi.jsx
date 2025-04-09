import React from "react";
import sobremi from "../assets/sobremi.svg";
import iconGraduacion from "../assets/icon-graduacion.svg";
import "../Styles/acercaDemi.css";

export default function About() {
  return (
    <section id="acerca-de-mi">
      <img className="imgAcercaDeMi" src={sobremi} alt="acerca de mí" />
      <div className="contenedor-des">
        <div className="des">
          <h2>Acerca de mí</h2>
          ¡Hey! Soy Cristian Stiven Palacios Perea, un explorador del mundo
          digital que disfruta transformar ideas en experiencias interactivas.
          Me apasiona construir interfaces web que no solo se ven bien, sino que
          también se sienten bien. <br /> Trabajo con tecnologías como HTML,
          CSS, JavaScript y React, y me encanta dar vida a cada proyecto con
          creatividad, detalle y buen diseño. Para mí, cada línea de código es
          como una pincelada en un lienzo digital. <br /> Curioso por
          naturaleza, autodidacta por convicción y creativo por defecto. Siempre
          estoy en busca de nuevos retos, aprendiendo herramientas nuevas y
          encontrando maneras de mejorar cada proyecto que toco. Fuera del
          código, me gusta explorar el diseño, planear ideas nuevas y seguir
          soñando con mi próximo gran proyecto.
        </div>
        <div class="contenedor-formacion">
          <h2 class="titulo-seccion">Formación.</h2>
          <div class="formacion-item">
            <div className="contenedorImg">
              <img class="formacion-img" src={iconGraduacion} alt="formación" />
            </div>
            <div class="formacion-info">
              <div>
                <h3 class="formacion-titulo">Desarrollo de software.</h3>
                <p>2024 - Actualmente.</p>
              </div>
              <p class="formacion-descripcion">
                Me encuentro estudiando Desarrollo de Software en el Instituto
                Tecnológico Metropolitano(ITM).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
