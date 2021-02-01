

function solution() {
    
    const ingredientStorate = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0 
    };
    const recipeLog = {
        'apple': {'carbohydrate': 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey': {'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10}
    };
    
    const executeCommand = {
        'restock': restockIngredient,
        'prepare': prepareDish,
        'report': reportOfIngredients,
    };
    
    function prepareDish(recipe, quantity) {
        recipe = recipeLog[recipe];
        
        for (let ingredient in recipe) {
            if (recipe[ingredient] * quantity > ingredientStorate[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let ingredient in recipe) {
            ingredientStorate[ingredient] -= recipe[ingredient] * quantity;
        }

        return 'Success';
    }
    
    function restockIngredient(ingredient, quantity) {
        ingredientStorate[ingredient] += Number(quantity);
        return 'Success';
    }

    function reportOfIngredients() {
        let information = [];
        for (let ingredient in ingredientStorate) {
            information.push(`${ingredient}=${ingredientStorate[ingredient]}`);
        }
        return information.join(' ');
    }
    

    return function (input) {
        let [command, ...data] = input.split(' ');
        return executeCommand[command](...data);
    }
}


let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock
console.log(manager("report"));  // Error: not enough carbohydrate in stock
