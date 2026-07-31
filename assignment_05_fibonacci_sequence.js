const readlineSync = require("readline-sync");

function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = [];

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            sequence.push(first);
        } else if (i === 2) {
            sequence.push(second);
        } else {
            let next = first + second;
            sequence.push(next);
            first = second;
            second = next;
        }
    }

    console.log("Fibonacci sequence: " + sequence.join(" "));
}

function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

function main() {
    const n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    const number = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

main();