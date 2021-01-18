

function addRemove(commandArray) {
    let result = [];
    let curElem = 1;

    for (let elem of commandArray) {

        switch (elem) {
            case 'add': result.push(curElem); break;
            case 'remove': result.pop(); break;
        }

        curElem++;
    }

    return (result.length > 0) ? result.join('\n') : 'Empty';
}


console.log(addRemove(['add', 
'add', 
'add', 
'add']
));

console.log(addRemove(['remove', 
'remove', 
'remove']
));

console.log(addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
));