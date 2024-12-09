// /services/categoria/server.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const categoriaRoutes = require('./routes/categoriaRoutes');
const app = express();

// Configuración de entorno
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());


// Rutas
app.use('/categorias', categoriaRoutes);

// Puerto donde escuchará el microservicio
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servicio de Categorías corriendo en el puerto ${PORT}`);
});
