import React from 'react';

import "./App.css"


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ApprendreBases from './components/ApprendreBases';
import TechniquesAvancees from './components/TechniquesAvancees';
// Importez d'autres composants de pages ici.

import Artistes from './components/Artistes';
import Anatomie from './components/Anatomie';
import Membre from './components/Membre';
import Position from './components/Position';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DifferencesDessins from './components/DifferencesDessins';

const Carte = ({ titre, description, icone, lien }) => {
  return (
    <div className="carte">
      <div className="icone">{icone}</div>
      <h2>{titre}</h2>
      <p>{description}</p>
      <Link to={lien} className="explorer">
        Explorer Plus &rarr;
      </Link>
    </div>
  );
};

const Home = () => {
  const cartes = [
    {
      titre: "Apprendre les bases",
      description: "Commencez votre aventure en dessin en apprenant les bases, comme les formes, les lignes et les perspectives.",
      icone: "✏️",
      lien: "/bases"
    },
    {
      titre: "Améliorez vos techniques",
      description: "Découvrez des techniques avancées pour affiner vos compétences en dessin et atteindre un nouveau niveau.",
      icone: "🎨",
      lien: "/techniques-avancees"
    },
    {
      titre: "Anatomie artistique",
      description: "Comprenez les bases de l'anatomie pour dessiner des personnages réalistes avec des proportions précises.",
      icone: "👤",
      lien: "/anatomie"
    },

    {
      titre: "Membre",
      description: "Explorez les différentes parties du corps humain dans le dessin.",
      icone: "🖐️", 
      lien: "/membre"
    },
    {
      titre: "Position",
      description: "Apprenez à dessiner des personnages dans différentes positions et angles.",
      icone: "🧍", 
      lien: "/position"
    },
    {
      titre: "Artistes",
      description: "Apprenez à dessiner en découvrant le travail d'artiste, en tout, genre, qui partage leur univers avec nous.",
      icone: "💻",
      lien: "/artistes"
    }
    
  ];

  return (
<div className="app">
      <div className="hero-section">
        <h1>Apprenez à Dessiner avec Artify</h1>
        <p className="intro-text">
          Que vous soyez un débutant ou un artiste en quête de perfectionnement, explorez nos ressources pour améliorer vos compétences en dessin.
        </p>
      </div>

      {/* <div></div> */}

      

      <div className="grille">
        {cartes.map((carte, index) => (
          <Carte key={index} {...carte} />
        ))}
      </div>

            {/* Ajout de la nouvelle section ici */}
            <DifferencesDessins />
            
    </div>


  );
};






const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bases" element={<ApprendreBases />} />
        <Route path="/techniques-avancees" element={<TechniquesAvancees />} />
        <Route path="/artistes" element={<Artistes />} />
        <Route path="/anatomie" element={<Anatomie />} />
        <Route path="/membre" element={<Membre />} />
        <Route path="/position" element={<Position />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
