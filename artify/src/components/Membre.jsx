import React from 'react';
import './Membre.css';

const Membre = () => {
  return (
    <div className="app-membre">
      {/* Hero Section */}
      <div className="hero-section-membre">
        <h1>Connaître les Membres du Corps</h1>
        <p className="intro-text-membre">
          Explorez la structure des membres du corps humain, comprenant la tête, les bras, les mains, les jambes, les pieds, le torse et le bassin.
        </p>
      </div>

      {/* Section dédiée à la tête */}
      <div className="membre-section">
        <h3>1. La Tête</h3>
        <p>
          La tête contient les organes sensoriels les plus importants : les yeux, le nez, la bouche et les oreilles, ainsi que le cerveau, protégé par le crâne. C’est une zone cruciale pour les fonctions cognitives, sensorielles et la communication.
        </p>
        <div className="gallery-membre">
          <img src="../assets/tete1.jpg" alt="Anatomie de la tête" />
          <img src="../assets/tete2.jpg" alt="Vue latérale de la tête" />
          <img src="../assets/tete3.jpg" alt="Anatomie de la tête" />
          <img src="../assets/tete4.jpg" alt="Vue latérale de la tête" />
          <img src="../assets/tete5.jpg" alt="Anatomie de la tête" />

        </div>
      </div>

      {/* Section dédiée aux bras */}
      <div className="membre-section">
  <h3>2. Les Bras</h3>
  <p>
    Les bras sont constitués de trois segments : l'humérus, le radius et l'ulna. Ils permettent une large gamme de mouvements grâce aux articulations de l'épaule et du coude.
  </p>
  <div className="gallery-membre">
    <img src="../assets/bras1.jpg" alt="Anatomie du bras" />
    <img src="../assets/bras2.jpg" alt="Vue des muscles du bras" />
    <img src="../assets/bras3.jpg" alt="Vue des muscles du bras" />
  </div>

  {/* Sous-section dédiée aux parties du bras */}
  <h4>2.1 Les Épaules</h4>
  <p>
    L'épaule est une articulation complexe qui relie le bras au tronc. Elle comprend la clavicule, l'omoplate et l'humérus, et permet une grande amplitude de mouvement.
  </p>

  <h4>2.2 L'Avant-bras</h4>
  <p>
    L'avant-bras est composé de deux os : le radius et l'ulna. Il joue un rôle essentiel dans la rotation du poignet et dans les mouvements de flexion et d'extension du bras.
  </p>

  <h4>2.3 Le Coude</h4>
  <p>
    Le coude est une articulation charnière qui permet la flexion et l'extension de l'avant-bras par rapport au bras. Il est formé par la jonction de l'humérus, du radius et de l'ulna.
  </p>

  <h4>2.4 Les Mains</h4>
  <p>
    Les mains sont composées de 27 os et sont essentielles pour la préhension. Elles permettent une grande précision de mouvement, grâce aux doigts et à l'articulation du poignet.
  </p>
  <div className="gallery-membre">
    <img src="../assets/main1.jpg" alt="Anatomie de la main" />
    <img src="../assets/main2.jpg" alt="Vue des muscles de la main" />
    <img src="../assets/main3.jpg" alt="Anatomie de la main" />
    <img src="../assets/main4.jpg" alt="Vue des muscles de la main" />
  </div>
</div>


      {/* Section dédiée aux jambes */}
      <div className="membre-section">
    <h3>3. Les Jambes</h3>
    <p>
        Les jambes soutiennent le corps et facilitent la marche. Elles sont composées du fémur, du tibia, du péroné et du pied. Les articulations de la hanche, du genou et de la cheville permettent des mouvements complexes.
    </p>

    <h4>3.1 Les Cuisses</h4>
    <p>
        La cuisse est la partie de la jambe située entre la hanche et le genou. Son principal os, le fémur, est le plus long et le plus résistant du corps humain. La cuisse contient également plusieurs muscles puissants : le quadriceps, qui permet l’extension du genou, les ischio-jambiers, qui assurent la flexion du genou et l’extension de la hanche, ainsi que les adducteurs, qui rapprochent la cuisse du corps.
    </p>
    <div className="gallery-membre">
        {/* <img src="../assets/cuisse1.jpg" alt="Anatomie de la cuisse" /> */}
        {/* <img src="../assets/cuisse2.jpg" alt="Musculature de la cuisse" /> */}
    </div>

    <h4>3.2 La Rotule</h4>
    <p>
        La rotule, ou patella, est un petit os situé à l’avant du genou. Elle joue un rôle essentiel dans la stabilisation de l’articulation du genou et facilite l’action du quadriceps lors de l’extension de la jambe. Cet os protège également l’articulation contre les chocs et les pressions excessives.
    </p>
    <div className="gallery-membre">
        {/* <img src="../assets/rotule1.jpg" alt="Anatomie de la rotule" /> */}
        {/* <img src="../assets/rotule2.jpg" alt="Structure de la rotule" /> */}
    </div>

    <h4>3.3 Les Molets</h4>
    <p>
        Les mollets sont constitués principalement du muscle gastrocnémien et du muscle soléaire. Ils jouent un rôle clé dans la propulsion lors de la marche, de la course et du saut. Ces muscles sont reliés au talon par le tendon d’Achille, qui est le plus grand et le plus robuste du corps humain.
    </p>
    <div className="gallery-membre">
        {/* <img src="../assets/molet1.jpg" alt="Anatomie du mollet" /> */}
        {/* <img src="../assets/molet2.jpg" alt="Muscles du mollet" /> */}
    </div>

    <h4>3.4 Les Pieds</h4>
    <p>
        Les pieds sont formés de 26 os et jouent un rôle crucial dans l’équilibre et la locomotion. Ils sont divisés en trois parties : l’avant-pied, le médio-pied et l’arrière-pied, et sont responsables de la répartition du poids corporel lors des déplacements.
    </p>
    <div className="gallery-membre">
        <img src="../assets/pied1.jpg" alt="Anatomie du pied" />
        <img src="../assets/pied2.jpg" alt="Vue des os du pied" />
        <img src="../assets/pied3.jpg" alt="Vue des os du pied" />
    </div>
</div>

      {/* Section dédiée au torse */}
      <div className="membre-section">
        <h3>4. Le Torse</h3>
        <p>
          Le torse abrite des organes vitaux comme le cœur et les poumons. Il est formé par la cage thoracique et la colonne vertébrale, qui protègent ces organes tout en permettant la respiration.
        </p>
        <div className="gallery-membre">
          <img src="../assets/torse1.jpg" alt="Anatomie du torse" />
          {/* <img src="../assets/torse2.jpg" alt="Vue latérale du torse" /> */}
        </div>
      </div>

      {/* Section dédiée au bassin */}
      <div className="membre-section">
        <h3>5. Le Bassin</h3>
        <p>
          Le bassin est une structure osseuse qui soutient le tronc et relie la colonne vertébrale aux membres inférieurs. Il protège les organes pelviens et joue un rôle essentiel dans les mouvements de la marche.
        </p>
        <div className="gallery-membre">
          {/* <img src="../assets/bassin1.jpg" alt="Anatomie du bassin" /> */}
          {/* <img src="../assets/bassin2.jpg" alt="Vue du bassin humain" /> */}
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-membre">
        <h3>Témoignages</h3>
        <blockquote>
          <p>
            "Connaître la structure des membres du corps humain m'a aidé à améliorer mes compétences en dessin anatomique. C'est fascinant de voir à quel point chaque partie est connectée."
          </p>
          <footer className="author">– Marie, illustratrice</footer>
        </blockquote>
        <blockquote>
          <p>
            "Grâce à cette section, j'ai pu mieux comprendre les mouvements du corps humain. Cela m'a aidé à rendre mes dessins plus réalistes."
          </p>
          <footer className="author">– Lucas, étudiant en art</footer>
        </blockquote>
      </div>

      {/* Section Ressources */}
      <div className="resources-membre">
        <h3>Ressources Supplémentaires sur les Membres du Corps</h3>
        <ul>
          <li><a href="#">Guide détaillé de l'anatomie des bras et des jambes</a></li>
          <li><a href="#">Vidéo explicative des mouvements des membres supérieurs et inférieurs</a></li>
          <li><a href="#">Étude approfondie : "L'anatomie des mains et des pieds pour les artistes"</a></li>
          <li><a href="#">Tutoriel de dessin anatomique : Focus sur les bras et les jambes</a></li>
          <li><a href="#">Infographie sur les muscles et les articulations des membres</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Membre;
