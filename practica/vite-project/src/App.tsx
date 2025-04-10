import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const carruselRef = useRef<HTMLDivElement>(null); //<---- Referenciamos
  const intervaloRef = useRef<NodeJS.Timeout | null>(null); // esto le dice a typeScripts que peuede ser Timeout o null

  const [isPaused, setIsPaused] = useState(false);

  const siguiente = () => {
    const carrusel = carruselRef.current;
    if (!carrusel) return; //<---- evita acceso al DOM si carrusel es null
    const primerElemento = carrusel.children[0] as HTMLElement;
    carrusel.appendChild(primerElemento);
  };
  const anterior = () => {
    const carrusel = carruselRef.current;
    if (!carrusel) return; //<---- evita acceso al DOM si carrusel es null
    const ultimoElemento = carrusel.children[
      carrusel.children.length - 1
    ] as HTMLElement;
    carrusel.prepend(ultimoElemento);
  };

  const iniciarAuto = () => {
    intervaloRef.current = setInterval(() => {
      siguiente();
    }, 4000);
  };

  const detenerAuto = () => {
    if (intervaloRef.current !== null) {
      clearInterval(intervaloRef.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      iniciarAuto();
    }
    return () => {
      if (intervaloRef.current !== null) {
        clearInterval(intervaloRef.current);
      }
    };
  }, [isPaused]);

  return (
    <>
      <div className="contenedor-principal">
        <div
          className="carrusel"
          ref={carruselRef}
          onMouseEnter={() => {
            setIsPaused(true);
            detenerAuto();
          }}
          onMouseLeave={() => {
            setIsPaused(false);
          }}
        >
          <div
            className="item"
            style={{
              backgroundImage: `url('https://picsum.photos/id/1011/300/200')`,
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url('https://picsum.photos/id/1025/300/200')`,
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url('https://picsum.photos/id/1035/300/200')`,
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url('https://picsum.photos/id/1041/300/200')`,
            }}
          ></div>
          <div className="btn">
            <button onClick={anterior}>{"<"}</button>
            <button onClick={siguiente}>{">"}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
