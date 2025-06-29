import centroImg from "../assets/img/centroEnvigadoImg.jpg";

import "../styles/CentroEducativoEnvigado.css";

export default function CentroEducativoEnvigado() {
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
      image: "",
      descripcion:
        "Niños y niñas que sean capaces de tomar sus decisiones y sean autónomos en la medida de sus posibilidades.",
    },
    {
      image: "",
      descripcion:
        "Amplíen sus conocimientos del mundo para actuar sobre él, desarrollando su capacidad de creación y transformación para que puedan comunicar y expresar sus ideas, sentimientos y experiencias creativas",
    },
    {
      image: "",
      descripcion: "Que reconozcan su cuerpo y la importancia de cuidarlo.",
    },
    {
      image: "",
      descripcion:
        "Adquieran hábitos de higiene, salud, alimentación y seguridad.",
    },
  ];
  return (
    <div id="centroEducativoEnvigado">
      <div className="banner-centro">
        <div
          className="intro-centro"
          style={{ backgroundImage: `url(${centroImg})` }}
        >
          <h2>centro educativo rotarorio envigado</h2>
          <p>Nace el 4 de marzo del 2010</p>
          <p className="centro-des">
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
            className={`bloque-info ${
              item.titulo === "Misión"
                ? "mision"
                : item.titulo === "Visión"
                ? "vision"
                : item.titulo === "Objetivo general"
                ? "objetivo-general"
                : ""
            }`}
          >
            <img src={item.img} alt={item.titulo} />
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
      <div className="perfil-ninos">
        <h2 className="perfil-titulo">Perfil de nuestros niños y niñas</h2>

        <div className="perfil-grid">
          {perfilNinos.map((item, index) => (
            <div key={index} className={`perfil-card `}>
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
    </div>
  );
}
