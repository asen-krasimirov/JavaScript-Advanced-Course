const { expect } = require('chai');
const numberOperations = require('./03. Number Operations_Resources');


describe('numberOperations Object Tests', () => {

    describe('powNumber method Tests', () => {

        it('returns the power of the given parameter #1', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });

        it('returns the power of the given parameter #2', () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
    });

    describe('numberCheker method Tests', () => {

        it('throws an error if the input is not a number #1', () => {
            expect(() => numberOperations.numberChecker('test')).to.throw();
        });

        it('throws an error if the input is not a number #2', () => {
            expect(() => numberOperations.numberChecker()).to.throw();
        });

        it('throws an error if the input is not a number #3', () => {
            expect(() => numberOperations.numberChecker('[]')).to.throw();
        });

        it('throws an error if the input is not a number #4', () => {
            expect(() => numberOperations.numberChecker({})).to.throw();
        });

        it('returns a message if the number is lower then 100', () => {
            expect(numberOperations.numberChecker(10)).to.equals('The number is lower than 100!');
        })
        it('returns a message if the number is greater or equal to 100', () => {
            expect(numberOperations.numberChecker(100)).to.equals('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equals('The number is greater or equal to 100!');
        })
    });

    describe('sumArrays method Tests', () => {

        it('loops through two arrays and returns a new array #1', () => {
            const arrayOne = [1, 2 , 3];
            const arrayTwo = [3, 2, 1];
            const expectedResult = '[4,4,4]'
            expect(JSON.stringify(numberOperations.sumArrays(arrayOne, arrayTwo))).to.equals(expectedResult);
        });

        it('loops through two arrays and returns a new array #2', () => {
            const arrayOne = [1];
            const arrayTwo = [3];
            const expectedResult = '[4]'
            expect(JSON.stringify(numberOperations.sumArrays(arrayOne, arrayTwo))).to.equals(expectedResult);
        });

        it('loops through two arrays and returns a new array #3', () => {
            const arrayOne = [1, 3];
            const arrayTwo = [3];
            const expectedResult = '[4,3]'
            expect(JSON.stringify(numberOperations.sumArrays(arrayOne, arrayTwo))).to.equals(expectedResult);
        });

        it('loops through two arrays and returns a new array #4', () => {
            const arrayOne = [1];
            const arrayTwo = [3, 1];
            const expectedResult = '[4,1]'
            expect(JSON.stringify(numberOperations.sumArrays(arrayOne, arrayTwo))).to.equals(expectedResult);
        });

    });

});
