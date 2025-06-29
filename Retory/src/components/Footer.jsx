import rotaryLogo from "../assets/img/Rotary.png";

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
                <a href="https://facebook.com" target="_blank">
                  <img src="facebook.svg" alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img src="instagram.svg" alt="Instagram" />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <img src="twitter.svg" alt="Twitter" />
                </a>
                <a href="https://youtube.com" target="_blank">
                  <img src="youtube.svg" alt="YouTube" />
                </a>
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
