

function smallestTwo (array) {

    function findSmallest () {
        let smallestNumber = 100000000000000;
        let smallestIndex;
        for (let i = 0; i < array.length; i++) {
            let curElem = array[i];
            if (curElem < smallestNumber) {
                smallestNumber = curElem;
                smallestIndex = i;
            }
        }

        if (smallestNumber == 100000000000000) {
            return
        }

        array[smallestIndex] = NaN;
        return smallestNumber;
    }
    
    result = [findSmallest(), findSmallest()];

    console.log(result.join(' '));

}

smallestTwo([1]);
smallestTwo([1, 2, 3 ,4]);
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
