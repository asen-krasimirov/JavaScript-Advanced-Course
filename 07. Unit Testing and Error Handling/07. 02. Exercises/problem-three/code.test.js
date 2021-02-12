const { expect } = require('chai');
const { lookupChar } = require('./code.js');


describe('lookupChar function Tests', () => {

    it('Returns undefined if first parameter is not a string', () => {
        expect(lookupChar(1, 0)).to.be.undefined;
    });

    it('Returns undefined if second parameter is not an integer #1', () => {
        expect(lookupChar('test', 'test')).to.be.undefined;
    });
    
    it('Returns undefined if second parameter is not an integer #2', () => {
        expect(lookupChar('test', 1.1)).to.be.undefined;
    });

    it('Returns error(string) if the index is invalid', () => {
        // index is bigger then the string.length
        expect(lookupChar('test', 5)).to.equal("Incorrect index");
        // index is equal to the string.length
        expect(lookupChar('test', 4)).to.equal("Incorrect index");
        // index is lower then the zero
        expect(lookupChar('test', -1)).to.equal("Incorrect index");
        // if the string is empty
        expect(lookupChar('', 0)).to.equal("Incorrect index");
    });

    it('Returns the char of the specified index if the input is correct #1', () => {
        expect(lookupChar('test', 0)).to.equal('t');
    });

    it('Returns the char of the specified index if the input is correct #2', () => {
        expect(lookupChar('test', 1)).to.equal('e');
    });
});
