import React, { useState } from 'react';



function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskPriority, setTaskPriority] = useState('normal');

  const handleSubmit = (e) => {
// handleSubmit :fonction qui sera appelée lorsqu'un formulaire est soumis. Le paramètre e représente l'événement de soumission du formulaire.

    e.preventDefault();
//e.preventDefault(): empêche le comportement par défaut du navigateur lors de la soumission d'un formulaire (par exemple, le rechargement de la page). Sans cette ligne, le formulaire soumettrait les données et la page se rafraîchirait, ce qui n'est pas souhaité dans une application React qui fonctionne de manière asynchrone et dynamique.

    if (!taskName || !taskDesc) return;
//condition qui vérifie si taskName ou taskDesc sont vides.S'assurer que les champs obligatoires sont remplis avant de continuer. 

    const newTask = {
//nouvel objet appelé newTask est créé pour représenter une tâche. Cet objet va regrouper les informations de la tâche que l'utilisateur a saisies. 
      name: taskName,
      description: taskDesc,
      priority: taskPriority,
      completed: false,
//Le champ completed est initialisé à false, indiquant que la tâche n'a pas encore été accomplie (elle est toujours active ou en cours). 
    };

    setTasks([...tasks, newTask]);
//fonction setTasks est appelée pour mettre à jour la liste des tâches.
//[...tasks, newTask] utilise le spread operator (...) pour créer une nouvelle liste qui contient : Toutes les tâches actuelles (déjà présentes dans l'état tasks),Et la nouvelle tâche newTask.
// Cela permet de conserver les tâches existantes et d'ajouter la nouvelle tâche à la liste.
    setTaskName('');
//réinitialise la variable d'état taskName à une chaîne vide après la soumission du formulaire, effaçant ainsi le champ de saisie du nom de la tâche pour la prochaine tâche. 
    setTaskDesc('');
//meme chose pour la description 
  };

  const handleComplete = (index) => {
//handleComplete est une fonction qui prend un paramètre index, représentant position dans le tableau. Cette fonction est appelée lorsque l'utilisateur interagit avec une tâche. 
    const updatedTasks = [...tasks];
//crée une copie de la liste des tâches actuelle, [...tasks] utilise le spread operator pour copier toutes les tâches de l'état actuel (tasks) dans un nouveau tableau updatedTasks. Il est recommandé de ne pas modifier directement l'état (comme la liste tasks), mais de travailler avec une copie pour respecter l'immutabilité. 
    updatedTasks[index].completed = !updatedTasks[index].completed;
//inverse l'état de complétion d'une tâche spécifique.updatedTasks[index] accède à la tâche à l'index donné dans le tableau.!updatedTasks[index].completed utilise l'opérateur de négation (!) pour inverser la valeur de la propriété completed :Si completed est false (la tâche n'est pas complétée), elle devient true.Si completed est true (la tâche est déjà complétée), elle redevient false.Cela permet de basculer l'état de complétion de la tâche lorsqu'on interagit avec elle. 
    setTasks(updatedTasks);
//Après avoir modifié l'état de complétion de la tâche dans la copie de la liste (updatedTasks), la fonction setTasks est appelée pour mettre à jour l'état des tâches avec ce nouveau tableau modifié.Cela déclenche une re-rendu de l'interface utilisateur avec la mise à jour de la tâche complétée ou non. 
  };

  const handleDelete = (index) => {
//handleDelete est une fonction qui prend un paramètre index, représentant la position de la tâche que l'utilisateur souhaite supprimer dans la liste des tâches.Cette fonction est appelée lorsque l'utilisateur interagit avec une tâche, cliquant sur un bouton "supprimer". 
    const updatedTasks = tasks.filter((_, i) => i !== index);
//Le filter() crée un nouveau tableau qui exclut la tâche à l'index donné. Dans (_, i), le _ représente chaque tâche, mais est ignoré, et i est l'index. La condition i !== index garde uniquement les tâches dont l'index est différent de celui passé en argument. Le tableau résultant, sans la tâche supprimée, est stocké dans updatedTasks. 
    setTasks(updatedTasks);
//Après avoir exclu la tâche, setTasks(updatedTasks) met à jour l'état avec la nouvelle liste, sans la tâche supprimée. Cela rafraîchit automatiquement l'interface pour afficher la liste à jour. 
  };

  return (
    <div className="todo-container">
      <div className="todo-form">
        <h2>Ajouter une nouvelle tâche</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="task-name">Nom de la tâche :</label>
          <input
            type="text"
            id="task-name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Entrez le nom de la tâche"
            required
          />

          <label htmlFor="task-desc">Description :</label>
          <textarea
            id="task-desc"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            rows="4"
            placeholder="Entrez la description de la tâche"
            required
          />

          <label htmlFor="task-priority">Priorité :</label>
          <select
            id="task-priority"
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="urgent">Urgent</option>
          </select>

          <button type="submit">Ajouter</button>
        </form>
      </div>

      <div className="task-list">
        <h2>Liste des tâches</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <div className="task-header">
                <span>{task.name}</span>
                {task.priority === 'urgent' && <span className="urgent">(Urgent)</span>}
              </div>
              <p className=" description2">{task.description}</p>
              <div className="task-buttons">
                <button onClick={() => handleComplete(index)}>
                  {task.completed ? 'Reprendre' : 'Terminer'}
                </button>
                <button onClick={() => handleDelete(index)}>Supprimer</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;


//J'ai d'abord commencé par créer le corps de l'application. Une fois cette structure en place, j'ai fait en sorte que le bouton "Ajouter" fonctionne correctement pour permettre l'ajout de nouvelles tâches. Ensuite, j'ai ajouté la partie qui s'affiche après avoir cliqué sur "Ajouter", en continuant ainsi la suite du corps de l'application. J'ai ensuite implémenté la fonctionnalité de suppression des tâches. Enfin, j'ai ajouté le bouton "Terminer", puis j'ai ajusté son comportement pour qu'il permette de réafficher les tâches complétées. 
