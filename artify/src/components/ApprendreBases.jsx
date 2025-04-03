import React, { useState } from 'react';
import './ApprendreBases.css';

const ApprendreBases = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalText, setModalText] = useState('');

  const openModal = (src, text) => {
    setModalImage(src);
    setModalText(text);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app-teach">
      {/* Section Héro */}
      <div className="hero-section-teach">
        <h1>Découverte des bases</h1>
        <p className="intro-text-teach">
          Découvrez les bases du dessin et développez vos compétences artistiques étape par étape.
        </p>
      </div>

      {/* Section 1: Les Formes de Base */}
      <div className="apprendre-section-teach">
        <h3>1. Les Formes de Base</h3>
        <p>
          Le dessin commence par les formes géométriques simples. Apprenez à dessiner des cercles, carrés, triangles, et d'autres formes de base. 
          Ces formes sont les éléments de construction de tout dessin plus complexe. Par exemple, un visage peut être esquissé à l'aide de cercles pour les contours de la tête et des yeux.
        </p>
        <div className="gallery-teach">
          <img src="../assets/cercle.jpg" alt="Cercle" onClick={() => openModal('../assets/cercle.jpg', 'Un cercle, base de nombreuses formes en dessin.')} />
          <img src="../assets/cube.jpg" alt="Cube" onClick={() => openModal('../assets/cube.jpg', 'Un cube, essentiel pour comprendre la perspective.')} />
          <img src="../assets/triangle.jpg" alt="Triangle" onClick={() => openModal('../assets/triangle.jpg', 'Un triangle, utile pour les compositions dynamiques.')} />
        </div>
      </div>

      {/* Section 2: Les Lignes */}
      <div className="apprendre-section-teach">
        <h3>2. Les Lignes</h3>
        <p>
          Les lignes jouent un rôle fondamental dans la création des contours, des ombres et des détails d'un dessin. 
          Il est essentiel d'apprendre à varier les types de lignes : qu'elles soient droites, courbes, fines ou épaisses. 
          Une bonne maîtrise de ces variations vous permet de donner vie aux textures, d'ajouter de l'épaisseur et de créer de la profondeur dans vos œuvres.
        </p>
        <div className="gallery-teach">
          <img src="../assets/ligne.jpg" alt="Ligne" onClick={() => openModal('../assets/ligne.jpg', 'Les lignes servent à définir contours et textures.')} />
          <img src="../assets/courbe.jpg" alt="Courbe" onClick={() => openModal('../assets/courbe.jpg', 'Les courbes apportent douceur et fluidité.')} />
          <img src="../assets/serpentin.jpg" alt="Serpentin" onClick={() => openModal('../assets/serpentin.jpg', 'Les lignes serpentines créent du mouvement et du rythme.')} />
        </div>
      </div>

      {/* Section 3: La Perspective */}
      <div className="apprendre-section-teach">
        <h3>3. La Perspective</h3>
        <p>
          La perspective est cruciale pour donner l'illusion de la profondeur sur une surface plate. 
          Apprenez à dessiner en perspective à un ou deux points de fuite. Cela vous permettra de dessiner des objets et des scènes 
          qui semblent réalistes et tridimensionnels, même sur une feuille de papier.
        </p>
        <div className="gallery-teach">
          {/* <img src="../assets/perspective1.jpg" alt="Perspective 1 point" onClick={() => openModal('../assets/perspective1.jpg', 'Perspective à un point de fuite.')} /> */}
          {/* <img src="../assets/perspective2.jpg" alt="Perspective 2 points" onClick={() => openModal('../assets/perspective2.jpg', 'Perspective à deux points de fuite pour des formes plus dynamiques.')} /> */}
        </div>
      </div>

      {/* Section 4: Ombres et Lumières */}
      <div className="apprendre-section-teach">
        <h3>4. Ombres et Lumières</h3>
        <p>
          L'ombre et la lumière sont des éléments essentiels pour donner du volume et du réalisme à vos dessins. 
          Apprenez à observer la direction de la lumière et à créer des ombres douces ou marquées pour mettre en relief vos formes.
        </p>
        <div className="gallery-teach">
          <img src="../assets/ombre1.jpg" alt="Ombre douce" onClick={() => openModal('../assets/ombre1.jpg', 'L’ombre renforce la perception du volume.')} />
          <img src="../assets/ombre2.jpg" alt="Ombre contrastée" onClick={() => openModal('../assets/ombre2.jpg', 'La lumière et l’ombre créent des contrastes intéressants.')} />
        </div>
      </div>

      {/* Section 5: L'Importance de l'Observation */}
      <div className="apprendre-section-teach">
        <h3>5. L'Importance de l'Observation</h3>
        <p>
          Observer attentivement est une compétence essentielle pour tout artiste. 
          Entraînez-vous à dessiner ce que vous voyez, et non ce que vous pensez voir. 
          Prêtez attention aux proportions, aux angles, aux détails subtils et à la façon dont les objets interagissent avec leur environnement.
        </p>
      </div>

      {/* Section Témoignages */}
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

      {/* Section Ressources Supplémentaires */}
      <div className="resources-teach">
        <h3>Ressources Supplémentaires</h3>
        <ul>
          <li><a href="#">Le guide complet des bases du dessin</a></li>
          <li><a href="#">Vidéo sur les techniques de perspective</a></li>
          <li><a href="#">Livres recommandés pour les débutants en dessin</a></li>
        </ul>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Zoom" />
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprendreBases;












// import React from 'react';
// import './ApprendreBases.css';

// const ApprendreBases = () => {
//   return (
//     <div className="app-teach">
//       {/* Section Héro */}
//       <div className="hero-section-teach">
//         <h1>Découverte des bases</h1>
//         <p className="intro-text-teach">
//           Découvrez les bases du dessin et développez vos compétences artistiques étape par étape.
//         </p>
//       </div>

//       {/* Section 1: Les Formes de Base */}
//       <div className="apprendre-section-teach">
//         <h3>1. Les Formes de Base</h3>
//         <p>
//           Le dessin commence par les formes géométriques simples. Apprenez à dessiner des cercles, carrés, triangles, et d'autres formes de base. Ces formes sont les éléments de construction de tout dessin plus complexe. Par exemple, un visage peut être esquissé à l'aide de cercles pour les contours de la tête et des yeux.
//         </p>
//         <div className="gallery-teach">
//           <img src="../assets/cercle.jpg" alt="Exemple de dessin" />
//           <img src="../assets/cube.jpg" alt="Exemple de ligne et forme" />
//           <img src="../assets/triangle.jpg" alt="Perspective en dessin" />
//         </div>
//       </div>

//       {/* Section 2: Les Lignes */}
//       <div className="apprendre-section-teach">
//         <h3>2. Les Lignes</h3>
//         <p>
//           Les lignes jouent un rôle fondamental dans la création des contours, des ombres et des détails d'un dessin. Il est essentiel d'apprendre à varier les types de lignes : qu'elles soient droites, courbes, fines ou épaisses. Une bonne maîtrise de ces variations vous permet de donner vie aux textures, d'ajouter de l'épaisseur et de créer de la profondeur dans vos œuvres.
//         </p>
//         <div className="gallery-teach">
//         <img src="../assets/ligne.jpg" alt="Exemple de dessin" />
//           <img src="../assets/courbe.jpg" alt="Exemple de ligne et forme" />
//           <img src="../assets/serpentin.jpg" alt="Perspective en dessin" />
//         </div>
//       </div>

//       {/* Section 3: La Perspective */}
//       <div className="apprendre-section-teach">
//         <h3>3. La Perspective</h3>
//         <p>
//           La perspective est cruciale pour donner l'illusion de la profondeur sur une surface plate. Apprenez à dessiner en perspective à un ou deux points de fuite. Cela vous permettra de dessiner des objets et des scènes qui semblent réalistes et tridimensionnels, même sur une feuille de papier.
//         </p>
//         <div className="gallery-teach">
//         {/* <img src="../assets/position.jpg" alt="Exemple de dessin" /> */}
//           {/* <img src="../assets/position.jpg" alt="Exemple de ligne et forme" /> */}
//           {/* <img src="../assets/position.jpg" alt="Perspective en dessin" /> */}
//         </div>
//       </div>

//       {/* Section 4: Ombres et Lumières */}
//       <div className="apprendre-section-teach">
//         <h3>4. Ombres et Lumières</h3>
//         <p>
//           L'ombre et la lumière sont des éléments essentiels pour donner du volume et du réalisme à vos dessins. Apprenez à observer la direction de la lumière et à créer des ombres douces ou marquées pour mettre en relief vos formes.
//         </p>
//         <div className="gallery-teach">
//         <img src="../assets/ombre1.jpg" alt="Exemple de dessin" />
//           <img src="../assets/ombre2.jpg" alt="Exemple de ligne et forme" />
//           {/* <img src="../assets/position.jpg" alt="Perspective en dessin" /> */}
//         </div>
//       </div>

//       {/* Section 5: L'Importance de l'Observation */}
//       <div className="apprendre-section-teach">
//         <h3>5. L'Importance de l'Observation</h3>
//         <p>
//           Observer attentivement est une compétence essentielle pour tout artiste. Entraînez-vous à dessiner ce que vous voyez, et non ce que vous pensez voir. Prêtez attention aux proportions, aux angles, aux détails subtils et à la façon dont les objets interagissent avec leur environnement.
//         </p>
//         <div className="gallery-teach">
//           {/* <img src="../assets/observation1.jpg" alt="Étude d'observation" /> */}
//           {/* <img src="../assets/observation2.jpg" alt="Croquis d'observation" /> */}
//           {/* <img src="../assets/observation3.jpg" alt="Dessin de la réalité" /> */}
//         </div>
//       </div>

//       {/* Section Témoignages */}
//       <div className="testimonials-teach">
//         <h3>Témoignages</h3>
//         <blockquote>
//           <p>
//             "Grâce à ces bases du dessin, j'ai pu améliorer mes compétences et
//             comprendre les éléments clés du dessin avec une grande facilité. Le
//             processus d'apprentissage est simple et progressif."
//           </p>
//           <footer className="author">– Sophie, Étudiante en Arts</footer>
//         </blockquote>
//       </div>

//       {/* Section Ressources Supplémentaires */}
//       <div className="resources-teach">
//         <h3>Ressources Supplémentaires</h3>
//         <ul>
//           <li><a href="#">Le guide complet des bases du dessin</a></li>
//           <li><a href="#">Vidéo sur les techniques de perspective</a></li>
//           <li><a href="#">Livres recommandés pour les débutants en dessin</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ApprendreBases;







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