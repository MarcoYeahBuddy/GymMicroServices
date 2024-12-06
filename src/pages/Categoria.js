// src/pages/Categoria.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilo base
import "swiper/css/pagination"; // Si usas paginación
import "swiper/css/navigation"; // Si usas navegación

const Categoria = () => {
    // Datos de categorías
    const categorias = [
        { id: 1, nombre: "Suplementos", imagen: "/supl.png" },
        { id: 2, nombre: "Ropa", imagen: "/ropa.jpg" },
        { id: 3, nombre: "Pesas", imagen: "/pesas.jpg" },
        { id: 4, nombre: "Accesorios", imagen: "/acc.png" },
    ];


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
                                  <img src={categoria.imagen} alt={categoria.nombre} className="categoria-image" />
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
