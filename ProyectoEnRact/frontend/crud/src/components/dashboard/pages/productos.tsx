import { useEffect, useState } from "react";
import editar from '../../../assets/icons/editar.svg';
import eliminar from '../../../assets/icons/iconEliminar.svg';
import FormProducts from "../forms/FormProducts";
import Cargando from '../../loading';
import '../../../styles/productos.css';

interface Productos{
  id: number;
  nombre_producto: string;
  categoria: string;
  marca: string;
  precio: number;
  cantidad: number;
  estado_id: string;
  imagen: string;
  fecha_creacion: string;
}

export default function Productos() {
  const [productos, setProductos] = useState<Productos[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [metricas, setMetricas] = useState({
    TP: 0,
    PA: 0,
    PI: 0,
    PMV_positivo: 0,
    PMV_negativo: 0
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Obtener los productos al cargar la página
  useEffect(() => {
    setTimeout(() => {
      cargarDatos();
    }, 3000);
  }, []);

  const cargarDatos = async () =>{
    try{
      const [productosResponse, metricasResponse] = await Promise.all([
        
        fetch("http://localhost/ProyectoEnRact/backend/api/productos.php").then((res) => res.json()),
        fetch("http://localhost/ProyectoEnRact/backend/api/funciones.php").then((res) => res.json()),
      ]);

      setProductos(productosResponse);
      setMetricas(metricasResponse);
    }catch(error) {
      console.error("Error al cargar los datos", error);
    }finally{
      setIsLoading(false);
    }
  };

  const eliminarProducto = (id: number) => {
    if(window.confirm("Estás seguro de eliminar este producto?")) {
      const productoId = Number(id);
      fetch(`http://localhost/ProyectoEnRact/backend/api/eliminarProd.php`, {
        method: 'DELETE',

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id : productoId }),
      })
        .then((response) => response.json())
        .then((data) => {
            if(data.success){
              alert("Producto eliminado correctamente!");
              cargarDatos();
            }else{
              alert("Error al eliminar el producto.");
            }
     })
      .catch((error) => console.error("Error al eliminar el producto", error));
    }
  }
  // Renderizar los productos aquí...
  return (
    <div className="productos-container">

      <div className="title-container">
      <h3>Productos</h3>
      <span></span>
      <p>Indicadores y métricas</p>

      </div>
      <div className="indicadores">
        <div className="indicador ">
          {/* Productos activos */}
          <span className="descripcion">Total de productos:</span>
          <div className="total-productos">  
            <p>{metricas.TP}</p>
          </div>
        </div>
        <div className="indicador ">
          <span className="descripcion">Productos Activos</span>
          <div className="productos-activos">
            <p>{metricas.PA}</p>
          </div>
        </div>
        <div className="indicador ">
        <span className="descripcion">Productos inactivos</span>
          <div className="productos-inactivos">
            <p>{metricas.PI}</p>
          </div>
        </div>
        <div className="indicador ">
          <span className="descripcion">Productos +vendidos</span>
          <div className="productos-mas-vendidos">
            <p>{metricas.PMV_positivo}</p>
          </div>
        </div>
        <div className="indicador">
          <span className="descripcion">Productos -vendidos</span>
          <div className="productos-menos-vendidos">
            <p>{metricas.PMV_negativo}</p>
          </div>
        </div>
      </div>
      <div className="table-container">
        <div className="product-actions">
          <h2>Listado de Productos</h2>
          <button
            onClick={() => setMostrarFormulario(true)}
          >
            Agregar Producto
          </button>  {/* Botón para agregar productos */}
          {mostrarFormulario && <FormProducts cerrarFormulario={() => setMostrarFormulario(false)} />}
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Ccategoria</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Estado</th>
              <th>Imagen</th>
              <th>Fecha de creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí se renderizarán los datos de los productos */}
            { isLoading ? (
              <tr className="loading">
                <td><Cargando/></td>
              </tr>
            ) : productos.length > 0 ?(
                productos.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre_producto}</td>
                    <td>{producto.categoria}</td>
                    <td>{producto.marca}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.estado_id}</td>
                    <td><img src={`${producto.imagen}`} alt="Producto"/></td>
                    <td>{producto.fecha_creacion ? new Date(producto.fecha_creacion).toLocaleDateString() : "Fecha desconocida"}</td>
                    <td className="content-button">
                      <button className="editar"><img src={ editar }/></button>
                      <button 
                        className="eliminar"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        <img src={ eliminar } alt="eliminar producto"  />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10}>No hay productos registrados</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}