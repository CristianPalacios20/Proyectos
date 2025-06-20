import medalla from "../assets/img/medalla.png";
import orden from "../assets/img/orden.png";
import condecoracion from "../assets/img/condecoracion.png";

import "../styles/carruselDistinciones.css";

const distinciones = [
  {
    icono: medalla,
    titulo: "MEDALLA ALCALDÍA DE MEDELLÍN, CATEGORÍA ORO",
    descripcion:
      "(Decreto 0359 del 23 de febrero del 2004) Otorgada por la Alcaldía de Medellín",
  },
  {
    icono: medalla,
    titulo: "MEDALLA AL MÉRITO CIUDAD DE ENVIGADO",
    descripcion:
      "(Resolución 2180 del 15 de julio del 2004) Otorgada por la Alcaldía de Envigado.",
  },
  {
    icono: medalla,
    titulo: "MEDALLA AL MÉRITO CIUDAD DE ENVIGADO",
    descripcion:
      "(Resolución 1341 del 23 de marzo del 2017) Otorgada por la Alcaldía de Envigado.",
  },
  {
    icono: orden,
    titulo: "ORDEN AL MÉRITO CÍVICO JOSÉ FÉLIX DE RESTREPO",
    descripcion:
      "(Del 23 de agosto de 2016) Otorgada por la Sociedad de Mejoras Públicas de Envigado",
  },
  {
    icono: orden,
    titulo:
      "ORDEN AL MÉRITO CÍVICO Y EMPRESARIAL MARISCAL JORGE ROBLEDO, CATEGORÍA ORO",
    descripcion:
      "(Resolución 054 del 24 de abril del 2007) Otorgado por la Asamblea Departamental de Antioquia.",
  },
  {
    icono: medalla,
    titulo: "MEDALLA AL MÉRITO CIUDAD ENVIGADO, CATEGORÍA ALCALDÍA",
    descripcion:
      "(Resolución 2019 del 28 de marzo del 2017) Otorgada por la Alcaldía de Envigado",
  },
  {
    icono: condecoracion,
    titulo: "CONDECORACIÓN ESCUDO DEL MUNICIPIO DE ENVIGADO, CATEGORÍA PLATA",
    descripcion:
      "(Resolución 059 del 14 de julio de 2017) Otorgada por el Concejo Municipal de Envigado.",
  },
  {
    icono: condecoracion,
    titulo: "MENCIÓN DE ROTARY 2022-2023",
    descripcion:
      "Otorgada por Rotary International, por ayudar en la vida de personas de todo el mundo.",
  },
];

export default function CarruselDistinciones() {
  return (
    <div className="carrusel-distinciones">
      <div className="carrusel-track">
        {[...distinciones, ...distinciones].map((item, index) => (
          <div className="item-distincion" key={index}>
            <img className="icono" src={item.icono} />
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
