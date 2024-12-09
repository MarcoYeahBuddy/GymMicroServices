-- Inserciones para la tabla Categoria
INSERT INTO Categoria (nombre, descripcion, imagen) VALUES
('Ropa', 'Suplementos ricos en proteínas para el crecimiento muscular.', '/ropa.jpg'),
('Pesas', 'Suplementos de aminoacidos esenciales y ramificados.', '/pesas.jpg'),
('Suplementos', 'Vitaminas y minerales para una salud optima.', '/supl.png');

-- Inserciones para la tabla Proveedor
INSERT INTO Proveedor (nombre, contacto, telefono, email, direccion, imagen) VALUES
('Dragon Pharma', 'Carlos Lopez', '555-1234', 'contacto@nutrimax.com', 'Av. Siempre Viva 123, Ciudad Fit', '/dragon.jpg'),
('Nike', 'Ana Garcia', '555-5678', 'ventas@healthpro.com', 'Calle Salud 456, Ciudad Activa', '/nike.jpg'),
('Ronnie Colemman', 'Luis Martinez', '555-9012', 'info@fitsupplements.com', 'Boulevard Wellness 789, Ciudad Strong', '/RC.png');

-- Inserciones para la tabla Producto
INSERT INTO Producto (nombre, descripcion, costo, precio, stock, imagen, categoria_id, proveedor_id) VALUES
('Proteina Whey', 'Proteina en polvo para el crecimiento muscular, sabor chocolate.', 25.50, 40.00, 100, '/prote.webp', 3, 1),
('BCAA 2:1:1', 'Aminoacidos esenciales para recuperacion muscular.', 15.00, 25.00, 200, 'BCAA.jpg', 3, 2),
('Creatina Monohidratada', 'Suplemento para aumentar la fuerza y el rendimiento.', 10.00, 15.00, 150, '/creatina.jpg', 3, 3),
('Omega-3', 'Aceite de pescado para soporte cardiovascular.', 8.00, 12.00, 80, '/omega3.jpg', 3, 2);
