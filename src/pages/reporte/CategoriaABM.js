// src/pages/reporte/CategoriaABM.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/CategoriaABM.css";

const CategoriaABM = () => {
  // Estados
  const [categorias, setCategorias] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(""); // 'add' o 'edit'
  const [categoriaData, setCategoriaData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  // Efecto para cargar categorías
  useEffect(() => {
    fetchCategorias();
  }, []);

  // Funciones para CRUD
  const fetchCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:5001/categorias/");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

  const addCategoria = async () => {
    try {
      const response = await axios.post("http://localhost:5001/categorias/", categoriaData);
      setCategorias([...categorias, response.data]);
      toggleForm("");
    } catch (error) {
      console.error("Error al agregar categoría:", error);
    }
  };

  const updateCategoria = async () => {
    try {
      await axios.put(`http://localhost:5001/categorias/${categoriaData.id}`, categoriaData);
      setCategorias(
        categorias.map((cat) =>
          cat.id === categoriaData.id ? { ...categoriaData } : cat
        )
      );
      toggleForm("");
    } catch (error) {
      console.error("Error al actualizar categoría:", error);
    }
  };

  const deleteCategoria = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/categorias/${id}`);
      setCategorias(categorias.filter((cat) => cat.id !== id));
    } catch (error) {
      console.error("Error al eliminar categoría:", error);
    }
  };

  // Manejo del formulario
  const toggleForm = (type, categoria = null) => {
    setFormType(type);
    setShowForm(!showForm);
    if (type === "edit" && categoria) {
      setCategoriaData(categoria);
    } else {
      setCategoriaData({ id: "", nombre: "", descripcion: "", imagen: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoriaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "add") {
      addCategoria();
    } else if (formType === "edit") {
      updateCategoria();
    }
  };

  // Renderización
  return (
    <div className="tabla">
      <h3>Categorías</h3>
      <button className="btn-add" onClick={() => toggleForm("add")}>
        Añadir Categoría
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>{categoria.descripcion}</td>
              <td>
                <img src={categoria.imagen} alt={categoria.nombre} width="50" />
              </td>
              <td>
                <button onClick={() => toggleForm("edit", categoria)}>Modificar</button>
                <button onClick={() => deleteCategoria(categoria.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de formulario */}
      {showForm && (
        <div className="formulario-overlay">
          <div className="formulario-container">
            <h3>{formType === "add" ? "Añadir Categoría" : "Modificar Categoría"}</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={categoriaData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Descripción</label>
                <input
                  type="text"
                  name="descripcion"
                  value={categoriaData.descripcion}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Imagen</label>
                <input
                  type="text"
                  name="imagen"
                  value={categoriaData.imagen}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">
                {formType === "add" ? "Añadir" : "Actualizar"}
              </button>
              <button type="button" onClick={() => toggleForm("")}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriaABM;
