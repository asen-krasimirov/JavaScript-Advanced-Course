const { expect } = require('chai');
const dealership = require('./code');


describe('dealership Object Tests', () => {

    describe('returnOldCar (newCarCost) method Tests', () => {
        /*
        'Audi A4 B8': 15000,
        'Audi A6 4K': 20000,
        */

        it('gets a discount for returning an old car #1', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equals(15000);
        });
        
        it('gets a discount for returning an old car #2', () => {
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equals(10000);
        });

        it('does not gets a discount for returning a new car', () => {
            expect(dealership.newCarCost('new car', 30000)).to.equals(30000);
        });
        
    });

    describe('carEquipment method Tests', () => {

        it('returns the selected car extras #1', () => {
            const extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            expect(JSON.stringify(dealership.carEquipment(extras, [0, 1]))).equals(JSON.stringify(['heated seats', 'sliding roof']));
        });

        it('returns the selected car extras #2', () => {
            const extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            expect(JSON.stringify(dealership.carEquipment(extras, [2, 3]))).equals(JSON.stringify(['sport rims', 'navigation']));
        });
    });

    describe('euroCategory method Tests', () => {

        it('returns a message, coresponding to the eco level (<4) #1', () => {
            expect(dealership.euroCategory(3)).equals('Your euro category is low, so there is no discount from the final price!');
        });

        it('returns a message, coresponding to the eco level (>4) #2', () => {
            expect(dealership.euroCategory(5)).equals('We have added 5% discount to the final price: 14250.');
        });

        it('returns a message, coresponding to the eco level (=4) #3', () => {
            expect(dealership.euroCategory(4)).equals('We have added 5% discount to the final price: 14250.');
        });
    });
});