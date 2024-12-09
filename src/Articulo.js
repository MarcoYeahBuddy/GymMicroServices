import React from 'react';
import './Articulo.css';

function Articulo({ imagen, titulo, descripcion, precio, stock, categoria, proveedor }) {
  return (
    <div className="articulo">
      <img 
        src={imagen || 'default-placeholder.png'} // Usa una imagen predeterminada si "imagen" es nulo
        alt={titulo || 'Artículo sin título'} 
        className="articulo-imagen" 
      />
      <div className="articulo-detalles">
        <h3>{titulo || 'Artículo sin título'}</h3>
        <p>{descripcion || 'No hay descripción disponible.'}</p>
        <p><strong>Precio:</strong> {precio ? precio.toFixed(2) : 'No disponible'}Bs. </p>
        <p><strong>Stock:</strong> {stock != null ? stock : 'No disponible'}</p>
        <p><strong>Categoría:</strong> {categoria || 'No especificada'}</p>
        <p><strong>Proveedor:</strong> {proveedor || 'No especificado'}</p>
      </div>
    </div>
  );
}

export default Articulo;
