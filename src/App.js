// src/App.js
import React from 'react';
import ListaArticulos from './ListaArticulos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Bienvenido a la Tienda de Suplementos de Gimnasio</h1>
          <p>Encuentra los mejores productos para potenciar tu entrenamiento.</p>
          <button className="btn-primary">Explorar Productos</button>
        </div>
      </header>

      {/* Lista de productos */}
      <section className="productos-section">
        <h2>Productos Destacados</h2>
        <ListaArticulos />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
