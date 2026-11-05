# Exercice X — [Titre]

## Code initial
(colle le code d'origine)
const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: false },
    { id: 2, title: "Comprendre les boucles", completed: true },
    { id: 3, title: "Créer une application", completed: false },
    { id: 4, title: "Apprendre React", completed: true },
];

function displayTasks(tasks) {
    for (let i = 1; i <= tasks.length; i++) {
        console.log(tasks[i].title);
    }
}


displayTasks(tasks);


## Erreurs identifiées
| Ligne | Erreur | Pourquoi c'est un problème |
| ----- | ------ | -------------------------- |
|   9   |  let i = 1; i <= tasks.length      |   le compteur  est initialisé à 1 au lieu de 0car dans un tableau on commence à compter à partir de 0 ensuite la condition était émise à "i <= tasks.length" au lieu de "i < tasks.length"                    |

## Code corrigé
(colle ta version corrigée)
const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: false },
    { id: 2, title: "Comprendre les boucles", completed: true },
    { id: 3, title: "Créer une application", completed: false },
    { id: 4, title: "Apprendre React", completed: true },
];

function displayTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].title);
    }
}


displayTasks(tasks);

## Tests effectués
| Test | Entrée | Résultat obtenu | Résultat attendu | ✅ / ❌ |
| ---- | ------ | --------------- | ---------------- | ------ |
| remplacer 1 par 0     | touche Backspace  | Comprendre les boucles/Créer une application/Apprendre React|   Apprendre JavaScript/Comprendre les boucles/Créer une application/Apprendre React|  ❌|
| enlevé "="| touche backspace| lignes d'erreurs| Apprendre JavaScript/Comprendre les boucles/Créer une application/Apprendre React | ❌|
## Ce que j'ai compris
(quelques phrases avec tes propres mots)
J'ai compris que i <= tasks.length; empecehe le tableau d'etre entierement parcouru

## Question de compréhension
(ta réponse) 
Pourquoi utilise-t-on généralement i < tasks.length plutôt que i <= tasks.length lorsqu'on parcourt un tableau ?
Car i < tasks.length permet de parcourir chaque element du tableau tandis que i <= tasks.length coupe le tableau une fois que la condition n'est plus verifiée
