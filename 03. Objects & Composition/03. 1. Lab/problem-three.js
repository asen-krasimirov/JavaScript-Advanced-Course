

function cityTaxes(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population*this.taxRate },
        applyGrowth(persentage) { this.population += Math.floor(this.population * persentage / 100) },
        applyRecession(persentage) { this.treasury -= Math.ceil(this.treasury * persentage / 100) },
    };
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
