import React, { useState } from 'react';
import './App.css';

// Définition des catégories et sous-catégories
const categories = [
  { name: 'Anatomie', subcategories: ['Plan frontal', 'Plan sagittal', 'Plan transversal'] },
  { name: 'Position', subcategories: ['Plan frontal', 'Plan sagittal', 'Plan transversal'] },
  { name: 'Membre', subcategories: ['Tête', 'Mains-Bras', 'Torse-Bassin', 'Pieds-Jambes'] },
  { name: 'Personnage', subcategories: ['Couleur', 'Noir et blanc'] }
];

// Objet unique qui contient les images pour toutes les catégories
const images = {
  Anatomie: {
    'Plan frontal': [
      { src: 'anatomie_image1.jpg', title: 'Titre 1', description: 'Description des étapes pour anatomie plan frontal.' },
      { src: 'anatomie_image2.jpg', title: 'Titre 2', description: 'Description des étapes pour anatomie plan frontal.' }
    ],
    'Plan sagittal': [
      { src: 'anatomie_image3.jpg', title: 'Titre 3', description: 'Description des étapes pour anatomie plan sagittal.' },
      { src: 'anatomie_image4.jpg', title: 'Titre 4', description: 'Description des étapes pour anatomie plan sagittal.' }
    ],
    'Plan transversal': [
      { src: 'anatomie_image5.jpg', title: 'Titre 5', description: 'Description des étapes pour anatomie plan transversal.' },
      { src: 'anatomie_image6.jpg', title: 'Titre 6', description: 'Description des étapes pour anatomie plan transversal.' }
    ]
  },
  Position: {
    'Plan frontal': [
      { src: './assets/position1.jpg', title: 'Position Frontale 1', description: 'Description des étapes pour position plan frontal.' },
      { src: './assets/position2.jpg', title: 'Position Frontale 1', description: 'Description des étapes pour position plan frontal.' },
      { src: './assets/position6.jpg', title: 'Position Frontale 1', description: 'Description des étapes pour position plan frontal.' },
      { src: './assets/position7.jpg', title: 'Position Frontale 2', description: 'Description des étapes pour position plan frontal.' }
    ],
    'Plan sagittal': [
      { src: './assets/position4.jpg', title: 'Position Sagittale 1', description: 'Description des étapes pour position plan sagittal.' },
    ],
    'Plan transversal': [
      { src: './assets/position3.jpg', title: 'Position Transversale 1', description: 'Description des étapes pour position plan transversal.' }
    ]
  },
  Membre: {
    'Pieds-Jambes': [
      { src: './assets/pied1.jpg', title: 'Pieds-Jambes 1', description: 'Description des étapes pour pieds-jambes.' },
      { src: './assets/pied2.jpg', title: 'Pieds-Jambes 2', description: 'Description des étapes pour pieds-jambes.' },
      { src: './assets/pied3.jpg', title: 'Pieds-Jambes 1', description: 'Description des étapes pour pieds-jambes.' }
    ],
    'Mains-Bras': [
      { src: './assets/main1.jpg', title: 'Mains-Bras 1', description: 'Description des étapes pour mains-bras.' },
      { src: './assets/main2.jpg', title: 'Mains-Bras 2', description: 'Description des étapes pour mains-bras.' },
      { src: './assets/main3.jpg', title: 'Mains-Bras 1', description: 'Description des étapes pour mains-bras.' },
      { src: './assets/main4.jpg', title: 'Mains-Bras 1', description: 'Description des étapes pour mains-bras.' },
      
    ],
    'Torse-Bassin': [
      { src: './assets/torse1.jpg', title: 'Torse-Bassin 1', description: 'Description des étapes pour torse-bassin.' },
      // { src: 'membre_image6.jpg', title: 'Torse-Bassin 2', description: 'Description des étapes pour torse-bassin.' }
    ],
    'Tête': [
      { src: 'membre_image7.jpg', title: 'Tête 1', description: 'Description des étapes pour la tête.' },
      { src: 'membre_image8.jpg', title: 'Tête 2', description: 'Description des étapes pour la tête.' }
    ]
  },
  Personnage: {
    'Couleur': [
      { src: './assets/perso8.jpg', title: 'Personnage Pieds-Jambes 1', description: 'Description des étapes pour personnage pieds-jambes.' },
      { src: 'personnage_image2.jpg', title: 'Personnage Pieds-Jambes 2', description: 'Description des étapes pour personnage pieds-jambes.' }
    ],
    'Noir et blanc': [
      { src: './assets/perso1.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso2.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso3.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso4.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso5.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      // { src: './assets/perso6.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso7.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso9.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso10.jpg', title: 'Personnage Mains-Bras 2', description: 'Description des étapes pour personnage mains-bras.' }
    ]
    // 'Torse-Bassin': [
    //   { src: 'personnage_image5.jpg', title: 'Personnage Torse-Bassin 1', description: 'Description des étapes pour personnage torse-bassin.' },
    //   { src: 'personnage_image6.jpg', title: 'Personnage Torse-Bassin 2', description: 'Description des étapes pour personnage torse-bassin.' }
    // ],
    // 'Tête': [
    //   { src: 'personnage_image7.jpg', title: 'Personnage Tête 1', description: 'Description des étapes pour personnage tête.' },
    //   { src: 'personnage_image8.jpg', title: 'Personnage Tête 2', description: 'Description des étapes pour personnage tête.' }
    // ]
  }
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Gestion du clic sur une catégorie
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset de la sous-catégorie lors du changement de catégorie
  };

  // Gestion du clic sur une sous-catégorie
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  // Ouverture de la modal avec l'image, titre et description
  const openModal = (imageData) => {
    setModalContent(imageData);
    setIsModalOpen(true);
  };

  // Fermeture de la modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="container">
      <h1>Apprendre à Dessiner</h1>
      <p> Utilise la liste des références proposées</p>
      {/* Affichage des catégories */}
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.name} className="card" onClick={() => handleCategoryClick(category.name)}>
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>

      {/* Affichage des sous-catégories pour la catégorie sélectionnée */}
      {selectedCategory && (
        <div className="subcategory-section">
          <h2>{selectedCategory}</h2>
          <div className="subcategory-grid">
            {categories
              .find((cat) => cat.name === selectedCategory)
              .subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  className="subcategory-button"
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  {subcategory}
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Affichage des images pour la sous-catégorie sélectionnée */}
      {selectedSubcategory && selectedCategory && (
        <div className="image-section">
          <h3>{selectedSubcategory}</h3>
          <div className="image-grid">
            {images[selectedCategory][selectedSubcategory].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.title}
                className="image-item"
                onClick={() => openModal(img)} // Ouvre la modal avec l'image sélectionnée
              />
            ))}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
  <div className="modal" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={modalContent.src} alt={modalContent.title} className="modal-image" />
      <div className="modal-info">
        <h2>{modalContent.title}</h2>
        <p>{modalContent.description}</p>
        <button className="close-modal" onClick={closeModal}>Fermer</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default App;
