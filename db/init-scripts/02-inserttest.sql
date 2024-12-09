-- Inserciones para la tabla Categoria
INSERT INTO Categoria (nombre, descripcion, imagen) VALUES
('Ropa', 'Suplementos ricos en proteínas para el crecimiento muscular.', '/ropa.jpg'),
('Pesas', 'Suplementos de aminoácidos esenciales y ramificados.', '/pesas.jpg'),
('Suplementos', 'Vitaminas y minerales para una salud óptima.', '/supl.png');

-- Inserciones para la tabla Proveedor
INSERT INTO Proveedor (nombre, contacto, telefono, email, direccion, imagen) VALUES
('NutriMax', 'Carlos López', '555-1234', 'contacto@nutrimax.com', 'Av. Siempre Viva 123, Ciudad Fit', 'imagenes/proveedores/nutrimax.jpg'),
('HealthPro', 'Ana García', '555-5678', 'ventas@healthpro.com', 'Calle Salud 456, Ciudad Activa', 'imagenes/proveedores/healthpro.jpg'),
('FitSupplements', 'Luis Martínez', '555-9012', 'info@fitsupplements.com', 'Boulevard Wellness 789, Ciudad Strong', 'imagenes/proveedores/fitsupplements.jpg');

-- Inserciones para la tabla Producto
INSERT INTO Producto (nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id) VALUES
('Proteína Whey', 'Proteína en polvo para el crecimiento muscular, sabor chocolate.', 25.50, 40.00, 100, 'imagenes/productos/proteina_whey.jpg', 1, 1),
('BCAA 2:1:1', 'Aminoácidos esenciales para recuperación muscular.', 15.00, 25.00, 200, 'imagenes/productos/bcaa.jpg', 2, 2),
('Multivitamínico', 'Vitaminas esenciales para mejorar la salud general.', 10.00, 15.00, 150, 'imagenes/productos/multivitaminico.jpg', 3, 3),
('Creatina Monohidratada', 'Suplemento para aumentar la fuerza y el rendimiento.', 12.50, 20.00, 120, 'imagenes/productos/creatina.jpg', 1, 1),
('Omega-3', 'Aceite de pescado para soporte cardiovascular.', 8.00, 12.00, 80, 'imagenes/productos/omega3.jpg', 3, 2);
