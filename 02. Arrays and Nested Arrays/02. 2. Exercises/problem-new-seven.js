

function magicMatrices(matrix) {
    const matrixLength = matrix.length;
    const commonSum = matrix[0].reduce((total, currentElem, index, initialArr) => {
        total += currentElem;
        return total;
    }, 0);

    function rowValidator(matrix) {
        
        return !matrix.some((row) => {
            
            return row.reduce((total, currentElem) => {
                total += currentElem;
                return total;
            
            }, 0) != commonSum;
        });
     

    }
    function columnValidator(matrix) {
        const reversedMatrix = [];
        for (let c = 0; c < matrixLength; c++) {
            let curRow = [];
            for (let r = 0; r < matrixLength; r++) {
                curRow.push(matrix[c][r]);
            }
            reversedMatrix.push(curRow);
        }

        return rowValidator(reversedMatrix);
    }

    return rowValidator(matrix) && columnValidator(matrix);
}


console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));
console.log(magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));