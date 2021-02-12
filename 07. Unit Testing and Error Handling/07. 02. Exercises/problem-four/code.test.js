const { expect } = require('chai');
const { mathEnforcer } = require('./code.js');


describe('Object mathEnforcer Tests', () => {

    describe('Method addFive Tests', () => {

        it('Returns undefined if parameter is not a number', () => {
            expect(mathEnforcer.addFive('test')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });


        it('Returns the parameter + 5 when it is number', () => {
            // positive
            expect(mathEnforcer.addFive(1)).to.equal(6);
            // negative
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            // floating point
            expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
        });
    });

    describe('Method subtractTen Tests', () => {

        it('Returns undefined if parameter is not a number', () => {

            expect(mathEnforcer.subtractTen('test')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });


        it('Returns the parameter - 10 when it is number', () => {

            // positive
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            // negative
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            // floating point
            expect(mathEnforcer.subtractTen(1.1)).to.equal(-8.9);
        });
    });

    describe('Method sum Tests', () => {

        it('Returns undefined if first parameter is not a number', () => {
            expect(mathEnforcer.sum('test', 1)).to.be.undefined;
            expect(mathEnforcer.sum([], 1)).to.be.undefined;
        });

        it('Returns undefined if second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, 'test')).to.be.undefined;
            expect(mathEnforcer.sum(1, [])).to.be.undefined;
        });

        it('Returns undefined if both parameters are not a number', () => {
            expect(mathEnforcer.sum('test', 'test')).to.be.undefined;
            expect(mathEnforcer.sum([], [])).to.be.undefined;
        });

        it('Returns the parameterOne + parameterOne when both are numbers', () => {
            
            // positive
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            // negative
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
            // floating point
            expect(mathEnforcer.sum(1.1, 1.1)).to.equal(2.2);
        });
    });

});