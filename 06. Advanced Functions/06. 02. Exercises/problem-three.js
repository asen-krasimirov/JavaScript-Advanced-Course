

function getFibonator() {
    let previousNum = -1;
    let curNum = 1;

    return function() {
        let returnResult = previousNum + curNum;

        previousNum = curNum;
        curNum = returnResult;

        return curNum;
    }
}


let fib = getFibonator();
console.log(fib()); // 0
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
