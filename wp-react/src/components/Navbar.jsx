// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';  // Stylisation de la Navbar

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li><Link to="/">Accueil</Link></li>
//         <li><Link to="/bases">Apprendre les bases</Link></li>
//         <li><Link to="/techniques-avancees">Techniques Avancées</Link></li>
//         <li><Link to="/anatomie">Anatomie</Link></li>
//         <li><Link to="/membre">Membre</Link></li>
//         <li><Link to="/position">Position</Link></li>

//         <li><Link to="/artistes">Artistes</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // État pour savoir si le menu est ouvert ou non
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">

      {/* Menu burger */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Liens de navigation */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
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
