// import React, { useState } from 'react';
// import './App.css';

// // Définition des catégories et sous-catégories
// const categories = [
//   { name: 'Anatomie', subcategories: ['Plan frontal', 'Plan sagittal', 'Plan transversal'] },
//   { name: 'Position', subcategories: ['Plan frontal', 'Plan sagittal', 'Plan transversal'] },
//   { name: 'Membre', subcategories: ['Tête', 'Mains-Bras', 'Torse-Bassin', 'Pieds-Jambes'] },
//   { name: 'Personnage', subcategories: ['Couleur', 'Noir et blanc'] },
//   { name: 'Artiste', subcategories: ['Artiste1', 'Artiste2'] }
// ];

// // Objet unique qui contient les images pour toutes les catégories
// const images = {
//   Anatomie: {
//     'Plan frontal': [
//       { src: 'anatomie_image1.jpg', title: 'Titre 1', description: 'Description des étapes pour anatomie plan frontal.' }

//     ],
//     'Plan sagittal': [
//       { src: 'anatomie_image3.jpg', title: 'Titre 3', description: 'Description des étapes pour anatomie plan sagittal.' }
//     ],
//     'Plan transversal': [
//       { src: 'anatomie_image5.jpg', title: 'Titre 5', description: 'Description des étapes pour anatomie plan transversal.' }
//     ]
//   },
//   Position: {
//     'Plan frontal': [
//       { src: './assets/position1.jpg', title: 'Position Frontale 1', description: 'Description des étapes pour position plan frontal.' },
//       { src: './assets/position2.jpg', title: 'Position Frontale 1', description: 'Description des étapes pour position plan frontal.' },
//       { src: './assets/position6.jpg', title: 'Position Frontale 1', description: 'Description des étapes pour position plan frontal.' },
//       { src: './assets/position7.jpg', title: 'Position Frontale 2', description: 'Description des étapes pour position plan frontal.' }
//     ],
//     'Plan sagittal': [
//       { src: './assets/position4.jpg', title: 'Position Sagittale 1', description: 'Description des étapes pour position plan sagittal.' },
//     ],
//     'Plan transversal': [
//       { src: './assets/position3.jpg', title: 'Position Transversale 1', description: 'Description des étapes pour position plan transversal.' }
//     ]
//   },
//   Membre: {
//     'Pieds-Jambes': [
//       { src: './assets/pied1.jpg', title: 'Pieds-Jambes 1', description: 'Description des étapes pour pieds-jambes.' },
//       { src: './assets/pied2.jpg', title: 'Pieds-Jambes 2', description: 'Description des étapes pour pieds-jambes.' },
//       { src: './assets/pied3.jpg', title: 'Pieds-Jambes 1', description: 'Description des étapes pour pieds-jambes.' }
//     ],
//     'Mains-Bras': [
//       { src: './assets/main1.jpg', title: 'Mains-Bras 1', description: 'Description des étapes pour mains-bras.' },
//       { src: './assets/main2.jpg', title: 'Mains-Bras 2', description: 'Description des étapes pour mains-bras.' },
//       { src: './assets/main3.jpg', title: 'Mains-Bras 1', description: 'Description des étapes pour mains-bras.' },
//       { src: './assets/main4.jpg', title: 'Mains-Bras 1', description: 'Description des étapes pour mains-bras.' },
      
//     ],
//     'Torse-Bassin': [
//       { src: './assets/torse1.jpg', title: 'Torse-Bassin 1', description: 'Description des étapes pour torse-bassin.' }
//     ],
//     'Tête': [
//       { src: 'membre_image7.jpg', title: 'Tête 1', description: 'Description des étapes pour la tête.' }
//     ]
//   },
//   Personnage: {
//     'Couleur': [
//       { src: './assets/perso8.jpg', title: 'Personnage Pieds-Jambes 1', description: 'Description des étapes pour personnage pieds-jambes.' }
//     ],
//     'Noir et blanc': [
//       { src: './assets/perso1.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso2.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso3.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso4.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso5.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       // { src: './assets/perso6.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso7.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso9.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
//       { src: './assets/perso10.jpg', title: 'Personnage Mains-Bras 2', description: 'Description des étapes pour personnage mains-bras.' }
//     ]
//   },

//   Artiste: {
//     'Artiste1': [
//       { src: '', title: 'Artiste1', description: 'Description des étapes pour personnage pieds-jambes.' }
//     ],
//     'Artiste2': [
//       { src: '', title: 'Artiste2', description: 'Description des étapes pour personnage mains-bras.' }
//     ]
//   }
// };

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedSubcategory, setSelectedSubcategory] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   // Gestion du clic sur une catégorie
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(null); // Reset de la sous-catégorie lors du changement de catégorie
//   };

//   // Gestion du clic sur une sous-catégorie
//   const handleSubcategoryClick = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//   };

//   // Ouverture de la modal avec l'image, titre et description
//   const openModal = (imageData) => {
//     setModalContent(imageData);
//     setIsModalOpen(true);
//   };

//   // Fermeture de la modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="container">
//       <h1>Apprendre à Dessiner</h1>
//       <p> Utilise la liste des références proposées</p>
//       {/* Affichage des catégories */}
//       <div className="category-grid">
//         {categories.map((category) => (
//           <div key={category.name} className="card" onClick={() => handleCategoryClick(category.name)}>
//             <h2>{category.name}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Affichage des sous-catégories pour la catégorie sélectionnée */}
//       {selectedCategory && (
//         <div className="subcategory-section">
//           <h2>{selectedCategory}</h2>
//           <div className="subcategory-grid">
//             {categories
//               .find((cat) => cat.name === selectedCategory)
//               .subcategories.map((subcategory) => (
//                 <button
//                   key={subcategory}
//                   className="subcategory-button"
//                   onClick={() => handleSubcategoryClick(subcategory)}
//                 >
//                   {subcategory}
//                 </button>
//               ))}
//           </div>
//         </div>
//       )}

//       {/* Affichage des images pour la sous-catégorie sélectionnée */}
//       {selectedSubcategory && selectedCategory && (
//         <div className="image-section">
//           <h3>{selectedSubcategory}</h3>
//           <div className="image-grid">
//             {images[selectedCategory][selectedSubcategory].map((img, index) => (
//               <img
//                 key={index}
//                 src={img.src}
//                 alt={img.title}
//                 className="image-item"
//                 onClick={() => openModal(img)} // Ouvre la modal avec l'image sélectionnée
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Modal */}
//       {isModalOpen && (
//   <div className="modal" onClick={closeModal}>
//     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//       <img src={modalContent.src} alt={modalContent.title} className="modal-image" />
//       <div className="modal-info">
//         <h2>{modalContent.title}</h2>
//         <p>{modalContent.description}</p>
//         <button className="close-modal" onClick={closeModal}>Fermer</button>
//       </div>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };

// export default App;









// Un peu plus ux - deuxième version

import React, { useState } from "react";  
// On importe React et le hook useState de React pour gérer l'état des variables.
import "./App.css";  
// On importe le fichier CSS pour styliser notre application.

const categories = [   
  // Définition d'un tableau d'objets représentant les catégories disponibles.
  { name: 'Anatomie', subcategories: ['Plan frontal', 'Plan sagittal', 'Plan transversal'] },
  { name: 'Position', subcategories: ['Plan frontal', 'Plan sagittal', 'Plan transversal'] },
  { name: 'Membre', subcategories: ['Tête', 'Mains-Bras', 'Torse-Bassin', 'Pieds-Jambes'] },
  { name: 'Personnage', subcategories: ['Couleur', 'Noir et blanc'] },
  { name: 'Artiste', subcategories: ['Artiste1', 'Artiste2'] }
];

// Objet unique qui contient les images pour toutes les catégories
const images = {
  Anatomie: {
    'Plan frontal': [
      { src: 'anatomie_image1.jpg', title: 'Titre 1', description: 'Description des étapes pour anatomie plan frontal.' }

    ],
    'Plan sagittal': [
      { src: 'anatomie_image3.jpg', title: 'Titre 3', description: 'Description des étapes pour anatomie plan sagittal.' }
    ],
    'Plan transversal': [
      { src: 'anatomie_image5.jpg', title: 'Titre 5', description: 'Description des étapes pour anatomie plan transversal.' }
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
      { src: './assets/torse1.jpg', title: 'Torse-Bassin 1', description: 'Description des étapes pour torse-bassin.' }
    ],
    'Tête': [
      { src: 'membre_image7.jpg', title: 'Tête 1', description: 'Description des étapes pour la tête.' }
    ]
  },
  Personnage: {
    'Couleur': [
      { src: './assets/perso8.jpg', title: 'Personnage Pieds-Jambes 1', description: 'Description des étapes pour personnage pieds-jambes.' }
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
      { src: './assets/perso11.jpg', title: 'Personnage Mains-Bras 1', description: 'Description des étapes pour personnage mains-bras.' },
      { src: './assets/perso10.jpg', title: 'Personnage Mains-Bras 2', description: 'Description des étapes pour personnage mains-bras.' }
    ]
  },

  Artiste: {
    'Artiste1': [
      { src: '', title: 'Artiste1', description: 'Description des étapes pour personnage pieds-jambes.' }
    ],
    'Artiste2': [
      { src: '', title: 'Artiste2', description: 'Description des étapes pour personnage mains-bras.' }
    ]
  }
};

const App = () => {  
  // Début du composant principal de l'application.
  const [selectedCategory, setSelectedCategory] = useState(null);  
  // Déclaration de l'état pour la catégorie sélectionnée.
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);  
  // Déclaration de l'état pour la sous-catégorie sélectionnée.
  const [selectedImage, setSelectedImage] = useState(null);  
  // Déclaration de l'état pour l'image sélectionnée pour afficher dans une modale.

  const handleCategoryClick = (category) => {  
    // Fonction qui gère le clic sur une catégorie.
    setSelectedCategory(selectedCategory === category ? null : category);  
    // Si la catégorie est déjà sélectionnée, on la désélectionne. Sinon, on la sélectionne.
    setSelectedSubcategory(null);  
    // Réinitialise la sous-catégorie sélectionnée.
  };

  const handleSubcategoryClick = (subcategory) => {  
    // Fonction qui gère le clic sur une sous-catégorie.
    setSelectedSubcategory(selectedSubcategory === subcategory ? null : subcategory);  
    // Si la sous-catégorie est déjà sélectionnée, on la désélectionne. Sinon, on la sélectionne.
  };

  const handleImageClick = (image) => {  
    // Fonction qui gère le clic sur une image.
    setSelectedImage(image);  
    // Met l'image sélectionnée dans l'état pour l'afficher dans la modale.
  };

  const closeModal = () => {  
    // Fonction pour fermer la modale en réinitialisant l'état de l'image sélectionnée.
    setSelectedImage(null);
  };

  return (  
    // Rendu du JSX de notre application.
    <div className="container"> 
    {/* Conteneur principal pour toute l'application. */}
      <h1>Apprendre à Dessiner</h1>  
      {/* Titre principal de l'application. */}
      <p>Utilise la liste des références proposées</p>  
      {/* Texte d'instruction. */}

      {/* Affichage des catégories */}
      <div className="category-grid">  
        {/* Grille pour afficher les catégories. */}
        {categories.map(({ name, subcategories }) => (  
          // On boucle sur les catégories pour les afficher.
          <div
            key={name}  
            // Utilisation du nom de la catégorie comme clé unique.
            className={`card ${selectedCategory === name ? "active" : ""}`}  
            // Si la catégorie est sélectionnée, on lui ajoute une classe 'active'.
            onClick={() => handleCategoryClick(name)}  
            // Lors du clic sur une catégorie, on appelle la fonction pour gérer le clic.
          >
            <h2>{name}</h2>  
            {/* Affiche le nom de la catégorie. */}

            {/* Affichage des sous-catégories */}
            {selectedCategory === name && (  
              // Si la catégorie est sélectionnée, on affiche ses sous-catégories.
              <div className="subcategory-grid"> 
               {/* Grille pour les sous-catégories. */}
                {subcategories.map((subcategory) => (  
                  // On boucle sur les sous-catégories.
                  <button
                    key={subcategory}  
                    // Clé unique pour chaque sous-catégorie.
                    className="subcategory-button"  
                    // Classe CSS pour les boutons de sous-catégorie.
                    onClick={(e) => {  
                      // Lors du clic sur une sous-catégorie, on appelle la fonction pour gérer le clic.
                      e.stopPropagation();  
                      // Empêche la propagation de l'événement au parent (éviter la fermeture de la catégorie).
                      handleSubcategoryClick(subcategory);  
                      // Gère la sélection de la sous-catégorie.
                    }}
                  >
                    {subcategory}  
                    {/* Affiche le nom de la sous-catégorie. */}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Affichage des images de la sous-catégorie sélectionnée */}
      {selectedSubcategory && selectedCategory && (  
        // Si une sous-catégorie et une catégorie sont sélectionnées, on affiche les images.
        <div className="image-grid"> 
        {/* Grille pour afficher les images. */}
          {images[selectedCategory][selectedSubcategory]?.map((img, index) => (  
            // On boucle sur les images de la sous-catégorie sélectionnée.
            <div key={index} className="image-item"> 
            {/* Conteneur pour chaque image. */}
              <img
                src={img.src}  
                // Source de l'image.
                alt={img.title}  
                // Texte alternatif de l'image.
                onClick={() => handleImageClick(img)}  
                // Lors du clic sur l'image, on appelle la fonction pour afficher la modale avec l'image.
              />
            </div>
          ))}
        </div>
      )}

      {/* Modale pour afficher l'image sélectionnée */}
      {selectedImage && (  
        // Si une image est sélectionnée, on affiche la modale.
        <div className="modal">  
        {/* Conteneur pour la modale. */}
          <div className="modal-content">  
            {/* Contenu de la modale. */}
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />  
            {/* Affiche l'image dans la modale. */}
            <div className="modal-info">  
              {/* Conteneur pour les informations sur l'image. */}
              <h3>{selectedImage.title}</h3>  
              {/* Affiche le titre de l'image. */}
              <p>{selectedImage.description}</p>  
              {/* Affiche la description de l'image. */}
              <button className="close-modal" onClick={closeModal}>Fermer</button>  
              {/* Bouton pour fermer la modale. */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;  
// On exporte le composant App pour pouvoir l'utiliser ailleurs.
