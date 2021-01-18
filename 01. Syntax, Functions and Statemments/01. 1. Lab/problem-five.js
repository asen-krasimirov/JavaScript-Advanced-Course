
function mathOps(numOne, numTwo, op) {
    let result;
    
    /*
    if (op == '+') {
        result = numOne + numTwo;
    } else if (op == '-') {
        result = numOne - numTwo;
    } else if (op == '*') {
        result = numOne * numTwo;
    } else if (op == '/') {
        result = numOne / numTwo;
    } else if (op == '%') {
        result = numOne % numTwo;
    } else {
        result = numOne ** numTwo;
    }
    */
    
    switch (op) {
        case '+': result = numOne + numTwo; break;
        case '-': result = numOne - numTwo; break;
        case '/': result = numOne / numTwo; break;
        case '*': result = numOne * numTwo; break;
        case '%': result = numOne % numTwo; break;
        case '**': result = numOne ** numTwo; break;
        
    }

    console.log(result);
}


mathOps(5, 6, '+');
mathOps(3, 5.5, '*');

