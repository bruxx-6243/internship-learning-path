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

