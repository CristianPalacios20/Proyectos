import React from "react";
import { useLogicaCarusel } from "../Hooks/useLogicaCarusel";
import parror1 from "../assets/parrot1.jpg";
import parror2 from "../assets/parrot2.jpg";
import "../Styles/portafolio.css";

export default function Projects() {
  const {
    listRef,
    carouselRef,
    runningTimeRef,
    showSlider,
    stopAutoNext,
    resumeAutonext,
  } = useLogicaCarusel();

  return (
    <section
      id="section-projects"
      onMouseOver={stopAutoNext}
      onMouseLeave={resumeAutonext}
    >
      <div className="projects" ref={carouselRef}>
        <div className="list" ref={listRef}>
          <div className="item" style={{ backgroundImage: `url(${parror1})` }}>
            <div className="contenedor">
              <div className="titulo">título1</div>
              <div className="nombre">nombre</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt ex libero dignissimos, quidem temporibus quasi minima
                dolore! Sit velit soluta aspernatur eos consectetur, tempore
                nihil incidunt commodi sequi, at possimus.
              </div>
              <div className="btn">
                <button>Ver</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parror2})` }}>
            <div className="contenedor">
              <div className="titulo">título2</div>
              <div className="nombre">nombre</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt ex libero dignissimos, quidem temporibus quasi minima
                dolore! Sit velit soluta aspernatur eos consectetur, tempore
                nihil incidunt commodi sequi, at possimus.
              </div>
              <div className="btn">
                <button>Ver</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parror1})` }}>
            <div className="contenedor">
              <div className="titulo">título3</div>
              <div className="nombre">nombre</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt ex libero dignissimos, quidem temporibus quasi minima
                dolore! Sit velit soluta aspernatur eos consectetur, tempore
                nihil incidunt commodi sequi, at possimus.
              </div>
              <div className="btn">
                <button>Ver</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parror2})` }}>
            <div className="contenedor">
              <div className="titulo">título4</div>
              <div className="nombre">nombre</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt ex libero dignissimos, quidem temporibus quasi minima
                dolore! Sit velit soluta aspernatur eos consectetur, tempore
                nihil incidunt commodi sequi, at possimus.
              </div>
              <div className="btn">
                <button>Ver</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parror1})` }}>
            <div className="contenedor">
              <div className="titulo">título5</div>
              <div className="nombre">nombre</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt ex libero dignissimos, quidem temporibus quasi minima
                dolore! Sit velit soluta aspernatur eos consectetur, tempore
                nihil incidunt commodi sequi, at possimus.
              </div>
              <div className="btn">
                <button>Ver</button>
                <button>Github</button>
              </div>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: `url(${parror2})` }}>
            <div className="contenedor">
              <div className="titulo">título6</div>
              <div className="nombre">nombre</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt ex libero dignissimos, quidem temporibus quasi minima
                dolore! Sit velit soluta aspernatur eos consectetur, tempore
                nihil incidunt commodi sequi, at possimus.
              </div>
              <div className="btn">
                <button>Ver</button>
                <button>Github</button>
              </div>
            </div>
          </div>
        </div>

        {/* <---- Contenedor de la linea de tiempo ---->*/}
        <div className="timeLine" ref={runningTimeRef}></div>

        {/* <---- Flechas ---->*/}
        <div className="arrows">
          <button className="prev" onClick={() => showSlider("prev")}>
            {"<"}
          </button>
          <button className="next" onClick={() => showSlider("next")}>
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}
