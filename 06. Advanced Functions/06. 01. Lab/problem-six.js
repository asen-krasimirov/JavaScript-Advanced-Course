

function listProcessor(commands) {
    let collection = [];

    const executeCommands = {
        add(str) { collection.push(str); },
        remove(str) { collection = collection.filter(elem => elem != str); },
        print() { console.log(collection.join()); }
    };

    for (let data of commands) {
        let [command, input] = data.split(' ');
        executeCommands[command](input);
    }
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);