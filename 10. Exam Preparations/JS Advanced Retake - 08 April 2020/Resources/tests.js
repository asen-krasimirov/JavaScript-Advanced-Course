const { expect } = require('chai');
let { Repository } = require("./solution.js");





describe('Repository Class Tests', () => {
    const properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };
    
    // const testInstance = new Repository(properties);
    describe('instantilisation Tests', () => {

        it('instanse is instalised correctly', () => {
            expect(() => new Repository(properties)).to.not.throw();
        })
    });

    describe('count getter Tests', () => {

        it('returns the correct amount of entities #1', () => {
            const testInstance = new Repository(properties);
            expect(testInstance.count).to.equals(0);
        });

        it('returns the correct amount of entities #2', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            testInstance.add(entity);

            expect(testInstance.count).to.equals(1);
        });
    });

    describe('add method Tests', () => {

        it('adds an entity to the repository with correct input #1', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(testInstance.add(entity)).to.equals(0);
            expect(testInstance.data.get(0)).to.equal(entity);
        });

        it('adds an entity to the repository with correct input #2', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Pesho",
                age: 222,
                birthday: new Date(1998, 0, 7)
            };

            expect(testInstance.add(entity)).to.equals(0);
            expect(testInstance.add(entity2)).to.equals(1);
            expect(testInstance.data.get(1)).to.equal(entity2);
        });

        it('throws an error when some of the proprties are missing', () => {
            const testInstance = new Repository(properties);

            let entity = {
                // name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => (testInstance.add(entity))).to.throw(Error, 'Property name is missing from the entity!');
        });

        it('throws an error when some of the proprties are with wrong type #1', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 100,  // the wrong one
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => (testInstance.add(entity))).to.throw(TypeError, 'Property name is not of correct type!');
        });

        it('throws an error when some of the proprties are with wrong type #2', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: '22',  // the wrong one
                birthday: new Date(1998, 0, 7)
            };

            expect(() => (testInstance.add(entity))).to.throw(TypeError, 'Property age is not of correct type!');
        });

        it('throws an error when some of the proprties are with wrong type #3', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: NaN  // the wrong one
            };

            expect(() => (testInstance.add(entity))).to.throw(TypeError, 'Property birthday is not of correct type!');
        });
    });

    describe('getId method Tests', () => {

        it('returns the correct entry by the given id', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            testInstance.add(entity);
            expect(testInstance.getId(0)).to.equal(entity);
        });


        it('throws an error when there is not entry with the given id', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            testInstance.add(entity);
            expect(() => testInstance.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });


    });

    describe('update method Tests', () => {

        it('updates the entry on the given id', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            
            let entity2 = {
                name: 'Pesho2',
                age: 222,
                birthday: new Date(1992, 0, 7)
            };

            

            testInstance.add(entity);
            testInstance.update(0, entity2);
            expect(testInstance.getId(0)).to.equals(entity2);
        });


        it('throws an error when the id is not correct', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: 'Pesho2',
                age: 222,
                birthday: new Date(1992, 0, 7)
            };

            testInstance.add(entity);
            expect(() => testInstance.update(1, entity2)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });

        it('throws an error when the entity properties are not correct #1', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                name: 1,  // wrong
                age: 222,
                birthday: new Date(1992, 0, 7)
            };

            testInstance.add(entity);
            expect(() => testInstance.update(0, entity2)).to.throw(TypeError, 'Property name is not of correct type!');
        });

        it('throws an error when the entity properties are not correct #2', () => {
            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let entity2 = {
                // name: 'Pesho',  // wrong
                age: 222,
                birthday: new Date(1992, 0, 7)
            };

            testInstance.add(entity);
            expect(() => testInstance.update(0, entity2)).to.throw(Error, 'Property name is missing from the entity!');
        });
    });

    describe('del method Tests', () => {
        it('deletes entry on the fiven id', () => {

            const testInstance = new Repository(properties);

            let entity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            
            testInstance.add(entity);

            expect(() => testInstance.del(0)).to.not.throw();
            expect(() => testInstance.getId(0)).to.throw(Error, 'Entity with id: 0 does not exist!');
            
        });
    });
});