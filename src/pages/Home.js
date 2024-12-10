// src/pages/Home.js
import React from "react";
import ListaArticulos from "../ListaArticulos";
import Categoria from "./Categoria"; 
import Proveedores from "./Proveedores"; 
import Contacto from "../components/Contacto"
import "./styles/Home.css";

const Home = () => {
    return (
        
        <div className="App">
            {/* Hero Section */}
                    <header className="hero">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>
                Bienvenido a <br />
                la Tienda de Suplementos de <br />
                <span className="sayagym">SAYAGYM</span>
                </h1>
                <p>Encuentra los mejores productos para potenciar tu entrenamiento.</p>
                <button className="btn-primary">Explorar Productos</button>
            </div>
            <div className="hero-images">
                <img src="/goku.png" alt="Goku" className="hero-image-left" />
                <img src="/jiren.png" alt="Vegeta" className="hero-image-right" />
            </div>
            </header>

            
            {/* Carrusel de Categorías */}
            <Categoria /> {/* Aquí añadimos el carrusel de categorías */}

                        {/* Lista de productos */}
            <section className="productos-section">
                <h2>Productos Destacados</h2>
                <ListaArticulos />
            </section>
                        {/* Sección de Proveedores */}
            <section className="proveedores-section">
                <h2>Marcas con las que trabajamos</h2>
                <Proveedores />  {/* Componente Proveedores */}
            </section>
            <section className="contacto-section">
                <Contacto />  {/* Componente Proveedores */}
            </section>

        </div>
    );
};

export default Home;
