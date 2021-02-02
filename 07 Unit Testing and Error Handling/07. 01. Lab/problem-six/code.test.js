const { expect } = require('chai');
const rgbToHexColor = require('./code.js');


describe('RGB to HEX Convertor Function Tests', () => {
    /*
    - Take three integer numbers, representing the red, green and blue values of an RGB color, each within range[0…255]
    - Return the same color in hexadecimal format as a string(e.g. '#FF9EAA')
    - Return undefined if any of the input parameters are of invalid type or not in the expected range
    */

    it('Retuns the correct value of BLACK in HEX', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('Retuns the correct value of WHITE in HEX', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('Retuns the correct value of RANDOM COLOUR in HEX', () => {
        expect(rgbToHexColor(151, 189, 143)).to.equal('#97BD8F');
    });


    it('Undefined if any RED parameter is undefined or out of range', () => {
        // invalid type
        expect(rgbToHexColor(undefined, 1, 1)).to.be.undefined;
        expect(rgbToHexColor('1', 1, 1)).to.be.undefined;
        expect(rgbToHexColor(NaN, 1, 1)).to.be.undefined;
        expect(rgbToHexColor([], 1, 1)).to.be.undefined;

        // out of range
        expect(rgbToHexColor(-1, 1, 1)).to.be.undefined;
        expect(rgbToHexColor(256, 1, 1)).to.be.undefined;
    });

    it('Undefined if any GREEN parameter is undefined or out of range', () => {
        // invalid type
        expect(rgbToHexColor(1, undefined, 1)).to.be.undefined;
        expect(rgbToHexColor(1, '1', 1)).to.be.undefined;
        expect(rgbToHexColor(1, NaN, 1)).to.be.undefined;
        expect(rgbToHexColor(1, [], 1)).to.be.undefined;

        // out of range
        expect(rgbToHexColor(1, -1, 1)).to.be.undefined;
        expect(rgbToHexColor(1, 256, 1)).to.be.undefined;
    });

    it('Undefined if any BLUE parameter is undefined or out of range', () => {
        // invalid type
        expect(rgbToHexColor(1, 1, undefined)).to.be.undefined;
        expect(rgbToHexColor(1, 1, '1')).to.be.undefined;
        expect(rgbToHexColor(1, 1, NaN)).to.be.undefined;
        expect(rgbToHexColor(1, 1, [])).to.be.undefined;

        // out of range
        expect(rgbToHexColor(1, 1, -1)).to.be.undefined;
        expect(rgbToHexColor(1, 1, 256)).to.be.undefined;
    });
});