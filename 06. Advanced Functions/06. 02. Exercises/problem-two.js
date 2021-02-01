

function typeCounter(...args) {
    const typesCount = {
        // string: 1,
        // number: 2
    };

    args.forEach(arg => {
        let argType = typeof arg;
        console.log(`${argType}: ${arg}`);
        if (!Object.keys(typesCount).includes(argType)) { typesCount[argType] = 0; }
        typesCount[argType]++;
    });

    const typeKeysOrdered = Object.keys(typesCount).sort((typeOne, typeTwo) => typesCount[typeTwo] - typesCount[typeOne]);
    typeKeysOrdered.forEach(key => console.log(`${key} = ${typesCount[key]}`));
}


typeCounter('cat', 42, function () { console.log('Hello world!'); }, 'str', 123, 321, function() { console.log('test')})
