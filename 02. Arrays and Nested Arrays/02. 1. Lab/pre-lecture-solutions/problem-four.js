

function halfOrderedArrayer (array) {
    let newArray = [];

    // for (let i = 0; i < array.length; i++) {}
    let index = 0;

    while (index < array.length) {

        let currentElem = array[index];
        // if (currentElem % 2 == 0) {
        //     positioveArray.push(currentElem);
        // } else {
        //     negativeArray.push(currentElem);
        // }

        let elemPositivity = currentElem >= 0 ? 'positive' : 'negative';
        switch (elemPositivity) {
            case 'positive':
                newArray.push(currentElem);
                break;
            case 'negative':
                newArray.unshift(currentElem);
                break;
        }

        index += 1;

    }

    // console.log(newArray);

    return newArray.join('\n');
}


console.log(halfOrderedArrayer([7, -2, 8, 9]));
// console.log();
console.log(halfOrderedArrayer([3, -2, 0, -1]));
