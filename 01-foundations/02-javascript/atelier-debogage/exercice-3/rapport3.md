# Exercice 3 — [Titre]

## Code initial
(colle le code d'origine)

const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: false },
    { id: 5, title: "Comprendre le DOM", completed: true }
];

function filterTasks(tasks, completed, id) {
    const filteredTasks = [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === completed || tasks[i].id === id) {
            filteredTasks.push(tasks[i]);
        }
    }

    return filteredTasks;
}




## Erreurs identifiées
| Ligne | Erreur | Pourquoi c'est un problème |
| ----- | ------ | -------------------------- |
|    13 |    ||   |  "||" n'est pas apprprie dans le contexte |

## Code corrigé
(colle ta version corrigée)
const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: false },
    { id: 5, title: "Comprendre le DOM", completed: true }
];

function filterTasks(tasks, completed, id) {
    const filteredTasks = [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed === completed && tasks[i].id === id) {
            filteredTasks.push(tasks[i]);
        }
    }

    return filteredTasks;
}

console.log(filterTasks(tasks, true, 3));



## Tests effectués
| Test | Entrée | Résultat obtenu | Résultat attendu | ✅ / ❌ |
| ---- | ------ | --------------- | ---------------- | ------ |
| ajouté &&| "&&"|[ { id: 3, title: 'Créer une application', completed: true } ] | [ { id: 3, title: 'Créer une application', completed: true } ]|    ✅    |

## Ce que j'ai compris
(quelques phrases avec tes propres mots)
L'operateur logique || permet de voir si l'une des condition est verifiee alors que && permet que les deux conditions sont verifiees

## Question de compréhension
(ta réponse)
Dans quel cas faut-il utiliser && et dans quel cas faut-il utiliser || ?
On utilise  && pour verifier que les deux conditions sont verifiees tandis que || est utilisé au cas où l'une des conditions est vérifiée
