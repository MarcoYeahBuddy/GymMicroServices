CREATE TABLE Categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(255)
);

CREATE TABLE Proveedor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    contacto VARCHAR(50),
    telefono VARCHAR(15),
    email VARCHAR(50),
    direccion TEXT,
    imagen VARCHAR(255)
);

CREATE TABLE Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    descripcion TEXT,
    costo DECIMAL(10, 2) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    imagen VARCHAR(255),
    categoria_id INT NOT NULL,
    proveedor_id INT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES Categoria(id),
    FOREIGN KEY (proveedor_id) REFERENCES Proveedor(id)
);