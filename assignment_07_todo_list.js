const readlineSync = require("readline-sync");

let tasks = [];

function addTask() {
    const task = readlineSync.question("Enter task: ");
    tasks.push(task);
    console.log('Task added: "' + task + '"');
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    viewTasks();

    const taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    const removedTask = tasks[taskNumber - 1];
    tasks.splice(taskNumber - 1, 1);

    console.log('Task "' + removedTask + '" has been removed.');
}

function main() {
    let choice;

    do {
        console.log("\n============================");
        console.log("     TO-DO LIST MENU");
        console.log("============================");
        console.log("1. Add task");
        console.log("2. View tasks");
        console.log("3. Delete task");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addTask();
                break;

            case 2:
                viewTasks();
                break;

            case 3:
                deleteTask();
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 4);
}

main();