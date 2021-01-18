

function onlyIncreasingArray(array) {
    // let biggestNumber = array[0];
    // let newArray = [];

    // for (let elem of array) {
    //     if (elem >= biggestNumber) {
    //         newArray.push(elem);
    //         biggestNumber = elem;
    //     }
    // }

    // return newArray.join('\n');

    let result = array.reduce((result, currenValue) => {
        if (currenValue >= result[result.length - 1] || result.length === 0) {
            result.push(currenValue);
        }
        return result;
    }, []);
    return result.join('\n');
}





console.log(onlyIncreasingArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
// console.log(onlyIncreasingArray([1, 
//     2, 
//     3,
//     4]
//     ));
// console.log(onlyIncreasingArray([20, 
//     3, 
//     2, 
//     15,
//     6, 
//     1]
//     ));