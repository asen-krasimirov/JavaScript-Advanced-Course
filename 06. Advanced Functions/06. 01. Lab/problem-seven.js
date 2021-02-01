

function carController(commands) {
    const carCollection = {
        // name: {ownProperties: {}, parentName},
    };

    function createNewCar(name, parentName='') {
        carCollection[name] = {ownProperties: {}, 'parentName':''};
        if (parentName) { carCollection[name]['parentName'] = parentName }

    }


    function setNewProperty(name, key, value) {
        carCollection[name]['ownProperties'][key] = value;
    }

    function getProperties(name) {
        const properties = [];

        Object.keys(carCollection[name].ownProperties).forEach(key => { 
            let value = carCollection[name].ownProperties[key]; 
            properties.push(`${key}:${value}`);
        });

        if (carCollection[name]['parentName']) {
            properties.push(...getProperties(carCollection[name]['parentName']));
        }

        return properties;
    }

    function printCarProperties(name) {
        let allProperties = getProperties(name);

        console.log(allProperties.join(', '));
    }


    for (let command of commands) {
        
        if (command.includes('create')) {
            if (command.includes('inherit ')) {
                let [_, name, nothing, parentName] = command.split(" ");
                createNewCar(name, parentName);
            } else {
                let [_, name] = command.split(" ");
                createNewCar(name);
            }
        } 
        
        else if (command.includes('set')) {
            let [_, name, key, value] = command.split(" ");
            setNewProperty(name, key, value);
        } 
        
        else if (command.includes('print')) {
            let [_, name] = command.split(" ");
            printCarProperties(name);
        }
    }
}

example1 = ['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']
carController(example1);