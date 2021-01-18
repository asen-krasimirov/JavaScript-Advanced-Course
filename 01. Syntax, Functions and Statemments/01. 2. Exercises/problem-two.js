
function gcd (numOne, numTwo) {
    while (numOne != numTwo) {

        if (numOne > numTwo) {
            numOne = numOne - numTwo;

        } else { 
            numTwo = numTwo - numOne; 
        
        }

    } 
    console.log(numOne);
}


gcd(15, 5);
gcd(2154, 458);
