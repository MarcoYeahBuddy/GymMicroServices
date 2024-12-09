// src/pages/Categoria.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilo base
import "swiper/css/pagination"; // Si usas paginación
import "swiper/css/navigation"; // Si usas navegación

const Categoria = () => {
    // Estado para almacenar las categorías
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hacer la solicitud al backend para obtener las categorías
        axios
            .get("http://localhost:5001/categorias") // Reemplaza con la URL de tu API de categoría
            .then((response) => {
                setCategorias(response.data); // Actualiza el estado con los datos de las categorías
                setLoading(false); // Desactiva el loading cuando los datos sean obtenidos
            })
            .catch((err) => {
                setError("Error al cargar las categorías");
                setLoading(false);
            });
    }, []); // El segundo argumento vacío asegura que solo se ejecuta una vez al montar el componente

    // Si está cargando, mostrar un mensaje de loading
    if (loading) {
        return <p>Cargando categorías...</p>;
    }

    // Si ocurre un error, mostrarlo
    if (error) {
        return <p>{error}</p>;
    }

    return (

        <section className="categoria-section">
            <h2>Categorías de Productos</h2>
            <div className="carousel-wrapper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {categorias.map((categoria) => (
                        <SwiperSlide key={categoria.id}>
                            <div className="categoria-card">
                                <div className="categoria-image-wrapper">
                                    <img
                                        src={`http://localhost:3000/${categoria.imagen}`} // URL de la imagen (ajusta la ruta si es necesario)
                                        alt={categoria.nombre}
                                        className="categoria-image"
                                    />
                                    <div className="categoria-text">
                                        <h3>{categoria.nombre}</h3>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="carousel-guide-left">←</div>
                <div className="carousel-guide-right">→</div>
            </div>
        </section>
    );
};

export default Categoria;
