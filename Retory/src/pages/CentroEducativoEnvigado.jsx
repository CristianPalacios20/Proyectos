import useAnimacionScroll from "../hooks/useAnimacionScroll";

import centroImg from "../assets/img/centroEnvigadoImg.jpg";
import iconCerebro from "../assets/icons/iconCerebro.png";
import iconPincel from "../assets/icons/iconPincel.png";
import iconChil from "../assets/icons/iconChild.png";
import iconCubiertos from "../assets/icons/iconCubiertos.png";

import "../styles/CentroEducativoEnvigado.css";

export default function CentroEducativoEnvigado() {
  useAnimacionScroll(".oculto");
  const contenidoCentro = [
    {
      titulo: "Objetivo general",
      descripcion:
        "Favorecer el desarrollo integral de los niños y las niñas a través de la formación en valores y el trabajo lúdico, pedagógico, recreativo, nutricional y social que conlleve a una adecuada socialización con sus pares y el medio circundante, fortaleciendo así, comportamientos, capacidades, habilidades, destrezas, actitudes y aptitudes.",
      img: "",
    },
    {
      titulo: "Misión",
      descripcion:
        "El Centro Educativo Rotario Envigado tiene como misión atender a nivel formativo, educativo, social, nutricional, psicológico y lúdico a niños y niñas del municipio; enriqueciendo la calidad de vida familiar, contribuyendo directamente al fortalecimiento de sus habilidades para la vida que se proyectan en la comunidad.",
      img: "",
    },
    {
      titulo: "Visión",
      descripcion:
        "Para el 2027 seremos una institución líder en la atención integral a la primera infancia del Municipio, propiciando un ambiente armónico que proyecte acciones que favorezcan a la comunidad.",
      img: "",
    },
  ];

  const perfilNinos = [
    {
      image: iconCerebro,
      descripcion:
        "Niños y niñas que sean capaces de tomar sus decisiones y sean autónomos en la medida de sus posibilidades.",
    },
    {
      image: iconPincel,
      descripcion:
        "Amplíen sus conocimientos del mundo para actuar sobre él, desarrollando su capacidad de creación y transformación para que puedan comunicar y expresar sus ideas, sentimientos y experiencias creativas",
    },
    {
      image: iconChil,
      descripcion: "Que reconozcan su cuerpo y la importancia de cuidarlo.",
    },
    {
      image: iconCubiertos,
      descripcion:
        "Adquieran hábitos de higiene, salud, alimentación y seguridad.",
    },
  ];

  const videoCentroEducativo = ["https://www.youtube.com/embed/O0WuZQtrBng"];
  return (
    <div id="centroEducativoEnvigado">
      <div className="banner-centro">
        <div
          className="intro-centro"
          style={{ backgroundImage: `url(${centroImg})` }}
        >
          <h2 className="oculto" data-anim="slide-left">
            centro educativo rotarorio envigado
          </h2>
          <p className="oculto" data-anim="slide-left">
            Nace el 4 de marzo del 2010
          </p>
          <p className="centro-des oculto" data-anim="slide-right">
            El Centro Educativo Rotario Envigado es un programa con proyección
            social de la CORPORACIÓN CLUB ROTARIO ENVIGADO de carácter mixto,
            que ofrece servicios de atención integral: educativos, de
            estimulación, protección, recreativos, nutricionales, psicológicos y
            formativos en la educación inicial, beneficiando a la familias del
            municipio de Envigado.
          </p>
        </div>
      </div>
      <div className="cards-centro">
        {contenidoCentro.map((item, index) => (
          <div
            key={index}
            className={`bloque-info oculto ${
              item.titulo === "Misión"
                ? "mision"
                : item.titulo === "Visión"
                ? "vision"
                : item.titulo === "Objetivo general"
                ? "objetivo-general"
                : ""
            }`}
            data-anim={
              item.titulo === "Misión"
                ? "slide-left"
                : item.titulo === "Visión"
                ? "slide-right"
                : item.titulo === "Objetivo general"
                ? "fade-up"
                : "fade-in"
            }
            style={{ transitionDelay: `${index * 0.2}s` }} //retrasa cada tarjeta
          >
            <img src={item.img} alt={item.titulo} />
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
      <div className="perfil-ninos">
        <h2 className="perfil-titulo">perfil de nuestros niños y niñas</h2>

        <div className="perfil-grid">
          {perfilNinos.map((item, index) => (
            <div
              key={index}
              className="perfil-card oculto"
              data-anim="fade-up"
              style={{ transitionDelay: `${index * 0.2}s` }} // retrasa cada tarjeta
            >
              <img
                src={item.image}
                alt={`Perfil ${index + 1}`}
                className="perfil-img"
              />
              <p className="perfil-descripcion">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="centro-educativo-galeria-video" id="centro-educativo">
        <div className="centro-educativo-galeria-contenedor">
          <div
            className="centro-educativo-galeria-descripcion oculto"
            data-anim="slide-left"
          >
            <h2>Nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quam
              repellat quis, commodi fuga soluta optio natus culpa nihil vitae
              amet, tenetur in minus harum debitis ipsam rerum nisi numquam.
            </p>
          </div>

          <div
            className="centro-educativo-video-items oculto"
            data-anim="slide-right"
          >
            <div className="centro-educativo-video-item">
              <iframe
                className="centro-educativo-video-player"
                width="560"
                height="315"
                src={videoCentroEducativo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
