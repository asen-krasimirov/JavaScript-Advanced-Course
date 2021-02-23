const { expect } = require('chai');
const ChristmasMovies = require('./code');


describe('ChristmasMovies Class Tests', () => {

    describe('instantiation Tests', () => {

        it('gets instantiated without parameters', () => {

            expect(() => new ChristmasMovies()).to.not.throw();

            const testInstance = new ChristmasMovies();
            expect('movieCollection' in testInstance).to.be.true;
            expect('watched' in testInstance).to.be.true;
            expect('actors' in testInstance).to.be.true;
        });
    });

    describe('buyMovie method Tests', () => {
        
        it('saves the movie and retuns a message', () => {
            const testInstance = new ChristmasMovies();

            expect(testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo'])).to.equals('You just got MovieName to your collection in which ActorOne, ActorTwo are taking part!');
            expect(JSON.stringify(testInstance.movieCollection)).to.equals('[{"name":"MovieName","actors":["ActorOne","ActorTwo"]}]');
            // expect(testInstance.movieCollection).to.equals('');
        });

        it('throws an error when a movie is added more then once', () => {
            const testInstance = new ChristmasMovies();

            expect(testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo'])).to.equals('You just got MovieName to your collection in which ActorOne, ActorTwo are taking part!');
            expect(() => testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo'])).to.throw();
            // expect(testInstance.movieCollection).to.equals('');
        });
    });

    describe('discardMovie Tests', () => {
          
        it('deletes the movie from all records', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.watchMovie('MovieName');
            expect(testInstance.discardMovie('MovieName')).to.equals('You just threw away MovieName!');

            expect(JSON.stringify(testInstance.movieCollection)).to.equals('[]');
            expect(JSON.stringify(testInstance.watched)).to.equals('{}');
        });

        it('throws an error when the movie is not yet watched', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            expect(() => testInstance.discardMovie('MovieName')).to.throws();
        });

        it('throws an error when there is not movei with that name', () => {
            const testInstance = new ChristmasMovies();

            // testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            expect(() => testInstance.discardMovie('MovieName')).to.throws();
        });
    });

    describe('watchMovie method Tests', () => {

        it('saves the movie in the watched list #1', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.watchMovie('MovieName');
            expect(JSON.stringify(testInstance.watched)).to.equals('{"MovieName":1}');
        });

        it('saves the movie in the watched list #2 (more then one movies)', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.buyMovie('MovieName2', ['ActorOne', 'ActorTwo']);
            testInstance.watchMovie('MovieName');
            testInstance.watchMovie('MovieName2');
            expect(JSON.stringify(testInstance.watched)).to.equals('{"MovieName":1,"MovieName2":1}');
        });

        it('increases the watched counter when the movie is watche more then once', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.watchMovie('MovieName');
            expect(JSON.stringify(testInstance.watched)).to.equals('{"MovieName":1}');
            testInstance.watchMovie('MovieName');
            expect(JSON.stringify(testInstance.watched)).to.equals('{"MovieName":2}');
        });
        
        it('throws an error when the movie is not precent in the movie list', () => {
            const testInstance = new ChristmasMovies();

            expect(() => testInstance.watchMovie('MovieName')).to.throw();
        });
    });

    describe('favouriteMovie method Tests', () => {

        it('returns the most watched movie in the watched list', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.buyMovie('MovieName2', ['ActorThree']);
            testInstance.watchMovie('MovieName');
            testInstance.watchMovie('MovieName2');
            testInstance.watchMovie('MovieName2');

            expect(testInstance.favouriteMovie()).to.equals('Your favourite movie is MovieName2 and you have watched it 2 times!');
        });
        
        it('throws an error when there are no movies in the watched list', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.buyMovie('MovieName2', ['ActorThree']);

            expect(() => testInstance.favouriteMovie()).to.throws();
        });
    });

    describe('mostStarredActors method Tests', () => {

        it('returns a message with the most starred actors', () => {
            const testInstance = new ChristmasMovies();

            testInstance.buyMovie('MovieName', ['ActorOne', 'ActorTwo']);
            testInstance.buyMovie('MovieName2', ['ActorThree', 'ActorOne']);

            expect(testInstance.mostStarredActor()).to.equals('The most starred actor is ActorOne and starred in 2 movies!');
        });
        it('throws an error if there are no movies in the collection', () => {
            const testInstance = new ChristmasMovies();

            expect(() => testInstance.mostStarredActor()).to.throw();
        });
    });
});