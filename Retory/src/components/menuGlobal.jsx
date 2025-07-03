import { NavLink } from "react-router-dom";

import rotary2 from "../assets/img/Rotary3.png";

import "../styles/menuGlobal.css";

export default function menuGlobal({ onOpenMenu, setonOpenMenu }) {
  return (
    <div id="menuGlobal" className={onOpenMenu ? "visible" : "oculto"}>
      <div className="menu-toggle">
        <div className="contenedor-barras" onClick={() => setonOpenMenu(false)}>
          <span className="barra"></span>
          <span className="barra"></span>
        </div>
      </div>

      <div className="menu-contenedor">
        <div className="menu-logo">
          <img src={rotary2} alt="logo" />
        </div>

        <div className="menu-mensaje">
          Queremos que los <strong>NIÑOS</strong> desarrollen todo su{" "}
          <strong>POTENCIAL</strong> y se conviertan en agentes de{" "}
          <strong>TRANSFORMACIÓN</strong> de su <strong>COMUNIDAD</strong>
        </div>

        <div>
          <NavLink>
            <img src="" alt="" />
          </NavLink>
          <NavLink>
            <img src="" alt="" />
          </NavLink>
          <NavLink>
            <img src="" alt="" />
          </NavLink>
          <NavLink>
            <img src="" alt="" />
          </NavLink>
        </div>

        <div className="menu-contacto">
          <h2>Contáctanos</h2>
          <NavLink>clubrotarioenvigado@gmail.com</NavLink>
        </div>
      </div>
    </div>
  );
}
