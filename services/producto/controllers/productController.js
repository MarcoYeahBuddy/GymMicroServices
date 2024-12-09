const db = require('./db'); // Asegúrate de tener configurado un archivo db.js para la conexión a la base de datos

// Obtener todos los productos con los nombres de las categorías y proveedores
const getAllProducts = async (req, res) => {
  try {
    const query = `
      SELECT p.id, p.nombre, p.descripcion, p.costo, p.precio, p.stock, p.imagen, 
             c.nombre AS categoria, 
             pr.nombre AS proveedor
      FROM Producto p
      JOIN Categoria c ON p.categoria_id = c.id
      JOIN Proveedor pr ON p.proveedor_id = pr.id;
    `;
    const [rows] = await db.execute(query);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `
      SELECT p.id, p.nombre, p.descripcion, p.costo, p.precio, p.stock, p.imagen, 
             c.nombre AS categoria, 
             pr.nombre AS proveedor
      FROM Producto p
      JOIN Categoria c ON p.categoria_id = c.id
      JOIN Proveedor pr ON p.proveedor_id = pr.id
      WHERE p.id = ?;
    `;
    const [rows] = await db.execute(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id } = req.body;
    const query = `
      INSERT INTO Producto (nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const [result] = await db.execute(query, [nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id]);
    res.status(201).json({ message: 'Producto creado exitosamente', id: result.insertId });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ message: 'Error al crear el producto' });
  }
};

// Actualizar un producto existente
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id } = req.body;
    const query = `
      UPDATE Producto 
      SET nombre = ?, descripcion = ?, costo = ?, precio = ?, stock = ?, imagen = ?, categoria_id = ?, proveedor_id = ?
      WHERE id = ?;
    `;
    await db.execute(query, [nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id, id]);
    res.json({ message: 'Producto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ message: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `DELETE FROM Producto WHERE id = ?;`;
    await db.execute(query, [id]);
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
