(function solve() {

    Array.prototype.last = function() {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        return this.slice(n, this.length);
    };

    Array.prototype.take = function(n) {
        return this.slice(0, n);
    };
    
    Array.prototype.sum = function() {
        let result = 0;
        this.forEach(elem => result+=elem);
        return result;
    };
    
    Array.prototype.average = function() {
        let result = 0;
        this.forEach(elem => result+=elem);
        return result / this.length;
    };

} () )


solve();

const testArray = [1, 2, 3];
console.log(testArray.last());
console.log(testArray.skip(1));
console.log(testArray.take(1));
console.log(testArray.sum());
console.log(testArray.average());
console.log(Array.prototype.hasOwnProperty('last'));
