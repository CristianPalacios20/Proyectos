import  useArrastar  from '../../../hooks/useArrastrar';
// import Arrastrar from '../../arrastrar';
import '../../../styles/FormProducts.css';
import iconCerrar from '../../../assets/icons/iconCerrar.svg';
import { useState } from 'react';

interface FormularioProps {
  cerrarFormulario: () => void;
}

export default function FormProducts({ cerrarFormulario }: FormularioProps) {
  const { posicion, iniciarArrastre, moverVentana } = useArrastar();
  const [arrastrando, setArrastrando] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (arrastrando) {
      moverVentana(e);
    }
  }

  return (
    <div className="modal">
      <div 
        className="form-containerr"
        style={
          { 
            "--pos-x":  `${ posicion.x }px`, 
            "--pos-y":  `${ posicion.y }px`,
          } as React.CSSProperties
        }
        onMouseMove={handleMouseMove} // solo se mueve si se está arrastrando
        onMouseUp={() => {
          // detenerArrastre();
          setArrastrando(false); // Detiene el arrastre
        }}
        >
        <div 
          className="content-button-cerrar"
          onMouseDown={(e) => {
            iniciarArrastre(e);
            setArrastrando(true);
          }}
          onMouseUp={() => setArrastrando(false)}
        >
          <button type="button" onClick={cerrarFormulario}><img src={ iconCerrar } alt="Cerrar" /></button>
        </div>
        <div className="content-title">
          <h2>Agregar Producto</h2>
        </div>
        <form className="content-form">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Categoría" />
          <input type="text" placeholder="Marca" />
          <input type="number" placeholder="Precio" />
          <input type="number" placeholder="Cantidad" />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}