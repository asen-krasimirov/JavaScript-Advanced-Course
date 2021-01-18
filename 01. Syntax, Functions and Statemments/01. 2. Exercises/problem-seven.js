
function validityChecker(x1, y1, x2, y2) {

    function distanceValidator(x1, y1, x2, y2) {
        const difference = Math.sqrt(
            (x2 - x1) ** 2 + (y2 - y1) ** 2
        )

        return Number.isInteger(difference) ? 'valid' : 'invalid';
    }


    console.log(
        `{${x1}, ${y1}} to {0, 0} is ${distanceValidator(x1, y1, 0, 0)}\n{${x2}, ${y2}} to {0, 0} is ${distanceValidator(x2, y2, 0, 0)}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${distanceValidator(x1, y1, x2, y2)}\n`
    );
}


validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
