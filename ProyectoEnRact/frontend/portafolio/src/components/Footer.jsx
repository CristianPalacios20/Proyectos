import React from 'react'
import '../Styles/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='contact-info'>
        <h2>Información de contacto</h2>
        <p>Email: palaciosstiven208@gmail.com</p>
        <p>Ubicación: Medellín, Colombia</p>
      </div>
      <div className='social-links'>
        <h2>Links sociales</h2>
        <div>
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="">GitHub</a>
        </div>
      </div>
      <div className='copyright'>
        <p>Desarrollado por <a href="https://www.linkedin.com">Cristian Estiven Palacios Perea.</a></p>
        <p>&copy; { new Date().getFullYear() } MPFW CSPP. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
