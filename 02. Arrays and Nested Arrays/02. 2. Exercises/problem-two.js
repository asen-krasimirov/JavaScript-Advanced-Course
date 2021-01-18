

// const solve = (array, step) => array.filter((_, index) => index % step == 0);

function solve(array, step) {
    return array.filter((_, index) => index % step == 0).join('\n');
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
