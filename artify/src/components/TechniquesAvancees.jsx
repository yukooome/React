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
      {/* <div className="advanced-techniques-section">
        <h3>1. Dessiner avec des Couleurs</h3>
        <p>
          Maîtriser l'utilisation des couleurs peut transformer un dessin simple en une œuvre d'art. Apprenez à utiliser la couleur pour ajouter des émotions, de la profondeur et de la dimension à vos créations.
        </p>
        <div className="gallery-advanced">
          <img src="./assets/color2.JPG" alt="Techniques de couleurs" />
          <img src="./assets/color1.JPG" alt="Techniques de couleurs" />
          <img src="./assets/color3.JPG" alt="Techniques de couleurs" />
          <img src="./assets/color4.JPG" alt="Techniques de couleurs" />
          <img src="./assets/color6.JPG" alt="Techniques de couleurs" />
        </div>
      </div> */}


<div className="advanced-techniques-section">
        <h3>1. Dessiner avec des Couleurs</h3>
        <p>
          Maîtriser l'utilisation des couleurs peut transformer un dessin simple en une œuvre d'art. Apprenez à utiliser la couleur pour ajouter des émotions, de la profondeur et de la dimension à vos créations.
        </p>

        {/* Sous-catégorie pour les dessins verticaux */}
        <h4>1.1 Dessins Verticaux</h4>
        <p className="gallery-description">
          Les dessins verticaux offrent une perspective allongée qui peut ajouter de la hauteur et de la structure à votre composition. Ils sont souvent utilisés pour représenter des sujets tels que des objets allongés ou des paysages verticaux.
        </p>
        <div className="gallery-advanced vertical">

          <img src="./assets/color1.JPG" alt="Techniques de couleurs" />
          <img src="./assets/color2.JPG" alt="Techniques de couleurs" />
          {/* <img src="./assets/color3.JPG" alt="Techniques de couleurs" /> */}
          {/* <img src="./assets/color4.JPG" alt="Techniques de couleurs" /> */}
          <img src="./assets/color6.JPG" alt="Techniques de couleurs" />
        </div>

        {/* Sous-catégorie pour les dessins horizontaux */}
        <h4>1.2 Dessins Horizontaux</h4>
        <p className="gallery-description">
          Les dessins horizontaux offrent une perspective large idéale pour les paysages ou les scènes panoramiques. Cette orientation permet de capturer une vision plus étendue et immersive.
        </p>
        <div className="gallery-advanced horizontal">
          <img src="./assets/color_horizontal1.jpg" alt="Dessin couleur horizontal" />
          <img src="./assets/color_horizontal2.jpg" alt="Dessin couleur horizontal" />
        </div>

        {/* Sous-catégorie pour les dessins carrés */}
        <h4>1.3 Dessins Carrés</h4>
        <p className="gallery-description">
          Les dessins carrés sont parfaits pour les compositions équilibrées et symétriques. Ils permettent de jouer avec l'harmonie et l'équilibre dans vos œuvres, en offrant un cadre naturel pour les portraits, les natures mortes et autres sujets centrés.
        </p>
        <div className="gallery-advanced square">
          <img src="./assets/poster1.jpg" alt="Dessin couleur carré" />
          <img src="./assets/poster2.jpg" alt="Dessin couleur carré" />
          <img src="./assets/poster3.jpg" alt="Dessin couleur carré" />
        </div>
      </div>

      <div className="advanced-techniques-section">
  <h3>2. Le Dessin en Noir et Blanc</h3>
  <p>
    Le dessin en noir et blanc vous permet de vous concentrer sur les détails, les contrastes et les textures. Maîtriser le clair-obscur vous aide à jouer avec la lumière et l'ombre pour créer des œuvres saisissantes.
  </p>

  {/* Sous-catégorie pour les dessins verticaux */}
  <h4>2.1 Dessins Verticaux</h4>
  <p className="gallery-description">
    Les dessins verticaux se prêtent particulièrement bien aux portraits, capturant la stature et l'expression des sujets. Cette orientation met en valeur les formes humaines et les objets allongés, offrant une perspective unique sur les détails et la composition.
  </p>
  <div className="gallery-advanced vertical">
    <img src="./assets/nb6.jpg" alt="Dessin noir et blanc vertical" />
  </div>

  {/* Sous-catégorie pour les dessins horizontaux */}
  <h4>2.2 Dessins Horizontaux</h4>
  <p className="gallery-description">
    Les dessins horizontaux sont souvent utilisés pour des paysages ou des scènes larges. Ils offrent une perspective panoramique, permettant de capturer davantage de détails dans un seul plan et de créer un sentiment d'immensité ou de profondeur.
  </p>
  <div className="gallery-advanced horizontal">
    <img src="./assets/nb1.jpg" alt="Dessin noir et blanc" />
    <img src="./assets/nb2.jpg" alt="Dessin noir et blanc" />
    <img src="./assets/nb3.jpg" alt="Dessin noir et blanc" />
    <img src="./assets/nb4.jpg" alt="Dessin noir et blanc" />  
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
      {/* <div className="advanced-techniques-grid">
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
      </div> */}

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
