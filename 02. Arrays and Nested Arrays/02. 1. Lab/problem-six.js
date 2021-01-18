

function biggerHalf (numArray) {
    numArray = numArray.sort((a, b) => a-b);
    const middleOfArray = Math.floor(numArray.length / 2);
    let biggerHalf = [];

    // for (let i = numArray.length-1; i >= middleOfArray; i--) {
    //     biggerHalf.push(numArray[i]);
    // }
    // return biggerHalf.reverse();

    biggerHalf = numArray.slice(middleOfArray);
    return biggerHalf;
}


// console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
