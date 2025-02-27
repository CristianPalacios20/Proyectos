import React from 'react';
import '../Styles/About.css';

export default function About() {
  return (
    <section id='about'>
      <div className='content-1'>
        <div className='content-sobreMi'>
          <h2>SOBRE MÍ</h2>
          <div className='content-span'>
            <span className='line large'></span>
            <span className='line small'></span>
          </div>
        </div>
        <div className='content-texto'>
          <p>Hola, soy un desarrollador frontend con experiencia en React y JavaScript.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores atque 
            voluptates, quae cumque dolores ratione doloremque neque fuga et ipsam.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam doloribus 
            perferendis laborum, doloremque mollitia praesentium vero consequuntur eveniet aliquid at omnis nostrum sint quasi nisi earum nesciunt harum incidunt enim.
            perferendis laborum, doloremque mollitia praesentium vero consequuntur eveniet aliquid at omnis nostrum sint quasi nisi earum nesciunt harum incidunt enim.
          </p>
        </div>
        <div className='content-button'>
          <button>DESCARGA MI CV</button>
        </div>
      </div>
    </section>
  )
}
