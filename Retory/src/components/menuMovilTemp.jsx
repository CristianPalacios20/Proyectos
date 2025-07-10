import { NavLink } from "react-router-dom";
import { useState } from "react";

import IconArrowLeft from "../assets/icons/IconArrowLeft.png";
import "../styles/menuMovil.css";

function MenuMovil({ onOpenMenuMovil, setOnOpenMenuMovil }) {
  const menuItemsMovil = [
    {
      label: "Inicio",
      path: "/",
    },
    {
      label: "Nosotros",
      submenu: [
        { labelII: "nosotros", pathII: "/nosotros" },
        { labelII: "Equipo", pathII: "/equipo" },
      ],
      submenuClass: "submenu-nosotros",
    },
    {
      label: "Juventud rotatoria",
      icon: IconArrowLeft,
      submenu: [
        { labelII: "Interact", pathII: "/interact" },
        { labelII: "Rotaract", pathII: "/rotaract" },
        { labelII: "Ryla", pathII: "/ryla" },
      ],
    },
    {
      label: "Programas",
      icon: IconArrowLeft,
      submenu: [
        { labelII: "Centro educativo", pathII: "/CentroEducativoEnvigado" },
        { labelII: "Bazar del usado", pathII: "/bazar" },
      ],
      submenuClass: "submenu-programas",
    },
    {
      label: "Documentos legales",
      path: "/documentos",
    },
  ];

  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <div
      id="menuMovil"
      className={onOpenMenuMovil ? "visible" : ""}
      onClick={() => setOnOpenMenuMovil(false)}
    >
      <nav
        className="menu-movil-nav"
        onClick={(e) =>
          e.stopPropagation()
        } /*Evita cerrar al hacer click dentro*/
      >
        <ul className="menu-movil-lista">
          {menuItemsMovil.map((item, index) => (
            <li key={index} className="menu-movil-item">
              <NavLink
                to={item.submenu ? "#" : item.path}
                className="menu-movil-link"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    setOpenSubMenu(openSubMenu === index ? null : index);
                  } else {
                    setOnOpenMenuMovil(false); // Cierra menú completo
                    setOpenSubMenu(null);
                  }
                }}
              >
                {item.label}
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="menu-movil-icono"
                  />
                )}
              </NavLink>

              {item.submenu && (
                <ul
                  className={`menu-movil-sublista ${
                    openSubMenu === index ? "visible" : "oculto"
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="menu-movil-subitem">
                      <NavLink
                        to={subItem.pathII}
                        className="menu-movil-sublink"
                        onClick={() => setOnOpenMenuMovil(false)} // Cierra al navegar
                      >
                        {subItem.labelII}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MenuMovil;
