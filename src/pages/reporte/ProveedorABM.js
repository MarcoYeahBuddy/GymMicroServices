import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ProveedorABM.css'; // Crea un archivo de estilo para este componente

const ProveedorABM = () => {
  const [proveedores, setProveedores] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nombre: '',
    contacto: '',
    telefono: '',
    email: '',
    direccion: '',
    imagen: '', // Cambiado a string
  });
  const [editMode, setEditMode] = useState(false);

  // Cargar proveedores al montar el componente
  useEffect(() => {
    fetchProveedores();
  }, []);

  // Obtener proveedores desde la API
  const fetchProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:5002/proveedores');
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al cargar proveedores:', error);
    }
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Guardar proveedor (crear o actualizar)
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:5002/proveedores/${formData.id}`, formData);
        alert('Proveedor actualizado correctamente');
      } else {
        await axios.post('http://localhost:5002/proveedores', formData);
        alert('Proveedor creado correctamente');
      }
      resetForm();
      fetchProveedores();
    } catch (error) {
      console.error('Error al guardar el proveedor:', error);
    }
  };

  // Eliminar proveedor
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
      try {
        await axios.delete(`http://localhost:5002/proveedores/${id}`);
        alert('Proveedor eliminado correctamente');
        fetchProveedores();
      } catch (error) {
        console.error('Error al eliminar proveedor:', error);
      }
    }
  };

  // Cargar datos de un proveedor para editar
  const handleEdit = (proveedor) => {
    setFormData({ ...proveedor });
    setEditMode(true);
  };

  // Limpiar formulario
  const resetForm = () => {
    setFormData({
      id: null,
      nombre: '',
      contacto: '',
      telefono: '',
      email: '',
      direccion: '',
      imagen: '', // Reinicia el valor del campo de imagen
    });
    setEditMode(false);
  };

  return (
    <div className="proveedor-abm-container">
      <h2>{editMode ? 'Editar Proveedor' : 'Crear Proveedor'}</h2>
      <form onSubmit={handleSave} className="proveedor-form">
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="contacto"
          value={formData.contacto}
          onChange={handleChange}
          placeholder="Contacto"
        />
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          placeholder="Dirección"
        ></textarea>
        {/* Cambiado a campo de texto */}
        <input
          type="text"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          placeholder="URL de la imagen"
        />
        <button type="submit">
          {editMode ? 'Actualizar' : 'Crear'}
        </button>
        {editMode && <button type="button" onClick={resetForm}>Cancelar</button>}
      </form>

      <h2>Lista de Proveedores</h2>
      <table className="proveedores-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Imagen (URL)</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id}>
              <td>{proveedor.nombre}</td>
              <td>{proveedor.contacto}</td>
              <td>{proveedor.telefono}</td>
              <td>{proveedor.email}</td>
              <td>{proveedor.direccion}</td>
              {/* Muestra la URL en lugar de una imagen */}
              <td>{proveedor.imagen}</td>
              <td>
                <button onClick={() => handleEdit(proveedor)}>Editar</button>
                <button onClick={() => handleDelete(proveedor.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedorABM;
