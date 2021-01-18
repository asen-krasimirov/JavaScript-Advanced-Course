
function fruitCalculator (fruit, weightGrams, pricePerKilo) {
    const weight = weightGrams / 1000;
    const money = weight * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruitCalculator('orange', 2500, 1.80);
fruitCalculator('apple', 1563, 2.35);
