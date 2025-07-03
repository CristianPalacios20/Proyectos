import { NavLink } from "react-router-dom";

import Logo from "../assets/img/Rotary.png";
import IconArrowLeft from "../assets/icons/IconArrowLeft.png";

import "../styles/header.css";

const Header = ({ setonOpenMenu }) => {
  const menuItems = [
    {
      label: "Inicio",
      path: "/",
    },
    {
      label: "Nosotros",
      path: "/nosotros",
      submenu: [
        { label2: "Nosotros", path2: "/nosotros" },
        { label2: "Equipo", path2: "/equipo" },
      ],
      submenuClass: "submenu-nosotros",
    },
    {
      label: "Juventud rotatoria",
      path: "/juventudRotary",
      icon: IconArrowLeft,
      submenu: [
        { label2: "Interact", path2: "/interact" },
        { label2: "Rotaract", path2: "/rotaract" },
        { label2: "Ryla", path2: "/ryla" },
      ],
    },
    {
      label: "Programas",
      path: "/programas",
      icon: IconArrowLeft,
      submenu: [
        { label2: "Centro educativo", path2: "/CentroEducativoEnvigado" },
        { label2: "Bazar del usado", path2: "/bazar" },
      ],
      submenuClass: "submenu-programas",
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
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `link-menu${isActive ? " active" : ""}`
                }
              >
                {item.label}
                {item.icon && <img src={item.icon} />}
              </NavLink>

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
    </header>
  );
};

export default Header;
