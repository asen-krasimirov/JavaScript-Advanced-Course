

function townsToJSON(data) {
    const resultToJSON = [];
    const trimElements = (...arr) => {
        for (let index = 0; index < arr.length; index++) {
            arr[index] = arr[index].trim();
        }
        return arr;
    };

    // getting the heading
    let [_, firstCol, secondCol, thirdCol] = data.shift().split('|');
    // [firstCol, secondCol, thirdCol] = trimElements(firstCol, secondCol, thirdCol);
    // const specialKeys = {
    //     'first': firstCol,
    //     'second': secondCol,
    //     'third': thirdCol
    // };

    for (let string of data) {
        let [_, firstElem, secondElem, thirdElem] = string.split('|');
        [firstElem, secondElem, thirdElem] = trimElements(firstElem, secondElem, thirdElem);
        resultToJSON.push(
            {
                'Town': firstElem,
                'Latitude': Number(Number(secondElem).toFixed(2)),
                'Longitude': Number(Number(thirdElem).toFixed(2))
            }
        );
    }
    return JSON.stringify(resultToJSON);
}


console.log(townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)); 
