

function solution(array, startIndex, endIndex) {
    if (!Array.isArray(array)) { throw TypeError('invalid input type'); return NaN }
    if (startIndex < 0) { throw new Error('invalid start index'); startIndex = 0 }
    if (endIndex > array.length-1) { throw new Error('invalid end index'); endIndex = array.length-1 }

    // let result = array.slice(startIndex, endIndex+1).map(num=>Number(num)).reduce((a, b) => a + b, 0);

    return  array
    .slice(startIndex, endIndex+1)
    .map(Number)
    .reduce((a, b) => a + b, 0);
}


console.log(solution([1], 0, 0) == 1);
console.log(solution([1, 1], 0, 1) == 2); 
// console.log(String(solution('a', 0, 1)) === 'NaN');
// console.log(solution([1, 1], -12, 1) == 2); 

// console.log(solution([1, 1], -19, 12) == 2); 

// console.log(solution([10, 20, 30, 40, 50, 60], 3, 300));