

function operateOdds (array) {
    // let oddNumbers = array.filter((a, i) => {return i % 2;});
    // oddNumbers = oddNumbers.map(a => a*2);
    // return oddNumbers.reverse().join(' ');

    return array.filter((a, i) => {return i % 2;}).map(a => a*2).reverse().join(' ');
}


console.log(operateOdds([10, 15, 20, 25]));
console.log(operateOdds([3, 0, 10, 4, 7, 3]));
