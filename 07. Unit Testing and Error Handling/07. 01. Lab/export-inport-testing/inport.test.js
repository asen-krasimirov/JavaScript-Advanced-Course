const assert = require('chai').assert;
const {testFunction, testFunctionTwo} = require('./export.js');

testFunction();
testFunctionTwo();

describe('Inported function one tests', () => {

    it ('correct return value', () => {
        assert.equal(testFunction(), 'export testing function...', 'Wrong return value');
    });

    it ('correct return value two', () => {
        assert.equal(testFunction(), 'export testing function...', 'Wrong return value');
    });

})