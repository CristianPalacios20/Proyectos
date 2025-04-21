import React from 'react'
import Inicio from '../pages/inicio'
import AcercaDeMi from '../pages/AcercaDeMi'
import Portafolio from '../pages/Portafolio'
import Contactame from '../pages/Contacto'
import { Routes, Route } from 'react-router-dom'
import "../Styles/main.css"

export default function main() {
  return (
    <section id='main'>
      <Routes>
        {/* <Route> */}
          <Route path="/" element={<Inicio/>} />
          <Route path="/portafolio" element={<Portafolio/>} />
          <Route path="/acercaDeMi" element={<AcercaDeMi/>} />
          <Route path="/contactame" element={<Contactame/>} />
        {/* </Route> */}
      </Routes>
    </section>
  )
}
