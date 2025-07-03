import { useRef, useState } from "react";
import bazar1 from "../assets/img/bazar1.jpeg";
import bazar2 from "../assets/img/bazar2.jpeg";
import bazar3 from "../assets/img/bazar3.jpeg";
import bazar4 from "../assets/img/bazar4.jpeg";
import bazar5 from "../assets/img/bazar5.jpeg";
import bazar6 from "../assets/img/bazar6.jpeg";
import bazar7 from "../assets/img/bazar7.jpeg";
import bazar8 from "../assets/img/bazar8.jpeg";

import "../styles/bazar.css";

const imagenesBazar = [
  bazar1,
  bazar2,
  bazar3,
  bazar4,
  bazar5,
  bazar6,
  bazar7,
  bazar8,
];
export default function Bazar() {
  const [indice, setIndice] = useState(0);
  const detallesRef = useRef(null);

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenesBazar.length);
  };

  const anterior = () => {
    setIndice(
      (prev) => (prev - 1 + imagenesBazar.length) % imagenesBazar.length
    );
  };

  const scroollDetalles = () => {
    detallesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="bazar">
      <div
        className={`bazar-banner ${indice === 0 ? "fondo-oscuro" : ""}`}
        style={{ backgroundImage: `url(${imagenesBazar[indice]})` }}
      >
        {indice === 0 && (
          <div className="bazar-banner-info">
            <h3 className="bazar-banner-titulo">Bazar del usado</h3>
            <p className="bazar-banner-descripcion">
              Bazar del Usado ¿Qué es? El «Bazar del Usado» es un evento
              organizado por el Club Rotario de Envigado en el que se ofrecen a
              la venta artículos de segunda mano que están en buen estado o
              incluso nuevos.{" "}
              <button
                className="bazar-boton-leer-mas"
                onClick={scroollDetalles}
              >
                Leer más
              </button>
            </p>
          </div>
        )}
        <div className={`carrusel-submenu`}>
          <div className="botones-carrusel">
            <button
              className={`${
                indice >= 1 ? "botones-carrusel oscuro" : "botones-carrusel"
              }`}
              onClick={anterior}
            >
              &#10094;
            </button>
            <button
              className={`${
                indice >= 1 ? "botones-carrusel oscuro" : "botones-carrusel"
              }`}
              onClick={siguiente}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>

      <div className="bazar-contenido" id="bazar-contenido" ref={detallesRef}>
        <p className="bazar-descripcion">
          Bazar del Usado ¿Qué es? El «Bazar del Usado» es un evento organizado
          por el Club Rotario de Envigado en el que se ofrecen a la venta
          artículos de segunda mano que están en buen estado o incluso nuevos.
          Este bazar es una excelente oportunidad para que la comunidad pueda
          adquirir una amplia variedad de productos a precios asequibles,
          mientras que, al mismo tiempo, apoyan las causas benéficas y proyectos
          sociales promovidos por el club. Los bazares del usado suelen
          realizarse dos veces al año, lo que les permite reunir una amplia gama
          de artículos donados por los miembros del club y otras personas
          generosas de la comunidad. Entre los artículos que se suelen encontrar
          en el bazar podemos mencionar: Ropa y calzado: Prendas de vestir,
          zapatos y accesorios en buen estado que ya no se utilizan.
          Electrodomésticos: Pequeños electrodomésticos como licuadoras,
          tostadoras, planchas, etc. Muebles: Sillas, mesas, estanterías y otros
          muebles que todavía se encuentren en buenas condiciones. Juguetes y
          libros: Juguetes infantiles y libros para fomentar la lectura.
          Artículos para el hogar: Vajilla, utensilios de cocina, decoraciones y
          otros objetos domésticos. Electrónicos: Dispositivos electrónicos como
          teléfonos, cámaras, reproductores de música, entre otros. Herramientas
          y equipos: Herramientas de jardinería, herramientas manuales y otros
          equipos. Artículos deportivos: Equipos y accesorios deportivos. Es
          importante destacar que el objetivo principal del «Bazar del Usado» va
          más allá de la venta de artículos de segunda mano. Los fondos
          recaudados durante este evento son destinados a apoyar proyectos
          humanitarios y sociales que lleva a cabo el Club Rotario de Envigado.
          Estos proyectos pueden incluir la compra de materiales educativos para
          nuestra obra bandera que es el Centro Educativo Club Rotario.
        </p>
      </div>
    </div>
  );
}
