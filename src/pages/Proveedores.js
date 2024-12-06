// src/pages/Proveedores.js
import React from 'react';
import './styles/Proveedores.css'; // Asegúrate de crear este archivo de estilo

const proveedores = [
  { id: 1, name: 'DRAGON PHARMA', img: '/dragon.jpg' },
  { id: 2, name: 'MONSTER', img: '/monter.jpg' },
  { id: 3, name: 'RONNIE COLEMMAN', img: '/RC.png' },
  { id: 4, name: 'RYSE', img: '/ryse.jpg' },
  { id: 5, name: 'NIKE', img: '/nike.jpg' },
];

const Proveedores = () => {
  return (
    <div className="proveedores-container">
      
      <div className="proveedores-carousel">
        {proveedores.map((proveedor) => (
          <div key={proveedor.id} className="hexagon-container">
            <div className="hexagon">
              <img src={proveedor.img} alt={proveedor.name} className="hexagon-img" />
            </div>
            <p>{proveedor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proveedores;
