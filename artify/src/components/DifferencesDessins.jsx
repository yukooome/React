// components/DifferencesDessins.js
import React from 'react';
import './DifferencesDessins.css';

const DifferencesDessins = () => {
  return (
    <div className="differences-section">
      <h2>Les Différences entre les Outils de Dessin</h2>

      {/* Expérience personnelle avec les différentes méthodes de dessin */}
      <p>
        <strong>1. Dessiner avec une souris sur un ordinateur :</strong> 
        Alors, dessiner avec une souris... C'est un peu comme essayer de sculpter du marbre avec une cuillère à soupe. Oui, c'est possible, mais est-ce que je le recommande ? Pas vraiment. J'ai testé, et honnêtement, même si vous pouvez bricoler des formes et les empiler comme des Lego, c'est long, fastidieux, et souvent frustrant. On finit par se demander si ce n'est pas plus rapide de redessiner la Joconde avec une pomme de terre. Conclusion : il y a des outils bien plus adaptés, surtout si vous voulez vraiment dessiner.
      </p>
      
      <p>
        <strong>2. Dessiner avec un stylet sur une tablette graphique ou un iPad :</strong> 
        Ah, la tablette graphique... L'outil du futur. Avec un stylet, vous avez littéralement toute une palette de couleurs, d'outils et d'effets à portée de main. Plus besoin d'acheter des tonnes de crayons et de gommes, tout est là, en un seul clic ! Vous avez raté un trait ? Pas de problème, un petit coup de "Ctrl + Z" et hop, ni vu ni connu. Vous pouvez même dessiner des lignes droites sans jamais vous entraîner à en faire une seule dans la vraie vie (coucou les puristes !). Mais justement, là est le hic. Est-ce que ces petits coups de pouce technologiques ne nous rendraient pas un peu... paresseux ? Le danger, c'est qu'on finit par trop compter sur les outils pour corriger nos erreurs à notre place. Alors, oui, c'est un gain de temps monumental, mais on perd un peu de cette rigueur que nous impose le bon vieux crayon.
      </p>
      
      <p>
        <strong>Les avantages de la tablette :</strong>
        <ul>
          <li>Un stock infini de couleurs et d'outils.</li>
          <li>Effacer et revenir en arrière à l'infini (pour les perfectionnistes en série).</li>
          <li>Aide technologique pour des traits parfaits (vive la magie du numérique).</li>
          <li>Pas de papier gaspillé, donc écologique !</li>
        </ul>
        
        <strong>Les inconvénients :</strong>
        <ul>
          <li>On devient vite dépendant des "Ctrl + Z" et autres raccourcis.</li>
          <li>Moins de rigueur, on se repose un peu trop sur les outils.</li>
          <li>Peut être cher à l'achat, surtout avec des logiciels payants.</li>
          <li>Moins de connexion physique avec le geste de dessin, comparé au papier.</li>
        </ul>
      </p>

      <p>
        <strong>3. Dessiner avec un crayon sur du papier :</strong>
        Ah, le crayon et le papier... le duo classique. Rien ne vaut cette sensation de tenir un vrai crayon entre les doigts, l'odeur du papier neuf (ou de la feuille déjà bien usée), et cette petite panique quand on sait qu'il n'y a pas de "Ctrl + Z". Ici, chaque trait compte. Quand on fait une erreur, il faut vivre avec, ou... gommer. Et si on gomme trop, adieu le papier, il finit par ressembler à une vieille éponge. Mais c'est aussi là tout l'intérêt : on se pousse à être plus précis, plus concentré. C'est un peu comme faire un saut sans filet de sécurité – c'est excitant, non ? Et puis, soyons honnêtes, il y a quelque chose de spécial à voir son dessin "physiquement" prendre forme sous nos yeux.
      </p>

      <p>
        <strong>Les avantages du dessin sur papier :</strong>
        <ul>
          <li>Un lien direct et tactile avec le médium, chaque trait a une importance.</li>
          <li>Permet de vraiment développer sa maîtrise et sa précision.</li>
          <li>Pas de dépendance aux raccourcis, c'est vous et votre crayon.</li>
          <li>Matériel accessible et abordable (crayons, papier, gomme).</li>
        </ul>
        
        <strong>Les inconvénients :</strong>
        <ul>
          <li>Si vous ratez, il faut tout recommencer, pas d'annulation magique.</li>
          <li>Gommer trop peut abîmer le papier (la fameuse trace de gomme).</li>
          <li>Moins pratique pour les couleurs : il faut tout un tas de crayons.</li>
          <li>On gaspille parfois beaucoup de papier.</li>
        </ul>
      </p>

      {/* Nouvelle partie sur ton parcours autodidacte et les objectifs du site */}
      <div className="autodidacte-section">
        <h3>Mon Parcours Autodidacte et l'Objectif du Site</h3>
        <p>
          Alors, autant être honnête : je suis autodidacte. Je n'ai pas la science infuse (si seulement !), et j'apprends encore, tous les jours. Mon objectif avec ce site est simple : partager ce que j'ai appris, sans prétendre être un maître absolu du dessin. En fait, c'est tout le contraire. Depuis toute petite, je suis passionnée par le dessin et je suis constamment à la recherche de nouvelles façons de m'améliorer. C'est un chemin que je continue à explorer.
        </p>
        <p>
          Ce site est un peu comme mon carnet de voyage artistique. J'y partage mes réflexions, mes galères, mes succès (quand il y en a !), et tout ce que je découvre en chemin. Je ne prétends pas détenir la vérité absolue, mais si mes conseils et mes suggestions peuvent aider quelqu'un à progresser, alors j'aurai réussi mon pari. Alors, bienvenue dans cette aventure créative, où je vous montre un peu par où je passe, avec beaucoup de passion et un brin d'humour !
        </p>

        <p>
          <strong>Conseil pour les débutants :</strong> Si vous souhaitez vraiment apprendre à dessiner, je recommande vivement de commencer par le papier. Pourquoi ? Parce que c'est la meilleure façon de maîtriser les bases : les lignes droites, les cercles, les ombrages... sans aucune aide extérieure. Cela vous oblige à être précis et à vous concentrer. Une fois que vous avez acquis une solide base sur papier, alors là, la tablette graphique devient un véritable terrain de jeu. C'est plus facile d'utilisation, moins coûteux à long terme (plus besoin de racheter du papier et des crayons !), et vous avez accès à des tonnes d'outils pour exprimer votre créativité sans limite. 
        </p>
      </div>
    </div>
  );
};

export default DifferencesDessins;
