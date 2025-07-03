import CarruselClubsFun from "../components/CarruselClubsFun";
import CarruselDistinciones from "../components/CarruselDistinciones";
import useAnimacionScroll from "../hooks/useAnimacionScroll";

import image3 from "../assets/img/Frame39.png";
import camping from "../assets/img/camping1.png";

import "../styles/nosotros.css";

export default function Nosotros() {
  useAnimacionScroll(".oculto");
  return (
    <>
      <div id="nosotros">
        <div className="bloque-informativo">
          <div className="contenido-textual">
            <img
              src={camping}
              className="imagen-camping oculto"
              data-anim="slide-left"
              alt="camping"
            />
            <p className="subtitulo-nosotros oculto" data-anim="slide-up">
              acerca de nuestro club
            </p>
            <h2 className="titulo-nosotros oculto" data-anim="slide-up">
              el club rotatorio envigado
            </h2>
            <div>
              <p className="descripcion-nosotros oculto" data-anim="fade">
                es una organización que desarrolla proyectos de impacto social
                para la comunidad bajo los lineamientos de Rotary International.
                Lo que pretendemos es aportar a la comunidad en general espacios
                de bienestar donde la formación y el interés por el ideal de
                servicio sean los pilares fundamentales.
              </p>
            </div>
          </div>

          <img
            src={image3}
            alt="frame 39"
            className="imagen-lateral oculto"
            data-anim="slide-right"
          />
        </div>

        <div className="bloque-video">
          <img
            className="video oculto"
            src={image3}
            data-anim="zoom-in"
            alt="video decorativo"
          />
          <p className="descripcion-video oculto" data-anim="slide-up">
            Buscamos ser líderes en programas de formación, promoción,
            prevención y atención a las necesidades que sean identificadas en
            los diferentes grupos poblacionales. Generando estrategias y
            proyectos para contribuir a la creación de mejoras, logrando
            convenios y alianzas estratégicas con organizaciones públicas y
            privadas del ámbito local e internacional.
          </p>
        </div>
      </div>

      <div id="carrusel-clubs-fundados">
        <div className="contedor-des">
          <p className="descripcion-clubs-fundados">así crecemos</p>
          <h2 className="titulo-clubs-fundados">clubes fundados</h2>
          <span></span>
        </div>
        <div className="contenedor-carrusel-clubs">
          <CarruselClubsFun />
        </div>
      </div>
      <div className="seccion-historia" id="historia">
        <div className="historia-encabezado">
          <div className="historia-texto oculto" data-anim="slide-left">
            <div className="historia-titulo">
              <h2>historia</h2>
              <span className="decoracion-titulo"></span>
            </div>
            <p className="historia-parrafo-intro">
              La fundación del Club Rotario Envigado en 1957, estuvo enmarcada
              en el programa de expansión de la semilla rotaria que se había
              trazado el Club Rotario Medellín. Según los compromisos que
              corresponde a todo Club Rotario, uno de los cuales es el de
              constituirse en padrino de la fundación de otros semejantes, el
              club medellinense, que pertenecía a Rotary International, asumió
              esa directriz cuyo propósito es el de expandir los clubes rotarios
              en las comunidades de su área de influencia.
            </p>
          </div>

          <div className="historia-imagen oculto" data-anim="slide-right">
            <img src={image3} alt="" />
          </div>
        </div>

        <div className="historia-descripcion oculto" data-anim="fade">
          <span></span>
          <p>
            Además de ser una iniciativa surgida en el seno del Club Rotario
            Medellín, la fundación del Club Rotario Envigado surgió como
            resultado del encuentro de un grupo de amigos, que después de
            algunas reuniones en las que demostraron sincera empatía común,
            decidieron sacar adelante proyectos que beneficiaran el desarrollo
            social y cultural de Envigado. Inicialmente se planearon algunas
            conversaciones entre habitantes de Envigado en los que se incluían
            empresarios, comerciantes, médicos, odontólogos, docentes, empleados
            públicos, etc., casi veinte profesiones distintas como lo manda
            Rotary International en sus estatutos para que pudiese funcionar un
            Club Rotario. En el mes de abril de 1957 comenzaron las reuniones
            informativas del por parte de los socios representantes del Club
            Rotario Medellín, en las que se explicaban los lineamientos y
            estatutos generales con los que deberían funcionar este nuevo Club
            Rotario en Antioquia y los cuales correspondían a las disposiciones
            y principios básicos de los rotarios a nivel mundial. Pasaron un par
            de meses y después de constantes reuniones y gestiones ante Rotary
            Internacional, el Club rotario Envigado recibió la Carta
            Constitutiva que lo acreditaba oficialmente como miembro de esta
            fraternidad a nivel mundial, con todas las obligaciones y
            compromisos que esto requería. La carta venia firmada por el
            entonces presidente de R.I. Charles G. Tennet, lo que dejaba
            evidenciada la seriedad e importancia que para los rotarios
            significaba el expandirse cada día más a nivel mundial. Este hecho
            fue de suma importancia para los nuevos rotarios, tanto así que el
            23 de agosto de 1957 con la asistencia de distintas autoridades
            envigadeñas y de representantes del Club Rotario Medellín y del
            Gobernador del distrito #112, en esa fecha ya, Jaime castro Córdoba,
            se realizó en la sede del Club social de Envigado una “reunión
            solemne”. A este acto también asistieron las esposas de los socios
            envigadeños y se puede afirmar que desde ese momento ellas también
            quedaron comprometidas en la causa rotaria. Debe resaltarse en este
            punto que el local del Club Social de Envigado seria por mas de un
            año la sede de todas las reuniones del Club Rotario hasta su
            traslado a mediados de 1958, a la sede de Club Colombo Español.
            Después que se consolidó toda la figura administrativa del Club
            Rotario Envigado, su principal objetivo y fin común, el del servicio
            a los demás, fue tomando forma y comenzó a gestionar la realización
            de las primeras obras sociales y de beneficencia que fueran útiles
            para el municipio de Envigado.
          </p>
        </div>
      </div>

      <div id="distinciones">
        <div className="encabezado-distinciones">
          <h2 className="titulo-distinciones">DISTINCIONES Y RECOCIMIENTOS</h2>
          <span></span>
        </div>

        <div className="contenido-distinciones">
          <CarruselDistinciones />
        </div>
      </div>
    </>
  );
}
