import React from 'react';
import './TechniquesAvancees.css';

const TechniquesAvancees = () => {
  return (
    <div className="app-teach-advanced">
      {/* Hero Section */}
      <div className="hero-section-advanced">
        <h1>Améliorez vos Techniques de Dessin</h1>
        <p className="intro-text-advanced">
          Découvrez des techniques avancées pour affiner vos compétences en dessin et atteindre un nouveau niveau.
        </p>
      </div>

      {/* Main Content */}
      <div className="advanced-techniques-section">
        <h3>1. Dessiner avec des Couleurs</h3>
        <p>
          Maîtriser l'utilisation des couleurs peut transformer un dessin simple en une œuvre d'art. Apprenez à utiliser la couleur pour ajouter des émotions, de la profondeur et de la dimension à vos créations.
        </p>
        <div className="gallery-advanced">
          <img src="image-couleurs.jpg" alt="Techniques de couleurs" />
        </div>
      </div>

      <div className="advanced-techniques-section">
        <h3>2. Le Dessin en Noir et Blanc</h3>
        <p>
          Le dessin en noir et blanc vous permet de vous concentrer sur les détails, les contrastes et les textures. Maîtriser le clair-obscur vous aide à jouer avec la lumière et l'ombre pour créer des œuvres saisissantes.
        </p>
        <div className="gallery-advanced">
          <img src="image-noir-et-blanc.jpg" alt="Dessin noir et blanc" />
        </div>
      </div>

      <div className="advanced-techniques-section">
        <h3>3. Dessin de Portraits Réalistes</h3>
        <p>
          Le portrait réaliste est un défi, mais avec les bonnes techniques, vous pouvez créer des dessins qui capturent la personnalité et les émotions des personnes. Explorez les proportions et les détails essentiels pour réussir un portrait.
        </p>
        <div className="gallery-advanced">
          <img src="image-portraits.jpg" alt="Portraits réalistes" />
        </div>
      </div>

      <div className="advanced-techniques-section">
        <h3>4. Dessin en 3D et Modélisation</h3>
        <p>
          Apprenez à donner une dimension réelle à vos dessins en maîtrisant la perspective et les ombres. Le dessin en 3D et la modélisation permettent de représenter des objets avec plus de profondeur et de réalisme.
        </p>
        <div className="gallery-advanced">
          <img src="image-perspective-3d.jpg" alt="Dessin en 3D" />
        </div>
      </div>

      {/* Tips Section */}
      <div className="advanced-tips">
        <p>
          La pratique est essentielle pour maîtriser ces techniques. N'ayez pas peur d'expérimenter et de trouver votre propre style. La persévérance est la clé pour progresser en tant qu'artiste.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="advanced-techniques-grid">
        <div className="advanced-technique-card">
          <h4>Les Couleurs</h4>
          <p>Apprenez à maîtriser les couleurs pour transformer vos dessins.</p>
        </div>
        <div className="advanced-technique-card">
          <h4>Le Clair-Obscur</h4>
          <p>Utilisez les contrastes de lumière et d'ombre pour créer des effets dramatiques.</p>
        </div>
        <div className="advanced-technique-card">
          <h4>Les Portraits</h4>
          <p>Maîtrisez le dessin réaliste des visages et des expressions.</p>
        </div>
      </div>

      {/* Resources Section */}
      <div className="resources-advanced">
        <h3>Ressources Supplémentaires</h3>
        <ul>
          <li><a href="#">Tutoriel vidéo sur les techniques de dessin réalistes</a></li>
          <li><a href="#">Guide complet sur les couleurs et les textures</a></li>
          <li><a href="#">Livres avancés pour les artistes en dessin</a></li>
        </ul>
      </div>
    </div>
  );
};

export default TechniquesAvancees;
