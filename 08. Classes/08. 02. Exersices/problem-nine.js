

function carCompany(carData) {
    const brandLog = {
        // brand: {
        //    models : {
        //         model1: 100,
        //      }
        //   }
    }

    for (let carInfo of carData) {
        let [brand, model, quantity] = carInfo.split(' | ');
        if (!Object.keys(brandLog).includes(brand)) {
            brandLog[brand] = {'models' : {}};
        }

        if (!Object.keys(brandLog[brand].models).includes(model)) {
            brandLog[brand]['models'][model] = 0;
        }

        brandLog[brand]['models'][model] += Number(quantity);
    }

    for (let carBrand in brandLog) {
        let result = `${carBrand}\n###`;
        const models = [];
        for (let model in brandLog[carBrand]['models']) {
            models.push(`${model} -> ${brandLog[carBrand]['models'][model]}`);
        }
        result += models.join('\n###');
        console.log(result);
    }
}


carCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]
);