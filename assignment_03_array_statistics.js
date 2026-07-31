const readlineSync = require("readline-sync");

function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function getAverage(arr) {
    return getSum(arr) / arr.length;
}

function getMaximum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function getMinimum(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    const numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(readlineSync.questionFloat(`Enter number ${i + 1}: `));
    }

    console.log("\nResults:");
    console.log("Sum:     " + getSum(numbers));
    console.log("Average: " + getAverage(numbers));
    console.log("Maximum: " + getMaximum(numbers));
    console.log("Minimum: " + getMinimum(numbers));
}

main();