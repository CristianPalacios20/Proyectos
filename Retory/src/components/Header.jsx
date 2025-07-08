import { NavLink } from "react-router-dom";

// import MenuMovil from "./menuMovil";

import Logo from "../assets/img/Rotary.png";
import IconArrowLeft from "../assets/icons/IconArrowLeft.png";

import "../styles/header.css";

const Header = ({ setonOpenMenu, setOnOpenMenuMovil }) => {
  const menuItems = [
    {
      label: "Inicio",
      path: "/",
    },
    {
      label: "¿quiénes somos?",
      path: "/nosotros",
      submenu: [{ label2: "Equipo", path2: "/equipo" }],
      submenuClass: "submenu-nosotros",
    },
    {
      label: "centro educativo",
      path: "/CentroEducativoEnvigado",
      submenuClass: "submenu-programas",
    },
    {
      label: "Bazar",
      path: "/bazar",
    },
    {
      label: "Juventud rotatoria",
      icon: IconArrowLeft,
      submenu: [
        { label2: "Interact", path2: "/interact" },
        { label2: "Rotaract", path2: "/rotaract" },
        { label2: "Ryla", path2: "/ryla" },
      ],
    },
    {
      label: "Documentos legales",
      path: "/documentos",
    },
  ];

  return (
    <header id="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <nav className="nav">
        <ul className="menu-principal">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              {item.path ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `link-menu${isActive ? " active" : ""}`
                  }
                >
                  {item.label}
                  {item.icon && <img src={item.icon} />}
                </NavLink>
              ) : (
                <span className="link-menu">
                  {item.label}
                  {item.icon && <img src={item.icon} />}
                </span>
              )}

              {item.submenu && (
                <ul className={`submenu ${item.submenuClass || ""}`}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="submenu-item">
                      <NavLink to={subItem.path2} className="link-submenu">
                        {subItem.label2}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="bottomContent">
          <NavLink to="donar">
            <p>Donar</p>
            <span></span>
          </NavLink>
        </div>

        <div className="menu" onClick={() => setonOpenMenu(true)}>
          <span className=""></span>
          <span className=""></span>
          <span className=""></span>
        </div>
      </nav>
      <nav className="nav-movil">
        <div className="menu-movil" onClick={() => setOnOpenMenuMovil(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
