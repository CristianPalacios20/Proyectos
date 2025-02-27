import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Link} from 'react-router-dom';
import '../../../styles/menu.css';
import image from '../../../assets/image2.png'
import iconDashboard from '../../../assets/icons/MageDashboard4.svg';
import iconUser from '../../../assets/icons/SolarUsersGroupTwoRoundedBoldDuotone.svg';
import iconProductos from '../../../assets/icons/iconProducts.svg';
import iconSetting from '../../../assets/icons/FluentSettingsCogMultiple24Regular.svg';
import iconLogout from '../../../assets/icons/StashSignoutAltLight.svg';

export default function Menu() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    false // Inicializa el estado como no autenticado
  );

  // Verifica la autenticación cada vez que el componente se recargue
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); // Si hay token, marca como autenticado
      navigate('/', { replace : true });
    }
  }, [navigate]); // Reejecuta cada vez que `navigate` cambie

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    Cookies.remove('userSession');
    setIsAuthenticated(false); // Actualiza el estado para reflejar que no está autenticado
    //redirigir a la página de inicio y borra el historial
    navigate('/', { replace : true }); // Redirige al login después de cerrar sesión
    // window.location.reload();
  };

  return (
    <>
      { isAuthenticated ? (
            <div className='menu'>
              <div className='content-logo'>
                <div>
                  <img src={ image } alt="" />
                </div>
              </div>
              <div className='content-menu'>
                <ul>
                  <li>
                      <img src= { iconDashboard } alt="" />
                      <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <img src= { iconUser } alt="" />
                    <Link to='/dashboard/usuarios'>Usuarios</Link>
                  </li>
                  <li>
                    <img src= { iconProductos } alt="" />
                    <Link to='/dashboard/productos'>Productos</Link>
                  </li>
                  <li>
                    <img src= { iconSetting } alt="" />
                    <Link to='/dashboard/configuracion'>Ajustes</Link>
                  </li>
                </ul>
              </div>
              <div className='content-logout'>
                <ul>
                  <li>
                    <img src= { iconLogout } onClick={ handleLogout } />
                    <button onClick={ handleLogout }>Cerrar sesión</button>
                  </li>
                </ul>
              </div>
            </div>
      ) : (
        <div className='content-loading'>
          <h1>Redirigiendo...</h1>
        </div>
      ) }
    </>
  )
}
