const mysql = require('mysql2/promise');

// Configuración de la conexión
const db = mysql.createPool({
  host: process.env.DB_HOST || 'db', // Cambia 'localhost' por el nombre del servicio en docker-compose.yml
  user: process.env.DB_USER || 'root', // Configura el usuario correcto
  password: process.env.DB_PASSWORD || 'tu_contraseña', // Configura la contraseña correcta
  database: process.env.DB_NAME || 'tu_base_de_datos', // Configura la base de datos correcta
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Exporta la conexión para usarla en otros módulos
module.exports = db;
