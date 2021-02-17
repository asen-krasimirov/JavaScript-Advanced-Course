// Validate correct printing with getVacationerInfo

const {expect} = require('chai');
const Vacationer = require('./code');


// let Vacationer = result;

describe('Vacationer Class Tests', () => {
    it ('testOne', () => {

        let classInstance1;
        expect(() => classInstance1 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]), 'Instance creation failed with valid parameters').to.not.throw();
    
        expect(classInstance1.getVacationerInfo()).to.contains('Name: Tania Ivanova Zhivkova\nID Number: 203778\nWishlist:\nempty\nCredit Card:\nCard Number: 123456789\nExpiration Date: 10/01/2018\nSecurity Number: 777', 'getVacationerInfo returns an incorrect message');
    
        let classInstance2;
        expect(() => classInstance2 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]), 'Instance creation failed with valid parameters').to.not.throw();
    
        classInstance2.addDestinationToWishList('Spain');
        classInstance2.addDestinationToWishList('Germany');
        

        // expect(classInstance2.getVacationerInfo()).to.contains('Name: Vania Ivanova Zhivkova\nID Number: 208398\nWishlist:\nSpain, Germany\nCredit Card:\nCard Number: 1111\nExpiration Date: \nSecurity Number: 111', 'getVacationerInfo returns an incorrect message');
    });
});