import React from 'react';
import './Artistes.css'; 

const Artistes = () => {
  return (
    <div className="app-artiste">
      {/* Hero Section */}
      <div className="hero-section-artiste">
        <h1>Découvrez les Œuvres d'Artistes</h1>
        <p className="intro-text-artiste">
          Explorez les créations fascinantes de plusieurs artistes spécialisés dans le dessin numérique.
        </p>
      </div>

      {/* Section dédiée à l'artiste 1 */}
      <div className="artiste-section">
        <h2>1. Yukooo-art</h2>
        <p>
          Yukooo-art est un artiste numérique spécialisé dans les environnements futuristes et les mondes fantastiques. Ses œuvres vous transportent dans des univers parallèles avec une maîtrise remarquable des couleurs et de la lumière.
        </p>
        <div className="gallery-artiste">
          <img src="../assets/yukooo1.jpg" alt="Œuvre de Yukooo-art" />
          <img src="../assets/yukooo2.jpg" alt="Œuvre de Yukooo-art" />
          <img src="../assets/yukooo3.jpg" alt="Œuvre de Yukooo-art" />
        </div>
      </div>

      {/* Section dédiée à l'artiste 2 */}
      <div className="artiste-section">
        <h2>2. Superfresh</h2>
        <p>
          Superfresh est connu pour ses illustrations vibrantes inspirées de la culture pop et du street art. Il combine des éléments modernes et rétro pour créer des compositions uniques.
        </p>
        <div className="gallery-artiste">
          <img src="../assets/superfresh1.jpg" alt="Œuvre de Superfresh" />
          <img src="../assets/superfresh2.jpg" alt="Œuvre de Superfresh" />
          <img src="../assets/superfresh3.jpg" alt="Œuvre de Superfresh" />
        </div>
      </div>

      {/* Section dédiée à l'artiste 3 */}
      <div className="artiste-section">
        <h2>3. Alakazam</h2>
        <p>
          Alakazam est un artiste qui explore la frontière entre le rêve et la réalité. Ses créations mêlent des formes géométriques et abstraites pour évoquer des émotions profondes à travers des visuels hypnotiques.
        </p>
        <div className="gallery-artiste">
          <img src="../assets/alakazam1.jpg" alt="Œuvre de Alakazam" />
          <img src="../assets/alakazam2.jpg" alt="Œuvre de Alakazam" />
          <img src="../assets/alakazam3.jpg" alt="Œuvre de Alakazam" />
        </div>
      </div>

      {/* Section dédiée à l'artiste 4 */}
      <div className="artiste-section">
        <h2>4. Pxhood</h2>
        <p>
          Pxhood crée des œuvres ultra-détaillées en noir et blanc, jouant avec les contrastes et la lumière pour capturer l'essence des personnages et des paysages qu'il imagine.
        </p>
        <div className="gallery-artiste">
          <img src="../assets/pxhood1.jpg" alt="Œuvre de Pxhood" />
          <img src="../assets/pxhood2.jpg" alt="Œuvre de Pxhood" />
          <img src="../assets/pxhood3.jpg" alt="Œuvre de Pxhood" />
        </div>
      </div>
    </div>
  );
};

export default Artistes;
