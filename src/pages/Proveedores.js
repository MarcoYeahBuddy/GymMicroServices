import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Proveedores.css'; // Asegúrate de crear este archivo de estilo

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  // Función para obtener los datos de proveedores desde la API
  const fetchProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:5002/proveedores');
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al obtener los proveedores:', error);
    }
  };

  useEffect(() => {
    fetchProveedores();
  }, []); // Se ejecuta una vez al cargar el componente

  return (
    <div className="proveedores-container">
      <div className="proveedores-carousel">
        {proveedores.map((proveedor) => (
          <div key={proveedor.id} className="hexagon-container">
            <div className="hexagon">
              <img
                src={proveedor.imagen} // La imagen debe ser la URL del campo `imagen` en la base de datos
                alt={proveedor.nombre}
                className="hexagon-img"
              />
            </div>
            <p>{proveedor.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proveedores;
