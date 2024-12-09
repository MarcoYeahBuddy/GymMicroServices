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

// Obtener todos los proveedores
exports.getAllProveedores = (req, res) => {
    pool.query('SELECT * FROM Proveedor', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Obtener un proveedor por su ID
exports.getProveedorById = (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM Proveedor WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json(results[0]);
    });
};

// Crear un nuevo proveedor
exports.createProveedor = (req, res) => {
    const { nombre, contacto, telefono, email, direccion, imagen } = req.body;
    const query = 'INSERT INTO Proveedor (nombre, contacto, telefono, email, direccion, imagen) VALUES (?, ?, ?, ?, ?, ?)';
    pool.query(query, [nombre, contacto, telefono, email, direccion, imagen], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Proveedor creado', id: results.insertId });
    });
};

// Actualizar un proveedor
exports.updateProveedor = (req, res) => {
    const { id } = req.params;
    const { nombre, contacto, telefono, email, direccion, imagen } = req.body;
    const query = 'UPDATE Proveedor SET nombre = ?, contacto = ?, telefono = ?, email = ?, direccion = ?, imagen = ? WHERE id = ?';
    pool.query(query, [nombre, contacto, telefono, email, direccion, imagen, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json({ message: 'Proveedor actualizado' });
    });
};

// Eliminar un proveedor
exports.deleteProveedor = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM Proveedor WHERE id = ?';
    pool.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Proveedor no encontrado' });
        }
        res.status(200).json({ message: 'Proveedor eliminado' });
    });
};
