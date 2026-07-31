const readlineSync = require('readline-sync');

function inputMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(' ')
            .map(Number);

        matrix.push(row);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let j = 0; j < cols; j++) {
        transpose[j] = [];
        for (let i = 0; i < rows; i++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

function addMatrices(matrix1, matrix2) {
    let result = [];

    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    let rowsA = matrix1.length;
    let colsA = matrix1[0].length;
    let colsB = matrix2[0].length;
    let result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

function main() {
    console.log("PART A - Matrix Transpose");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = inputMatrix(rows, cols);

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrix));

    console.log("\nPART B - Matrix Addition");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter first matrix:");
    let matrix1 = inputMatrix(rows, cols);

    console.log("Enter second matrix:");
    let matrix2 = inputMatrix(rows, cols);

    console.log("\nSum Matrix:");
    displayMatrix(addMatrices(matrix1, matrix2));

    console.log("\nPART C - Matrix Multiplication");

    let rowsA = readlineSync.questionInt("Enter rows of Matrix A: ");
    let colsA = readlineSync.questionInt("Enter columns of Matrix A: ");

    console.log("Enter Matrix A:");
    matrix1 = inputMatrix(rowsA, colsA);

    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");
    let colsB = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (colsA !== rowsB) {
        console.log("Matrix multiplication is not possible.");
        return;
    }

    console.log("Enter Matrix B:");
    matrix2 = inputMatrix(rowsB, colsB);

    console.log("\nProduct Matrix:");
    displayMatrix(multiplyMatrices(matrix1, matrix2));
}

main();