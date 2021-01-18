
function aggregateElements (array) {

    function elementSum (locArray) {
        let sum = 0;
        for (let i = 0; i <= locArray.length - 1; i++) {
            sum += locArray[i];
        }
        return sum

    }

    function inverseSum (locArray) {
        let sum = 0;
        for (let i = 0; i <= locArray.length - 1; i++) {
            sum += 1/locArray[i];
        }
        return sum

    }

    function concatanateSum (locArray) {
        let sum = "";
        for (let i = 0; i <= locArray.length - 1; i++) {
            sum += String(locArray[i]);
        }
        return sum
    
    }

    console.log(elementSum(array));
    console.log(inverseSum(array));
    console.log(concatanateSum(array));

}


aggregateElements([1, 2, 3]);
console.log();
aggregateElements([2, 4, 8, 16]);
