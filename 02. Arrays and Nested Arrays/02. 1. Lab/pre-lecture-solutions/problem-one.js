
function evenPositions (array) {
    let results = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            results.push(array[i]);
        }
    }

    console.log(results.join(' '));
}


evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);
