import iconDoc from "../assets/icons/iconDoc.png";
import imgDocs from "../assets/img/imgDocs.jpg";

import "../styles/documentos.css";

export default function Documentos() {
  const documentos = [
    {
      icono: iconDoc,
      nombre: "sobre royary",
      documentos: ["#1", "#2", "#3", "#4", "#5"],
      claseIcon: ""
    },
    {
      icono: iconDoc,
      nombre: "sobre primera infancia",
      documentos: ["#1", "#2", "#3", "#4", "#5"],
      claseIcon: ""
    },
    {
      icono: iconDoc,
      nombre: "sobre nuestros sedes",
      documentos: ["#1", "#2", "#3", "#4", "#5"],
      claseIcon: ""
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
          <div key={index} className="tarjeta-documento">
            <div className="icono-documento-contenedor">
              <img
                src={item.icono}
                alt={item.nombre}
                className="icono-documento"
              />
            </div>
            <div>
              <h2 className="titulo-documento">{item.nombre}</h2>
              <ul className="lista-documentos">
                {item.documentos.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
