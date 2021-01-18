

function equalNeighbors(matrix) {
    let neightborsCount = 0;
    const rowLength = matrix.length;
    const columnLength = matrix[0].length

    function validateIndex(index, length) { return -1 < index && index < length }

    for (let r = 0; r < rowLength; r++) {
        for (let c = 0; c < columnLength; c++) {
            let curElem = matrix[r][c];
            
            if (validateIndex(r+1, rowLength) && curElem === matrix[r+1][c]) {
                neightborsCount++;
            }
            
            if (validateIndex(c+1, columnLength) && curElem === matrix[r][c+1]) {
                neightborsCount++;
            }

        }
    }

    return neightborsCount;
}


// console.log(equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '5', '2'],
// ['9', '8', '7', '5', '4']]
// ));

// console.log('\nDELIMITER\n');

// console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// ));

console.log(equalNeighbors([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]));
