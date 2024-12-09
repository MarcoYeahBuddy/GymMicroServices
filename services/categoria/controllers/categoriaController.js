// /services/categoria/controllers/categoriaController.js

const mysql = require('mysql2');

// Configuración de la conexión a la base de datos (deberías tener esta configuración en un archivo .env)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    debug: true // Habilitar logs para depuración
  });
  

// Función para obtener todas las categorías
exports.getAllCategorias = (req, res) => {
  pool.query('SELECT * FROM Categoria', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Función para obtener una categoría por su ID
exports.getCategoriaById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM Categoria WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.status(200).json(results[0]);
  });
};

// Función para crear una nueva categoría
exports.createCategoria = (req, res) => {
  const { nombre, descripcion, imagen } = req.body;
  const query = 'INSERT INTO Categoria (nombre, descripcion, imagen) VALUES (?, ?, ?)';
  pool.query(query, [nombre, descripcion, imagen], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Categoría creada', id: results.insertId });
  });
};

// Función para actualizar una categoría
exports.updateCategoria = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, imagen } = req.body;
  const query = 'UPDATE Categoria SET nombre = ?, descripcion = ?, imagen = ? WHERE id = ?';
  pool.query(query, [nombre, descripcion, imagen, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.status(200).json({ message: 'Categoría actualizada' });
  });
};

// Función para eliminar una categoría
exports.deleteCategoria = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM Categoria WHERE id = ?';
  pool.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.status(200).json({ message: 'Categoría eliminada' });
  });
};
