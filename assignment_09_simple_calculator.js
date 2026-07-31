const readlineSync = require("readline-sync");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function exponent(a, b) {
    return a ** b;
}

function main() {
    let choice;

    do {
        console.log("\n============================");
        console.log("     SIMPLE CALCULATOR");
        console.log("============================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");

        choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice >= 1 && choice <= 6) {
            const num1 = readlineSync.questionFloat("Enter first number : ");
            const num2 = readlineSync.questionFloat("Enter second number: ");

            switch (choice) {
                case 1:
                    console.log(`Result: ${num1} + ${num2} = ${add(num1, num2).toFixed(2)}`);
                    break;

                case 2:
                    console.log(`Result: ${num1} - ${num2} = ${subtract(num1, num2).toFixed(2)}`);
                    break;

                case 3:
                    console.log(`Result: ${num1} * ${num2} = ${multiply(num1, num2).toFixed(2)}`);
                    break;

                case 4:
                    if (num2 === 0) {
                        console.log("Error: Cannot divide by zero.");
                    } else {
                        console.log(`Result: ${num1} / ${num2} = ${divide(num1, num2).toFixed(2)}`);
                    }
                    break;

                case 5:
                    if (num2 === 0) {
                        console.log("Error: Cannot divide by zero.");
                    } else {
                        console.log(`Result: ${num1} % ${num2} = ${modulus(num1, num2).toFixed(2)}`);
                    }
                    break;

                case 6:
                    console.log(`Result: ${num1} ** ${num2} = ${exponent(num1, num2).toFixed(2)}`);
                    break;
            }
        } else if (choice === 7) {
            console.log("Goodbye!");
        } else {
            console.log("Invalid choice. Please try again.");
        }

    } while (choice !== 7);
}

main();