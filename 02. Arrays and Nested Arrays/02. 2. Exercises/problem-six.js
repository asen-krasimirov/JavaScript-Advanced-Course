

// function nameList(names) {
//     names = names.sort((a, b) => a.localeCompare(b));
//     let orderedNames = [];
//     let index = 1;

//     names.forEach(name => {
//         orderedNames.push(`${index++}.${name}`)
//     })

//     // return orderedNames.join('\n');
//     return names.sort();
// }

function nameList(array) {
    return array.sort(
        (a, b) => {
            let res = a.length - b.length
            if (res != 0) {
                return res;
            } else {
                return a.localeCompare(b);
            }
        }
    ).join('\n');

}


// console.log(nameList(["John", "Bob", "Christina", "Ema"]));
// console.log(nameList(['alpha',
//     'beta',
//     'gamma']))

console.log(nameList(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));