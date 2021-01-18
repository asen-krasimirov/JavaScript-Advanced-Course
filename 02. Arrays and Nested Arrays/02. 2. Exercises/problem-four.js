

function rotateArray(array, rotations) {

    while (rotations > 0) {
        // let lastElem = array.pop();
        array.unshift(array.pop());
        rotations--;
    }
    return array.join(' ');
}


console.log(rotateArray(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));