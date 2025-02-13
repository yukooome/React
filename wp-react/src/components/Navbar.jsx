import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Stylisation de la Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-logo">
        <Link to="/" className="logo">
          <span>🖌️</span> Apprendre à Dessiner
        </Link>
      </div> */}
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/bases">Apprendre les bases</Link></li>
        <li><Link to="/techniques-avancees">Techniques Avancées</Link></li>

        <li><Link to="/anatomie">Anatomie</Link></li>
        <li><Link to="/membre">Membre</Link></li>
        <li><Link to="/position">Position</Link></li>

        <li><Link to="/artistes">Artistes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
