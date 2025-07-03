import { useEffect } from "react";

export default function useAnimacionScroll(selecionar = ".oculto") {
  useEffect(() => {
    const elementos = document.querySelectorAll(selecionar);

    const observar = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("mostrar");
        }
      });
    }, { threshold: 0.1 });

    elementos.forEach((el) => observar.observe(el));

    return () => observar.disconnect();
  }, [selecionar]);
}

