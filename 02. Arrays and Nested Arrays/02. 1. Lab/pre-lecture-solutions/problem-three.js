

function sumFirstLast (array) {
    const firstElem = Number(array[0]);
    const lastElem = Number(array[array.length - 1]);
    
    return firstElem + lastElem;
}


console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
