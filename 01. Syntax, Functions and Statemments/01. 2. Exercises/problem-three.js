
function sameNumbers (integer) {
    let sameVar = true;
    let digitSum = 0;
    let curDigit; let nextDigit;
    const integerLength = String(integer).length;

    for (let i = 0; i < integerLength; i++) {

        curDigit = String(integer)[i];
        nextDigit = String(integer)[i+1];

        if (curDigit != nextDigit && i != integerLength - 1) {
            sameVar = false;
        }

        digitSum += Number(curDigit);

    }

    console.log(sameVar);
    console.log(digitSum);
}


sameNumbers(2222222);
sameNumbers(1234);