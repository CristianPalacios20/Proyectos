import React from 'react';
import ScrollEffect from '../Hooks/ScrollEffect';
import useToggleMenu from '../Hooks/useToggleMenu';
import menuicon from '../assets/menu2.png';
import iconCerrar from  '../assets/cerrar.png';
import '../Styles/Header.css';

export default function Header() {
  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <>
      <header className='header'>
        <h1>MI PORTAFOLIO CSPP</h1>
        <ScrollEffect targetClass='header' />
        <nav className='nav-links'>
          <ul>
            <li className='nav-link'><a href="#home">INICIO</a></li>
            <li className='nav-link'><a href="#about">SOBRE MÍ</a></li>
            <li className='nav-link'><a href="#section-skills">HABILIDADES</a></li>
            <li className='nav-link'><a href="#section-projects">PROYECTOS</a></li>
            <li className='nav-link'><a href="#section-contact">CONTÁCTAME</a></li>
          </ul>
        </nav>
      </header>

      <header className='header-movil'>
        <div className='div-menu'>
          <h1>MPFW CSPP</h1>
          <img src={menuicon} onClick={toggleMenu} />
        </div>
        {/* { */}
          {/* isMenuOpen && ( */}
          <div 
            className={ `div-links ${isMenuOpen ? 'div-links-active' : ''}` }
          >
            <div className='div-iconCerrar'>
              <img src={ iconCerrar } onClick={toggleMenu} />
            </div>
            <div className='nn'>
                <nav className='nav-links-movil'>
                  <ul>
                    <li className='nav-link-movil'><a href="#home">INICIO</a></li>
                    <li className='nav-link-movil'><a href="#about">SOBRE MÍ</a></li>
                    <li className='nav-link-movil'><a href="#section-skills">HABILIDADES</a></li>
                    <li className='nav-link-movil'><a href="#section-projects">PROYECTOS</a></li>
                    <li className='nav-link-movil'><a href="#section-contact">CONTÁCTAME</a></li>
                  </ul>
                </nav>
            </div>
          </div>
        {/* // )} */}
      </header>
    </>
  );
}
