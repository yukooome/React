import React from 'react';
import './ApprendreBases.css';

const ApprendreBases = () => {
  return (
    <div className="app-teach">
      {/* Hero Section */}
      <div className="hero-section-teach">
        <h1>Bienvenue dans l'Apprentissage du Dessin</h1>
        <p className="intro-text-teach">
          Découvrez les bases du dessin et développez vos compétences artistiques étape par étape.
        </p>
      </div>

      {/* Blog Sections */}
      <div className="apprendre-section-teach">
        <h3>1. Les Formes de Base</h3>
        <p>
          Le dessin commence par les formes géométriques simples. Apprenez à dessiner des cercles, carrés, triangles, et d'autres formes de base. Ces formes sont les éléments de construction de tout dessin plus complexe. Par exemple, un visage peut être esquissé à l'aide de cercles pour les contours de la tête et des yeux.
        </p>
      </div>
      <div className="gallery-teach">
        <img src="../assets/position.jpg" alt="Exemple de dessin" />
        <img src="../assets/position.jpg" alt="Exemple de ligne et forme" />
        <img src="../assets/position.jpg" alt="Perspective en dessin" />
      </div>

      <div className="apprendre-section-teach">
        <h3>2. Les Lignes</h3>
        <p>
        Les lignes jouent un rôle fondamental dans la création des contours, des ombres et des détails d'un dessin. Il est essentiel d'apprendre à varier les types de lignes : qu'elles soient droites, courbes, fines ou épaisses. Une bonne maîtrise de ces variations vous permet de donner vie aux textures, d'ajouter de l'épaisseur et de créer de la profondeur dans vos œuvres. Savoir contrôler les lignes droites, courbes et diagonales vous aidera à affiner vos gestes, rendant vos dessins plus précis et expressifs.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="gallery-teach">
        <img src="../assets/position4.jpg" alt="Exemple de dessin" />
        <img src="../assets/position5.jpg" alt="Exemple de ligne et forme" />
        <img src="../assets/position6.jpg" alt="Perspective en dessin" />
      </div>

      <div className="apprendre-section-teach">
        <h3>3. La Perspective</h3>
        <p>
          La perspective est cruciale pour donner l'illusion de la profondeur sur une surface plate. Apprenez à dessiner en perspective à un ou deux points de fuite. Cela vous permettra de dessiner des objets et des scènes qui semblent réalistes et tridimensionnels, même sur une feuille de papier.
        </p>
      </div>
      <div className="gallery-teach">
        <img src="../assets/position7.jpg" alt="Exemple de dessin" />
        <img src="../assets/position8.jpg" alt="Exemple de ligne et forme" />
        <img src="../assets/position9.jpg" alt="Perspective en dessin" />
      </div>

      <div className="apprendre-section-teach">
  <h3>4. Ombres et Lumières</h3>
  <p>
    L'ombre et la lumière sont des éléments essentiels pour donner du volume et du réalisme à vos dessins. Apprenez à observer la direction de la lumière et à créer des ombres douces ou marquées pour mettre en relief vos formes. 
    La gestion correcte des valeurs tonales apporte de la profondeur à vos œuvres et aide à rendre les objets plus réalistes.
  </p>
</div>
<div className="gallery-teach">
  <img src="../assets/ombres1.jpg" alt="Exemple d'ombre et lumière" />
  <img src="../assets/ombres2.jpg" alt="Dégradé de lumière" />
  <img src="../assets/ombres3.jpg" alt="Effet de volume grâce aux ombres" />
</div>


<div className="apprendre-section-teach">
  <h3>5. L'Importance de l'Observation</h3>
  <p>
    Observer attentivement est une compétence essentielle pour tout artiste. Entraînez-vous à dessiner ce que vous voyez, et non ce que vous pensez voir. Prêtez attention aux proportions, aux angles, aux détails subtils et à la façon dont les objets interagissent avec leur environnement. Plus vous observez, plus vos dessins seront précis et réalistes.
  </p>
</div>
<div className="gallery-teach">
  <img src="../assets/observation1.jpg" alt="Étude d'observation" />
  <img src="../assets/observation2.jpg" alt="Croquis d'observation" />
  <img src="../assets/observation3.jpg" alt="Dessin de la réalité" />
</div>


      {/* Testimonial Section */}
      <div className="testimonials-teach">
        <h3>Témoignages</h3>
        <blockquote>
          <p>
            "Grâce à ces bases du dessin, j'ai pu améliorer mes compétences et
            comprendre les éléments clés du dessin avec une grande facilité. Le
            processus d'apprentissage est simple et progressif."
          </p>
          <footer className="author">– Sophie, Étudiante en Arts</footer>
        </blockquote>
      </div>

      {/* Cards Grid */}
      
      {/* <div className="grille-teach">
        <div className="carte-teach">
          <h4>Les Formes</h4>
          <p>Apprenez à maîtriser les formes simples pour construire des dessins complexes.</p>
        </div>
        <div className="carte-teach">
          <h4>Les Lignes</h4>
          <p>Les lignes sont un élément clé pour structurer vos dessins.</p>
        </div>
        <div className="carte-teach">
          <h4>La Perspective</h4>
          <p>Comprenez la perspective pour donner une illusion de profondeur à vos créations.</p>
        </div>
      </div> */}

            {/* Resource Links */}
            <div className="resources-teach">
        <h3>Ressources Supplémentaires</h3>
        <ul>
          <li><a href="#">Le guide complet des bases du dessin</a></li>
          <li><a href="#">Vidéo sur les techniques de perspective</a></li>
          <li><a href="#">Livres recommandés pour les débutants en dessin</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ApprendreBases;
