# Exercice X — [Titre]

## Code initial
(colle le code d'origine)

const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: false },
    { id: 5, title: "Comprendre le DOM", completed: true }
];

function countCompletedTasks(tasks) {
     let count = 0;

    for (let i = 0; i < tasks.length; i++) {
         if (tasks[i].completed = true) {
            count++;
         }
    }

     return count;
     
}

console.log(countCompletedTasks(tasks));



## Erreurs identifiées
| Ligne | Erreur | Pourquoi c'est un problème |
| ----- | ------ | -------------------------- |
|    13 |    =   |  "=" ne permet pas de faire une comparaison |

## Code corrigé
(colle ta version corrigée)
const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: false },
    { id: 5, title: "Comprendre le DOM", completed: true }
];

function countCompletedTasks(tasks) {
     let count = 0;

    for (let i = 0; i < tasks.length; i++) {
         if (tasks[i].completed == true) {
            count++;
         }
    }

     return count;
     
}

console.log(countCompletedTasks(tasks));



## Tests effectués
| Test | Entrée | Résultat obtenu | Résultat attendu | ✅ / ❌ |
| ---- | ------ | --------------- | ---------------- | ------ |
| ajouté ==| "=="|     3            |       3           |    ✅    |

## Ce que j'ai compris
(quelques phrases avec tes propres mots)
J'ai compris que == permet de comparer dans une condition et = ne s'utilise qu'en cas d'affectation

## Question de compréhension
(ta réponse)
Quelle est la différence entre =, == et === dans une condition JavaScript ?
= :permet d'affecter une valeur
== : permet de faire une comparaison
=== : permet de renseigner le type