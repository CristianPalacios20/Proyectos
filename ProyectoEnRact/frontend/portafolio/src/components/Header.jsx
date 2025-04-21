import React, { useState } from "react";
import useToggleMenu from "../Hooks/useToggleMenu";
import menuicon from "../assets/menu2.png";
import iconCerrar from "../assets/cerrar.png";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Header.css";

export default function Header() {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  const location = useLocation();
  return (
    <>
      <header id="header">
        <nav className="nav-links">
          <ul>
            <li className="link">
              <Link
                to="/"
                className={location.pathname === "/" ? "activo" : ""}
              >
                Inicio
              </Link>
            </li>
            <li className="link">
              <Link
                to="/portafolio"
                className={location.pathname === "/portafolio" ? "activo" : ""}
              >
                Portafolio
              </Link>
            </li>
            <li className="link">
              <Link
                to="/acercaDeMi"
                className={location.pathname === "/acercaDeMi" ? "activo" : ""}
              >
                Acerca de mí
              </Link>
            </li>
            <li className="link">
              <Link
                to="/contactame"
                className={location.pathname === "/contactame" ? "activo" : ""}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </nav>
        <h1>cristian</h1>
      </header>

      {/* <header className="header-movil">
        <div className="div-menu">
          <h1>MPFW CSPP</h1>
          <img src={menuicon} onClick={toggleMenu} />
        </div>
        <div className={`div-links ${isMenuOpen ? "div-links-active" : ""}`}>
          <div className="div-iconCerrar">
            <img src={iconCerrar} onClick={toggleMenu} />
          </div>
          <div className="nn">
            <nav className="nav-links-movil">
              <ul>
                <li className="nav-link-movil">
                  <a href="#home">INICIO</a>
                </li>
                <li className="nav-link-movil">
                  <a href="#about">SOBRE MÍ</a>
                </li>
                <li className="nav-link-movil">
                  <a href="#section-skills">HABILIDADES</a>
                </li>
                <li className="nav-link-movil">
                  <a href="#section-projects">PROYECTOS</a>
                </li>
                <li className="nav-link-movil">
                  <a href="#section-contact">CONTÁCTAME</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header> */}
    </>
  );
}
