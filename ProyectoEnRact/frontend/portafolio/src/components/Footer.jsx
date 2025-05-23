import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Desarrollado por{" "}
        <a href="https://www.linkedin.com">Cristian Estiven Palacios Perea.</a>
      </p>
      <p>&copy; {new Date().getFullYear()} MPFWCSPP.</p>
    </footer>
  );
}
