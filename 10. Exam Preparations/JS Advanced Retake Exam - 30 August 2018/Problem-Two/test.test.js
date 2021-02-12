const { kMaxLength } = require('buffer');
const { expect } = require('chai');
const HolidayPackage = require('./code');


describe('HolidaPackage Class Tests', () => {

    describe('initialisation Tests', () => {

        it('class instantiates correctlly with 2 parameters', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(testInstance.hasOwnProperty('destination')).to.be.true;
            expect(testInstance.hasOwnProperty('season')).to.be.true;
            expect(testInstance.hasOwnProperty('vacationers')).to.be.true;
            expect(testInstance.hasOwnProperty('_insuranceIncluded')).to.be.true;

            expect(JSON.stringify(testInstance.vacationers)).to.equal('[]');
            
        });
    });

    describe('insuranceIncluded method Tests', () => {

        it('default value is set correctry', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(testInstance.insuranceIncluded).to.be.false;
        });

        it('chanching value to bool is correct', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.insuranceIncluded = true).to.not.throw();
        });

        it('chanching value to non-bool is incorrect #1', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.insuranceIncluded = 'true').to.throw();
        });

        it('chanching value to non-bool is incorrect #2', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.insuranceIncluded = undefined).to.throw();
        });

    });

    describe('showVacationers method Tests', () => {

        it('returns correct message when there are no vacationers yet', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(testInstance.showVacationers()).to.equal('No vacationers are added yet');
        });

        it('returns a string with vacationers when there are vacationers #1', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            testInstance.addVacationer('Ivan Ivanov');
            expect(testInstance.showVacationers()).to.equal(`Vacationers:\nIvan Ivanov`);
        });

        it('returns a string with vacationers when there are vacationers #2', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            testInstance.addVacationer('Ivan Ivanov');
            testInstance.addVacationer('Ivan Conev');
            expect(testInstance.showVacationers()).to.equal(`Vacationers:\nIvan Ivanov\nIvan Conev`);
        });

        it('returns a string', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            testInstance.addVacationer('Ivan Ivanov');
            expect(typeof testInstance.showVacationers() === 'string').to.be.true;
        });
    });

    describe('addVacationer method Tests', () => {

        it('appends vacationer to the vacationer array when the name is valid', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.addVacationer('Ivan Ivanov')).to.not.throw();
            expect(JSON.stringify(testInstance.vacationers)).to.equal(`["Ivan Ivanov"]`);
        });

        it('appends vacationer to the vacationer array when the name is valid #2 (more then 1 people)', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.addVacationer('Ivan Ivanov')).to.not.throw();
            expect(() => testInstance.addVacationer('Ivan Conev')).to.not.throw();
            expect(JSON.stringify(testInstance.vacationers)).to.equal(`["Ivan Ivanov","Ivan Conev"]`);
        });

        it('throws an error the name is in invalid #1', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.addVacationer('')).to.throw();
        });

        it('throws an error the name is in invalid #2', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.addVacationer('invalid')).to.throw();
        });

        it('throws an error the name is in invalid #3', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.addVacationer('Valid Valid Invalid')).to.throw();
        });

    });

    describe('generateHolidayPackage method Tests', () => {

        
        it('returns a string', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            testInstance.addVacationer('Ivan Ivanov');
            expect(typeof testInstance.generateHolidayPackage() === 'string').to.be.true;
        });
        
        it('throws an error if there are no vacationers', () => {
            const testInstance = new HolidayPackage('destination', 'season');
            expect(() => testInstance.generateHolidayPackage()).to.throw();
        });

        it('returns an overview of the generated holiday package #1 (1 person without bonuses)', () => {

            const testInstance = new HolidayPackage('Italy', 'spring');
            testInstance.addVacationer('Ivan Ivanov');
            let expectedResult = `Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 400`

            expect(testInstance.generateHolidayPackage()).to.equal(expectedResult);
        });

        it('returns an overview of the generated holiday package #2 (1 person with season bonus (Summer))', () => {

            const testInstance = new HolidayPackage('Italy', 'Summer');
            testInstance.addVacationer('Ivan Ivanov');
            let expectedResult = `Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 600`

            expect(testInstance.generateHolidayPackage()).to.equal(expectedResult);
        });

        it('returns an overview of the generated holiday package #2.1 (1 person with season bonus (Winter))', () => {

            const testInstance = new HolidayPackage('Italy', 'Winter');
            testInstance.addVacationer('Ivan Ivanov');
            let expectedResult = `Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 600`

            expect(testInstance.generateHolidayPackage()).to.equal(expectedResult);
        });

        it('returns an overview of the generated holiday package #3 (1 person with insurance bonus)', () => {

            const testInstance = new HolidayPackage('Italy', 'season');
            testInstance.addVacationer('Ivan Ivanov');
            testInstance.insuranceIncluded = true;
            let expectedResult = `Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nPrice: 500`

            expect(testInstance.generateHolidayPackage()).to.equal(expectedResult);
        });

        it('returns an overview of the generated holiday package #4 (2 people without bonuses)', () => {

            const testInstance = new HolidayPackage('Italy', 'season');
            testInstance.addVacationer('Ivan Ivanov');
            testInstance.addVacationer('Ivan Conev');
            let expectedResult = `Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nIvan Conev\nPrice: 800`

            expect(testInstance.generateHolidayPackage()).to.equal(expectedResult);
        });

        it('returns an overview of the generated holiday package #4 (2 people with all bonuses)', () => {

            const testInstance = new HolidayPackage('Italy', 'Summer');
            testInstance.addVacationer('Ivan Ivanov');
            testInstance.addVacationer('Ivan Conev');
            testInstance.insuranceIncluded = true;
            let expectedResult = `Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan Ivanov\nIvan Conev\nPrice: 1100`

            expect(testInstance.generateHolidayPackage()).to.equal(expectedResult);
        });
    });


});