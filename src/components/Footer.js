// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TiendaFit. Todos los derechos reservados.</p>
      <ul className="footer-links">
        <li><a href="#terminos">Términos y condiciones</a></li>
        <li><a href="#privacidad">Política de privacidad</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
