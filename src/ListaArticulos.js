// src/ListaArticulos.js
import React from 'react';
import Articulo from './Articulo';
import './ListaArticulos.css';

function ListaArticulos() {
  const articulos = [
    {
      id: 1,
      imagen: "/prote.webp",
      titulo: 'Proteína Whey',
      descripcion: 'Proteína de alta calidad para aumentar masa muscular.',
      precio: 45.99,
    },
    {
      id: 2,
      imagen: "/creatina.jpg",
      titulo: 'Creatina',
      descripcion: 'Suplemento para mejorar el rendimiento en entrenamientos.',
      precio: 19.99,
    },
    {
      id: 3,
      imagen: "/BCAA.jpg",
      titulo: 'BCAA',
      descripcion: 'Aminoácidos esenciales para la recuperación muscular.',
      precio: 25.99,
    },

  ];

  return (
    <div className="lista-articulos">
      {articulos.map((articulo) => (
        <Articulo
          key={articulo.id}
          imagen={articulo.imagen}
          titulo={articulo.titulo}
          descripcion={articulo.descripcion}
          precio={articulo.precio}
        />
      ))}
    </div>
  );
}

export default ListaArticulos;
