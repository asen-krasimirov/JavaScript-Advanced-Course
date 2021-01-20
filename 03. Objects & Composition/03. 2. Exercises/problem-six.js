

function sortCatalogue(products) {
    const catalogue = {
        // 'A': ['Ananas: 15', 'Avocado: 20']
    };
    const initials = [];

    products.forEach(product => {
        let [name, price] = product.split(' : ');
        // price = Number(price);
        initial = name[0];

        if (catalogue[initial] === undefined) { catalogue[initial] = []; }
        catalogue[initial].push(`${name}: ${price}`);
        
        if (!initials.includes(initial)) {
            initials.push(initial);
        }
    });

    initials.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < initials.length; i++) {
        catalogue[initials[i]] = catalogue[initials[i]].sort((a, b) => a.localeCompare(b));
    }
    const applyIndentaion = (array) => array.map(value => `  ${value}`);

    for (let i = 0; i < initials.length; i++) {
        information = applyIndentaion(catalogue[initials[i]]);

        console.log(initials[i]);
        console.log(information.join('\n'));
    }

}


sortCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
