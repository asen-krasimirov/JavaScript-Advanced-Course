const { expect } = require('chai');
const { PaymentPackage } = require('./code');


/*
// Should throw an error
try {
    const hrPack = new PaymentPackage('HR Services');
} catch (err) {
    console.log('Error: ' + err.message);
}
const packages = [
    new PaymentPackage('HR Services', 1500),
    new PaymentPackage('Consultation', 800),
    new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));

const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
try {
    wrongPack.active = null;
} catch (err) {
    console.log('Error: ' + err.message);
}
*/


describe('PaymentPackage Class Tests', () => {

    describe('Attributes Tests', () => {

        it('Instances have all attributes', () => {
            const allAttributes = ['name', 'value', 'VAT', 'active'];
            const testInstance = new PaymentPackage('Correct', 1);

            allAttributes.forEach(attribute => {
                expect(attribute in testInstance).to.be.true;
            });

        });

        it('name property validation test (wrong inputs)', () => {
            const testInstance = new PaymentPackage('Correct', 1);

            expect(() => new PaymentPackage('', 1)).to.throw();
            expect(() => testInstance.name = 1).to.throw();
            expect(() => testInstance.name = null).to.throw();

        });


        it('value property validation test (wrong inputs)', () => {
            const testInstance = new PaymentPackage('Correct', 1);

            expect(() => new PaymentPackage('Correct', 'Wrong')).to.throw();
            expect(() => testInstance.value = -1).to.throw();
            expect(() => testInstance.value = 0).to.not.throw();
            expect(() => testInstance.value = null).to.throw();

        });

        it('VAT property validation test (wrong inputs)', () => {
            const testInstance = new PaymentPackage('Correct', 1);

            expect(() => testInstance.VAT = 'test').to.throw();
            expect(() => testInstance.VAT = -1).to.throw();
            expect(() => testInstance.VAT = 0).to.not.throw();
            expect(() => testInstance.VAT = null).to.throw();

        });

        it('active property validation test (wrong inputs)', () => {
            const testInstance = new PaymentPackage('Correct', 1);

            expect(() => testInstance.active = 'test').to.throw();
            expect(() => testInstance.active = -1).to.throw();
            expect(() => testInstance.active = null).to.throw();

        });

        it('test happy validations', () => {
            const testInstance = new PaymentPackage('Correct', 1);

            // happy path (valid input)
            testInstance.name = '123';
            expect(testInstance.name).to.equal('123');

            // happy path (valid input)
            testInstance.value = 123;
            expect(testInstance.value).to.equal(123);

            // happy path (valid input)
            testInstance.VAT = 123;
            expect(testInstance.VAT).to.equal(123);

            // happy path (valid input)
            testInstance.active = false;
            expect(testInstance.active).to.equal(false);
        });

        it('test value setting', ()=> {
            const testInstance = new PaymentPackage('Correct', 1);

            expect(testInstance.name).to.equal('Correct');
            expect(testInstance.value).to.equal(1);
            expect(testInstance.VAT).to.equal(20);
            expect(testInstance.active).to.be.true;
        });

    });


    describe('Methods Tests', () => {

        it('Instances have toString method', () => {
            const testInstance = new PaymentPackage('Correct', 1);
            expect('toString' in testInstance).to.be.true;
        });

        it('toString method retruns active result #1', () => {
            const testInstance = new PaymentPackage('HR Services', 1500);
            let expectedResult = 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            expect(testInstance.toString()).to.equal(expectedResult);
        });
        
        it('toString method retruns active result #2', () => {
            const testInstance = new PaymentPackage('Consultation', 800);
            let expectedResult = 'Package: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960';
            expect(testInstance.toString()).to.equal(expectedResult);
        });

        it('toString method retruns INactive result', () => {
            const testInstance = new PaymentPackage('HR Services', 1500);
            testInstance.active = false;
            let expectedResult = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            expect(testInstance.toString()).to.equal(expectedResult);
        });

    });
});