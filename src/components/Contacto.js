import React from 'react';
import './Contacto.css'; // Importamos el archivo de estilo

const Contacto = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contáctanos</h2>

      <div className="contact-info">
        <div className="location">
          <h3>Ubicación</h3>
          <p>Av. Ejemplo 123, Ciudad, País</p>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
            Ver en Google Maps
          </a>
        </div>

        <div className="social-media">
          <h3>Síguenos en redes sociales</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
