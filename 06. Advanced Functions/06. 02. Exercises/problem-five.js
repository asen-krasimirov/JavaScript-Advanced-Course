

// function add(number, newSum=number) {
//     let initialSum = newSum;
//     return function(num) {
//         let sum = initialSum + num;
//         return add(num, sum);
//     };
// }


function add(number, newSum=number) {
    let initialSum = newSum;

    function calc(num) {
        return add(num, initialSum + num);
    };

    calc.toString = () => initialSum;

    return calc;
}

// function add(number) {
//     let initialSum = number;

//     function calc(num) {
//         initialSum += num;
//         return calc;
//         // return add(num, initialSum + num);
//     };

//     calc.toString = () => initialSum;

//     return calc;
// }



console.log(add(1)(2));
