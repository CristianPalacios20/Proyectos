import { NavLink } from "react-router-dom";
import useAnimacionScroll from "../hooks/useAnimacionScroll";

import iconDoc from "../assets/icons/iconDoc.png";
import imgDocs from "../assets/img/imgDocs.jpg";

import "../styles/documentos.css";

export default function Documentos() {
  useAnimacionScroll(".oculto");
  const documentos = [
    {
      icono: iconDoc,
      titulo: "sobre royary",
      documentos: [
        "Documento#1",
        "Documento#2",
        "Documento#3",
        "Documento#4",
        "Documento#5",
      ],
      claseIcon: "",
    },
    {
      icono: iconDoc,
      titulo: "sobre primera infancia",
      documentos: [
        "Documento#1",
        "Documento#2",
        "Documento#3",
        "Documento#4",
        "Documento#5",
      ],
      claseIcon: "",
    },
    {
      icono: iconDoc,
      titulo: "sobre nuestras sedes",
      documentos: [
        "Documento#1",
        "Documento#2",
        "Documento#3",
        "Documento#4",
        "Documento#5",
      ],
      claseIcon: "",
    },
  ];
  return (
    <div id="documentos">
      <div
        className="banner-documentos"
        style={{ backgroundImage: `url(${imgDocs})` }}
      >
        <p>documentos</p>
      </div>
      <div className="documentos-seccion">
        {documentos.map((item, index) => (
          <div
            key={index}
            className="tarjeta-documento oculto"
            data-anim="fade-up"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div
              className={`icono-documento-contenedor ${
                item.titulo === "sobre royary"
                  ? "sobre-royary"
                  : item.titulo === "sobre primera infancia"
                  ? "sobre-primera-infancia"
                  : item.titulo === "sobre nuestras sedes"
                  ? "sobre-nuestras-sedes"
                  : ""
              }`}
            >
              <img
                src={item.icono}
                alt={item.titulo}
                className="icono-documento"
              />
            </div>
            <div>
              <h2
                className={`titulo-documento ${
                  item.titulo === "sobre royary"
                    ? "sobre-royary-h2"
                    : item.titulo === "sobre primera infancia"
                    ? "sobre-primera-infancia-h2"
                    : item.titulo === "sobre nuestras sedes"
                    ? "sobre-nuestras-sedes-h2"
                    : ""
                }`}
              >
                {item.titulo}
              </h2>
              <ul className="lista-documentos">
                {item.documentos.map((doc, idx) => (
                  <li key={idx}>
                    <NavLink>-{doc}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
