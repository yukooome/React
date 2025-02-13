import React from 'react';
import './Position.css';

const Position = () => {
  return (
    <div className="app-position">
      {/* Hero Section */}
      <div className="hero-section-position">
        <h1>Explorer les Différentes Positions en Dessin</h1>
        <p className="intro-text-position">
          Découvrez comment dessiner différentes positions du corps humain et capturer les angles et les postures dans vos œuvres.
        </p>
      </div>

      {/* Blog Sections */}
      <div className="apprendre-section-position">
        <h3>1. Position Anatomique de Base</h3>
        <p>
          La position anatomique de base est essentielle pour comprendre la structure du corps humain. C'est la posture la plus simple, utilisée comme référence pour dessiner d'autres poses. Voici ce qu'elle implique :
          <ul>
            <li><strong>Le corps debout :</strong> position verticale avec les bras droits et les jambes légèrement écartées.</li>
            <li><strong>Les bras le long du corps :</strong> les paumes tournées vers l'avant.</li>
            <li><strong>Les pieds joints :</strong> dirigés vers l'avant.</li>
          </ul>
          Dans cette position, les proportions du corps sont équilibrées, ce qui en fait un point de départ idéal pour de nombreux dessins anatomiques.
        </p>
      </div>
      <div className="gallery-position">
        <img src="../assets/position.jpg" alt="Position anatomique de base" />
        <img src="../assets/position.jpg" alt="Position debout standard" />
      </div>

      <div className="apprendre-section-position">
        <h3>2. Position Couchée (Décubitus)</h3>
        <p>
          Dessiner une personne allongée est un excellent moyen de comprendre comment le corps se repose sur une surface. Les positions couchées peuvent être :
          <ul>
            <li><strong>Décubitus dorsal :</strong> allongé sur le dos, la tête et les membres visibles avec des perspectives intéressantes.</li>
            <li><strong>Décubitus ventral :</strong> allongé sur le ventre, ce qui permet de montrer une autre dynamique du corps humain.</li>
          </ul>
          Ces positions sont particulièrement utiles pour étudier les courbes naturelles du corps et la manière dont la gravité affecte la silhouette.
        </p>
        <p><strong>Conseil pour les artistes :</strong> Il est important de bien maîtriser les angles de vue et la manière dont la lumière et l'ombre créent des formes sur le corps dans ces positions.</p>
      </div>
      <div className="gallery-position">
        <img src="../assets/position.jpg" alt="Décubitus dorsal" />
        <img src="../assets/position4.jpg" alt="Décubitus ventral" />
      </div>

      <div className="apprendre-section-position">
        <h3>3. Position Assise</h3>
        <p>
          Dessiner des personnes assises présente des défis uniques. Il est important de capturer les angles formés par les hanches, les genoux et les coudes. Voici quelques variantes :
          <ul>
            <li><strong>Assis droit :</strong> avec un dos bien droit et les jambes pliées à 90 degrés.</li>
            <li><strong>Assis détendu :</strong> où la personne peut se pencher légèrement en avant ou s'incliner d'un côté.</li>
            <li><strong>Assis en lotus :</strong> position utilisée en méditation, les jambes croisées et les pieds reposant sur les cuisses opposées.</li>
          </ul>
          Dessiner ces positions aide à comprendre l'équilibre, la posture et les tensions musculaires en fonction de l'assise.
        </p>
        <p><strong>Astuce pour les artistes :</strong> Pour des dessins plus dynamiques, étudier l'angle de la colonne vertébrale et la relation entre la position du bassin et des épaules est crucial.</p>
      </div>
      <div className="gallery-position">
        <img src="../assets/position5.jpg" alt="Position assise droite" />
        <img src="../assets/position6.jpg" alt="Position assise lotus" />
      </div>

      {/* Testimonial Section */}
      <div className="testimonials-position">
        <h3>Témoignages d'Artistes</h3>
        <blockquote>
          <p>
            "Comprendre les différentes positions du corps humain en dessin m'a permis de donner plus de vie et de mouvement à mes œuvres. C'est essentiel pour capturer la réalité."
          </p>
          <footer className="author">– Lucas, Illustrateur professionnel</footer>
        </blockquote>
      </div>

      {/* Cards Grid */}
      <div className="grille-position">
        <div className="carte-position">
          <h4>Position Debout</h4>
          <p>Apprenez à dessiner la position debout pour comprendre les proportions du corps et les perspectives.</p>
        </div>
        <div className="carte-position">
          <h4>Position Couchée</h4>
          <p>Étudiez les poses allongées pour mieux saisir les courbes et la dynamique du corps.</p>
        </div>
        <div className="carte-position">
          <h4>Position Assise</h4>
          <p>Maîtrisez la position assise et ses défis pour rendre les dessins plus réalistes et équilibrés.</p>
        </div>
      </div>

      {/* Resource Links */}
      <div className="resources-position">
        <h3>Ressources pour Artistes</h3>
        <ul>
          <li><a href="#">Guide des différentes poses en dessin</a></li>
          <li><a href="#">Exercices pour améliorer les perspectives de la figure humaine</a></li>
          <li><a href="#">Vidéo sur la capture des positions du corps humain</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Position;



