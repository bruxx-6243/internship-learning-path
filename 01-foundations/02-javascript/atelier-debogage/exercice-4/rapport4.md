# Exercice 5 — [Titre]

## Code initial
(colle le code d'origine)

const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: true },
    { id: 5, title: "Comprendre le DOM", completed: false }
];

console.log("All tasks", tasks);
console.log(`Current tasks length: ${tasks.length}`);



function removeCompletedTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
       
        if (tasks[i].completed === true) {
            tasks.splice(i, 1);
            
        }
    }

    // return tasks;
}

console.log(removeCompletedTasks(tasks));

## Erreurs identifiées
| Ligne | Erreur | Pourquoi c'est un problème |
| ----- | ------ | -------------------------- |
|    18 |absence de la decrementationn  |elle permettait a la boucle de connaitre la position precedente de l'element qui a ete supprime a cause de la methode splice   |

## Code corrigé
(colle ta version corrigée)
const tasks = [
    { id: 1, title: "Apprendre JavaScript", completed: true },
    { id: 2, title: "Comprendre les fonctions", completed: false },
    { id: 3, title: "Créer une application", completed: true },
    { id: 4, title: "Apprendre React", completed: true },
    { id: 5, title: "Comprendre le DOM", completed: false }
];

console.log("All tasks", tasks);
console.log(`Current tasks length: ${tasks.length}`);



function removeCompletedTasks(tasks) {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`Index At loop starting: ${i}`)
        if (tasks[i].completed === true) {
            console.log("===>tasks[", i, "]", "===", tasks[i]);
            
            tasks.splice(i, 1);
            
            console.log("==>Table After splice", tasks);
            console.log(`Index After slicing: ${i}`)
            
            i--;
        }
    }

    // return tasks;
}

console.log(removeCompletedTasks(tasks));



## Tests effectués
| Test | Entrée | Résultat obtenu | Résultat attendu | ✅ / ❌ |
| ---- | ------ | --------------- | ---------------- | ------ |
| ajouté i--| "i--"|[
  { id: 2, title: 'Comprendre les fonctions', completed: false },
  { id: 5, title: 'Comprendre le DOM', completed: false }
]|[
  { id: 2, title: 'Comprendre les fonctions', completed: false },
  { id: 5, title: 'Comprendre le DOM', completed: false }
] |    ✅    |
ˀ
## Ce que j'ai compris
(quelques phrases avec tes propres mots)
J'ai compris que la methode splice permet de supprimer le nombre d'elements renseigne a partir d'une position precisee du tableau 

## Question de compréhension
(ta réponse)
Que devient l'index des éléments suivants lorsqu'on supprime un élément d'un tableau avec splice() ?

L'index des éléments suivants ne change pas par contre parcourir le tableau devient impossible car l'index de l'element suppri,e devient inconnu pour passer au suivant