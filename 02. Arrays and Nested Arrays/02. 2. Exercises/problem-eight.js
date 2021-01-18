function hasWon(matrix, symbol) {
    const allEqual = arr => arr.every(val => val === arr[0]);

    // finding all rows => getting the rows by just getting the matrix;

    // finding all colums
    function allColumns(matrix) {
        const columns = [];
        for (let c = 0; c < matrix.length; c++) {
            let curRow = [];
            for (let r = 0; r < matrix.length; r++) { curRow.push(matrix[r][c]); }
            columns.push(curRow); }
        return columns;
    }

    // finding all diagonals
    function allDiagonals(matrix) {
        const mainDiagonal = [];
        const secondaryDiagonal = [];
        for (let r = 0; r < matrix.length; r++) { mainDiagonal.push(matrix[r][r]); }
        for (let r = 0; r < matrix.length; r++) { secondaryDiagonal.push(matrix[r][matrix.length-1-r]); }
        return [mainDiagonal, secondaryDiagonal];
    }

    const allMoves = [].concat(matrix, allColumns(matrix), allDiagonals(matrix));
    return allMoves.some(arr => allEqual(arr) && arr[0] === symbol);

}

function ticTacToe(coordinates) {
    const field = [[false, false, false], [false, false, false], [false, false, false]];
    const coordinatesCount = coordinates.length;
    let index = 0;

    const isCellFree = (matrix, row, col) => !matrix[row][col];
    // const allEqual = arr => arr.every(val => val === arr[0]);
    const printField = (matrix) => matrix.forEach(row => { console.log(row.join('\t')); });

    

    while (index <= coordinatesCount) {
        let coordinate = coordinates.shift();
        let curRow = Number(coordinate[0]); let curCol = Number(coordinate[coordinate.length-1]);
        let curTurn = (index % 2 == 0) ? 'X' : 'O' 

        if (!isCellFree(field, curRow, curCol)) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        field[curRow][curCol] = curTurn;

        if (hasWon(field, curTurn)) {
            console.log(`Player ${curTurn} wins!`);
            printField(field);
            return;
        }

        index++;
        if (index >= 9) {
            console.log("The game ended! Nobody wins :(");
            printField(field);
            return;
        }
    }
}

/*
ticTacToe(["0 1",
 "0 0",
 "0 2", 
 "2 0",
 "1 0",
 "1 1",
 "1 2",
 "2 2",
 "2 1",
 "0 0"]
);
console.log('\n');
ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);
console.log('\n');
ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);
*/