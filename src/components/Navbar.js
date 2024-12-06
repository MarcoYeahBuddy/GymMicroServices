// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de React Router DOM
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="SAYAGYM" />
        <h1>SAYAGYM</h1>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {/* Reemplaza <a> por <Link> y define las rutas */}
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
        <li><Link to="/proveedores">Proveedores</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
