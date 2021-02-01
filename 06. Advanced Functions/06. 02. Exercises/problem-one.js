

function softNumbericArray(array, command) {
    const sortDirection = {
        'asc': (a, b) =>  a-b,
        'desc': (a , b) => b-a
    }

    return array.sort(sortDirection[command]);
}


// console.log(softNumbericArray([14, 7, 17, 6, 8], 'asc'));
console.log(softNumbericArray([14, 7, 17, 6, 8], 'desc'));