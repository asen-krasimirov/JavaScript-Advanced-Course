

// function matrixDiagonals (matrix) {
//     let mainSum = 0; let secondarySum = 0;
//     const matrixLength = matrix.length;

//     for (let i = 0; i <= matrixLength-1; i++) { mainSum += matrix[i][i]; }

//     for (let i = 0; i <= matrixLength-1; i++) { 
//         secondarySum += matrix[i][matrixLength-1-i]; 
//     }

//     return [mainSum, secondarySum].join(' ');

// }

function matrixDiagonals(matrix) {
    let mainSum = 0; let secondarySum = 0;
    const matrixLength = matrix.length;
    let firstIndex = 0;
    let secondIndex = matrixLength - 1;

    matrix.forEach(row => {
        mainSum += row[firstIndex++];
        secondarySum += row[secondIndex--];
    }
    )

    return [mainSum, secondarySum].join(' ');

}


console.log(matrixDiagonals([
    [20, 40],
    [10, 60]
]));

console.log(matrixDiagonals([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));
