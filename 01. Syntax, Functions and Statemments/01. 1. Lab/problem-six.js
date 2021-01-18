
function sumRange(start, end) {
    let totalSum = 0;
    start = Number(start);
    end = Number(end);

    for (let i = start; i <= end; i++) { totalSum += i }

    return totalSum;
}

console.log(sumRange('1', '5'));
console.log(sumRange('-8', '20'));
