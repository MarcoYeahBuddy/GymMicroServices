const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos',
});

module.exports = db;
