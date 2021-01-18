

function spiralMatrix(x, y) {
    /* let maxRow = x;
       let maxCol = y; */
    
    let maxLength = x;

    const printMatrix = (matrix) => { matrix.forEach(row => console.log(row.join(' '))) }
    const matrix = [];
    for (let r = 0; r < maxLength; r++) { let row = []; for (let c = 0; c < maxLength; c++) { row.push(false); } matrix.push(row); }


    let curRow = 0;
    let curCol = 0;

    let curVal = 1;
    let maxVal = x*y;

    let curTurn = 1;

    const directions = ['rDown', 'cUp', 'rUp', 'cDown'];

    while (curVal <= maxVal) {
        let curDiraction = directions[curTurn%directions.length];
        let index = 0;

        while (index < maxLength) {

            matrix[curRow][curCol] = curVal;
            curVal++;
            
            if (index === maxLength - 1) {

                switch(curDiraction) {
                    case 'cUp': curRow++; break;
                    case 'rUp': curCol--; break;
                    case 'cDown': curRow--; break;
                    case 'rDown': curCol++; break;
                }

                break;
            }

            switch(curDiraction) {
                case 'cUp': curCol++; break;
                case 'rUp': curRow++; break;
                case 'cDown': curCol--; break;
                case 'rDown': curRow--; break;
            }

            index++;
        }

        curTurn++;
        if (curTurn % 2 == 0) {
            maxLength--;
        }
    }   

    printMatrix(matrix);
}


spiralMatrix(5, 5);
console.log('\n');
spiralMatrix(3, 3);
