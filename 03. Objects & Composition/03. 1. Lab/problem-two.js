


function townsPopulation(townInformaiton) {
    const towns = {};
    townInformaiton.forEach(elem => {
        let [name, population] = elem.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) { population += towns[name]['population'] } 
        else { towns[name] = {}; }

        towns[name]['population'] = population;
    });

    for (let town in towns) {
        console.log(`${town} : ${towns[town]['population']}`)
    }
}


townsPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
