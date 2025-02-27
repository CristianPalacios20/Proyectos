import React from 'react';
import imgPresent from '../assets/imagel.png'
import '../Styles/Home.css';

export default function Home() {
  return (
    <section id='home'>
        <div className='content-descrip'>
            <div className='content-info'>
                <h1>CRISTIAN PALACIOS</h1>
                <p>Desarrollador web Junior</p>
            </div>
            <div className='conten-buttons'>
                <button className='btn-contratame'>SOBRE MÍ</button>
                <button className='explorarMas'>EXPLORAR MÁS</button>
            </div>
        </div>
        <div className='content-img'>
            <img src={ imgPresent } alt="" />
        </div>
    </section>
  )
}
