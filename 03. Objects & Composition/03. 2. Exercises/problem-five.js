

function lowestPrices(data) {
    const log = {
        // product = {price: 1, town: Sample},
    };
    const result = [];

    for (let elem of data) {
        let [town, product, price] = elem.split(' | ');
        const addToLog = (name, value, location) => {log[name] = {'price': Number(value), 'town': location};}

        if (log[product] === undefined || price < log[product]['price']) {
            // log[product] = {'price': price, 'town': town};
            addToLog(product, price, town);
        }

        // if (price > log[product]['price']) {
        //     addToLog(product, price, town);
        // }
    }

    for (let product in log) {
        result.push(
            `${product} -> ${log[product].price} (${log[product].town})`
        );
    }
    return result.join('\n');
}


console.log(lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));
