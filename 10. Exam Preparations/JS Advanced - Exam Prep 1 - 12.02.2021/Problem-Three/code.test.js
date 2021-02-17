const { expect } = require('chai');
const pizzUni = require('./code');


describe('pizzUni Object Tests', () => {

    describe('makeAnOrder method Tests', () => {

        it('correct output with correct input', () => {
            const testObj = { orderedPizza: 'the name of the pizza', orderedDrink: 'the name of the drink' };
            expect(pizzUni.makeAnOrder(testObj)).to.equals('You just ordered the name of the pizza and the name of the drink.');
        });

        it('error when orderedPizza is not present', () => {
            const testObj = { orderedDrink: 'the name of the drink' };
            expect(() => pizzUni.makeAnOrder(testObj)).to.throw();
        });

        it('correct output when orderedDrink is not present', () => {
            const testObj = { orderedPizza: 'the name of the pizza' };
            expect(pizzUni.makeAnOrder(testObj)).to.equals('You just ordered the name of the pizza');
        });

    });

    describe('getRemainingWork method Tests', () => {

        it('correct output with correct input (1 order)', () => {
            // [{pizzaName: 'the name of the pizza', status: 'ready' / 'preparing' }]
            const testArray = [{ pizzaName: 'the name of the pizza', status: 'ready' }];
            expect(pizzUni.getRemainingWork(testArray)).to.equals('All orders are complete!');
        });

        it('correct output with correct input (2 orders)', () => {
            // [{pizzaName: 'the name of the pizza', status: 'ready' / 'preparing' }]
            const testArray = [
                { pizzaName: 'ready pizza', status: 'ready' },
                { pizzaName: 'unready pizza', status: 'preparing' }
            ];
            expect(pizzUni.getRemainingWork(testArray)).to.equals('The following pizzas are still preparing: unready pizza.');
        });
    });

    describe('orderType method Tests', () => {

        it('correct output with correct input ("Delivery")', () => {
            expect(pizzUni.orderType(10, 'Delivery')).to.equals(10);
        });

        it('correct output with correct input ("Carry Out")', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).to.equals(9);
        });
    });
});