

function orbit(args) {
    let [width, height, x, y] = args;

    const matrix = [];
    for (let r = 0; r < height; r++) { let row = []; for (let c = 0; c < width; c++) { row.push(false); } matrix.push(row); }
    matrix[x][y] = 1;

    const validateIndex = (num, length) =>  -1 < num && num < length;

    function setNeighbours(row, column, curVal) {
        if (!matrix[row][column]) {
            return;
        }

        for (let deltaRow = -1; deltaRow <= +1; deltaRow++) {
            for (let deltaCol = -1; deltaCol <= +1; deltaCol++) {
                let newRow = row+deltaRow; let newCol = column+deltaCol;

                if (validateIndex(newRow, height) && validateIndex(newCol, width)) {
                    if (!matrix[newRow][newCol]) {
                        matrix[newRow][newCol] = curVal + 1;
                    }
                }
            }
        }
    }

    for (let count = 1; count <= width; count++) {
        matrix.forEach((row, r) => row.forEach((column, c) => {
            setNeighbours(r, c, matrix[r][c]);
        }))
    }

    result = '';
    matrix.forEach(row => result += row.join(' ') + '\n');
    return result;
}


console.log(orbit([4, 4, 0, 0]));
console.log();
console.log(orbit([5, 5, 2, 2]));
console.log();
console.log(orbit([3, 3, 2, 2]));
