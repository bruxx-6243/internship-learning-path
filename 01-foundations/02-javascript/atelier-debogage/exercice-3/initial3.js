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

