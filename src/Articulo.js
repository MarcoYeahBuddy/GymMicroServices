// src/Articulo.js
import React from 'react';
import './Articulo.css';

function Articulo({ imagen, titulo, descripcion, precio }) {
  return (
    <div className="articulo-card">
      <img src={imagen} alt={titulo} className="articulo-img" />
      <div className="articulo-content">
        <h3 className="articulo-title">{titulo}</h3>
        <p className="articulo-description">{descripcion}</p>
        <p className="articulo-price">Precio:{precio}Bs</p>
        <button className="articulo-btn">Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default Articulo;
