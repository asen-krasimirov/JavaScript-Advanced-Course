const { expect, assert } = require('chai');
const { sum } = require('./code.js');


describe('Sum function tests', ()=> {

    it('function returns the correct result with valid input', ()=>{
        expect(sum([1])).to.equals(1);
    });

    it('function returns the correct result with valid input #2', ()=>{
        expect(sum([1, 1, 1])).to.equals(3);
    });
    
    it('function returns the correct result with valid input #3', ()=>{
        expect(sum([1, 2, 3])).to.equals(6);
    });

    it('function returns zero the an empty array is given', ()=>{
        expect(sum([])).to.equals(0);
    });

    it('function returns zero the an empty array is given', ()=>{
        expect(sum([])).to.equals(0);
    });
    
    it('function returns NaN when a non Number is in the array', ()=>{
        expect(sum(['mastika', 2, 3])).to.NaN;
    });

});
