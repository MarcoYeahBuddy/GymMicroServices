const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/productos', productRoutes);

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor de productos corriendo en http://localhost:${PORT}`);
});
