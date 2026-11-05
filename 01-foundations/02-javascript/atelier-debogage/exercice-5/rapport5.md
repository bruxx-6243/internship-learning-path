# Exercice X — [Titre]

## Code initial
(colle le code d'origine)

const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: false },
    { id: 5, title: "Comprendre le DOM", completed: true },
    { id: 6, title: "Apprendre Git", completed: false }
];

function getTaskStatistics(tasks) {
    let total = 0;
    let completed = 0;
    let pending = 0;

    for (let i = 0; i < tasks.length; i++) {
        total++;

        if (tasks[i].completed === true) {
            completed++;
        } else if (tasks[i].completed === false) {
            completed++;
        } else {
            pending++;
        }
    }

    return {
        total: total,
        completed: completed,
        pending: pending
    };
}

console.log(getTaskStatistics(tasks));

## Erreurs identifiées
| Ligne | Erreur | Pourquoi c'est un problème |
| ----- | ------ | -------------------------- |
|   20  |  elsif | elle constitue un probleme car elle repete une seconde fois une condition déjà vérifiée                           |
| 15    |  <=    |  Elle empeche le tableau d'etre entierement parcouru
## Code corrigé
(colle ta version corrigée)

const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: false },
    { id: 5, title: "Comprendre le DOM", completed: true },
    { id: 6, title: "Apprendre Git", completed: false }
];

function getTaskStatistics(tasks) {
    let total = 0;
    let completed = 0;
    let pending = 0;

    for (let i = 0; i < tasks.length; i++) {
        total++;

        if (tasks[i].completed === true) {
            completed++;
        } else {
            pending++;
        }
    }

    return {
        total: total,
        completed: completed,
        pending: pending
    };
}

console.log(getTaskStatistics(tasks));

## Tests effectués
| Test | Entrée | Résultat obtenu | Résultat attendu | ✅ / ❌ |
| ---- | ------ | --------------- | ---------------- | ------ |
|enlevé"="|touche backspace|{ total: 6, completed: 6, pending: 0 }|{ total: 6, completed: 3, pending: 3 }| ❌|
|enlevé elseif|touche backspace|{ total: 6, completed: 6, pending: 0 }|{ total: 6, completed: 6, pending: 0 } |
## Ce que j'ai compris
(quelques phrases avec tes propres mots)
J'ai compris qu'une condition similaire ne peut etre repetée deux fois et que <= ferme le tableau et empeche d'etre entierement parcouru.

## Question de compréhension
Pourquoi est-il important de bien organiser les conditions if, else if et else lorsqu'on effectue plusieurs vérifications sur une même donnée ?
Il est important de bien organiser les condition car elles permettent de mieux prendre les decisions et d'excécuter le bloc de code dans le cas ou la condition émise est vérifiée
(ta réponse)