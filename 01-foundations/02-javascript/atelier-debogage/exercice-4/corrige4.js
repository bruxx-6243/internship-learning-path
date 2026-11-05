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