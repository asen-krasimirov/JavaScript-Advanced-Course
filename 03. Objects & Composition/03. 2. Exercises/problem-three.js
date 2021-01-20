

function carFactory(requirements) {
    
    const installEngine = (car, power) => {
        engines = {
            '90': 1800,
            '120': 2400,
            '200': 3500
        };

        for (let engine in engines) {
            if (Number(engine) >= power || Number(engine) === 200) {
                car['engine'] = {'power': Number(engine), 'volume': engines[engine]};
                return;
            }
        }
    };

    const selectCarriage = (car, type, color) => {
        car['carriage'] = {'type': type, 'color': color};
    };

    const installWheels = (car, size) => {
        if (size % 2 == 0) { size--; }
        car.wheels = Array(4).fill(size, 0, 4);
    };
    
    const newCar = {
        model: null,
        engine: null,
        carriage: null,
        wheels: null
    };

    newCar.model = requirements.model;
    installEngine(newCar, requirements.power);
    selectCarriage(newCar, requirements.carriage, requirements.color);
    installWheels(newCar, requirements.wheelsize);

    return newCar;
}


// console.log(carFactory({ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 }
// ));

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));