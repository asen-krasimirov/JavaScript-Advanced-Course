const { expect } = require('chai');
const createCalculator = require('./code.js');


describe('Calculator Function Tests', () => {

    // const calculator = createCalculator();

    /*
    - Return a module(object), containing the functions add(), subtract() and get() as properties
    - Keep an internal sum which can’t be modified from the outside
    - The functions add() and subtract() take a parameter that can be parsed as a number(either a number or a string containing a number) that is added or subtracted from the internal sum
    - The function get() returns the value of the internal sum
    */

    it('calculator has proper properties', () => {
        const calculator = createCalculator();

        expect(calculator.hasOwnProperty('add')).to.be.true;
        expect(calculator.hasOwnProperty('subtract')).to.be.true;
        expect(calculator.hasOwnProperty('get')).to.be.true;
    });

    it('initial sum equals zero', () => {
        const calculator = createCalculator();

        expect(calculator.get()).to.equal(0);
    });
    
    it('initial sum equals 1 after addition', () => {
        const calculator = createCalculator();

        calculator.add(1);
        expect(calculator.get()).to.equal(1);
    });

    it('initial sum equals 0 after subtraction', () => {
        const calculator = createCalculator();
        
        calculator.subtract(1);
        expect(calculator.get()).to.equal(-1);
    });
    
    // operations work with strings too
    
    it('initial sum equals 1 after addition (stirng)', () => {
        const calculator = createCalculator();

        calculator.add('1');
        expect(calculator.get()).to.equal(1);
    });

    it('initial sum equals 0 after subtraction (stirng)', () => {
        const calculator = createCalculator();

        calculator.subtract('1');
        expect(calculator.get()).to.equal(-1);
    });
    
});
