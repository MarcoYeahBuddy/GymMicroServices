// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
/*import Productos from "./pages/Productos";*/
import Categorias from "./pages/Categoria";
import Proveedores from "./pages/Proveedores";
import Reportes from "./pages/reporte/Reportes";

const App = () => {
  return (
    <Router> {/* Asegúrate de que el Router envuelve todo */}
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
