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