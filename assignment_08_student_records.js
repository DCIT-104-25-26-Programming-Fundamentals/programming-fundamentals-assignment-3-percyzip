const readlineSync = require("readline-sync");

let students = [];

function calculateAverage(scores) {
    if (scores.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

function addStudent() {
    const student = {};

    student.name = readlineSync.question("Student name: ");
    student.id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt("How many scores? ");

    student.scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        const score = readlineSync.questionFloat("Enter score " + (i + 1) + ": ");
        student.scores.push(score);
    }

    students.push(student);

    console.log('Student "' + student.name + '" added successfully.');
}

function displayStudents() {
    if (students.length === 0) {
        console.log("No student records available.");
        return;
    }

    console.log("\nName\t\tID\t\tScores\t\tAverage");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        console.log(
            student.name + "\t" +
            student.id + "\t" +
            student.scores.join(", ") + "\t" +
            calculateAverage(student.scores).toFixed(2)
        );
    }
}

function findAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                students[i].name +
                "'s average score: " +
                calculateAverage(students[i].scores).toFixed(2)
            );
            return;
        }
    }

    console.log("Student ID not found.");
}

function main() {
    let choice;

    do {
        console.log("\n================================");
        console.log("   STUDENT RECORD SYSTEM MENU");
        console.log("================================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                findAverage();
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