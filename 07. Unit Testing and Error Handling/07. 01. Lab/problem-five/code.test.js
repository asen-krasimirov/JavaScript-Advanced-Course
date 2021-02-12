const { expect, assert } = require('chai');
const isSymmetric = require('./code.js');


describe('Symetric Functin Tests', () => {
    /*
    Take an array as argument
    Return false for any input that isn’t of the correct type
    Return true if the input array is symmetric
    Otherwise, return false
    */

    it('False when any value in the array is not correct #1', () => {
        expect(isSymmetric([1, 'test'])).to.be.false;
    });
    
    it('False when any value in the array is not correct #2', () => {
        expect(isSymmetric([1, NaN])).to.be.false;
    });

    it('True if array is symetric #1', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('True if array is symetric #2', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('True if array is symetric #3', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    
    it('True if array is symetric #4', () => {
        expect(isSymmetric(['1', '2', '1'])).to.be.true;
    });

    it('False if in the array there are type cuersed elements', () => {
        expect(isSymmetric([1, '2', '1'])).to.be.false;
    });
    
    it('False if array is not symetric #1', () => {
        expect(isSymmetric([1, 3])).to.be.false;
    });

    it('False if array is not symetric #2', () => {
        expect(isSymmetric([2, 2, 1])).to.be.false;
    });
    
    it('True if array is empty', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('False if array argument is not an array', () => {
        expect(isSymmetric('test')).to.be.false;
    });


});