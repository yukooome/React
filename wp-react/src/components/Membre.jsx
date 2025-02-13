import React from 'react';
import './Membre.css';

const Membre = () => {

  return (
    <div className="app-membre">
      {/* Hero Section */}
      <div className="hero-section-membre">
        <h1>Apprenez à Connaître les Membres du Corps Humain</h1>
        <p className="intro-text-membre">
          Explorez la structure des membres du corps humain, comprenant les bras, les jambes, les mains, et les pieds.
        </p>
      </div>

      {/* Section dédiée à la tête */}
      <div className="membre-section">
        <h3>1. La Tête</h3>
        <p>
          La tête contient les organes sensoriels les plus importants, notamment les yeux, le nez, la bouche et les oreilles, ainsi que le cerveau, qui est protégé par le crâne.
        </p>
        <div className="gallery-membre">
          <img src="../assets/tete1.jpg" alt="Anatomie de la tête" />
          <img src="../assets/tete2.jpg" alt="Vue latérale de la tête" />
        </div>
      </div>

      {/* Section dédiée aux bras */}
      <div className="membre-section">
        <h3>2. Les Bras</h3>
        <p>
          Les bras sont composés de trois segments : le bras supérieur (humérus), l'avant-bras (radius et ulna), et la main. Ils permettent une grande variété de mouvements grâce à l'articulation de l'épaule et du coude.
        </p>
        <div className="gallery-membre">
          <img src="../assets/bras1.jpg" alt="Anatomie du bras" />
          <img src="../assets/bras2.jpg" alt="Vue des muscles du bras" />
        </div>
      </div>

      {/* Section dédiée aux jambes */}
      <div className="membre-section">
        <h3>3. Les Jambes</h3>
        <p>
          Les jambes permettent de supporter le poids du corps et de marcher. Elles sont composées du fémur, du tibia, du péroné et du pied, avec des articulations majeures comme la hanche, le genou, et la cheville.
        </p>
        <div className="gallery-membre">
          <img src="../assets/jambe1.jpg" alt="Anatomie de la jambe" />
          <img src="../assets/jambe2.jpg" alt="Structure osseuse de la jambe" />
        </div>
      </div>

      {/* Section dédiée aux pieds */}
      <div className="membre-section">
        <h3>4. Les Pieds</h3>
        <p>
          Les pieds contiennent 26 os et jouent un rôle crucial dans l'équilibre et le déplacement. Ils sont divisés en trois parties : l'avant-pied, le médio-pied, et l'arrière-pied.
        </p>
        <div className="gallery-membre">
          <img src="../assets/pied1.jpg" alt="Anatomie du pied" />
          <img src="../assets/pied2.jpg" alt="Vue des os du pied" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-membre">
        <h3>Témoignages</h3>
        <blockquote>
          <p>
            "Connaître la structure des membres du corps humain m'a aidé à améliorer mes compétences."
          </p>
          <footer className="author">– Marie, illustratrice</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default Membre;


