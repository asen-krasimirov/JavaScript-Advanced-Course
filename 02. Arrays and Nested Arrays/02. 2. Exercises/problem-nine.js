

function diagonalAttack(stringArray) {

    const printMatrix = (matrix) => { matrix.forEach(row => console.log(row.join(' '))) }
    const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
    
    function elementPresence (array, elem) {
        return array.some((item) => equals(item, elem))
    }
    
    const matrix = [];

    stringArray.forEach(elem => { 
        elem = elem.split(' ');
        elem.forEach((item, index) => elem[index] = Number(item));
        matrix.push(elem);
    });
    
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    /*
    let mainElementPositions = [];
    let secondaryElementPositions = [];
    */
    const diagonalPositions = [];
    const matrixLength = matrix.length;
    
    for (let r = 0; r < matrixLength; r++) {
        mainDiagonalSum += matrix[r][r];
        diagonalPositions.push([r, r]);
    }
    for (let r = 0; r < matrixLength; r++) {
        secondaryDiagonalSum += matrix[r][matrixLength-1-r];
        diagonalPositions.push([r, matrixLength-1-r]);
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let r = 0; r < matrixLength; r++) {
            for (let c = 0; c < matrixLength; c++) {
                // let operator = !diagonalPositions.includes([r, c]);
                if ( !elementPresence(diagonalPositions, [r, c]) ) {
                     matrix[r][c] = mainDiagonalSum; 
                    }
            }
        }
    }
    printMatrix(matrix);
}


diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

// diagonalAttack(['1 1 1',
// '1 1 1',
// '1 1 0']
// );