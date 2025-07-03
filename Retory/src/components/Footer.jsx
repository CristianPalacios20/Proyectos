import { NavLink } from "react-router-dom";

import rotaryLogo from "../assets/img/Rotary.png";
import iconFacebook from "../assets/icons/iconFacebook.png";
import iconInstagram from "../assets/icons/iconInstagram.png";
import iconTwitter from "../assets/icons/iconTwitter.png";
import iconYoutube from "../assets/icons/iconYoutube.png";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        {/* <!-- Logo --> */}
        <div className="footer-logo">
          <img src={rotaryLogo} alt="Logo institucional" />

          <p className="footer-descripcion">
            Queremos que los niños desarrollen todo su potencial y se conviertan
            en agentes de transformación de su comunidad.
          </p>
        </div>

        {/* <!-- Información general --> */}
        <div className="footer-info">
          <div className="footer-columns">
            {/* <!-- Redes sociales --> */}
            <div className="footer-redes">
              <p className="footer-titulo">Redes</p>
              <div className="footer-iconos">
                <NavLink to="https://facebook.com" target="_blank">
                  <img src={iconFacebook} alt="Facebook" />
                </NavLink>
                <NavLink to="https://instagram.com" target="_blank">
                  <img src={iconInstagram} alt="Instagram" />
                </NavLink>
                <NavLink to="https://twitter.com" target="_blank">
                  <img src={iconTwitter} alt="Twitter" />
                </NavLink>
                <NavLink to="https://youtube.com" target="_blank">
                  <img src={iconYoutube} alt="YouTube" />
                </NavLink>
              </div>
            </div>

            {/* <!-- Contacto --> */}
            <div className="footer-contacto">
              <p className="footer-titulo">Contacto</p>
              <p>Teléfono: (601) 1234567</p>
              <p>Celular: +57 300 123 4567</p>
              <p>Email: contacto@ejemplo.com</p>
            </div>

            {/* <!-- Horario --> */}
            <div className="footer-horario">
              <p className="footer-titulo">Horario</p>
              <p>Lunes a Viernes: 8:00 am - 4:00 pm</p>
              <p>Sábados y Domingo: CERRADO</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
