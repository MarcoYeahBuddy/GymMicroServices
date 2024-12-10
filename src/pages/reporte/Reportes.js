// src/pages/Reportes.js
import React, { useState } from 'react';
import "./styles/Reportes.css"; 
import CategoriaABM from './CategoriaABM';
import ProveedorABM from './ProveedorABM';
import ProductoABM from './ProductoABM';

const Reportes = () => {
  const [activeTab, setActiveTab] = useState('categorias');

  return (
    <div className="reportes-container">
      <h1 className="reportes-title">Panel de Administración</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'categorias' ? 'active' : ''}`}
          onClick={() => setActiveTab('categorias')}
        >
          Categorías
        </button>
        <button
          className={`tab-button ${activeTab === 'proveedores' ? 'active' : ''}`}
          onClick={() => setActiveTab('proveedores')}
        >
          Proveedores
        </button>
        <button
          className={`tab-button ${activeTab === 'productos' ? 'active' : ''}`}
          onClick={() => setActiveTab('productos')}
        >
          Productos
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'categorias' && <CategoriaABM />}
        {activeTab === 'proveedores' && <ProveedorABM />}
        {activeTab === 'productos' && <ProductoABM />}
      </div>
    </div>
  );
};

export default Reportes;
