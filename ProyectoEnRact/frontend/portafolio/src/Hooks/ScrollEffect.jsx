import { useEffect } from 'react';
import '../Styles/Header.css';

const ScrollEffect = ({ targetClass }) => {
  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.querySelector(`.${targetClass}`);
      // Si no encuentra la sección, no hace nada
      if(!targetSection) return;
      // Obtiene la posición vertical del scroll actual
      const scrollTop = window.scrollY;
      // Añade o quita la clase CSS en función de la posición del scroll
      if (scrollTop > 0) {
        targetSection.classList.add('scrolled'); // Añade la clase cuando se desplaza
      } else {
        targetSection.classList.remove('scrolled'); // Remueve la clase cuando vuelve al tope
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpia el evento al desmontar el componente
    };
  }, [targetClass]);

  return null;
};

export default ScrollEffect;

