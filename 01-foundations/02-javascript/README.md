# Exercice JavaScript — Task Manager

## 1. Objectif de l'exercice

L'objectif est de développer une petite application web de gestion de
tâches (*Task Manager*) en utilisant uniquement **HTML, CSS et
JavaScript natif (Vanilla JavaScript)**.

Cet exercice doit te permettre de mettre en pratique les notions
fondamentales de JavaScript :

- La déclaration et l'utilisation des variables (`const` et `let`).
- La manipulation du DOM.
- La création et l'utilisation de fonctions.
- Les boucles (`for`, `for...of`, `forEach`).
- Les conditions (`if`, `else if`, `else`).
- La gestion des événements (`click`, `submit`, `change`).
- La manipulation des tableaux et des objets.

**Important :** tu dois compléter le code en respectant la structure et
les fonctions déjà définies dans ce document. Tu peux ajouter du code
lorsque c'est nécessaire, mais ne renomme pas les fonctions existantes
et ne supprime pas leur rôle.

Le but n'est pas de recopier du code, mais de comprendre la logique de
chaque instruction et d'être capable de l'expliquer.

---

## 2. Description du projet

L'application permettra à un utilisateur de gérer une liste de tâches
quotidiennes.

Chaque tâche devra contenir les informations suivantes :

- Un identifiant unique (`id`).
- Un titre (`title`).
- Une description (`description`).
- Un statut (`completed`) : `true` si la tâche est terminée, sinon
  `false`.
- Une priorité (`priority`) : `low`, `medium` ou `high`.

### Fonctionnalités à réaliser

1. Ajouter une nouvelle tâche.
2. Afficher toutes les tâches.
3. Marquer une tâche comme terminée ou en attente.
4. Modifier une tâche.
5. Supprimer une tâche.
6. Filtrer les tâches : toutes, terminées ou en attente.
7. Rechercher une tâche par son titre.
8. Afficher les statistiques : nombre total, nombre de tâches terminées
   et nombre de tâches restantes.

---

## 3. Structure des fichiers

Crée un dossier `task-manager` avec les trois fichiers suivants :

```text
task-manager/
├── index.html
├── style.css
└── script.js
```

Tu dois créer toi-même l'interface HTML et son apparence CSS. Le
JavaScript doit rester dans `script.js`.

Aucun framework ou bibliothèque JavaScript n'est autorisé.

---

## 4. Structure HTML attendue

Ton fichier `index.html` doit contenir au minimum les éléments suivants.
Tu peux améliorer leur présentation, mais conserve les identifiants
(`id`) : le JavaScript en aura besoin.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <h1>Gestionnaire de tâches</h1>

        <form id="task-form">
            <input id="task-title" type="text" placeholder="Titre de la tâche">
            <textarea id="task-description" placeholder="Description"></textarea>

            <select id="task-priority">
                <option value="low">Basse</option>
                <option value="medium">Moyenne</option>
                <option value="high">Haute</option>
            </select>

            <button type="submit">Ajouter</button>
        </form>

        <section id="statistics">
            <p>Total : <span id="total-count">0</span></p>
            <p>Terminées : <span id="completed-count">0</span></p>
            <p>En attente : <span id="pending-count">0</span></p>
        </section>

        <section>
            <input id="search-input" type="search" placeholder="Rechercher une tâche">

            <select id="filter-select">
                <option value="all">Toutes</option>
                <option value="completed">Terminées</option>
                <option value="pending">En attente</option>
            </select>
        </section>

        <section>
            <ul id="task-list"></ul>
            <p id="empty-message">Aucune tâche pour le moment.</p>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

---

## 5. Structure JavaScript à compléter

Voici la structure de départ de ton fichier `script.js`.

**Consigne :** conserve les noms des variables et des fonctions.
Complète les parties indiquées par les commentaires `// TODO`. Tu dois
déterminer toi-même les instructions nécessaires.

### 5.1. Déclaration des variables et sélection des éléments du DOM

```javascript
// Liste des tâches de l'application
const tasks = [];

// Identifiant de la prochaine tâche
let nextTaskId = 1;

// Récupération des éléments HTML
const taskForm = document.querySelector("#task-form");
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskPrioritySelect = document.querySelector("#task-priority");

const taskList = document.querySelector("#task-list");
const emptyMessage = document.querySelector("#empty-message");

const searchInput = document.querySelector("#search-input");
const filterSelect = document.querySelector("#filter-select");

const totalCount = document.querySelector("#total-count");
const completedCount = document.querySelector("#completed-count");
const pendingCount = document.querySelector("#pending-count");
```

**À comprendre :**
- Pourquoi utilise-t-on `const` pour certains éléments et `let` pour `nextTaskId` ?
- Que retourne `document.querySelector()` ?
- Quelle est la différence entre une variable qui contient un tableau et un élément HTML ?

### 5.2. Ajouter une tâche

```javascript
function addTask(event) {
    // TODO 1 : Empêcher le comportement par défaut du formulaire.

    // TODO 2 : Récupérer les valeurs des champs du formulaire.

    // TODO 3 : Vérifier que le titre n'est pas vide.

    // TODO 4 : Créer un objet représentant la nouvelle tâche.
    // L'objet doit contenir : id, title, description, completed, priority.

    // TODO 5 : Ajouter la nouvelle tâche dans le tableau tasks.

    // TODO 6 : Incrémenter nextTaskId.

    // TODO 7 : Réinitialiser le formulaire.

    // TODO 8 : Actualiser l'affichage et les statistiques.
}
```

### 5.3. Afficher les tâches

```javascript
function renderTasks(tasksToDisplay = tasks) {
    // TODO 1 : Vider le contenu actuel de taskList.

    // TODO 2 : Vérifier si la liste est vide et afficher ou masquer emptyMessage.

    // TODO 3 : Parcourir tasksToDisplay avec une boucle.

    // TODO 4 : Pour chaque tâche, créer un élément HTML.

    // TODO 5 : Afficher le titre, la description et la priorité.

    // TODO 6 : Ajouter des boutons pour terminer, modifier et supprimer la tâche.

    // TODO 7 : Ajouter l'élément créé dans taskList.
}
```

### 5.4. Supprimer une tâche

```javascript
function deleteTask(taskId) {
    // TODO 1 : Rechercher la tâche correspondant à taskId.

    // TODO 2 : Vérifier que la tâche existe.

    // TODO 3 : La retirer du tableau tasks.

    // TODO 4 : Actualiser l'affichage et les statistiques.
}
```

### 5.5. Modifier le statut d'une tâche

```javascript
function toggleTaskStatus(taskId) {
    // TODO 1 : Retrouver la tâche grâce à son identifiant.

    // TODO 2 : Vérifier que la tâche existe.

    // TODO 3 : Inverser sa valeur completed (true devient false et inversement).

    // TODO 4 : Actualiser l'affichage et les statistiques.
}
```

### 5.6. Modifier une tâche

```javascript
function editTask(taskId) {
    // TODO 1 : Retrouver la tâche grâce à son identifiant.

    // TODO 2 : Vérifier que la tâche existe.

    // TODO 3 : Demander ou afficher les nouvelles valeurs du titre et de la description.

    // TODO 4 : Vérifier que le nouveau titre n'est pas vide.

    // TODO 5 : Mettre à jour les informations de la tâche.

    // TODO 6 : Actualiser l'affichage.
}
```

Tu peux utiliser temporairement `prompt()` pour saisir les nouvelles
valeurs. Une interface de modification plus complète pourra être ajoutée
ensuite.

### 5.7. Filtrer les tâches

```javascript
function filterTasks(status) {
    // TODO 1 : Créer une liste qui contiendra les tâches filtrées.

    // TODO 2 : Si status vaut "all", afficher toutes les tâches.

    // TODO 3 : Si status vaut "completed", conserver les tâches terminées.

    // TODO 4 : Si status vaut "pending", conserver les tâches non terminées.

    // TODO 5 : Appeler renderTasks() avec la liste obtenue.
}
```

### 5.8. Rechercher une tâche

```javascript
function searchTasks(searchTerm) {
    // TODO 1 : Parcourir les tâches.

    // TODO 2 : Comparer le titre de chaque tâche avec searchTerm.

    // TODO 3 : Ne pas tenir compte des majuscules et des minuscules.

    // TODO 4 : Afficher uniquement les tâches dont le titre correspond à la recherche.
}
```

### 5.9. Mettre à jour les statistiques

```javascript
function updateStatistics() {
    // TODO 1 : Calculer le nombre total de tâches.

    // TODO 2 : Calculer le nombre de tâches terminées.

    // TODO 3 : Calculer le nombre de tâches en attente.

    // TODO 4 : Mettre à jour les trois éléments HTML correspondants.
}
```

### 5.10. Enregistrer les événements

```javascript
// Soumission du formulaire
taskForm.addEventListener("submit", addTask);

// Changement du filtre
filterSelect.addEventListener("change", (event) => {
    // TODO : Appeler filterTasks() avec la valeur sélectionnée.
});

// Saisie dans le champ de recherche
searchInput.addEventListener("input", (event) => {
    // TODO : Appeler searchTasks() avec la valeur saisie.
});
```

**Important :** les boutons de modification, de suppression et de
changement de statut créés dynamiquement dans `renderTasks()` doivent
également déclencher les fonctions correspondantes. À toi de trouver
comment transmettre l'identifiant de la bonne tâche à chaque fonction.

---

## 6. Notions à mettre obligatoirement en pratique

| Notion | Ce qui est attendu dans le projet |
| --- | --- |
| `const` et `let` | Déclarer les variables et comprendre leur portée. |
| Tableaux | Stocker et manipuler les tâches. |
| Objets | Représenter chaque tâche avec ses propriétés. |
| Fonctions | Organiser les différentes opérations. |
| `if / else` | Gérer les vérifications et les différents cas. |
| `for` / `for...of` / `forEach` | Parcourir les tâches. |
| `querySelector` | Sélectionner les éléments HTML. |
| `createElement` | Créer les éléments de la liste. |
| `textContent` | Insérer du texte dans le DOM. |
| `appendChild` | Ajouter les éléments créés. |
| `addEventListener` | Réagir aux actions de l'utilisateur. |
| `filter` / `find` / `findIndex` | Rechercher et filtrer des données. |

Tu n'es pas obligée d'utiliser toutes les méthodes de tableau dans une
seule fonction. En revanche, tu dois comprendre leur utilité et savoir
expliquer pourquoi tu as choisi une méthode plutôt qu'une autre.

---

## 7. Scénarios de test obligatoires

Avant de considérer le projet comme terminé, vérifie les situations
suivantes :

1. Ajouter une tâche avec un titre et une description.
2. Essayer d'ajouter une tâche sans titre.
3. Ajouter plusieurs tâches avec des priorités différentes.
4. Terminer une tâche puis la remettre en attente.
5. Modifier le titre d'une tâche.
6. Supprimer une tâche.
7. Afficher uniquement les tâches terminées.
8. Afficher uniquement les tâches en attente.
9. Rechercher une tâche avec une partie de son titre.
10. Effectuer une recherche avec des majuscules et des minuscules.
11. Vérifier les statistiques après chaque opération.
12. Vérifier le message affiché lorsque la liste est vide.

---

## 8. Bonus — Aller plus loin

Lorsque toutes les fonctionnalités obligatoires fonctionnent, ajoute les
améliorations suivantes :

- Sauvegarder les tâches dans `localStorage`.
- Restaurer les tâches lorsque la page est rechargée.
- Ajouter une date limite à chaque tâche.
- Trier les tâches par priorité.
- Afficher un compteur de tâches restantes.
- Ajouter une confirmation avant la suppression.

---

## 9. Règles de travail

1. **Écris toi-même le code.** Ne copie pas une solution complète
   trouvée sur Internet ou générée par une IA.
2. **Respecte la structure fournie.** Les noms des fonctions et leur
   responsabilité doivent être conservés.
3. **Comprends chaque instruction.** Être capable de lire du code ne
   signifie pas nécessairement savoir le programmer.
4. **Teste chaque fonctionnalité.** Ne passe pas à la suivante sans
   vérifier que la précédente fonctionne.
5. **Demande de l'aide lorsque tu es bloquée.** Ne reste pas longtemps
   seule sur une difficulté. Explique à un collègue ce que tu as essayé
   et ce que tu ne comprends pas.
6. **Garde un code propre.** Utilise des noms explicites et évite de
   répéter inutilement le même code.

### Questions auxquelles tu dois savoir répondre

À la fin de l'exercice, tu devras être capable d'expliquer :

- Pourquoi `tasks` est-il un tableau ?
- Pourquoi chaque tâche est-elle représentée par un objet ?
- Quelle est la différence entre `const` et `let` ?
- À quoi sert `document.querySelector()` ?
- Quelle est la différence entre `textContent` et `innerHTML` ?
- Pourquoi utilise-t-on une boucle pour afficher les tâches ?
- Quelle est la différence entre `forEach()` et `filter()` ?
- Pourquoi découpe-t-on le programme en plusieurs fonctions ?
- Comment le navigateur sait-il qu'il doit exécuter `addTask()`
  lorsque le formulaire est soumis ?
- Comment `deleteTask()` sait-elle quelle tâche supprimer ?

---

## 10. Livrable attendu

À la fin de l'exercice, tu dois fournir :

- Le dossier complet `task-manager`.
- Une application fonctionnelle avec toutes les fonctionnalités
  obligatoires.
- Un code organisé et lisible.
- Une courte explication de chaque fonction.
- Une démonstration de l'application.

**Critère essentiel de réussite :** tu dois être capable d'expliquer ton
code et d'effectuer une modification demandée sans dépendre d'une
solution copiée. L'objectif final est de développer ta capacité à
raisonner et à résoudre des problèmes avec JavaScript.
