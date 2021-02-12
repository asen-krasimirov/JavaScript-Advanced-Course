(function solve() {

    String.prototype.ensureStart = function(str) {
        if (!this.toString().slice(0, str.length).includes(str)) { return str + this.toString(); }
        return this.toString();
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.toString().slice(this.length-str.length, this.length).includes(str)) { return this.toString() + str; }
        return this.toString();
    };

    String.prototype.isEmpty = function() {
        return this == '';
    };

    String.prototype.truncate = function(n) {
        if (n < 4) { return '.'.repeat(n); }
        if (this.length <= n) { return this.toString(); }

        let result = this.toString(); 
        while (result.length > n) {
            if (!result.includes(' ')) { return result.slice(0, this.length-n) + '...'; }
            result = result.split(' ');
            result = result.slice(0, result.length-1);
            result = result.join(' ') + '...';
        }

        return result.toString();
    };

    String.format = function(string, ...params) {
        const result = Array.from(string);

        for (let i = 0; i < result.length; i++) {
            const elem = result[i];
            if (elem !== '{') { continue; }
            let newElem = params.shift();
            if (typeof newElem != 'undefined') {
                result.splice(i, 3, newElem);
            }
        }

        return result.join('');
    }
} ())


solve();

function testOne() {
    let str = 'my string';
    str = str.ensureStart('my');
    str = str.ensureStart('hello ');
    // str = str.truncate(16);
    // str = str.truncate(14);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);

    console.log(str);
}

function testTwo() {
    let str = 'quick brown fox jumps over the lazy dog';
    str = str.ensureStart('the ');
    str = str.ensureStart('the ');
    console.log(str);
}

function testThree() {
    let str = 'the quick brown fox jumps over the lazy';
    str = str.ensureEnd(' dog');
    str = str.ensureEnd(' dog');
    console.log(str);
}

function testFour() {
    let str = 'the {0} brown {1} jumps over the {2} dog';
    console.log(String.format(str, 'quick', 'fox'));
}

// testTwo();
// testThree();
testFour();