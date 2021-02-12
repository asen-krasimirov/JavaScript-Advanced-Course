const { expect } = require('chai');
const { StringBuilder } = require('./code');


describe('StringBuilder Class Tests', () => {

    describe('Argumen setting', () => {

        // happy path tests (correct input)
        it('Stores the given arg as an array', () => {
            const testInstance = new StringBuilder('Test');
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["T","e","s","t"]');
        });

        it('Creates an array when initialized without args', () => {
            const testInstance = new StringBuilder();
            expect(JSON.stringify(testInstance._stringArray)).to.equals('[]');
        });

        // unhappy path tests (wrong input)
        it('Error when invalid input is given #1', () => {
            expect(() => new StringBuilder(123)).to.throw();
        });

        it('Error when invalid input is given #2', () => {
            expect(() => new StringBuilder(NaN)).to.throw();
        });


    });

    describe('Functionality testing', () => {

        // happy path tests (correct input)
        it('append method test', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.append('str');
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["T","e","s","t","s","t","r"]');
        });

        it('prepend method test', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.prepend('str');
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["s","t","r","T","e","s","t"]');
        });

        it('insertAt method test #1', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.insertAt('str', 1);
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["T","s","t","r","e","s","t"]');
        });

        it('insertAt method test #2', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.insertAt('str', 100);
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["T","e","s","t","s","t","r"]');
        });

        it('remove method test #1', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.remove(1, 1);
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["T","s","t"]');
        });

        it('remove method test #2', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.remove(0, 1000);
            expect(JSON.stringify(testInstance._stringArray)).to.equals('[]');
        });

        it('remove method test #3', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.remove(-1, 1000);
            expect(JSON.stringify(testInstance._stringArray)).to.equals('["T","e","s"]');
        });

        it('toString method test #1', () => {
            const testInstance = new StringBuilder('Test');
            expect(testInstance.toString()).to.equals('Test');
        });

        it('toString method test #2', () => {
            const testInstance = new StringBuilder('');
            expect(testInstance.toString()).to.equals('');
        });

        // unhappy path tests (wrong input)
        it('append method error test #1', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.append([1])).to.throw();
        });

        it('append method error test #2', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.append(NaN)).to.throw();
        });

        it('prepend method error test #1', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.prepend(1)).to.throw();
        });

        it('prepend method error test #2', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.prepend(NaN)).to.throw();
        });

        it('insertAt method wrong test #1', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.insertAt(1)).to.throw();
        });

        it('insertAt method wrong test #2', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.insertAt(NaN)).to.throw();
        });

        // not returning an exeption
        it('remove method does not throw an exeption when wrong input is given', () => {
            const testInstance = new StringBuilder('Test');
            expect(() => testInstance.remove(-1, 100)).to.not.throw();

        });

        it('toString method does not throw an exeption when no input is given', () => {
            const testInstance = new StringBuilder('');
            expect(testInstance.toString()).to.equals('');
            expect(() => testInstance.toString()).to.not.throw();
        });

        it('insertAt method does not throw an exeption when wrong input is given', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.insertAt('str', 100);
            expect(() => testInstance.insertAt('-1', 100)).to.not.throw();
        });


        it('Test insertAt method test', () => {
            const testInstance = new StringBuilder('Test');
            testInstance.insertAt('str', 100);
            expect(testInstance.toString()).to.equals('Teststr');
        });
        
        it('Test correct initializaion does not throw an error', () => {
            expect(() => new StringBuilder('Test')).to.not.throw();
        });





        // it('error has the correct message', ()=>{
        //     const testInstance = new StringBuilder('Test');

        //     try {
        //         testInstance.append([1]);
        //     } catch (error) {
        //         expect(error.name).to.equals('');
        //         expect(error.message).to.equals('Argument must be а string');
        //     }
        // });

    });

});