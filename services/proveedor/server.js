const express = require('express');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const proveedorRoutes = require('./routes/proveedorRoutes');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000; // Puerto exclusivo para Proveedores

// Middlewares
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));

// Ruta para el servicio de Proveedores
app.use('/proveedores', proveedorRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor de proveedores ejecutándose en http://localhost:${PORT}`);
});
