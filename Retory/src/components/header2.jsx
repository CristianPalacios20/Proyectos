import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Rotary.png";
import IconArrowLeft from "../assets/icons/IconArrowLeft.png";
import iconDonar from "../assets/icons/iconDonar.png";
// import "./Header.css";

const Header2 = () => {
      const menuItems = [
        {
          label: "Inicio",
          path: "/",
        },
        {
          label: "Nosotros",
          path: "/nosotros",
        },
        {
          label: "Juventud rotatoria",
          path: "/juventudRotary",
          icon: IconArrowLeft,
          submenu: ["Interact", "Rotaract", "Ryla"],
        },
        {
          label: "Programas",
          path: "/programas",
          icon: IconArrowLeft,
        },
        {
          label: "Documentos legales",
          path: "/documentos",
        },
        {
          label: "Blog",
          path: "/blog",
        },
      ];
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <nav className="nav">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={item.submenu ? "menu-item" : ""}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
                {item.icon && <img src={item.icon} alt="arrow" />}
              </NavLink>

              {item.submenu && (
                <ul className="submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="bottomContent">
          <button>
            <p>Donar</p>
            <img src={iconDonar} alt="icon donar" />
          </button>
        </div>

        <div className="menu">
          <span className=""></span>
          <span className=""></span>
          <span className=""></span>
        </div>
      </nav>
    </header>
  );
};

export default Header2;
