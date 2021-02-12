

function juiceFactory(flavorData) {

    const flavorStorage = {}; // kiwi: 234,

    const bottleStorage = {}; // kiwi: 2,

    for (let data of flavorData) {
        let [flavor, quantity] = data.split(' => ');

        if (!Object.keys(flavorStorage).includes(flavor)) {
            flavorStorage[flavor] = 0;
        }

        flavorStorage[flavor] += Number(quantity);

        if (flavorStorage[flavor] >= 1000) {

            if (!Object.keys(bottleStorage).includes(flavor)) {
                bottleStorage[flavor] = 0;
            }

            while (flavorStorage[flavor] >= 1000) {
                flavorStorage[flavor] -= 1000;
                bottleStorage[flavor] += 1;
            }

        }

    }
    return Object.keys(bottleStorage).map(juice => `${juice} => ${bottleStorage[juice]}`).join('\n');
}


console.log(juiceFactory(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

));