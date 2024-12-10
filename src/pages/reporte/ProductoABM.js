import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/ProductoABM.css';

function ProductoABM() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    descripcion: '',
    costo: '',
    precio: '',
    stock: '',
    categoria_id: '',
    proveedor_id: '',
  });
  const [editingId, setEditingId] = useState(null);

  // Obtener productos desde la API
  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:5003/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error.response || error.message);
    }
  };

  // Obtener categorías desde la API
  const fetchCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:5001/categorias');
      setCategorias(response.data);
    } catch (error) {
      console.error('Error al obtener categorías:', error.response || error.message);
    }
  };

  // Obtener proveedores desde la API
  const fetchProveedores = async () => {
    try {
      const response = await axios.get('http://localhost:5002/proveedores');
      setProveedores(response.data);
    } catch (error) {
      console.error('Error al obtener proveedores:', error.response || error.message);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchProductos();
    fetchCategorias();
    fetchProveedores();
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Asegurarse de que los valores numéricos sean tratados como números
    const formData = {
      ...form,
      costo: parseFloat(form.costo),  // Convertir a número
      precio: parseFloat(form.precio), // Convertir a número
      stock: parseInt(form.stock, 10)  // Convertir a entero
    };
  
    try {
      if (editingId) {
        const response = await axios.put(`http://localhost:5003/productos/${editingId}`, formData);
        console.log('Producto actualizado:', response.data);
      } else {
        const response = await axios.post('http://localhost:5003/productos', formData);
        console.log('Producto creado:', response.data);
      }
      fetchProductos();
      setForm({
        nombre: '',
        descripcion: '',
        costo: '',
        precio: '',
        stock: '',
        categoria_id: '',
        proveedor_id: '',
      });
      setEditingId(null);
    } catch (error) {
        // Mostrar detalles del error en consola para diagnóstico
        console.error("Error al guardar producto:");
        console.error("Mensaje del error:", error.message);
    
        // Verificar si el error tiene una respuesta del servidor
        if (error.response) {
          console.error("Error en la respuesta del servidor:");
          console.error("Código de estado:", error.response.status); // Código de estado HTTP
          console.error("Datos de la respuesta:", error.response.data); // Detalles adicionales sobre el error
          console.error("Encabezados de la respuesta:", error.response.headers); // Encabezados de la respuesta
        } else if (error.request) {
          // Si no hubo respuesta del servidor, verificar la solicitud
          console.error("Error en la solicitud (sin respuesta del servidor):");
          console.error("Datos de la solicitud:", error.request);
        } else {
          // Si ocurre un error desconocido
          console.error("Error desconocido:", error.message);
        }
    
        // Mostrar un mensaje amigable para el usuario
        alert(`Error al guardar producto: ${error.message}`);
      }
      
  };
  

  // Manejar edición
  const handleEdit = (producto) => {
    setForm({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      costo: producto.costo,
      precio: producto.precio,
      stock: producto.stock,
      categoria_id: producto.categoria_id,
      proveedor_id: producto.proveedor_id,
    });
    setEditingId(producto.id);
  };

  // Manejar eliminación
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5003/productos/${id}`);
      fetchProductos(); // Refrescar lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar producto:', error.response || error.message);
    }
  };

  return (
    <div className="producto-abm">
      <h2>Gestión de Productos</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="producto-form">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
        />
        <input
          type="number"
          step="0.01"
          name="costo"
          placeholder="Costo"
          value={form.costo}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.01"
          name="precio"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
        />

        {/* ComboBox Categoría */}
        <select
          name="categoria_id"
          value={form.categoria_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar Categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>

        {/* ComboBox Proveedor */}
        <select
          name="proveedor_id"
          value={form.proveedor_id}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar Proveedor</option>
          {proveedores.map((proveedor) => (
            <option key={proveedor.id} value={proveedor.id}>
              {proveedor.nombre}
            </option>
          ))}
        </select>

        <button type="submit">{editingId ? 'Actualizar' : 'Agregar'}</button>
      </form>

      {/* Tabla de productos */}
      <table className="producto-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Costo</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.costo}</td>
              <td>${producto.precio}</td>
              <td>{producto.stock}</td>
              <td>{producto.categoria}</td>
              <td>{producto.proveedor}</td>
              <td>
                <button onClick={() => handleEdit(producto)}>Editar</button>
                <button onClick={() => handleDelete(producto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductoABM;
