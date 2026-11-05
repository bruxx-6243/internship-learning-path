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

