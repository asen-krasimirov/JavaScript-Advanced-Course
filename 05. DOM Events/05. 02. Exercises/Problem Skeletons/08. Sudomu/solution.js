function solve() {
    const [checkButton, clearButton] = document.getElementsByTagName('button');
    const field = document.querySelector('tbody');
    const table = document.querySelector('#exercise table')
    const matrixedTable = makeMatrixFromTable(field);

    const reusltParagraphHolder = document.querySelector('#check')
    const reusltParagraph = document.querySelector('#check p');

    // add event listener to quick ckeck button (button[0])
    checkButton.addEventListener('click', validateBoard);
    // validate the sudoko state (set the according style)

    // add event listener to clear button (button[1])
    clearButton.addEventListener('click', clearBoard);
    // clear the validated state (to do the default style)

    function makeMatrixFromTable(table) {
        const newMatrix = [];

        for (const row of Array.from(table.children)) {
            const curMatrixRow = [];
            for (elem of Array.from(row.children)) {
                curMatrixRow.push(elem);
            }
            newMatrix.push(curMatrixRow);
        }

        return newMatrix;
    }

    function isElemIndexCorrectlly(index, length) { return -1 < index && index < length}

    function isElementValid(row, column, matrix) {
        let curElem = matrix[row][column].children[0].value;
        let matrixLength = matrix.length;

        const directionDeltas = [[1, 0], [-1, 0], [0, -1], [0, 1]];

        for (const direction of directionDeltas) {
            let [rowDelt, colDelt] = direction;
            let curRow = row; let curCol = column;
            for (let i = 0; i < matrixLength; i++) {
                curRow = curRow+rowDelt; curCol = curCol+colDelt;

                if (!isElemIndexCorrectlly(curRow, matrixLength) || !isElemIndexCorrectlly(curCol, matrixLength)) { break; }

                const newElem = matrix[curRow][curCol];


                if (!newElem) { break; }
                else if (newElem.children[0].value === curElem) { return false; }
            }
        }
        return true;
    }

    function validateBoard(event) {
        function isValid() {
            const fieldElements = matrixedTable;

            for (let r = 0; r < fieldElements.length; r++) {
                // const curPack = [];
                for (let c = 0; c < fieldElements.length; c++) {
                    // fieldElements[c][r].children[0].value;
                    if (!isElementValid(r, c, fieldElements)) { return false; }
                }

                // let searchedElem = curPack.shift();
                // let foundTimes = 0;

                // curPack.forEach(elem => { if (elem == searchedElem) { foundTimes++; } })

                // if (foundTimes != 1) { return false; }
            }

            return true;
        }

        let isBoardValid = isValid();
        isBoardValid ? customizeTable("2px solid green", "You solve it! Congratulations!", 'green') : customizeTable("2px solid red", "NOP! You are not done yet...", 'red');
    }

    function customizeTable(boardStyle = '', resultText = '', resultColor = '') {
        table.style.border = boardStyle;
        reusltParagraph.textContent = resultText;
        reusltParagraphHolder.style.color = resultColor;
    }

    function clearBoard(event) {
        customizeTable('', '', '');
        
        const fieldElements = matrixedTable;
        for (let r = 0; r < fieldElements.length; r++) {
            for (let c = 0; c < fieldElements.length; c++) {
                fieldElements[r][c].children[0].value = '';
            }
        }
    }
}