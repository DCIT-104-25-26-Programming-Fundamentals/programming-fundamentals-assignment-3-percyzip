const readlineSync = require("readline-sync");

function printTable(number) {
    console.log("Multiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

function printTablesUpToN(n) {
    if (n <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);

        if (i !== n) {
            console.log("---------------------------");
        }
    }
}

function main() {
    const number = readlineSync.questionInt("Enter a number: ");
    printTable(number);

    console.log();

    const n = readlineSync.questionInt("Enter a number N: ");
    printTablesUpToN(n);
}

main();