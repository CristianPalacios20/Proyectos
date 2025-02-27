import { useAuthContext }  from '../../../hooks/useContext';
import iconSereach from '../../../assets/icons/Sereach.svg';
import iconUser from '../../../assets/image2.png';
import iconNoti from '../../../assets/icons/iconNoti.svg';
import '../../../styles/header.css';

const Header : React.FC = () => {
  const { user, formatearNombreCompleto } = useAuthContext();

  return (
    <>
      <header className='header'>
        <div className='contetTitle'>
          <h2>MPFW_CSPP.</h2>
        </div>
        <nav className='content-nav'>
          <ul>
            <li className='content-buscador'>
              <input type="text" placeholder='Sereach'/>
              <img src={ iconSereach } alt="" />
            </li>
            <li className='contentNofi'>
              <img src={iconNoti} alt="" />
            </li>
            <li className='content-user'>
              <div className='user-info'>
                <img src={ iconUser } alt="" />
                <p>{ user?.nombres ? formatearNombreCompleto(user.nombres) : 'USERNAME' }</p>
              </div>
              <ul className="ul-hijo">
                <li>Perfil</li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
