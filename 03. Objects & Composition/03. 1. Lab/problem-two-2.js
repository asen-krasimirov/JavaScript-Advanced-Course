

function cookingNumbers (number, op1, op2, op3, op4, op5) {
    number = Number(number);
    const operations = [op1, op2, op3, op4, op5]; 

    const operators = {
        chop() { number /= 2; },
        dice() { number = Math.sqrt(number); },
        spice() { number += 1; },
        bake() { number *= 3; },
        fillet() { number *= 0.8; }
    }

    for (let i = 0; i < operations.length; i++) {
        /*
        switch (operations[i]) {
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number *= 0.8; break;
        }
        */
        
        operators[operations[i]]();

        console.log(number);
    }
}


cookingNumbers(9,
'dice',
'spice',
'chop',
'bake',
'fillet',);
