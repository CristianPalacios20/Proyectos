import iconDoc from "../assets/icons/iconDoc.png";

import "../styles/documentos.css";

export default function Documentos() {
  const documentos = [
    { icono: iconDoc, nombre: "Balance financiero", fecha: "2109-22" },
    { icono: iconDoc, nombre: "Balance financiero", fecha: "2109-22" },
    { icono: iconDoc, nombre: "Balance financiero", fecha: "2109-22" },
  ];
  return (
    <section className="section" id="documentos">
      {documentos.map((item, index) => (
        <div key={index} className="tarjeta-documento">
          <img src={item.icono} alt={item.nombre} className="icono-documento" />
          <div key={index}>
            <h2 className="titulo-documento">{item.nombre}</h2>
            <p className="fecha-documento">{item.fecha}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
