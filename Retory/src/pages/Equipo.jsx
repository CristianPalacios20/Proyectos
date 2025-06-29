import equipoImg from "../assets/img/equipo.jpg";

import frame39 from "../assets/img/Frame39.png";

import "../styles/equipo.css";

export default function Equipo() {
  const equipoData = [
    {
      titulo: "Fundadores",
      miembros: [
        { nombre: "Fundador 1", imagen: frame39 },
        { nombre: "Fundador 2", imagen: frame39 },
        { nombre: "Fundador 3", imagen: frame39 },
      ],
    },
    {
      titulo: "Junta Directiva",
      miembros: [
        { nombre: "Miembro 1", imagen: frame39 },
        { nombre: "Miembro 2", imagen: frame39 },
        { nombre: "Miembro 3", imagen: frame39 },
      ],
    },
    {
      titulo: "Equipo de Trabajo",
      miembros: [
        { nombre: "Persona A", cargo: "Diseñador", imagen: frame39 },
        {
          nombre: "Persona B",
          cargo: "Desarrollador",
          imagen: frame39,
        },
        {
          nombre: "Persona B",
          cargo: "Desarrollador",
          imagen: frame39,
        },
      ],
    },
  ];

  return (
    <div id="equipo">
      <div
        className="banner-equipo"
        style={{
          backgroundImage: `url(${equipoImg})`,
          position: "sticky",
        }}
      >
        <p>equipo</p>
      </div>
      <div className="integrantes">
        {equipoData.map((seccion, index) => (
          <div key={index} className="bloque-equipo">
            <div key={index} className="contenedor-title">
              <h2>{seccion.titulo}</h2>
            </div>
            <div
              className={
                seccion.titulo === "Fundadores"
                  ? "fundadores"
                  : seccion.titulo === "Junta Directiva"
                  ? "junta-directiva"
                  : "miembros"
              }
            >
              {seccion.miembros.map((persona, i) => (
                <div key={i} className="tarjeta-persona">
                  {persona.cargo && <h3>{persona.cargo}</h3>}
                  <div className="contenedor-image">
                    <img src={persona.imagen} alt={persona.nombre} />
                  </div>
                  <p>{persona.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
