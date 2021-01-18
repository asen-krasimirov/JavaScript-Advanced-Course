
function largestNumber(numOne, numTwo, numThree) {
    
    /*
    let largestNum = -10_000;
    if (numOne > largestNum) {
        largestNum = numOne;
    }
    if (numTwo > largestNum) {
        largestNum = numTwo;
    }
    if (numThree > largestNum) {
        largestNum = numThree;
    }
    */
    
    let largestNumber;
    if (numOne > numTwo && numOne > numThree) {
        largestNumber = numOne;
    } else if (numTwo > numOne && numTwo > numThree) {
        largestNumber = numTwo;
    } else {
        largestNumber = numThree;
    }

    console.log(`The largest number is ${largestNumber}.`);

}


largestNumber(1, 2, 3);
