import { useEffect, useRef } from "react";

export default function useObservar(selector) {
  const ref = useRef(null);

  useEffect(() => {
    const elementos = document.querySelectorAll(selector);

    const observar = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    elementos.forEach((el) => observar.observe(el));
    return () => {
      elementos.forEach((el) => observar.unobserve(el));
    };
  }, [selector]);
}
