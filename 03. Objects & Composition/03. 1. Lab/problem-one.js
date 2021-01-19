

function cityRecordCreator(name, population, treasury) {
    return {
        name,
        population,
        treasury
    };
    // return newObj;
}


/*
function printAllCityProperties(city) {

    for (const key in city) { console.log(city[key]); }

}
*/


function printAllCityProperties(city) {
    console.log(Object.keys(city));
}


function printAllCityInformation(city) {
    console.log(Object.values(city));
}


function printAllPropertiesAndInformation(city) {
    for (let tuple of Object.entries(city)) {
        console.log(tuple);
    }
}


const cityOne = cityRecordCreator('Tortuga',
7000,
15000
);

const cityTwo = cityRecordCreator('Santo Domingo',
12000,
23500
);

/*
const {name, treasury} = cityTwo;
console.log(name);
console.log(treasury);
*/

/*
delete cityTwo.name;
printAllCityProperties(cityOne);
*/

printAllPropertiesAndInformation(cityTwo);
printAllCityInformation(cityOne);
printAllCityProperties(cityTwo);
// console.log(cityTwo.treasury);

