

function janNotation(data) {
    const savedNumbers = [];

    const lengths = {
        'lastIndex': savedNumbers.length-1,
        'secondToLastIndex': savedNumbers.length-2 
    };

    const operations = {
        '+': function add(a, b) { return a + b; },
        '-': function add(a, b) { return a - b; },
        '*': function add(a, b) { return a * b; },
        '/': function add(a, b) { return a / b; },
    };

    const savedLengthLessThanTwo = () => savedNumbers.length <= 1;

    for (let elem of data) {
        if (typeof elem === 'number') {
            savedNumbers.push(elem);
        } else if (savedLengthLessThanTwo()) {
            return "Error: not enough operands!";
        } else {
            let [numberOne, numberTwo] = [savedNumbers[savedNumbers.length-2], savedNumbers[savedNumbers.length-1]];
            savedNumbers.splice(savedNumbers.length-2, 2, operations[elem](numberOne, numberTwo));
        }
    }

    return savedLengthLessThanTwo() ? savedNumbers[0] : "Error: too many operands!";
}

console.log(janNotation([3,
    4,
    '+']
));

console.log(janNotation([5,
    3,
    4,
    '*',
    '-']
));

console.log(janNotation([7,
    33,
    8,
    '-']
));

console.log(janNotation([15,
    '/']
));
