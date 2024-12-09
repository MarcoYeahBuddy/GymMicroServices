import React, { useEffect, useState } from 'react';
import Articulo from './Articulo';
import './ListaArticulos.css';
import axios from 'axios';

function ListaArticulos() {
  const [articulos, setArticulos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los productos desde la API
  const fetchArticulos = async () => {
    try {
      const response = await axios.get('http://localhost:5003/productos');
      setArticulos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los artículos:', error);
      setLoading(false);
    }
  };

  // Cargar los artículos al montar el componente
  useEffect(() => {
    fetchArticulos();
  }, []);

  return (
    <div className="lista-articulos">
      <h2>Lista de Artículos</h2>
      {loading ? (
        <p>Cargando artículos...</p>
      ) : articulos.length > 0 ? (
        articulos.map((articulo) => (
          <Articulo
            key={articulo.id}
            imagen={articulo.imagen || '/placeholder.jpg'}
            titulo={articulo.nombre}
            descripcion={articulo.descripcion}
            precio={parseFloat(articulo.precio)} // Convertir a número
            stock={articulo.stock}
            categoria={articulo.categoria}
            proveedor={articulo.proveedor}
          />
        ))
        
      ) : (
        <p>No se encontraron artículos.</p>
      )}
    </div>
  );
}

export default ListaArticulos;
