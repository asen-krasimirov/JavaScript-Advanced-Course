

class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    isDishPrepared(name) {
        for (let dish of this.dishes) {
            if (dish.recipeName === name) {
                return true;
            }
        }
    }

    isGuestPresent(name) {
        for (let guestName in this.guests) {
            if (guestName === name) {
                return true;
            }
        }
    }

    getDishProductsByName(name) {
        for (let dish of this.dishes) {
            if (dish.recipeName === name) {
                return dish.productsList.join(', ');
            }
        }
    }
    
    shopping(productInfo) {
        let [product, price] = productInfo;
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;
    }

    recipes(recipe) {

        for (let product of recipe.productsList) {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product");
            }
        }

        this.dishes.push({
            recipeName: recipe.recipeName,
            productsList: recipe.productsList
        });
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.isDishPrepared(dish)) {
            throw new Error('We do not have this dish');
        }

        if (this.isGuestPresent(name)) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        // {name} will eat {dish}, which consists of {products}
        let result = [];
        for (const guest in this.guests) {
            let name = guest;
            let dishName = this.guests[name];
            let dishProducts = this.getDishProductsByName(dishName);
            result.push(`${name} will eat ${dishName}, which consists of ${dishProducts}`);
        }

        return result.join('\n');
    }
    
}

module.exports = ChristmasDinner;