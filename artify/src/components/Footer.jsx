import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();  // Récupérer l'année actuelle

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Artify. Tous droits réservés.</p>
        <p>
          <a href="/contact">Contact</a> | <a href="/terms">Termes et Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
