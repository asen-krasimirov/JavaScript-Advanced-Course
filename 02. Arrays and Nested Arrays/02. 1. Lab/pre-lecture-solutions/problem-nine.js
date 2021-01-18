

function biggestInMatrix (matrix) {
    let biggestNumber = -10000;
    // const matrixLength = matrix.length;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            let curElem = matrix[r][c];
            if (curElem > biggestNumber) {
                biggestNumber = curElem;
            }
        }
    }

    return biggestNumber;
}


console.log(biggestInMatrix([
    [20, 50, 10],
    [8, 33, 145]
]))

console.log(biggestInMatrix([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]))
