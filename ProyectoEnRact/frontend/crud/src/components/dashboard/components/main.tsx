import { Routes, Route } from 'react-router-dom';
import DashboardPage from '../pages/dashboardPage';
import UsuariosPage from '../pages/usuarios';
import ProductosPage from '../pages/productos';
import ConfiguracionPage from '../pages/configuracion';
import '../../../styles/main.css'

export default function main() {
  return (
      <div className='main'>
        <Routes>
          <Route path='/' element = { <DashboardPage /> }/>
          <Route path='/usuarios' element = { < UsuariosPage /> }/>
          <Route path='/productos' element = { < ProductosPage /> }/>
          <Route path='/configuracion' element = { < ConfiguracionPage /> }/>
        </Routes>
      </div>
  )
}
