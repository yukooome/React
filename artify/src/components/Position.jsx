import React from 'react';
import './Position.css';

const Position = () => {
  return (
    <div className="app-position">
      {/* Hero Section */}
      <div className="hero-section-position">
        <h1>Explorer les Différentes Positions</h1>
        <p className="intro-text-position">
          Découvrez comment dessiner différentes positions du corps humain et capturer les angles et les postures dans vos œuvres. Apprenez à comprendre les dynamiques de chaque position pour des dessins plus vivants et réalistes.
        </p>
      </div>

      {/* Blog Sections */}
      <div className="apprendre-section-position">
        <h3>1. Position Anatomique de Base</h3>
        <p>
          La position anatomique de base est essentielle pour comprendre la structure du corps humain. C'est la posture la plus simple, utilisée comme référence pour dessiner d'autres poses. Voici ce qu'elle implique :
          <ul>
            <li><strong>Le corps debout :</strong> position verticale avec les bras droits et les jambes légèrement écartées.</li>
            <li><strong>Les bras le long du corps :</strong> les paumes tournées vers l'avant, les coudes légèrement pliés.</li>
            <li><strong>Les pieds joints :</strong> dirigés vers l'avant, alignés avec les épaules.</li>
          </ul>
          Dans cette position, les proportions du corps sont équilibrées et offrent une vue de base pour dessiner avec précision les autres postures.
        </p>
        <p><strong>Conseil pour les artistes :</strong> Cette position sert de référence pour les autres poses. Apprenez à bien en maîtriser les proportions avant de vous aventurer dans des postures plus complexes.</p>
      </div>
      <div className="gallery-position">
        <img src="../assets/base1.jpg" alt="Position anatomique de base" />
        <img src="../assets/base2.jpg" alt="Position anatomique de base" />
        <img src="../assets/base3.jpg" alt="Position anatomique de base" />
      </div>

      <div className="apprendre-section-position">
        <h3>2. Position Couchée (Décubitus)</h3>
        <p>
          Dessiner une personne allongée est un excellent moyen de comprendre comment le corps repose sur une surface. Voici les deux principales positions couchées :
          <ul>
            <li><strong>Décubitus dorsal :</strong> allongé sur le dos, la tête et les membres visibles avec des perspectives intéressantes qui révèlent la courbure du dos et l'alignement des membres.</li>
            <li><strong>Décubitus ventral :</strong> allongé sur le ventre, cette pose crée des tensions et des ombres dynamiques, idéale pour étudier les muscles du dos et la position des bras et des jambes.</li>
          </ul>
          Ces positions offrent des perspectives uniques et sont parfaites pour explorer les courbes naturelles du corps humain et les effets de la gravité.
        </p>
        <p><strong>Conseil pour les artistes :</strong> Les angles de vue sont cruciaux dans ces poses. Travaillez à comprendre l'effet de la lumière et de l'ombre, car cela influencera grandement la dimension de votre dessin.</p>
      </div>
      <div className="gallery-position">
        {/* <img src="../assets/position.jpg" alt="Décubitus dorsal" /> */}
        {/* <img src="../assets/position.jpg" alt="Décubitus ventral" /> */}
      </div>

      <div className="apprendre-section-position">
        <h3>3. Position Assise</h3>
        <p>
          Dessiner des personnes assises présente des défis uniques. Il est important de capturer les angles formés par les hanches, les genoux et les coudes. Voici quelques variantes :
          <ul>
            <li><strong>Assis droit :</strong> avec un dos bien droit et les jambes pliées à 90 degrés, souvent associé à une posture formelle.</li>
            <li><strong>Assis détendu :</strong> la personne peut se pencher légèrement en avant ou s'incliner d'un côté, ce qui montre un relâchement musculaire et une posture plus naturelle.</li>
            <li><strong>Assis en lotus :</strong> position de méditation, les jambes croisées et les pieds reposant sur les cuisses opposées. Cette pose demande une attention particulière à l'équilibre du tronc et des jambes.</li>
          </ul>
          Dessiner ces positions permet de comprendre l'équilibre, la posture et la manière dont la gravité agit sur la structure du corps humain.
        </p>
        <p><strong>Astuce pour les artistes :</strong> Prêtez attention à la position de la colonne vertébrale et des hanches, car elles influencent l'angle des bras et des jambes. Ces éléments sont essentiels pour rendre un dessin plus réaliste.</p>
      </div>
      <div className="gallery-position">
        <img src="../assets/assis1.jpg" alt="Position assise droite" />
        <img src="../assets/assis2.jpg" alt="Position assise droite" />
      </div>

      {/* Special Positions Section */}
      <div className="apprendre-section-position">
        <h3>4. Position Spéciale</h3>
        <p>Les positions spéciales permettent de comprendre le corps humain selon différents angles de vue. Ces plans sont cruciaux pour analyser la structure du corps sous différents aspects.</p>

        <h4>4.1. Plan Frontal</h4>
        <p>
          Le plan frontal est une vue du corps humain de face, permettant de capturer la symétrie et l'équilibre entre les deux côtés du corps. Cette position est utilisée pour étudier les mouvements symétriques et l'alignement des membres.
        </p>
        <div className="gallery-position">
          {/* <img src="../assets/position1.jpg" alt="Plan frontal du corps" /> */}
          {/* <img src="../assets/position2.jpg" alt="Plan frontal du corps" /> */}
          <img src="../assets/position6.jpg" alt="Plan frontal du corps" />
          <img src="../assets/position7.jpg" alt="Plan frontal du corps" />
          <img src="../assets/position9.jpg" alt="Plan frontal du corps" />
          <img src="../assets/position10.jpg" alt="Plan frontal du corps" />
          <img src="../assets/position12.jpg" alt="Plan frontal du corps" />
        </div>

        <h4>4.2. Plan Sagittal</h4>
        <p>
          Le plan sagittal divise le corps humain en deux parties égales, de gauche à droite. Cette vue permet de capturer la profondeur du corps, en montrant l'alignement des structures musculaires et osseuses à partir de la perspective latérale.
        </p>
        <div className="gallery-position">
          <img src="../assets/position4.jpg" alt="Plan sagittal du corps" />
        </div>

        <h4>4.3. Plan Transversal</h4>
        <p>
          Le plan transversal divise le corps en parties supérieure et inférieure. Il permet de comprendre la perspective des parties du corps dans une vue en coupe, idéale pour étudier les organes internes et les structures sous-jacentes.
        </p>
        <div className="gallery-position">
        <img src="../assets/position3.jpg" alt="Plan transversal" />
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonials-position">
        <h3>Témoignages d'Artistes</h3>
        <blockquote>
          <p>
            "Comprendre les différentes positions du corps humain en dessin m'a permis de donner plus de vie et de mouvement à mes œuvres. C'est essentiel pour capturer la réalité, surtout dans les poses dynamiques."
          </p>
          <footer className="author">– Lucas, Illustrateur professionnel</footer>
        </blockquote>
      </div>

      {/* Section Ressources */}
      <div className="resources-position">
        <h3>Ressources Supplémentaires sur les Positions du Corps</h3>
        <ul>
          <li><a href="#">Tutoriel vidéo : Comment dessiner des postures dynamiques</a></li>
          <li><a href="#">Étude approfondie des plans anatomiques pour les artistes</a></li>
          <li><a href="#">Guide de dessin : Positions assises, couchées et debout</a></li>
          <li><a href="#">Outils pour esquisser rapidement des poses en action</a></li>
          <li><a href="#">Analyse des positions spéciales pour des perspectives complexes</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Position;
