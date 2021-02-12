const { expect } = require('chai');
const { isOddOrEven } = require('./code.js');


describe('isOddOrEven function Tests', () => {
    
    it('Returns "even" if the string length is even #1', () => {
        expect(isOddOrEven('Test')).to.equal('even');
    });

    it('Returns "even" if the string length is even #2', () => {
        expect(isOddOrEven('Test Test ')).to.equal('even');
    });
    
    it('Returns "odd" if the string length is odd #1', () => {
        expect(isOddOrEven('Test ')).to.equal('odd');
    });
    
    it('Returns "odd" if the string length is odd #2', () => {
        expect(isOddOrEven('Test Test')).to.equal('odd');
    });
    
    it('Returns "undefined" if the input is not a string #1', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('Returns "undefined" if the input is not a string #2', () => {
        expect(isOddOrEven([])).to.be.undefined;
    });

});