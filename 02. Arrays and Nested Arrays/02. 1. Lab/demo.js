// let array = [11, 5, 6, 7, 1, 2, 3, 4, 10];
// array.sort((a, b) => a - b);
// // console.log(array);

// let charArray = ['hello', 'Hello', 'Test', 'a', 'B', 'c'];
// charArray.sort((a, b) => a.localeCompare(b));
// console.log(charArray);

const numbersArr= [30, 50, 40, 10, 70]; 
const averageReduced = numbersArr.reduce((acumulator, currentvalue, index, array) => {
    acumulator += currentvalue;
    if ( index == array.length-1 ){
        return acumulator / array.length;
    } return acumulator;
})

console.log(averageReduced);
