

class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        // if (!number instanceof Hex || !number instanceof number) { throw new Error('Input is not from the correct type!'); }

        if (number instanceof Hex) {

            return new Hex(this.value + number.value);

        } else if (number instanceof number) {

            return new Hex(this.value + number);

        } else {

            throw new Error('Input is not from the correct type!');

        }

    }

    minus(number) {
        if (number instanceof Hex) {

            return new Hex(this.value - number.value);

        } else if (number instanceof number) {

            return new Hex(this.value - number);

        } else {

            throw new Error('Input is not from the correct type!');

        }
    }

    static parse(stirng) {
        return parseInt(stirng, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');

console.log(Hex.parse(new Hex(255).toString()));