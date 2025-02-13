import React from 'react';
import './Anatomie.css';

const Anatomie = () => {

  return (
    <div className="app-anat">
      {/* Hero Section */}
      <div className="hero-section-anat">
        <h1>Bienvenue dans l'Apprentissage de l'Anatomie Humaine</h1>
        <p className="intro-text-anat">
          Explorez les bases de l'anatomie humaine, comprenez la structure du corps et apprenez les fonctions essentielles des os et des muscles.
        </p>
      </div>

      {/* Blog Sections */}
      <div className="apprendre-section-anat">
        <h3>1. Le Squelette Humain</h3>
        <p>
          Le squelette humain est constitué de 206 os. Il se divise en deux grandes parties : 
          <ul>
            <li><strong>Squelette axial :</strong> composé du crâne, de la colonne vertébrale, des côtes et du sternum. Il protège les organes vitaux comme le cerveau, le cœur et les poumons.</li>
            <li><strong>Squelette appendiculaire :</strong> composé des membres supérieurs et inférieurs ainsi que des ceintures scapulaire et pelvienne qui les relient au tronc.</li>
          </ul>
          Chaque os a une forme et une fonction spécifiques, comme les os longs (ex. : fémur) qui soutiennent le poids, ou les os plats (ex. : crâne) qui protègent le cerveau.
        </p>
        <p><strong>Importance du dessin :</strong> Dessiner le squelette humain dans différentes perspectives et positions aide à comprendre la relation entre les os et la manière dont ils supportent le corps, protègent les organes et permettent le mouvement.</p>
      </div>
      <div className="gallery-anat">
        <img src="../assets/squelette1.jpg" alt="Vue du squelette humain" />
        <img src="../assets/squelette2.jpg" alt="Vue du squelette axial" />
      </div>

      <div className="apprendre-section-anat">
        <h3>2. Les Muscles</h3>
        <p>
          Le corps humain contient plus de 600 muscles. Ces muscles sont responsables du mouvement, de la posture et de l'absorption des chocs. Il existe trois types de muscles :
          <ul>
            <li><strong>Muscles squelettiques :</strong> ce sont les muscles que nous contrôlons volontairement, comme les biceps, les quadriceps, et les muscles du tronc.</li>
            <li><strong>Muscles lisses :</strong> ces muscles se trouvent dans les organes internes (comme l'estomac, les intestins) et agissent de manière involontaire.</li>
            <li><strong>Muscle cardiaque :</strong> ce muscle compose le cœur et permet la circulation du sang dans tout le corps.</li>
          </ul>
          Ces muscles sont répartis dans tout le corps et sont responsables des mouvements complexes nécessaires pour des activités quotidiennes telles que marcher, courir, soulever des objets, etc.
        </p>
        <p><strong>Importance du dessin :</strong> Lorsque vous dessinez les muscles, vous comprenez non seulement leur emplacement dans le corps, mais aussi leur fonction. Par exemple, dessiner les muscles du bras en action (comme les biceps et triceps) vous permet de mieux appréhender les mouvements du coude et du poignet.</p>
      </div>
      <div className="gallery-anat">
        <img src="../assets/muscles1.jpg" alt="Vue des muscles squelettiques" />
        <img src="../assets/muscles2.jpg" alt="Muscles et leurs fonctions" />
      </div>

      <div className="apprendre-section-anat">
        <h3>3. Les Articulations</h3>
        <p>
          Les articulations sont les zones où deux ou plusieurs os se rencontrent. Elles permettent le mouvement des différentes parties du corps. Il en existe plusieurs types :
          <ul>
            <li><strong>Articulations mobiles :</strong> comme celles du genou, du coude, ou de l'épaule, qui permettent des mouvements complexes.</li>
            <li><strong>Articulations semi-mobiles :</strong> comme celles des vertèbres, qui permettent un mouvement limité.</li>
            <li><strong>Articulations immobiles :</strong> comme celles du crâne, qui ne permettent pas de mouvement.</li>
          </ul>
          La santé des articulations est essentielle pour maintenir une bonne mobilité et éviter les blessures.
        </p>
        <p><strong>Importance du dessin :</strong> Les articulations jouent un rôle essentiel dans le mouvement humain. En dessinant des articulations dans différentes positions, vous pouvez visualiser comment elles facilitent les mouvements complexes du corps humain.</p>
      </div>
      <div className="gallery-anat">
        <img src="../assets/articulations1.jpg" alt="Articulations humaines" />
        <img src="../assets/articulations2.jpg" alt="Vue des articulations mobiles" />
      </div>

      {/* Testimonial Section */}
      <div className="testimonials-anat">
        <h3>Témoignages</h3>
        <blockquote>
          <p>
            "L'apprentissage de l'anatomie humaine m'a permis de mieux comprendre le fonctionnement du corps et les bases du mouvement. Cela a été essentiel pour ma carrière de Mangaka."
          </p>
          <footer className="author">– Jean, Mangaka</footer>
        </blockquote>
      </div>

      {/* Cards Grid */}
      <div className="grille-anat">
        <div className="carte-anat">
          <h4>Les Os</h4>
          <p>Découvrez les différents types d'os et leur rôle crucial dans la structure du corps.</p>
        </div>
        <div className="carte-anat">
          <h4>Les Muscles</h4>
          <p>Apprenez comment les muscles permettent le mouvement et le maintien de la posture.</p>
        </div>
        <div className="carte-anat">
          <h4>Les Articulations</h4>
          <p>Explorez comment les articulations permettent la flexibilité et la mobilité du corps humain.</p>
        </div>
      </div>

            {/* Resource Links */}
            <div className="resources-anat">
        <h3>Ressources Supplémentaires</h3>
        <ul>
          <li><a href="#">Guide complet de l'anatomie humaine</a></li>
          <li><a href="#">Vidéo sur le fonctionnement des articulations</a></li>
          <li><a href="#">Livres de référence pour les étudiants en anatomie</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Anatomie;

