// src/pages/Reportes.js
import React, { useState } from 'react';
import "./styles/Reportes.css"; 

const Reportes = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(""); // Para saber qué tipo de formulario mostrar

  const toggleForm = (type) => {
    setFormType(type);
    setShowForm(!showForm);
  };

  return (
    <div className="reportes-container">
      <h2>Gestión de Productos, Categorías y Proveedores</h2>

      {/* Tabla de Productos */}
      <div className="tabla">
        <h3>Productos</h3>
        <button className="btn-add" onClick={() => toggleForm('producto')}>Añadir Producto</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí podrías mapear los productos en una lista, por ahora es un ejemplo */}
            <tr>
              <td>1</td>
              <td>Proteína Whey</td>
              <td>$30.00</td>
              <td>Suplementos</td>
              <td><button>Modificar</button> <button>Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla de Categorías */}
      <div className="tabla">
        <h3>Categorías</h3>
        <button className="btn-add" onClick={() => toggleForm('categoria')}>Añadir Categoría</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear las categorías */}
            <tr>
              <td>1</td>
              <td>Suplementos</td>
              <td><button>Modificar</button> <button>Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla de Proveedores */}
      <div className="tabla">
        <h3>Proveedores</h3>
        <button className="btn-add" onClick={() => toggleForm('proveedor')}>Añadir Proveedor</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Contacto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {/* Aquí puedes mapear los proveedores */}
            <tr>
              <td>1</td>
              <td>Proveedor A</td>
              <td>contacto@proveedora.com</td>
              <td><button>Modificar</button> <button>Eliminar</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mostrar el formulario según el tipo */}
      {showForm && <Formulario tipo={formType} closeForm={() => setShowForm(false)} />}
    </div>
  );
};

// Componente Formulario
const Formulario = ({ tipo, closeForm }) => {
  return (
    <div className="formulario-overlay">
      <div className="formulario-container">
        <h3>Añadir {tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h3>
        <form>
          {tipo === 'producto' && (
            <>
              <label>Nombre</label>
              <input type="text" placeholder="Nombre del producto" />
              <label>Precio</label>
              <input type="number" placeholder="Precio" />
              <label>Categoría</label>
              <input type="text" placeholder="Categoría" />
            </>
          )}
          {tipo === 'categoria' && (
            <>
              <label>Nombre</label>
              <input type="text" placeholder="Nombre de la categoría" />
            </>
          )}
          {tipo === 'proveedor' && (
            <>
              <label>Nombre</label>
              <input type="text" placeholder="Nombre del proveedor" />
              <label>Contacto</label>
              <input type="email" placeholder="Correo electrónico" />
            </>
          )}

          <button type="submit">Guardar</button>
          <button type="button" onClick={closeForm}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default Reportes;
