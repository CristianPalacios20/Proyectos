import { useState } from 'react'
import useLogin from '../hooks/useLogin';
import useAuthRegistro from '../hooks/useAuthRegistro';
import facebook from '../assets/facebook.png';
import gmail from '../assets/gmail.png';
import flIzquierda from '../assets/flecha-izquierda.png';
import flDerecha from '../assets/flecha-derecha.png';
import "../styles/Login.css";

const Form = () => {
  const { 
    correo, 
    setCorreo,
    contrasena,
    setContrasena,
    handleLogin,
    loading,
    error,
  } = useLogin();

  const {
    registroNombres,
    setRegistroNombres,
    registroApellidos,
    setRegistroApellidos,
    registroCorreo,
    setRegistroCorreo,
    registroContrasena,
    setRegistroContrasena,
    rolId,
    setRolId,
    registroMensaje,
    handleRegistro,
    registroLoading,
  } = useAuthRegistro();

  const newLocal = <label className="recordarme"><input type="checkbox" name="" id="checkbox" />Recuérdame</label>;
  const [mostrar, setMostrar] = useState(true);
  return (
    <div className="form-container ">
      {/* Sección para iniciar sesión */}
      {mostrar && (
        <div className= { `form-section ${ mostrar ? 'active' : 'inactive' } ` }>
          <div className="welcome-message">
            <h1>Bienvenido.</h1>
            <p>¿Aún no tienes una cuenta? ¡Únete a nuesta comunidad! </p>
            <div className='primary-button-container'>
              <button 
                className="primary-button"
                onClick={() => setMostrar(false)}
              ><img src={ flIzquierda } alt=""/>Regístrate</button>
                
            </div>
          </div>
          <div className="form-box">
            <h2>Inicia sesión aquí</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="input-field"
                    required
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  className="input-field"
                  required
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
                <div className="outh-options">
                  {newLocal /* Checkbox para recordar usuario */}
                  <p>¿Olvidaste tu contraseña?</p>
                </div>
                <div className="button-container">
                  <button 
                    type="submit" 
                    className="secondary-button"
                    disabled={loading}
                  >
                    { loading ? 'Iniciando sesión...' : 'Iniciar sesión' }
                  </button>
                </div>
                <div className='social-buttons-container'>
                    <span>O usa tu cuenta</span>
                    <div className="social-buttons">
                      <button className="social-button"><img src={gmail} alt="Google" /></button>
                      <button className="social-button"><img src={facebook} alt='Facebook'></img></button>
                    </div>
                </div>
              </form>
              {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}
      {!mostrar && (
        <div className={ `form-section ${ !mostrar ? 'active' : 'inactive' } form-section-register` }>
          {/* Sección para registrarse */}
          <div className="form-box">
            <h2>Regístrate aquí</h2>
              <form className="register-form" onSubmit={ handleRegistro }>
                  <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="input-field"
                      required
                      value={ registroNombres }
                      onChange={ (e) => setRegistroNombres(e.target.value) }
                  />
                  <input 
                      type="text" 
                      placeholder="Enter your last name"
                      className="input-field"
                      required
                      value={ registroApellidos }
                      onChange={ (e) => setRegistroApellidos(e.target.value) }
                  />
                  <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="input-field"
                      required
                      value={ registroCorreo }
                      onChange={ (e) => setRegistroCorreo(e.target.value) }
                  />
                  <input 
                    type="password" 
                    placeholder="Enter your password"
                    className="input-field"
                    required
                    value={ registroContrasena }
                    onChange={ (e) => setRegistroContrasena(e.target.value) }
                  />
                  <select 
                    className='browsers' 
                    name="rol_id" 
                    id="rol_id"
                    required
                    value={rolId}
                    onChange={ (e) => setRolId(e.target.value) }
                  >
                    <option value="">Select your role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                  </select>
                  <div className="button-container">
                    <button 
                      type="submit" 
                      className="secondary-button"
                      disabled={ registroLoading }
                    >
                      { registroLoading ? "Registrando..." : "Registrar" }
                    </button>
                  </div>
                  <div className='social-buttons-container'>
                    <span>O usa tu cuenta</span>
                    <div className="social-buttons">
                      <button className="social-button"><img src={gmail} alt="Google" /></button>
                      <button className="social-button"><img src={facebook} alt='Facebook'></img></button>
                    </div>
                  </div>
                  { registroMensaje && <p className="success-message">{ registroMensaje }</p>}
              </form>
          </div>
          <div className="welcome-message">
            <h1>Bienvenido.</h1>
            <p>¿Ya tienes una cuenta? Inicia sesión aquí.</p>
            <div className='primary-button-container'>
              <button 
                className="primary-button"
                onClick={() => setMostrar(true)}
              >Iniciar sesión <img src={ flDerecha } alt=""/></button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form;